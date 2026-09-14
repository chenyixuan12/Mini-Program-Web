import { categories, getRandomQuestion } from '../../services/question'
import { QuestionCategory } from '../../types/question'

Page({
  data: { categories, selectedCategory: '' },
  selectCategory(event: WechatMiniprogram.BaseEvent) {
    const id = event.currentTarget.dataset.id as string
    this.setData({ selectedCategory: this.data.selectedCategory === id ? '' : id })
  },
  startPractice() {
    const category = this.data.selectedCategory as QuestionCategory | ''
    const question = category ? getRandomQuestion(category) : getRandomQuestion()
    if (!question) { wx.showToast({ title: '该分类暂无题目', icon: 'none' }); return }
    const categoryQuery = category ? `&category=${category}` : ''
    wx.navigateTo({ url: `/pages/question/question?id=${question.id}&source=practice${categoryQuery}` })
  },
})
