import { getCategory, getQuestionsByCategory } from '../../services/question'
import { getLearningRecords } from '../../services/storage'
import { QuestionCategory } from '../../types/question'

type QuestionView = { id: string; title: string; tags: string[]; difficulty: string; status: string; statusClass: string }

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
  data: { category: '' as QuestionCategory | '', categoryName: '', questionCount: 0, questions: [] as QuestionView[] },
  onLoad(options: Record<string, string | undefined>) {
    const category = options.id as QuestionCategory
    const meta = getCategory(category)
    if (!meta) { navigateBackOrHome(); return }
    this.setData({ category, categoryName: meta.name })
  },
  onShow() {
    const category = this.data.category
    if (!category) return
    const records = getLearningRecords()
    const list = getQuestionsByCategory(category)
    this.setData({
      questionCount: list.length,
      questions: list.map((question) => {
        const item = records[question.id];
        const mastery = item === undefined ? undefined : item.mastery;
        return { id: question.id, title: question.title, tags: question.tags, difficulty: ['简单', '中等', '进阶'][question.difficulty - 1], status: mastery === 'mastered' ? '已掌握' : mastery === 'unmastered' ? '未掌握' : mastery === 'uncertain' ? '模糊' : '待学习', statusClass: mastery === undefined ? 'new' : mastery }
      }),
    })
  },
  goQuestion(event: WechatMiniprogram.BaseEvent) {
    wx.navigateTo({
      url: `/pages/question/question?id=${event.currentTarget.dataset.id}&source=category&category=${this.data.category}`,
    })
  },
})
