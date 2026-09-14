import { questions } from '../data/questions'
import { CategoryMeta, LearningRecord, MasteryStatus, Question, QuestionCategory } from '../types/question'

export const categories: CategoryMeta[] = [
  { id: 'html', name: 'HTML', icon: 'H', color: '#F97316' },
  { id: 'css', name: 'CSS', icon: 'C', color: '#0EA5E9' },
  { id: 'javascript', name: 'JavaScript', icon: 'JS', color: '#EAB308' },
  { id: 'typescript', name: 'TypeScript', icon: 'TS', color: '#2563EB' },
  { id: 'vue', name: 'Vue', icon: 'V', color: '#22A06B' },
  { id: 'react', name: 'React', icon: 'R', color: '#0891B2' },
  { id: 'browser', name: '浏览器', icon: 'B', color: '#7C3AED' },
  { id: 'network', name: '网络', icon: 'N', color: '#DB2777' },
  { id: 'engineering', name: '工程化', icon: 'E', color: '#475569' },
  { id: 'performance', name: '性能优化', icon: 'P', color: '#DC2626' },
]

export const masteryLabels: Record<MasteryStatus, string> = {
  mastered: '已掌握',
  uncertain: '模糊',
  unmastered: '未掌握',
}

export function getQuestionById(id: string): Question | undefined {
  return questions.find((question) => question.id === id)
}

export function getQuestionsByCategory(category: QuestionCategory): Question[] {
  return questions.filter((question) => question.category === category)
}

export function getCategory(category: QuestionCategory): CategoryMeta | undefined {
  return categories.find((item) => item.id === category)
}

export function getNextQuestion(currentId: string, source: readonly Question[]): Question | undefined {
  const currentIndex = source.findIndex((question) => question.id === currentId)
  return currentIndex >= 0 ? source[currentIndex + 1] : undefined
}

export function getRandomQuestion(category?: QuestionCategory, excludeId?: string): Question | undefined {
  const categoryQuestions = category ? getQuestionsByCategory(category) : questions
  const source = excludeId
    ? categoryQuestions.filter((question) => question.id !== excludeId)
    : categoryQuestions
  if (source.length === 0) return undefined
  return source[Math.floor(Math.random() * source.length)]
}

export function getTodayReviewCount(records: Record<string, LearningRecord>): number {
  const todayStart = new Date()
  todayStart.setHours(0, 0, 0, 0)
  return Object.values(records).filter((record) => record.lastReviewedAt >= todayStart.getTime()).length
}

export function getMasteryCount(records: Record<string, LearningRecord>, status: MasteryStatus): number {
  return Object.values(records).filter((record) => record.mastery === status).length
}

export function getReviewQuestions(records: Record<string, LearningRecord>, mode: 'mistakes' | 'favorites'): Question[] {
  return questions.filter((question) => {
    const record = records[question.id]
    return mode === 'favorites'
      ? record !== undefined && record.isFavorite === true
      : record !== undefined && (record.mastery === 'uncertain' || record.mastery === 'unmastered')
  })
}
