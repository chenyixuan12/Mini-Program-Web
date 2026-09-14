import { getReviewQuestions, masteryLabels } from '../../services/question'
import { getLearningRecords } from '../../services/storage'

type ReviewMode = 'mistakes' | 'favorites'
type QuestionView = { id: string; title: string; category: string; status: string; statusClass: string }

function buildList(mode: ReviewMode): QuestionView[] {
  const records = getLearningRecords()
  return getReviewQuestions(records, mode).map((question) => {
    const record = records[question.id]
    const mastery = record === undefined ? undefined : record.mastery
    return { id: question.id, title: question.title, category: question.category, status: mastery ? masteryLabels[mastery] : '收藏', statusClass: mastery === undefined ? 'favorite' : mastery }
  })
}

Page({
  data: { mode: 'mistakes' as ReviewMode, questions: [] as QuestionView[] },
  onShow() { this.setData({ questions: buildList(this.data.mode) }) },
  selectMode(event: WechatMiniprogram.BaseEvent) {
    const mode = event.currentTarget.dataset.mode as ReviewMode
    this.setData({ mode, questions: buildList(mode) })
  },
  goQuestion(event: WechatMiniprogram.BaseEvent) {
    wx.navigateTo({
      url: `/pages/question/question?id=${event.currentTarget.dataset.id}&source=review&mode=${this.data.mode}`,
    })
  },
  goPractice() { wx.switchTab({ url: '/pages/practice/practice' }) },
})
