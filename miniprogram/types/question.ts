export type QuestionCategory =
  | 'html'
  | 'css'
  | 'javascript'
  | 'typescript'
  | 'vue'
  | 'react'
  | 'browser'
  | 'network'
  | 'engineering'
  | 'performance'

export type MasteryStatus = 'mastered' | 'uncertain' | 'unmastered'

export type Question = {
  id: string
  category: QuestionCategory
  tags: string[]
  title: string
  answer: string
  keyPoints: string[]
  difficulty: 1 | 2 | 3
  followUps?: string[]
  codeExample?: {
    language: 'html' | 'css' | 'javascript' | 'typescript' | 'json' | 'bash'
    code: string
  }
  references?: Array<{ title: string; url: string }>
  updatedAt: string
}

export type LearningRecord = {
  questionId: string
  mastery: MasteryStatus
  isFavorite: boolean
  reviewCount: number
  lastReviewedAt: number
  updatedAt: number
}

export type CategoryMeta = {
  id: QuestionCategory
  name: string
  icon: string
  color: string
}
