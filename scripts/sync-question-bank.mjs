import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const sourceDirectory = path.join(projectRoot, 'question-bank', 'sets')
const activeSetsPath = path.join(projectRoot, 'question-bank', 'active-sets.json')
const aggregatePath = path.join(projectRoot, 'question-bank', 'questions.json')
const targetPath = path.join(projectRoot, 'miniprogram', 'data', 'questions.ts')
const checkOnly = process.argv.includes('--check')
const minimumQuestionsPerSet = 50
const maximumQuestionsPerSet = 100

const questionSetCatalog = [
  { file: '01-html.json', category: 'html', name: 'HTML' },
  { file: '02-css.json', category: 'css', name: 'CSS' },
  { file: '03-javascript.json', category: 'javascript', name: 'JavaScript' },
  { file: '04-typescript.json', category: 'typescript', name: 'TypeScript' },
  { file: '05-vue.json', category: 'vue', name: 'Vue' },
  { file: '06-react.json', category: 'react', name: 'React' },
  { file: '07-browser.json', category: 'browser', name: '浏览器' },
  { file: '08-network.json', category: 'network', name: '网络' },
  { file: '09-engineering.json', category: 'engineering', name: '工程化' },
  { file: '10-performance.json', category: 'performance', name: '性能优化' },
]

const categories = new Set([
  'html',
  'css',
  'javascript',
  'typescript',
  'vue',
  'react',
  'browser',
  'network',
  'engineering',
  'performance',
])

const codeLanguages = new Set(['html', 'css', 'javascript', 'typescript', 'json', 'bash'])
const allowedFields = new Set([
  'id',
  'category',
  'tags',
  'title',
  'answer',
  'keyPoints',
  'difficulty',
  'followUps',
  'codeExample',
  'references',
  'updatedAt',
])

function fail(message) {
  throw new Error(`题库校验失败：${message}`)
}

function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function requireString(value, fieldPath) {
  if (typeof value !== 'string' || value.trim() === '') {
    fail(`${fieldPath} 必须是非空字符串`)
  }
}

function requireStringArray(value, fieldPath, minimum = 1) {
  if (!Array.isArray(value) || value.length < minimum) {
    fail(`${fieldPath} 至少需要 ${minimum} 项`)
  }
  value.forEach((item, index) => requireString(item, `${fieldPath}[${index}]`))
}

function requireUniqueStrings(value, fieldPath) {
  const normalizedItems = value.map((item) => item.trim().toLowerCase())
  if (new Set(normalizedItems).size !== normalizedItems.length) {
    fail(`${fieldPath} 不能包含重复内容`)
  }
}

function normalizeTitle(title) {
  return title.toLowerCase().replace(/[\s?？,，.。:：;；'"“”‘’()（）]/g, '')
}

function validateQuestion(question, fieldPath, expectedCategory, ids, titles) {
  if (!isObject(question)) fail(`${fieldPath} 必须是对象`)

  for (const field of Object.keys(question)) {
    if (!allowedFields.has(field)) fail(`${fieldPath}.${field} 不是支持的字段`)
  }

  requireString(question.id, `${fieldPath}.id`)
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(question.id)) {
    fail(`${fieldPath}.id 只能使用小写字母、数字和连字符`)
  }
  if (ids.has(question.id)) fail(`发现重复 id：${question.id}`)
  ids.add(question.id)

  if (!categories.has(question.category)) fail(`${fieldPath}.category 不在允许的分类中`)
  if (question.category !== expectedCategory) {
    fail(`${fieldPath}.category 应为 ${expectedCategory}，实际为 ${String(question.category)}`)
  }
  requireStringArray(question.tags, `${fieldPath}.tags`)
  requireString(question.title, `${fieldPath}.title`)
  const normalizedTitle = normalizeTitle(question.title)
  if (titles.has(normalizedTitle)) fail(`发现重复题目：${question.title}`)
  titles.add(normalizedTitle)
  requireString(question.answer, `${fieldPath}.answer`)
  if (question.answer.trim().length < 80) fail(`${fieldPath}.answer 不能少于 80 个字符`)
  requireStringArray(question.keyPoints, `${fieldPath}.keyPoints`, 3)
  if (question.keyPoints.length > 7) fail(`${fieldPath}.keyPoints 不能超过 7 项`)
  requireUniqueStrings(question.tags, `${fieldPath}.tags`)
  requireUniqueStrings(question.keyPoints, `${fieldPath}.keyPoints`)
  if (![1, 2, 3].includes(question.difficulty)) fail(`${fieldPath}.difficulty 只能是 1、2 或 3`)

  if (question.followUps !== undefined) {
    requireStringArray(question.followUps, `${fieldPath}.followUps`)
    requireUniqueStrings(question.followUps, `${fieldPath}.followUps`)
  }

  if (question.codeExample !== undefined) {
    if (!isObject(question.codeExample)) fail(`${fieldPath}.codeExample 必须是对象`)
    if (!codeLanguages.has(question.codeExample.language)) {
      fail(`${fieldPath}.codeExample.language 不受支持`)
    }
    requireString(question.codeExample.code, `${fieldPath}.codeExample.code`)
  }

  if (question.references !== undefined) {
    if (!Array.isArray(question.references) || question.references.length === 0) {
      fail(`${fieldPath}.references 至少需要 1 项`)
    }
    question.references.forEach((reference, referenceIndex) => {
      const referencePath = `${fieldPath}.references[${referenceIndex}]`
      if (!isObject(reference)) fail(`${referencePath} 必须是对象`)
      requireString(reference.title, `${referencePath}.title`)
      requireString(reference.url, `${referencePath}.url`)
      if (!/^https?:\/\//.test(reference.url)) fail(`${referencePath}.url 必须是 HTTP(S) 地址`)
    })
  }

  requireString(question.updatedAt, `${fieldPath}.updatedAt`)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(question.updatedAt)) {
    fail(`${fieldPath}.updatedAt 必须使用 YYYY-MM-DD 格式`)
  }
}

function createGeneratedSource(questions) {
  const serializedQuestions = JSON.stringify(questions, null, 2)
  return `// 此文件由 question-bank/sets 下的分类题库自动生成，请勿直接修改。\n` +
    `// 修改题库后执行 npm run questions:sync。\n\n` +
    `import { Question } from '../types/question'\n\n` +
    `export const questions: Question[] = ${serializedQuestions}\n`
}

async function readActiveQuestionSets() {
  const source = await readFile(activeSetsPath, 'utf8')
  let activeFiles
  try {
    activeFiles = JSON.parse(source)
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error)
    fail(`active-sets.json 不是有效 JSON：${detail}`)
  }

  if (!Array.isArray(activeFiles) || activeFiles.length === 0) {
    fail('active-sets.json 至少需要启用一个分类题库')
  }
  activeFiles.forEach((file, index) => requireString(file, `active-sets.json[${index}]`))
  if (new Set(activeFiles).size !== activeFiles.length) {
    fail('active-sets.json 不能包含重复文件')
  }

  return activeFiles.map((file) => {
    const questionSet = questionSetCatalog.find((item) => item.file === file)
    if (!questionSet) fail(`active-sets.json 包含未知题库：${file}`)
    return questionSet
  })
}

