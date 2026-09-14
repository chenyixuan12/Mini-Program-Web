import { categories, getMasteryCount, getQuestionsByCategory, getTodayReviewCount, masteryLabels } from '../../services/question'
import { getLearningRecords } from '../../services/storage'
import { MasteryStatus } from '../../types/question'

type CategoryView = {
  id: string
  name: string
  icon: string
  color: string
  reviewedCount: number
  totalCount: number
}

function buildData() {
  const records = getLearningRecords()
  const statuses: MasteryStatus[] = ['mastered', 'uncertain', 'unmastered']
  return {
    todayCount: getTodayReviewCount(records),
    totalReviewed: Object.keys(records).length,
    categories: categories.map<CategoryView>((category) => {
      const categoryQuestions = getQuestionsByCategory(category.id)
      return {
        ...category,
        reviewedCount: categoryQuestions.filter((question) => records[question.id] !== undefined).length,
        totalCount: categoryQuestions.length,
      }
    }),
    masteryItems: statuses.map((status) => ({
      status,
      label: masteryLabels[status],
      count: getMasteryCount(records, status),
    })),
  }
}

Page({
  data: buildData(),
  onShow() {
    this.setData(buildData())
  },
  goPractice() {
    wx.switchTab({ url: '/pages/practice/practice' })
  },
  goReview() {
    wx.switchTab({ url: '/pages/review/review' })
  },
  goCategory(event: WechatMiniprogram.BaseEvent) {
    const id = event.currentTarget.dataset.id as string
    wx.navigateTo({ url: `/pages/category/category?id=${id}` })
  },
})
