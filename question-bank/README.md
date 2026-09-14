# 本地题库

`sets/` 下的分类 JSON 是需要人工或 AI 编辑的题库源文件。每套题库对应小程序的一个分类，包含 50–100 道题。

`active-sets.json` 是运行题库启用清单。只有列入该文件的分类题库才会被聚合进小程序，未确认的草稿不会进入运行数据。

`questions.json` 是同步脚本生成的完整聚合文件，请勿直接修改。

`inactive/` 保存暂未启用的历史题目，仅用于避免内容丢失，不参与同步。

`imports/` 保存从 PDF、Word 等外部资料整理出的结构化导入结果，便于追溯和复核；运行题库仍以 `sets/` 中的分类文件为准。

## 使用方式

1. 在 `sets/` 对应的分类 JSON 中新增或修改题目。
2. 在 `active-sets.json` 中加入需要启用的题库文件名。
3. 执行 `npm run questions:sync` 校验已启用题库并生成聚合文件和小程序运行时数据。
4. 执行 `npm run questions:check` 检查题量、分类、字段、ID 和生成文件是否正确。

生成文件位于 `miniprogram/data/questions.ts`，请勿直接修改。用户学习记录通过题目 `id` 关联，因此已经使用过的 `id` 不得修改或复用。

## 内容约定

- 每个分类文件的根节点是题目数组，每道题的字段与 `miniprogram/types/question.ts` 中的 `Question` 一致。
- 每套必须有 50–100 道题，并且题目的 `category` 必须与文件所属分类一致。
- `answer` 使用 Markdown 风格纯文本，可以包含段落和代码片段。
- `keyPoints` 保留 3 至 7 条适合面试复述的结论。
- 涉及版本、规范或框架 API 时，更新 `updatedAt` 并添加官方参考链接。
- AI 批量生成后必须运行同步命令，重复 ID、非法分类和缺失字段会使同步失败。
