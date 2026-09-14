# 前端八股面试小程序协作规范

## 项目目标

这是一个供个人秋招备战使用的微信小程序。核心目标是帮助用户高效进行前端面试题的主动回忆、掌握度标记和错题复习，而不是做一个只供浏览的题库。

优先交付可用、清晰、稳定的功能；避免为了扩展性引入复杂后端、状态管理框架或重型组件库。

## 技术栈与约束

- 使用微信原生小程序 + TypeScript + Sass。
- 使用小程序原生组件、API 和页面路由；不引入 React、Vue、Taro、UniApp 等跨端框架，除非用户明确要求迁移。
- 样式使用 `.scss`，编译结果为 `.wxss`；不要新增 Less 文件或混用 Sass/Less。
- 保持依赖尽可能少。新增依赖前，确认原生能力无法满足，并说明用途。
- 默认不接后端。题库源文件保存在 `question-bank/sets/` 下的分类 JSON，`question-bank/active-sets.json` 控制运行时启用范围；同步脚本生成聚合 JSON 和小程序静态 TypeScript 数据。学习状态使用 `wx.setStorageSync` / `wx.getStorageSync` 持久化。
- 不要在代码、题库或日志中提交个人隐私、访问令牌、Cookie、AppSecret 或真实账号信息。

## 产品范围

第一阶段仅包含下列能力：

1. 分类浏览：HTML、CSS、JavaScript、TypeScript、Vue、React、浏览器、网络、工程化、性能优化。
2. 题目详情：题干、先自行思考的区域、答案、关键要点、追问、代码示例。
3. 随机刷题：按分类或全题库抽题。
4. 掌握度：标记为“已掌握”“模糊”“未掌握”。
5. 收藏与错题本：收藏题目，以及集中复习“模糊 / 未掌握”的题目。
6. 学习统计：今日复习数和各分类掌握情况。

不要在未明确要求时实现登录、社交、排行榜、付费、远程同步、AI 问答或管理后台。

## 页面与交互原则

- 页面应优先适配手机单手操作：点击区域不小于约 `44px`，主要操作放在屏幕下方或易触及区域。
- 信息层级清楚：题干优先于答案；默认先展示问题，答案由用户主动展开。
- 每题答完后都应能快速设置掌握度；该操作必须立即写入本地缓存。
- 空状态、题库加载失败和没有错题时，应给出友好说明和下一步操作。
- 避免纯装饰性动画。若使用动画，时长短、可打断，并且不影响阅读与操作。
- 文案使用简洁中文，不使用含糊的按钮词；例如使用“标记为模糊”，不要只写“确定”。

## 推荐目录

```text
question-bank/
  active-sets.json     # 运行题库启用清单
  sets/                # 10 套可编辑的分类题库源文件
  questions.json       # 自动生成的完整聚合题库
scripts/
  sync-question-bank.mjs # 校验并生成运行时题库
miniprogram/
  app.ts
  app.json
  app.scss
  pages/
    index/          # 首页与分类入口
    category/       # 分类题目列表
    question/       # 题目详情与掌握度标记
    practice/       # 随机刷题
    review/         # 错题与收藏
    profile/        # 统计与设置
  data/
    questions.ts    # 自动生成的静态题库入口，不直接修改
  services/
    storage.ts      # 本地缓存读写与迁移
    question.ts     # 筛选、随机抽题、统计等纯逻辑
  types/
    question.ts     # 题库、学习记录类型
  components/
    question-card/
    mastery-actions/
    empty-state/
```

可按实际项目结构调整，但题库类型、数据访问和页面展示应保持分离。页面不得直接散落读写多个 storage key；统一经 `services/storage.ts` 处理。

## 题库数据结构

题库以分类 JSON 静态数据维护，字段结构与下列 TypeScript 类型一致。修改 `question-bank/sets/` 下的文件后运行 `npm run questions:sync`，不要直接修改生成的 `question-bank/questions.json` 和 `miniprogram/data/questions.ts`。每道题必须有稳定、不随排序变化的 `id`；一旦发布或已有学习记录，不得随意改动已有题目的 `id`。

