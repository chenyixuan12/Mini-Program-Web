import {
  getCategory,
  getNextQuestion,
  getQuestionById,
  getQuestionsByCategory,
  getRandomQuestion,
  getReviewQuestions,
  masteryLabels,
} from '../../services/question'
import { getLearningRecords, toggleFavorite, updateMastery } from '../../services/storage'
import { MasteryStatus, Question, QuestionCategory } from '../../types/question'

type QuestionSource = 'category' | 'practice' | 'review' | 'single'
type ReviewMode = 'mistakes' | 'favorites'

const AUTO_ADVANCE_DELAY = 500

type QuestionDetail = {
  id: string
  categoryName: string
  title: string
  tags: string[]
  difficulty: string
  answer: string
  keyPoints: string[]
  followUps: string[]
  codeLanguage: string
  code: string
  hasCode: boolean
}

function getDetail(id: string): QuestionDetail | undefined {
  const question = getQuestionById(id)
  if (!question) return undefined
  const category = getCategory(question.category)
  const codeExample = question.codeExample
  return {
    id: question.id,
    categoryName: category === undefined ? question.category : category.name,
    title: question.title,
    tags: question.tags,
    difficulty: ['简单', '中等', '进阶'][question.difficulty - 1],
    answer: question.answer,
    keyPoints: question.keyPoints,
    followUps: question.followUps === undefined ? [] : question.followUps,
    codeLanguage: codeExample === undefined ? '' : codeExample.language,
    code: codeExample === undefined ? '' : codeExample.code,
    hasCode: codeExample !== undefined,
  }
}

function isQuestionSource(value: string | undefined): value is QuestionSource {
  return value === 'category' || value === 'practice' || value === 'review'
}

function isQuestionCategory(value: string | undefined): value is QuestionCategory {
  return value !== undefined && getCategory(value as QuestionCategory) !== undefined
}

function isReviewMode(value: string | undefined): value is ReviewMode {
  return value === 'mistakes' || value === 'favorites'
}

let backInFlight = false

function navigateBackOrHome() {
  if (backInFlight) return
  if (getCurrentPages().length > 1) {
    backInFlight = true
    wx.navigateBack({
      delta: 1,
      complete: () => { backInFlight = false },
    })
    return
  }
  wx.switchTab({ url: '/pages/index/index' })
}

Page({
  data: {
    question: null as QuestionDetail | null,
    showAnswer: false,
    isFavorite: false,
    mastery: '' as MasteryStatus | '',
    masteryText: '',
    source: 'single' as QuestionSource,
    category: '' as QuestionCategory | '',
    reviewMode: 'mistakes' as ReviewMode,
    isTransitioning: false,
  },
  transitionTimer: undefined as number | undefined,
  transitionInFlight: false,
  onLoad(options: Record<string, string | undefined>) {
    const id = options.id
    if (!id) { navigateBackOrHome(); return }
    const rawQuestion = getQuestionById(id)
    if (!rawQuestion) { wx.showToast({ title: '题目不存在', icon: 'none' }); navigateBackOrHome(); return }
    const source = isQuestionSource(options.source) ? options.source : 'single'
    const category = isQuestionCategory(options.category)
      ? options.category
      : source === 'category' ? rawQuestion.category : ''
    const reviewMode = isReviewMode(options.mode) ? options.mode : 'mistakes'
    this.setData({ source, category, reviewMode })
    this.loadQuestion(id)
  },
  onUnload() {
    if (this.transitionTimer !== undefined) clearTimeout(this.transitionTimer)
    this.transitionTimer = undefined
    this.transitionInFlight = false
  },
  onHide() {
    if (this.transitionTimer !== undefined) clearTimeout(this.transitionTimer)
    this.transitionTimer = undefined
  },
  loadQuestion(id: string) {
    const question = getDetail(id)
    if (!question) return false
    this.transitionInFlight = false
    const record = getLearningRecords()[id]
    this.setData({
      question,
      showAnswer: false,
      isFavorite: record === undefined ? false : record.isFavorite,
      mastery: record === undefined ? '' : record.mastery,
      masteryText: record ? masteryLabels[record.mastery] : '',
      isTransitioning: false,
    })
    wx.pageScrollTo({ scrollTop: 0, duration: 0 })
    return true
  },
  getNextQuestion(current: Question): Question | undefined {
    const { source, category, reviewMode } = this.data
    if (source === 'practice') {
      return getRandomQuestion(category || undefined, current.id)
    }
    if (source === 'review') {
      const reviewQuestions = getReviewQuestions(getLearningRecords(), reviewMode)
      return getNextQuestion(current.id, reviewQuestions)
    }
    if (source === 'category') {
      return getNextQuestion(current.id, getQuestionsByCategory(category || current.category))
    }
    return undefined
  },
  toggleAnswer() {
    this.setData({ showAnswer: !this.data.showAnswer })
  },
  onFavorite() {
    const question = this.data.question
    if (!question) return
    const record = toggleFavorite(question.id)
    this.setData({ isFavorite: record.isFavorite })
    wx.showToast({ title: record.isFavorite ? '已加入收藏' : '已取消收藏', icon: 'none' })
  },
  onMastery(event: WechatMiniprogram.BaseEvent) {
    const questionDetail = this.data.question
    const mastery = event.currentTarget.dataset.mastery as MasteryStatus
    if (!questionDetail || !mastery || this.data.isTransitioning || this.transitionInFlight) return
    const current = getQuestionById(questionDetail.id)
    if (!current) return
    const nextQuestion = this.getNextQuestion(current)

    this.transitionInFlight = true
    updateMastery(current.id, mastery)
    this.setData({ mastery, masteryText: masteryLabels[mastery], isTransitioning: true })
    wx.showToast({ title: `已标记为${masteryLabels[mastery]}`, icon: 'success', duration: AUTO_ADVANCE_DELAY })

    this.transitionTimer = setTimeout(() => {
      this.transitionTimer = undefined
      if (!this.transitionInFlight) return
      if (nextQuestion && this.loadQuestion(nextQuestion.id)) return
      wx.showToast({ title: '本轮题目已完成', icon: 'success' })
      navigateBackOrHome()
    }, AUTO_ADVANCE_DELAY)
  },
})