async function readQuestionSet(questionSet, ids, titles) {
  const sourcePath = path.join(sourceDirectory, questionSet.file)
  let source
  try {
    source = await readFile(sourcePath, 'utf8')
  } catch (error) {
    if (error && typeof error === 'object' && error.code === 'ENOENT') {
      fail(`缺少分类题库 ${questionSet.file}`)
    }
    throw error
  }

  let questions
  try {
    questions = JSON.parse(source)
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error)
    fail(`${questionSet.file} 不是有效 JSON：${detail}`)
  }

  if (!Array.isArray(questions)) fail(`${questionSet.file} 根节点必须是数组`)
  if (questions.length < minimumQuestionsPerSet || questions.length > maximumQuestionsPerSet) {
    fail(`${questionSet.file} 应包含 ${minimumQuestionsPerSet}–${maximumQuestionsPerSet} 道题，实际为 ${questions.length} 道`)
  }

  questions.forEach((question, index) => {
    validateQuestion(question, `${questionSet.file}[${index}]`, questionSet.category, ids, titles)
  })

  const difficultyCounts = new Map([[1, 0], [2, 0], [3, 0]])
  let referencedQuestions = 0
  for (const question of questions) {
    difficultyCounts.set(question.difficulty, difficultyCounts.get(question.difficulty) + 1)
    if (question.references !== undefined) referencedQuestions += 1
  }
  for (const [difficulty, count] of difficultyCounts) {
    if (count < 8) fail(`${questionSet.file} 难度 ${difficulty} 至少需要 8 道题，实际为 ${count} 道`)
  }
  if (referencedQuestions < 10) {
    fail(`${questionSet.file} 至少需要 10 道题提供参考链接，实际为 ${referencedQuestions} 道`)
  }
  return questions
}

async function main() {
  const questionSets = await readActiveQuestionSets()
  const ids = new Set()
  const titles = new Set()
  const questionsBySet = []
  for (const questionSet of questionSets) {
    questionsBySet.push(await readQuestionSet(questionSet, ids, titles))
  }
  const questions = questionsBySet.flat()

  const generatedAggregate = `${JSON.stringify(questions, null, 2)}\n`
  const generatedSource = createGeneratedSource(questions)
  if (checkOnly) {
    const [currentAggregate, currentSource] = await Promise.all([
      readFile(aggregatePath, 'utf8'),
      readFile(targetPath, 'utf8'),
    ])
    if (currentAggregate !== generatedAggregate) {
      fail('questions.json 与分类题库不同步，请执行 npm run questions:sync')
    }
    if (currentSource !== generatedSource) {
      fail('questions.ts 与分类题库不同步，请执行 npm run questions:sync')
    }
    console.log(`题库检查通过：${questionSets.length} 套、${questions.length} 道题，所有 ID 唯一，生成文件已同步。`)
    return
  }

  await Promise.all([
    writeFile(aggregatePath, generatedAggregate, 'utf8'),
    writeFile(targetPath, generatedSource, 'utf8'),
  ])
  console.log(`题库同步完成：${questionSets.length} 套、${questions.length} 道题已写入聚合文件和小程序数据文件。`)
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