```ts
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
  references?: Array<{
    title: string
    url: string
  }>
  updatedAt: string // YYYY-MM-DD
}

export type MasteryStatus = 'mastered' | 'uncertain' | 'unmastered'

export type LearningRecord = {
  questionId: string
  mastery: MasteryStatus
  isFavorite: boolean
  reviewCount: number
  lastReviewedAt: number // Unix 时间戳（毫秒）
  updatedAt: number
}
```

### 题库内容规范

- `title` 写成可直接在面试中被提问的完整问题，例如“从输入 URL 到页面展示，中间发生了什么？”。
- `answer` 采用 Markdown 风格纯文本，以短段落和小标题组织；避免一整屏的密集长文。
- `keyPoints` 保留 3–7 条可用于复述的核心结论，不能只是重复 `answer`。
- `followUps` 放真实、具体的追问，不放泛泛的“还有什么补充？”。
- 代码示例保持最小可验证，只展示与题目相关的部分；不得包含无关脚手架代码。
- 每个事实性结论应尽量准确、带条件。涉及版本、浏览器兼容性、规范或框架 API 时，更新 `updatedAt` 并提供官方参考链接。
- 不复制大段教程或文章。题库答案应以面试表达为导向，使用自己的简明归纳。

## 本地存储规范

- 使用统一前缀：`fe-interview:`。
- 推荐键：`fe-interview:learning-records`、`fe-interview:settings`、`fe-interview:schema-version`。
- Storage 中只保存用户学习状态和设置，不保存整份题库。
- 读取缓存时必须处理不存在、JSON 损坏和旧结构；失败时回退到安全默认值，不能阻断页面展示。
- 修改持久化字段时，增加数据迁移逻辑，并提升 `schema-version`。

## TypeScript 与代码质量

- 不使用 `any`；无法确定的数据用 `unknown` 后进行类型收窄。
- 为页面数据、组件属性、服务函数入参和返回值定义明确类型。
- 纯业务逻辑放到 `services/`，保持可测试；页面文件只负责生命周期、交互和渲染数据组装。
- 复杂条件命名为布尔变量或抽取函数，避免在 WXML 中堆叠复杂表达式。
- 不使用魔法数字和魔法 storage key；提取为命名常量。
- 提交前清理调试日志；需要保留的异常日志应包含足够上下文，但不得含用户隐私。

## 样式规范

- 在 `app.scss` 中定义颜色、间距、圆角、阴影、字号等设计 token，并在页面中复用。
- 单位优先使用 `rpx`；文字可适度使用 `px`，但同一组件中保持一致。
- 保证正文对比度和可读性；不要只用颜色表达掌握度，同时配合文字或图标。
- 避免深层选择器和全局样式污染。组件样式只作用于组件自身。
- 深色模式只有在全局设计完成后再加入，不做局部的半成品适配。

## 变更流程

1. 先检查现有目录、配置和未提交改动，避免覆盖用户工作。
2. 小范围、可验证地实现需求，保持变更聚焦。
3. 涉及题库结构、缓存或路由时，检查旧数据和所有受影响页面。
4. 至少进行 TypeScript 检查和微信开发者工具中的基础路径验证：启动、分类浏览、详情展开、掌握度保存、错题筛选。
5. 最终说明改动内容、验证结果，以及尚未验证的项目（如有）。

## 协作约定

- 开始实现前，用简短中文说明要修改的范围和关键假设。
- 不重写或格式化无关文件；发现已有改动时应保留它们。
- 对会改变题目数据、学习记录或产品范围的决策，先说明影响；不擅自删除题目或清空用户学习数据。
- 如果需求不明确，优先选择符合“个人面试复习工具”目标的最小实现，并在交付说明中写明假设。
