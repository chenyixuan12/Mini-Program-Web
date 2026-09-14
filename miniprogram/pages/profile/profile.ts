import { questions } from '../../data/questions'
import { getMasteryCount, getTodayReviewCount, masteryLabels } from '../../services/question'
import { getLearningRecords } from '../../services/storage'
import { MasteryStatus } from '../../types/question'

Page({
  data: { today: 0, total: 0, progress: 0, masteryItems: [] as Array<{ label: string; count: number; status: MasteryStatus }> },
  onShow() {
    const records = getLearningRecords()
    const total = Object.keys(records).length
    const statuses: MasteryStatus[] = ['mastered', 'uncertain', 'unmastered']
    this.setData({
      today: getTodayReviewCount(records),
      total,
      progress: questions.length ? Math.round((getMasteryCount(records, 'mastered') / questions.length) * 100) : 0,
      masteryItems: statuses.map((status) => ({ status, label: masteryLabels[status], count: getMasteryCount(records, status) })),
    })
  },
  goPractice() { wx.switchTab({ url: '/pages/practice/practice' }) },
})
