import json
import re
import sys
from pathlib import Path

from docx import Document


def clean_title(value: str) -> str:
    title = re.sub(r"^\s*\d+[.、]\s*", "", value).strip()
    return re.sub(r"（(?:超级高频|高频|面试常问|面试常问几个核心|重中之重，几乎必问)[^）]*）", "", title).strip()


def extract_questions(source: Path, category: str) -> list[dict[str, object]]:
    document = Document(source)
    questions: list[dict[str, object]] = []
    current: dict[str, object] | None = None

    for paragraph in document.paragraphs:
        text = paragraph.text.strip()
        if not text:
            continue

        if paragraph.style.name == "Heading 2":
            if current is not None:
                questions.append(current)
            current = {
                "sourceIndex": len(questions) + 1,
                "category": category,
                "title": clean_title(text),
                "blocks": [],
            }
            continue

        if current is None:
            continue

        kind = "code" if "Preformatted" in paragraph.style.name else "text"
        current["blocks"].append({"kind": kind, "text": text})

    if current is not None:
        questions.append(current)
    return questions


def main() -> None:
    if len(sys.argv) != 4:
        raise SystemExit("用法: extract-docx-questions.py <source.docx> <output.json> <category>")

    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    category = sys.argv[3]
    questions = extract_questions(source, category)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(questions, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"{source.name}: extracted {len(questions)} questions -> {output}")


if __name__ == "__main__":
    main()
