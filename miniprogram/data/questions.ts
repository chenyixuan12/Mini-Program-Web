// 此文件由 question-bank/sets 下的分类题库自动生成，请勿直接修改。
// 修改题库后执行 npm run questions:sync。

import { Question } from '../types/question'

export const questions: Question[] = [
  {
    "id": "html-semantic",
    "category": "html",
    "tags": [
      "语义化"
    ],
    "title": "HTML 语义化有什么价值，常用标签有哪些？",
    "answer": "语义化是用标签本身表达内容的结构和含义，而不是只依赖 class。它让搜索引擎、读屏软件和维护者都更容易理解页面。\n\n页面主体通常使用 header、nav、main、article、section、aside、footer；按钮使用 button，列表使用 ul / ol。",
    "keyPoints": [
      "提高可访问性与 SEO",
      "结构含义优先于视觉样式",
      "一个页面通常只有一个 main"
    ],
    "difficulty": 1,
    "updatedAt": "2026-08-12"
  },
  {
    "id": "html-src-href",
    "category": "html",
    "tags": [
      "资源加载"
    ],
    "title": "script 的 src 与 link 的 href 有什么区别？",
    "answer": "src 会把外部资源嵌入当前文档，浏览器下载并执行脚本时会影响 HTML 解析；href 用来建立当前文档与外部资源的关系，例如样式表或链接。\n\n普通 script 会阻塞解析，defer 脚本在文档解析完成后按顺序执行。",
    "keyPoints": [
      "src 用于嵌入资源",
      "href 用于关联资源",
      "defer 可避免阻塞 HTML 解析"
    ],
    "difficulty": 2,
    "updatedAt": "2026-08-12"
  },
  {
    "id": "html-doctype-standards-mode",
    "category": "html",
    "tags": [
      "文档声明",
      "兼容模式"
    ],
    "title": "DOCTYPE 有什么作用，省略后可能发生什么？",
    "answer": "`<!doctype html>` 告诉浏览器按 HTML 标准模式解析页面。它不是普通 HTML 标签，也不负责指定某个 HTML 版本。\n\n省略或使用某些旧声明可能触发怪异模式，使盒模型和部分布局行为与标准模式不同。",
    "keyPoints": [
      "触发标准模式",
      "不是 HTML 标签",
      "避免怪异模式的兼容行为"
    ],
    "difficulty": 1,
    "followUps": [
      "如何在开发者工具中判断页面处于哪种文档模式？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-lang-charset-viewport",
    "category": "html",
    "tags": [
      "文档元数据",
      "移动端"
    ],
    "title": "HTML 文档中的 lang、charset 和 viewport 分别解决什么问题？",
    "answer": "`lang` 声明页面主要语言，帮助读屏和搜索；`charset` 指定字符编码，通常尽早写为 UTF-8；viewport 控制移动浏览器的布局视口。\n\n常用 viewport 设置是 `width=device-width, initial-scale=1`，不应为阻止缩放而牺牲可访问性。",
    "keyPoints": [
      "lang 描述内容语言",
      "charset 决定字符解码",
      "viewport 影响移动端布局视口"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 charset 声明应尽量靠前？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-document-head-body",
    "category": "html",
    "tags": [
      "文档结构"
    ],
    "title": "head 和 body 中通常分别放什么内容？",
    "answer": "head 保存标题、字符集、样式、图标和 SEO 等文档元数据，通常不直接成为页面主体内容；body 保存用户可见或可交互的文档内容。\n\n脚本可按加载策略放在 head 或 body，关键是明确它是否阻塞解析以及何时执行。",
    "keyPoints": [
      "head 主要承载元数据和资源关系",
      "body 承载文档主体",
      "脚本位置需结合加载策略"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么现代项目常把带 defer 的脚本放在 head？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-block-inline-semantics",
    "category": "html",
    "tags": [
      "元素分类",
      "布局"
    ],
    "title": "块级元素和行内元素有什么区别，这种说法有哪些边界？",
    "answer": "传统上，块级元素通常独占一行，行内元素随文本流排列。但 HTML 元素的内容模型与 CSS 的 display 是两套概念，任意元素都能通过 CSS 改变外部显示类型。\n\n因此不能仅凭默认视觉表现判断标签是否可以嵌套。",
    "keyPoints": [
      "默认显示行为不同",
      "HTML 内容模型决定合法嵌套",
      "CSS display 可改变布局表现"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么不能简单说 div 一定是块、span 一定是行内？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-global-attributes",
    "category": "html",
    "tags": [
      "属性",
      "基础"
    ],
    "title": "常见的 HTML 全局属性有哪些，使用时要注意什么？",
    "answer": "id、class、title、hidden、tabindex、lang 和 `data-*` 等可用于大多数元素。id 在文档中应唯一；title 不能替代可见说明或无障碍名称。\n\n属性应表达稳定语义，不要把大量业务状态无约束地塞进 DOM。",
    "keyPoints": [
      "全局属性适用于大多数元素",
      "id 应保持唯一",
      "title 不能作为唯一提示渠道"
    ],
    "difficulty": 1,
    "followUps": [
      "什么时候适合使用 `data-*` 而不是 class？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-boolean-attributes",
    "category": "html",
    "tags": [
      "属性",
      "表单"
    ],
    "title": "HTML 布尔属性如何判断真假？",
    "answer": "disabled、checked、required 等布尔属性只要出现在元素上就表示真，与属性文本写成 `true` 或 `false` 无关。要表示假，应移除该属性。\n\nDOM 属性通常暴露为布尔值，模板绑定时应避免输出 `disabled=\"false\"`。",
    "keyPoints": [
      "出现即为真",
      "字符串 false 仍表示真",
      "假值应通过移除属性表达"
    ],
    "difficulty": 1,
    "followUps": [
      "HTML 属性和 DOM property 为什么有时不同步？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-form-label",
    "category": "html",
    "tags": [
      "表单",
      "可访问性"
    ],
    "title": "为什么表单控件需要 label，如何正确关联？",
    "answer": "label 为控件提供可访问名称，并扩大可点击区域。可以用 `for` 对应控件唯一 id，也可以把控件包在 label 内。\n\nplaceholder 会消失且通常对比度较弱，不能替代 label。",
    "keyPoints": [
      "提供控件名称",
      "扩大点击范围",
      "for 与 id 或嵌套关联",
      "placeholder 不能替代 label"
    ],
    "difficulty": 1,
    "followUps": [
      "一个控件可以关联多个 label 吗？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-input-name-value",
    "category": "html",
    "tags": [
      "表单",
      "提交"
    ],
    "title": "表单控件的 name 和 value 在提交时分别起什么作用？",
    "answer": "浏览器提交成功控件时，以 name 作为字段名、当前 value 作为字段值。没有 name 的控件通常不会进入原生表单数据。\n\ndisabled 控件也不会提交；只读控件仍会提交，具体还要结合控件类型判断。",
    "keyPoints": [
      "name 是提交字段名",
      "value 是提交值",
      "无 name 或 disabled 通常不提交"
    ],
    "difficulty": 1,
    "followUps": [
      "readonly 与 disabled 在交互和提交上有什么区别？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-button-types",
    "category": "html",
    "tags": [
      "表单",
      "按钮"
    ],
    "title": "button 的 type 为什么应该显式声明？",
    "answer": "button 在关联表单中默认类型通常是 submit，点击会触发表单提交。普通操作按钮若不声明 `type=\"button\"`，容易造成意外刷新或重复请求。\n\nsubmit 用于提交，reset 会恢复初始值但常带来误操作，通常谨慎使用。",
    "keyPoints": [
      "表单内默认可能提交",
      "普通操作显式使用 button",
      "submit 触发表单校验与提交"
    ],
    "difficulty": 1,
    "followUps": [
      "button 的 form 属性能解决什么场景？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-anchor-vs-button",
    "category": "html",
    "tags": [
      "语义化",
      "交互"
    ],
    "title": "页面跳转应该用 a 还是 button？",
    "answer": "导航到另一个地址或页面位置使用带 href 的 a；执行提交、展开、删除等当前页面操作使用 button。\n\n二者拥有不同的键盘行为、浏览器菜单和可访问语义，不应仅靠点击事件互相模拟。",
    "keyPoints": [
      "导航使用链接",
      "操作使用按钮",
      "原生语义自带正确键盘行为"
    ],
    "difficulty": 1,
    "followUps": [
      "没有 href 的 a 为什么不适合作为按钮？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-image-alt",
    "category": "html",
    "tags": [
      "图片",
      "可访问性"
    ],
    "title": "img 的 alt 应该如何编写，什么时候使用空字符串？",
    "answer": "alt 应表达图片在当前上下文中的用途或等价信息，而不是机械描述像素。纯装饰图片使用 `alt=\"\"`，让读屏忽略；信息图片则给出简洁替代文本。\n\n图片已由相邻文字完整说明时，也可考虑空 alt，避免重复朗读。",
    "keyPoints": [
      "按上下文描述用途",
      "装饰图片使用空 alt",
      "避免与相邻文本重复"
    ],
    "difficulty": 1,
    "followUps": [
      "复杂图表的详细说明应该放在哪里？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-list-semantics",
    "category": "html",
    "tags": [
      "列表",
      "语义化"
    ],
    "title": "ul、ol 和 dl 分别适合什么内容？",
    "answer": "ul 表示顺序不重要的一组项目，ol 表示次序有意义的项目，dl 表示术语与描述或名称与值的分组。\n\n不要只为默认缩进或圆点选择列表类型，视觉样式可由 CSS 调整。",
    "keyPoints": [
      "ul 表示无序集合",
      "ol 表示有序步骤或排名",
      "dl 表示名称与描述关系"
    ],
    "difficulty": 1,
    "followUps": [
      "导航菜单为什么通常可以使用 ul？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-table-semantics",
    "category": "html",
    "tags": [
      "表格",
      "可访问性"
    ],
    "title": "如何用语义化 HTML 编写可访问的数据表格？",
    "answer": "数据表使用 table，并用 caption 给出表名、th 表示表头、thead/tbody/tfoot 划分区域。简单表格可用 th 的 scope 指明行头或列头。\n\n表格用于二维数据关系，不应作为通用页面布局工具。",
    "keyPoints": [
      "caption 描述表格主题",
      "th 与 scope 建立表头关系",
      "表格只用于表格数据"
    ],
    "difficulty": 1,
    "followUps": [
      "复杂多级表头如何建立单元格关联？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-details-summary",
    "category": "html",
    "tags": [
      "原生组件",
      "交互"
    ],
    "title": "details 和 summary 适合解决什么交互？",
    "answer": "details 表示可展开的补充内容，summary 是其可见标题，浏览器默认提供展开状态、键盘操作和基础语义。\n\n它适合 FAQ 或次要详情；若交互需要复杂焦点管理和模态行为，应选择更合适的组件。",
    "keyPoints": [
      "提供原生折叠交互",
      "summary 是触发标题",
      "open 属性反映展开状态"
    ],
    "difficulty": 1,
    "followUps": [
      "如何监听 details 的展开状态变化？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-form-submission-process",
    "category": "html",
    "tags": [
      "表单",
      "HTTP"
    ],
    "title": "浏览器原生表单提交时会经历哪些关键步骤？",
    "answer": "用户激活提交按钮后，浏览器先进行约束校验，收集成功控件，再按 method 与 enctype 编码并导航或发送请求。GET 通常把字段放入查询串，POST 把数据放入请求体。\n\n监听 submit 事件比监听按钮 click 更完整，因为回车等操作也能触发提交。",
    "keyPoints": [
      "先约束校验",
      "只收集成功控件",
      "编码取决于 method 与 enctype",
      "应围绕 submit 事件处理"
    ],
    "difficulty": 2,
    "followUps": [
      "上传文件时为什么需要 multipart/form-data？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-constraint-validation",
    "category": "html",
    "tags": [
      "表单",
      "校验"
    ],
    "title": "HTML 原生表单校验能做什么，为什么不能替代服务端校验？",
    "answer": "required、min、max、pattern 和输入类型可在提交前检查常见约束，ValidityState 与 `checkValidity()` 可供脚本读取。\n\n客户端规则可以被绕过，且无法确认业务权限和数据库状态，所以服务端必须独立验证所有输入。",
    "keyPoints": [
      "声明式处理常见约束",
      "可通过 ValidityState 检查原因",
      "服务端仍需完整校验"
    ],
    "difficulty": 2,
    "followUps": [
      "novalidate 和 formnovalidate 有什么区别？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-input-autocomplete",
    "category": "html",
    "tags": [
      "表单",
      "用户体验",
      "安全"
    ],
    "title": "autocomplete 属性应该如何使用？",
    "answer": "autocomplete 用标准令牌描述字段含义，如 name、email、current-password、new-password 和 one-time-code，帮助浏览器和密码管理器正确填充。\n\n不能把 `autocomplete=\"off\"` 当成安全机制；敏感数据保护依赖传输、存储和权限控制。",
    "keyPoints": [
      "用语义令牌描述字段",
      "改善自动填充与可访问性",
      "关闭自动完成不是安全边界"
    ],
    "difficulty": 2,
    "followUps": [
      "登录密码和注册新密码应分别使用哪个令牌？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-responsive-image-srcset-sizes",
    "category": "html",
    "tags": [
      "图片",
      "响应式",
      "性能"
    ],
    "title": "srcset 和 sizes 如何让浏览器选择合适的响应式图片？",
    "answer": "srcset 提供候选资源及宽度或像素密度描述符，sizes 描述图片在不同条件下预计占用的 CSS 宽度。浏览器结合设备像素比、视口和网络策略选择资源。\n\n使用宽度描述符时通常需要正确设置 sizes，否则浏览器会按默认假设选择，可能下载过大图片。",
    "keyPoints": [
      "srcset 声明资源候选",
      "sizes 描述展示宽度",
      "最终选择权在浏览器"
    ],
    "difficulty": 2,
    "followUps": [
      "1x/2x 描述符与 480w/960w 描述符适用场景有何不同？"
    ],
    "references": [
      {
        "title": "MDN Responsive images",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-picture-art-direction",
    "category": "html",
    "tags": [
      "图片",
      "响应式"
    ],
    "title": "picture 元素与 img 的 srcset 有什么分工？",
    "answer": "srcset 主要让浏览器在同一图像的不同尺寸中选择；picture 可按 media 或 type 提供不同裁切、构图或格式。\n\npicture 内仍必须保留 img 作为回退和实际图片元素，alt 也写在 img 上。",
    "keyPoints": [
      "picture 支持艺术指导",
      "source 可按媒体条件或格式选择",
      "img 是必需回退并承载 alt"
    ],
    "difficulty": 2,
    "followUps": [
      "AVIF/WebP 回退结构应如何组织？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-native-lazy-loading",
    "category": "html",
    "tags": [
      "图片",
      "性能"
    ],
    "title": "图片和 iframe 的原生懒加载应该如何使用？",
    "answer": "`loading=\"lazy\"` 提示浏览器延迟加载视口外资源，适合非首屏图片和 iframe。首屏关键图片通常不应懒加载，否则可能拖慢 LCP。\n\n为图片声明 width 与 height 或 aspect-ratio，可在资源到达前预留空间并减少布局偏移。",
    "keyPoints": [
      "非首屏资源适合 lazy",
      "首屏关键资源避免懒加载",
      "预留尺寸降低 CLS"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么原生 lazy 的触发距离不能作为业务逻辑依赖？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-script-async-defer-module",
    "category": "html",
    "tags": [
      "脚本",
      "资源加载"
    ],
    "title": "普通 script、async、defer 和 type=module 的执行时机有何区别？",
    "answer": "普通外链脚本通常阻塞解析；async 并行下载，下载完立即执行且不保证顺序；defer 并行下载，在解析完成后按文档顺序执行。\n\n模块脚本默认具有类似 defer 的延迟执行特性，并支持依赖图；动态 import 则按需加载模块。",
    "keyPoints": [
      "普通脚本可能阻塞解析",
      "async 不保证顺序",
      "defer 保序且解析后执行",
      "模块脚本默认延迟"
    ],
    "difficulty": 2,
    "followUps": [
      "DOMContentLoaded 会等待哪些脚本？"
    ],
    "references": [
      {
        "title": "MDN script element",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-preload-prefetch-preconnect",
    "category": "html",
    "tags": [
      "资源提示",
      "性能"
    ],
    "title": "preload、prefetch 和 preconnect 应该如何选择？",
    "answer": "preload 提前获取当前页面很快会使用的高优先资源；prefetch 通常提示获取未来导航可能使用的低优先资源；preconnect 提前建立到关键源的连接。\n\n资源提示是性能工具而非越多越好，错误的 as、跨域属性或过量预加载会竞争带宽。",
    "keyPoints": [
      "preload 面向当前导航",
      "prefetch 面向潜在后续导航",
      "preconnect 提前建连",
      "需控制数量并正确标注 as"
    ],
    "difficulty": 2,
    "followUps": [
      "预加载字体时为什么经常需要 crossorigin？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-iframe-security",
    "category": "html",
    "tags": [
      "iframe",
      "安全"
    ],
    "title": "嵌入第三方 iframe 时需要考虑哪些安全与性能问题？",
    "answer": "第三方 iframe 会引入独立文档、网络与脚本开销，也可能申请权限、导航顶层页面或弹窗。应按需设置 sandbox、allow、referrerpolicy 和 loading，并限制可信来源。\n\n跨源 iframe 受同源策略限制，父子页面需要通过受控的 postMessage 通信。",
    "keyPoints": [
      "最小化 iframe 权限",
      "使用 sandbox 与 Permissions Policy",
      "跨源通信校验来源",
      "非首屏可考虑懒加载"
    ],
    "difficulty": 2,
    "followUps": [
      "接收 postMessage 时为什么要校验 origin 和消息结构？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-iframe-sandbox",
    "category": "html",
    "tags": [
      "iframe",
      "安全"
    ],
    "title": "iframe 的 sandbox 属性如何限制嵌入内容？",
    "answer": "空 sandbox 会启用一组严格限制，包括脚本、表单、弹窗和同源能力；再通过 allow-scripts、allow-forms 等令牌逐项放开。\n\n对同源内容同时允许脚本和 allow-same-origin 可能让其移除 sandbox，因此不能把不当组合视为可靠隔离。",
    "keyPoints": [
      "默认全部限制再按需放行",
      "令牌遵循最小权限",
      "同源加脚本组合需特别谨慎"
    ],
    "difficulty": 2,
    "followUps": [
      "allow-same-origin 的含义为什么不是“只允许同源页面”？"
    ],
    "references": [
      {
        "title": "MDN iframe sandbox",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe#sandbox"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-aria-first-rule",
    "category": "html",
    "tags": [
      "ARIA",
      "可访问性"
    ],
    "title": "为什么通常应优先使用原生 HTML，而不是给 div 添加 ARIA role？",
    "answer": "原生 button、input、nav 等自带角色、状态、键盘操作和平台可访问性映射。ARIA 主要补充缺失的语义，不会自动增加行为。\n\n给 div 写 role=button 后，仍需自行实现焦点、Enter/Space 激活、禁用状态等细节。",
    "keyPoints": [
      "原生元素同时提供语义与行为",
      "ARIA 不改变原生交互",
      "自定义控件维护成本高"
    ],
    "difficulty": 2,
    "followUps": [
      "ARIA 属性会直接改变元素样式或事件行为吗？"
    ],
    "references": [
      {
        "title": "W3C First Rule of ARIA",
        "url": "https://www.w3.org/TR/using-aria/#rule1"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-tabindex-focus-order",
    "category": "html",
    "tags": [
      "焦点",
      "可访问性"
    ],
    "title": "tabindex 的 0、-1 和正数分别表示什么？",
    "answer": "0 让元素进入按 DOM 顺序排列的顺序焦点导航；-1 允许脚本聚焦但不进入 Tab 顺序；正数创建人为优先级，维护困难且容易破坏直觉。\n\n通常使用原生可聚焦元素和自然 DOM 顺序，避免正 tabindex。",
    "keyPoints": [
      "0 加入自然 Tab 顺序",
      "-1 仅支持程序聚焦",
      "正数会重排焦点顺序，应避免"
    ],
    "difficulty": 2,
    "followUps": [
      "模态框打开和关闭时应如何管理焦点？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-keyboard-accessibility",
    "category": "html",
    "tags": [
      "键盘",
      "可访问性"
    ],
    "title": "实现键盘可访问交互时需要检查哪些要点？",
    "answer": "所有操作应能通过键盘到达和触发，焦点顺序与视觉顺序一致，并始终有清晰焦点指示。自定义复合组件还需按对应模式实现方向键、Escape 等行为。\n\n不要用 `outline: none` 移除焦点样式，除非提供等价且清晰的替代。",
    "keyPoints": [
      "操作可聚焦且可触发",
      "焦点顺序符合阅读顺序",
      "焦点指示清晰",
      "复杂组件遵循既定键盘模式"
    ],
    "difficulty": 2,
    "followUps": [
      "`:focus-visible` 解决了什么体验问题？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-heading-landmarks",
    "category": "html",
    "tags": [
      "标题",
      "可访问性",
      "语义化"
    ],
    "title": "标题层级和 landmark 应该如何组织页面结构？",
    "answer": "h1 到 h6 表达内容层级，级别应反映结构而非字号；main、nav、header、footer、aside 等 landmark 帮助辅助技术快速导航。\n\n同类 landmark 多次出现时应提供可区分名称，页面视觉样式由 CSS 负责。",
    "keyPoints": [
      "标题用于建立内容大纲",
      "不要为字号选择标题级别",
      "landmark 支持区域导航",
      "重复区域需要可区分名称"
    ],
    "difficulty": 2,
    "followUps": [
      "多个 nav 如何为读屏用户提供可区分名称？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-hidden-inert-aria-hidden",
    "category": "html",
    "tags": [
      "可见性",
      "可访问性"
    ],
    "title": "hidden、aria-hidden 和 inert 的作用有什么区别？",
    "answer": "hidden 通常让元素不渲染；aria-hidden 只把元素及其后代从可访问性树中隐藏，不阻止视觉显示或焦点；inert 会使子树不可交互、不可聚焦，并从可访问性树排除。\n\n不能在仍可获得焦点的区域上随意使用 aria-hidden。",
    "keyPoints": [
      "hidden 控制呈现",
      "aria-hidden 只影响辅助技术",
      "inert 禁止整棵子树交互",
      "隐藏策略需同步视觉与焦点"
    ],
    "difficulty": 2,
    "followUps": [
      "打开模态框时 inert 可以如何隔离背景内容？"
    ],
    "references": [
      {
        "title": "MDN inert global attribute",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-data-attributes",
    "category": "html",
    "tags": [
      "属性",
      "DOM"
    ],
    "title": "data-* 属性适合存放什么数据，如何在脚本中读取？",
    "answer": "data-* 适合附加与元素相关、需要在标记与脚本间传递的少量自定义数据，可通过 `element.dataset` 读取。属性名会从连字符形式映射为驼峰键。\n\n复杂状态应由应用数据模型管理，敏感信息也不能因写在 data 属性中而获得保护。",
    "keyPoints": [
      "用于元素相关的自定义元数据",
      "通过 dataset 访问",
      "值本质上是字符串",
      "不用于敏感或大型状态"
    ],
    "difficulty": 2,
    "followUps": [
      "`data-user-id` 在 dataset 中对应哪个属性名？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-template-element",
    "category": "html",
    "tags": [
      "模板",
      "DOM"
    ],
    "title": "template 元素为什么不会直接渲染，它适合什么场景？",
    "answer": "template 的子节点保存在惰性的 DocumentFragment 中，不参与当前文档渲染，脚本可通过 `template.content` 克隆后插入。\n\n它适合保存可复用的原生 DOM 结构，也是 Web Components 声明内部标记的常见方式。",
    "keyPoints": [
      "内容默认不渲染",
      "通过 content 获取 DocumentFragment",
      "克隆后才进入活动文档"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么重复使用时通常要 cloneNode(true)？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-media-video-audio",
    "category": "html",
    "tags": [
      "媒体",
      "可访问性"
    ],
    "title": "使用 video 和 audio 时需要考虑哪些回退与体验问题？",
    "answer": "可用多个 source 提供浏览器支持的编码格式，并在元素内容中提供无法播放时的回退说明。视频应提供字幕或文字替代，自动播放需遵循浏览器策略并避免突兀声音。\n\npreload 只是提示，浏览器可能根据环境调整加载策略。",
    "keyPoints": [
      "多 source 提供格式回退",
      "提供字幕或替代内容",
      "有声自动播放通常受限",
      "preload 不是强制指令"
    ],
    "difficulty": 2,
    "followUps": [
      "muted 为什么会影响自动播放策略？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-track-captions",
    "category": "html",
    "tags": [
      "媒体",
      "字幕",
      "可访问性"
    ],
    "title": "track 元素可以为媒体提供哪些文本轨道？",
    "answer": "track 可加载 WebVTT 文本轨道，kind 可表示字幕、听障字幕、描述、章节或元数据。srclang 与 label 帮助用户区分语言，default 可指定默认轨道。\n\n字幕不仅是语音转写，还应在 captions 中表达影响理解的重要非语音声音。",
    "keyPoints": [
      "使用 WebVTT 轨道",
      "kind 描述轨道用途",
      "语言与标签应明确",
      "captions 包含必要声音信息"
    ],
    "difficulty": 2,
    "followUps": [
      "subtitles 与 captions 的受众和内容有何不同？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-meta-csp",
    "category": "html",
    "tags": [
      "安全",
      "CSP"
    ],
    "title": "通过 meta 配置 CSP 与通过响应头配置有什么区别？",
    "answer": "CSP 最适合由 HTTP 响应头尽早发送，可覆盖完整策略能力。meta 的 http-equiv 可在无法控制响应头时提供部分策略，但只对它之后的内容生效，且不支持所有指令。\n\n生产环境应优先响应头，并先用 Report-Only 观察违规再收紧。",
    "keyPoints": [
      "响应头更早且能力完整",
      "meta 只影响其后内容",
      "部分指令不支持 meta",
      "策略应逐步收紧"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 CSP 不能只依赖域名白名单？"
    ],
    "references": [
      {
        "title": "MDN CSP guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-referrer-policy",
    "category": "html",
    "tags": [
      "隐私",
      "安全"
    ],
    "title": "referrerpolicy 如何控制页面跳转和资源请求携带的来源信息？",
    "answer": "Referrer Policy 决定 Referer 请求头发送完整 URL、仅源信息还是完全不发送，可在响应头、meta 或单个元素上设置。\n\n现代常见默认策略会在跨源时减少路径信息，但敏感数据仍不应放入 URL。元素级策略可用于更精细控制。",
    "keyPoints": [
      "控制 Referer 泄露范围",
      "可设置全局或元素级策略",
      "跨源通常应减少信息",
      "URL 不应承载敏感数据"
    ],
    "difficulty": 2,
    "followUps": [
      "strict-origin-when-cross-origin 的核心行为是什么？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-link-rel-security",
    "category": "html",
    "tags": [
      "链接",
      "安全"
    ],
    "title": "使用 target=_blank 打开链接时需要注意什么？",
    "answer": "新页面若能通过 `window.opener` 控制来源页，会带来反向标签劫持风险。现代浏览器通常为 `_blank` 隐式提供 noopener 行为，但显式写 `rel=\"noopener\"` 能清楚表达意图并照顾旧环境。\n\n`noreferrer` 还会阻止发送 Referer，是否使用取决于业务归因与隐私需求。",
    "keyPoints": [
      "关注 window.opener 风险",
      "noopener 切断打开页引用",
      "noreferrer 额外隐藏来源",
      "安全与归因需求需权衡"
    ],
    "difficulty": 2,
    "followUps": [
      "noopener 和 noreferrer 的效果有什么区别？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-dialog-element",
    "category": "html",
    "tags": [
      "原生组件",
      "模态框",
      "可访问性"
    ],
    "title": "原生 dialog 的 show、showModal 和 close 有什么区别？",
    "answer": "show() 打开非模态对话框，showModal() 将其放入 top layer 并让页面其余区域不可交互，close() 关闭并可设置 returnValue。\n\n原生模态提供焦点与 Escape 关闭等基础行为，但应用仍需设置清晰标题、初始焦点和关闭入口。",
    "keyPoints": [
      "showModal 创建模态交互",
      "模态框进入 top layer",
      "close 可返回结果",
      "仍需设计名称和焦点"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么不建议只靠点击 backdrop 关闭关键确认框？"
    ],
    "references": [
      {
        "title": "MDN dialog element",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-popover-api",
    "category": "html",
    "tags": [
      "Popover",
      "原生组件"
    ],
    "title": "HTML Popover API 适合什么场景，与 dialog 有何区别？",
    "answer": "popover 适合菜单、提示面板等非模态浮层，可通过 popovertarget 建立声明式控制，并进入 top layer，自动类浮层通常支持轻触关闭。\n\ndialog 更适合需要聚焦决策的对话框，尤其是模态交互；二者应按语义和焦点需求选择。",
    "keyPoints": [
      "popover 面向非模态浮层",
      "可声明式关联触发器",
      "top layer 避免层叠遮挡",
      "模态任务优先 dialog"
    ],
    "difficulty": 2,
    "followUps": [
      "popover=auto 与 manual 的关闭行为有何不同？"
    ],
    "references": [
      {
        "title": "MDN Popover API",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Popover_API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-parser-error-recovery",
    "category": "html",
    "tags": [
      "解析器",
      "原理"
    ],
    "title": "HTML 解析器为什么能容忍错误标记，这会带来什么工程问题？",
    "answer": "HTML 规范定义了确定性的分词、树构建和错误恢复算法，浏览器会为遗漏标签或非法嵌套补全、重排节点，而不是直接停止。\n\n容错不等于源码正确；修复后的 DOM 可能与模板预期不同，引发选择器失效、事件绑定偏差或服务端水合不一致。",
    "keyPoints": [
      "错误恢复由算法定义",
      "浏览器可能自动补标签或重排节点",
      "最终 DOM 不一定等于源码结构",
      "应使用校验和实际 DOM 调试"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 table 内的非法节点可能被移动到表格外？"
    ],
    "references": [
      {
        "title": "WHATWG HTML parsing",
        "url": "https://html.spec.whatwg.org/multipage/parsing.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-speculative-parser",
    "category": "html",
    "tags": [
      "解析器",
      "性能"
    ],
    "title": "浏览器的预加载扫描器如何改善 HTML 加载性能？",
    "answer": "主解析器被同步脚本阻塞时，预加载扫描器仍可向前发现 img、link、script 等资源并尽早发起请求。它降低发现关键资源的延迟，但不能执行依赖脚本生成的标记。\n\n把关键资源写在初始 HTML 中、避免用脚本晚插入，通常更利于扫描器发现。",
    "keyPoints": [
      "与主解析并行发现资源",
      "降低阻塞期间的资源发现延迟",
      "不能预测脚本动态生成内容",
      "关键资源应尽早出现在标记中"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么通过 JavaScript 动态插入首屏图片可能拖慢 LCP？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-domcontentloaded-load-timing",
    "category": "html",
    "tags": [
      "生命周期",
      "脚本"
    ],
    "title": "DOMContentLoaded 与 load 事件的触发条件有什么区别？",
    "answer": "DOMContentLoaded 在 HTML 完成解析且 defer 与模块脚本执行后触发，不等待普通图片等子资源；load 要等待文档及其依赖资源完成加载。\n\nasync 脚本与样式对时序的影响需结合规范判断，业务初始化通常不必等到所有图片加载。",
    "keyPoints": [
      "DOMContentLoaded 关注 DOM 可用",
      "会等待 defer 和模块脚本",
      "load 等待依赖资源",
      "初始化时机按真实依赖选择"
    ],
    "difficulty": 3,
    "followUps": [
      "脚本在 DOMContentLoaded 之后动态加载时如何安全初始化？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-custom-elements-lifecycle",
    "category": "html",
    "tags": [
      "Web Components",
      "自定义元素"
    ],
    "title": "Custom Elements 的定义和生命周期回调如何工作？",
    "answer": "通过 customElements.define 注册带连字符名称的类，浏览器会升级匹配元素。connectedCallback、disconnectedCallback 和 attributeChangedCallback 分别处理连接、移除与被观察属性变化。\n\n构造函数中应保持轻量，DOM 相关初始化通常放在连接回调，并保证重复连接时不会重复注册副作用。",
    "keyPoints": [
      "名称必须包含连字符",
      "注册后已有元素可被升级",
      "生命周期可能多次调用",
      "副作用需要可清理且幂等"
    ],
    "difficulty": 3,
    "followUps": [
      "observedAttributes 如何决定哪些属性触发回调？"
    ],
    "references": [
      {
        "title": "MDN Using custom elements",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-shadow-dom-slots",
    "category": "html",
    "tags": [
      "Web Components",
      "Shadow DOM"
    ],
    "title": "Shadow DOM 的封装边界和 slot 分发机制是什么？",
    "answer": "Shadow DOM 为组件建立独立节点树和样式作用域，外部普通选择器不会直接穿透；事件则可能跨边界传播并重定向 target。slot 把宿主的 light DOM 子节点分发到影子树插槽。\n\n封装不是安全边界，开放 shadow root 仍可被脚本访问。",
    "keyPoints": [
      "DOM 与样式具有封装边界",
      "slot 分发 light DOM",
      "事件跨边界会重定向",
      "Shadow DOM 不提供安全隔离"
    ],
    "difficulty": 3,
    "followUps": [
      "composedPath() 为什么比 event.target 更能反映真实传播路径？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-form-encoding-successful-controls",
    "category": "html",
    "tags": [
      "表单",
      "编码",
      "原理"
    ],
    "title": "表单的成功控件和 enctype 如何共同决定请求数据？",
    "answer": "提交时只有满足条件的成功控件进入数据集，例如有 name、未禁用，复选框需被选中，提交按钮只包含实际激活的那个。\n\n默认 urlencoded 适合普通字段；multipart/form-data 保留分段并支持文件；text/plain 主要用于调试，不适合常规接口。",
    "keyPoints": [
      "并非所有控件都会提交",
      "同名字段可产生多个值",
      "文件上传使用 multipart",
      "编码方式需与服务端解析一致"
    ],
    "difficulty": 3,
    "followUps": [
      "未选中的 checkbox 为什么不会出现在 FormData 中？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-custom-validation-accessibility",
    "category": "html",
    "tags": [
      "表单",
      "校验",
      "可访问性"
    ],
    "title": "自定义表单校验错误时，如何兼顾原生约束和可访问性？",
    "answer": "可用 setCustomValidity 设置控件的验证消息，并在值修正后清空；错误文案应可见且通过 aria-describedby 等方式与控件关联。\n\n提交失败后将焦点或摘要引导到第一个错误，不能只用红色边框表示失败；异步业务校验还需处理竞态。",
    "keyPoints": [
      "setCustomValidity 参与原生校验",
      "修正后及时清空错误",
      "错误消息需与控件关联",
      "颜色不是唯一提示"
    ],
    "difficulty": 3,
    "followUps": [
      "异步用户名查重为什么不能完全依赖原生 required？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-accessible-name",
    "category": "html",
    "tags": [
      "可访问性",
      "无障碍名称"
    ],
    "title": "浏览器如何为交互元素计算可访问名称？",
    "answer": "可访问名称可来自元素内容、关联 label、alt、aria-labelledby 或 aria-label，具体优先级由名称计算规则决定。aria-labelledby 能组合现有可见文本，通常比重复写 aria-label 更易保持一致。\n\n名称回答“这是什么”，description 则补充说明，二者不可混为一谈。",
    "keyPoints": [
      "名称来源有明确优先级",
      "优先复用可见标签",
      "aria-labelledby 可组合多个节点",
      "名称与描述职责不同"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 aria-label 可能覆盖按钮原有文本名称？"
    ],
    "references": [
      {
        "title": "W3C Accessible Name and Description Computation",
        "url": "https://www.w3.org/TR/accname-1.2/"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-hydration-invalid-markup",
    "category": "html",
    "tags": [
      "SSR",
      "水合",
      "解析器"
    ],
    "title": "为什么非法 HTML 嵌套容易导致 SSR 水合失败？",
    "answer": "服务端输出字符串后，浏览器会按 HTML 树构建规则纠正非法嵌套；客户端框架若按组件树期待另一种节点结构，水合时就无法一一匹配。\n\n排查时应查看浏览器实际 DOM 而不只看响应源码，并修复如 p 内嵌块元素、table 子节点非法等结构。",
    "keyPoints": [
      "浏览器会修正非法标记",
      "实际 DOM 可能偏离服务端字符串",
      "水合依赖节点结构一致",
      "应从源头修复嵌套"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 DevTools Elements 与 View Source 可能显示不同结构？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "html-structured-data-jsonld",
    "category": "html",
    "tags": [
      "SEO",
      "结构化数据"
    ],
    "title": "页面结构化数据应如何使用，为什么不能保证搜索结果展示？",
    "answer": "结构化数据用机器可读词汇描述页面实体，常见实现是 JSON-LD script，并应与用户可见内容保持一致。搜索引擎可借此理解页面并决定是否生成增强结果。\n\n标记正确只是资格条件，展示仍由搜索引擎根据质量、政策和查询决定，不能伪造不可见信息。",
    "keyPoints": [
      "JSON-LD 与可见内容一致",
      "按 Schema.org 类型描述实体",
      "需要通过验证工具检查",
      "增强结果不保证出现"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么不能在结构化数据中加入页面没有展示的评分？"
    ],
    "references": [
      {
        "title": "Google Search structured data intro",
        "url": "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-specificity",
    "category": "css",
    "tags": [
      "选择器",
      "层叠"
    ],
    "title": "CSS 选择器优先级，权重怎么计算？",
    "answer": "层叠结果先比较来源和重要性，再比较选择器优先级、层叠顺序和继承关系。常见作者样式中，!important 会改变重要性；普通规则通常比较行内样式、ID、类/属性/伪类、标签/伪元素等分量，最后采用后出现的规则。\n\n权重分量按列比较，不是十进制加法，也不存在“十个类选择器进位超过一个 ID”的说法。应优先减少选择器耦合，谨慎使用 !important。",
    "keyPoints": [
      "先比较重要性和来源",
      "选择器分量按列比较且不进位",
      "相同条件下后声明规则优先",
      "避免用 !important 解决层级混乱"
    ],
    "difficulty": 2,
    "followUps": [
      "@layer 如何改变传统的层叠管理方式？"
    ],
    "references": [
      {
        "title": "MDN CSS specificity",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-box-model",
    "category": "css",
    "tags": [
      "盒模型"
    ],
    "title": "盒模型有哪些？box-sizing 有什么区别？",
    "answer": "标准盒模型 content-box 是默认值，声明的 width 和 height 只表示内容区，padding 与 border 会向外增加总尺寸。border-box 把内容、内边距和边框纳入声明尺寸，内容区会相应收缩；margin 位于盒子外部，不属于元素自身尺寸。\n\n组件和布局通常统一使用 border-box，让显式尺寸更容易控制。",
    "keyPoints": [
      "content-box 的尺寸不含 padding 和 border",
      "border-box 把 padding 与 border 计入尺寸",
      "margin 不属于盒子自身宽高",
      "组件布局通常优先 border-box"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么替换元素的尺寸表现还需要单独关注？"
    ],
    "references": [
      {
        "title": "MDN box model",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-centering",
    "category": "css",
    "tags": [
      "布局",
      "居中"
    ],
    "title": "CSS 实现水平垂直居中有哪些方案？",
    "answer": "现代布局优先使用 flex 或 grid：父元素设置 display: flex 并配合 justify-content、align-items，或使用 grid 的 place-items: center。元素未知尺寸时，这两种方式不需要手工测量。\n\n绝对定位配合 top/left: 50% 与 transform: translate(-50%, -50%) 也适用于脱离文档流的浮层；已知尺寸时还可以使用四边为 0 加 margin: auto。",
    "keyPoints": [
      "flex 适合一维居中",
      "grid 的 place-items 可同时居中",
      "transform 方案不依赖元素尺寸",
      "浮层居中要关注定位上下文"
    ],
    "difficulty": 1,
    "codeExample": {
      "language": "css",
      "code": ".parent {\n  display: grid;\n  place-items: center;\n}"
    },
    "references": [
      {
        "title": "MDN CSS layout cookbook",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Centering_an_element"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-bfc",
    "category": "css",
    "tags": [
      "布局",
      "BFC"
    ],
    "title": "BFC 是什么？触发条件和能解决的问题有哪些？",
    "answer": "BFC 是块级格式化上下文，可以把一块布局区域与外部建立边界。flow-root、浮动、绝对定位等方式可以创建 BFC；flex 和 grid 容器也会形成独立的格式化上下文，但不能把所有布局问题都简单归结为 BFC。\n\nBFC 常用于包含浮动、隔离相邻布局和避免特定的外边距折叠。使用 overflow:hidden 还可能裁剪内容，现代项目可优先考虑 display: flow-root 或直接采用 flex/grid。",
    "keyPoints": [
      "BFC 提供独立的块级布局边界",
      "可用于包含浮动和隔离布局影响",
      "不同格式化上下文的触发条件要区分",
      "overflow:hidden 可能产生裁剪副作用"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 display: flow-root 比 overflow:hidden 更适合作为清除浮动的意图表达？"
    ],
    "references": [
      {
        "title": "MDN Block formatting context",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Block_formatting_context"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-flex",
    "category": "css",
    "tags": [
      "Flex",
      "布局"
    ],
    "title": "flex: 1 代表什么？",
    "answer": "在常见浏览器实现中，flex: 1 是 flex-grow: 1、flex-shrink: 1、flex-basis: 0% 的简写。项目先以 0% 作为基础尺寸，再按 grow 比例分配容器剩余空间；空间不足时还会按 shrink 参与收缩。\n\n实际尺寸仍会受到 min-width、min-height 和内容最小尺寸影响，因此遇到子内容撑开时常需要显式设置 min-width: 0。",
    "keyPoints": [
      "常见展开写法等价于 1 1 0%",
      "多个项目可按比例分配剩余空间",
      "shrink 会参与空间不足时的计算",
      "默认最小尺寸可能阻止收缩"
    ],
    "difficulty": 2,
    "followUps": [
      "flex-basis: 0 与 auto 对项目分配有什么影响？"
    ],
    "references": [
      {
        "title": "MDN flex",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-float-clear",
    "category": "css",
    "tags": [
      "布局",
      "浮动"
    ],
    "title": "浮动 float 有哪些副作用，怎么清除浮动？",
    "answer": "浮动元素会脱离普通块布局并允许文字环绕，父元素如果没有形成包裹高度，可能出现高度塌陷，后续普通流内容也可能上移。\n\n现代项目优先用 flex 或 grid；需要兼容历史浮动布局时，可使用 display: flow-root、包含块级格式化上下文，或在伪元素上设置 clear: both。overflow:hidden 虽然有效，但要评估裁剪溢出的副作用。",
    "keyPoints": [
      "浮动会改变普通流布局",
      "父元素可能无法被浮动子元素撑高",
      "flow-root 是清除浮动的明确方式",
      "flex/grid 通常比 float 更适合新布局"
    ],
    "difficulty": 1,
    "codeExample": {
      "language": "css",
      "code": ".clearfix {\n  display: flow-root;\n}"
    },
    "references": [
      {
        "title": "MDN float",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/float"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-position-basics",
    "category": "css",
    "tags": [
      "定位"
    ],
    "title": "position 的 static、relative、absolute、fixed、sticky 有什么区别？",
    "answer": "static 是默认定位，top、left 等偏移通常不起作用；relative 保留原来的文档流位置，并以自身位置作为偏移参考。absolute 脱离普通流，通常相对最近的非 static 定位祖先建立包含块。\n\nfixed 通常相对视口定位，但 transform 等祖先可能改变其包含块；sticky 在滚动达到阈值前参与普通流，达到阈值后在滚动容器内吸附，必须设置至少一个 inset 阈值并确认容器没有阻断滚动。",
    "keyPoints": [
      "relative 保留原位置",
      "absolute 依赖定位祖先建立包含块",
      "fixed 的参考系可能受祖先影响",
      "sticky 需要滚动容器和阈值条件"
    ],
    "difficulty": 2,
    "followUps": [
      "absolute 元素的包含块如何确定？"
    ],
    "references": [
      {
        "title": "MDN position",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/position"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-layout-render-cost",
    "category": "css",
    "tags": [
      "性能",
      "渲染"
    ],
    "title": "重排和重绘有什么区别，如何优化？",
    "answer": "重排是几何信息变化后重新计算布局，重绘是在布局不变时重新绘制颜色、边框等视觉内容；一次重排通常会继续触发受影响区域的重绘，但重绘不一定需要重排。读取 offsetWidth 等布局信息可能强制浏览器同步完成待处理布局。\n\n优化重点是批量读写、避免交替读写造成强制同步布局，使用 class 统一变更，并在适合的动画中优先 transform 和 opacity。具体开销仍应通过性能面板验证。",
    "keyPoints": [
      "重排涉及几何计算",
      "重绘只更新视觉像素",
      "交替读写可能触发强制同步布局",
      "性能优化需要结合性能面板验证"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 transform 和 opacity 常更容易走合成阶段？"
    ],
    "references": [
      {
        "title": "MDN Rendering performance",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Rendering"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-transform",
    "category": "css",
    "tags": [
      "性能",
      "变换"
    ],
    "title": "CSS 中 transform 为什么常被用于动画性能优化？",
    "answer": "transform 改变的是元素的变换矩阵，通常不会重新计算普通流中的几何位置，因此比频繁修改 top、left 更不容易触发布局。opacity 和 transform 在满足条件时可能由合成器处理，减少主线程工作。\n\n这不等于一定使用 GPU，也不意味着应滥用 will-change 或 translateZ(0)；过多合成层会增加内存和合成成本，应通过性能工具确认收益。",
    "keyPoints": [
      "transform 通常不改变普通流几何",
      "opacity/transform 可能在合成阶段处理",
      "不能把合成简单等同于一定使用 GPU",
      "will-change 应短期、按需使用"
    ],
    "difficulty": 2,
    "followUps": [
      "哪些 CSS 属性变化通常会触发布局？"
    ],
    "references": [
      {
        "title": "MDN transform",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-hairline-border",
    "category": "css",
    "tags": [
      "移动端",
      "像素"
    ],
    "title": "移动端 1px 边框问题是什么，如何处理？",
    "answer": "CSS 的 1px 是 CSS 像素，设备像素比 DPR 只决定它映射到多少物理像素；在高 DPR 屏幕上，1px 并不等于一条物理像素的细线。所谓 1px 边框问题通常是设计稿希望得到比 1 CSS px 更细的视觉线。\n\n可根据浏览器能力使用 0.5px、transform 缩放伪元素或统一的设计系统方案，并处理不同 DPR 和缩放环境，不应把固定的 200% 缩放当成所有设备的通用答案。",
    "keyPoints": [
      "CSS 像素与设备物理像素不是同一单位",
      "DPR 会影响视觉映射",
      "细边框方案需要考虑浏览器和 DPR",
      "不要把单一缩放方案当成通用解"
    ],
    "difficulty": 2,
    "followUps": [
      "devicePixelRatio 变化时，响应式细线方案如何测试？"
    ],
    "references": [
      {
        "title": "MDN CSS pixel",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/CSS_pixel"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-margin-collapse",
    "category": "css",
    "tags": [
      "布局",
      "外边距"
    ],
    "title": "垂直 margin 塌陷发生在哪些场景，怎么解决？",
    "answer": "普通块级流中的相邻兄弟垂直 margin 可能合并，通常取较大值而不是简单相加；父子块之间如果没有边框、内边距、行内内容或新的格式化上下文，首尾 margin 也可能穿透合并。\n\n可以用 padding 或 border 表达容器内间距，或者用 display: flow-root、flex、grid 等建立边界。浮动元素和 flex/grid 项目不按普通块格式化上下文发生同样的折叠。",
    "keyPoints": [
      "相邻块的垂直 margin 可能合并",
      "父子 margin 可能发生穿透",
      "padding/border 可以表达内部间距",
      "新的格式化上下文可隔离折叠"
    ],
    "difficulty": 2,
    "followUps": [
      "负 margin 参与合并时如何计算结果？"
    ],
    "references": [
      {
        "title": "MDN margin collapsing",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-custom-properties",
    "category": "css",
    "tags": [
      "CSS 变量",
      "主题"
    ],
    "title": "CSS 自定义属性有什么特点，如何与 Sass 变量区分？",
    "answer": "CSS 自定义属性以 -- 开头，在浏览器运行时参与层叠、继承和计算，可以通过 var() 读取并设置回退值，也能由 JavaScript 通过 style 或计算样式访问。它适合主题、组件上下文和运行时动态换肤。\n\nSass 变量主要在预处理编译阶段替换，不能直接响应运行时状态。自定义属性仍受作用域、继承和有效值解析影响，不能把它当作任意字符串宏。",
    "keyPoints": [
      "自定义属性在运行时参与层叠和继承",
      "var() 可以提供回退值",
      "Sass 变量主要在编译阶段替换",
      "主题变量要考虑作用域和继承"
    ],
    "difficulty": 2,
    "codeExample": {
      "language": "css",
      "code": ":root { --brand-color: #2563eb; }\n.button { color: var(--brand-color, #000); }"
    },
    "references": [
      {
        "title": "MDN CSS custom properties",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/--*"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-three-column-layout",
    "category": "css",
    "tags": [
      "布局",
      "历史方案"
    ],
    "title": "什么是圣杯布局和双飞翼布局，现代项目如何选择？",
    "answer": "圣杯和双飞翼都是早期用 float、负 margin 和定位技巧实现“两侧固定、中间自适应”的三栏布局方案。圣杯通过父容器 padding 预留两侧空间，双飞翼通常在中间列增加内部元素并用 margin 留出空间。\n\n它们适合解释历史布局思路；现代项目通常直接使用 flex 或 grid，代码更短、语义更清楚，也更容易处理顺序、间距和响应式折叠。",
    "keyPoints": [
      "两种方案都服务于三栏布局",
      "依赖浮动、负 margin 等历史技巧",
      "现代项目优先 flex/grid",
      "响应式布局还需设计窄屏列顺序"
    ],
    "difficulty": 1,
    "codeExample": {
      "language": "css",
      "code": ".container { display: flex; }\n.left, .right { flex: 0 0 200px; }\n.center { flex: 1; min-width: 0; }"
    },
    "references": [
      {
        "title": "MDN flex",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-pseudo",
    "category": "css",
    "tags": [
      "选择器",
      "伪类"
    ],
    "title": "伪元素和伪类有什么区别？",
    "answer": "伪类用来描述已有元素的状态或结构关系，例如 :hover、:focus-visible、:nth-child()，不会创建额外的文档节点。伪元素表示元素的某个部分或由 CSS 生成的抽象盒，例如 ::before、::after、::first-letter。\n\n伪元素通常需要 content 才能生成前后内容，但装饰性内容也要评估可访问性；交互状态应优先使用语义元素和真实 DOM。",
    "keyPoints": [
      "伪类描述元素状态或结构",
      "伪元素表示部分或生成的抽象盒",
      "::before/::after 通常需要 content",
      "装饰性生成内容不能替代语义内容"
    ],
    "difficulty": 1,
    "followUps": [
      ":focus-visible 与 :focus 在键盘可访问性中如何配合？"
    ],
    "references": [
      {
        "title": "MDN pseudo-classes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
      },
      {
        "title": "MDN pseudo-elements",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-import-link",
    "category": "css",
    "tags": [
      "资源加载",
      "模块化"
    ],
    "title": "@import 和 link 引入 CSS 有什么区别？",
    "answer": "link 是 HTML 中的资源关系元素，浏览器可以在解析文档时发现它；@import 是 CSS 内部的导入规则，需要在样式表解析到相应规则后继续获取依赖。多个嵌套 @import 可能形成串行依赖，影响可观测的加载链。\n\nlink 还能表达 preload、媒体条件和替代样式表等关系，工程中通常由 HTML 或构建工具管理样式依赖，不把大量 @import 当作性能优化手段。",
    "keyPoints": [
      "link 是 HTML 资源关系",
      "@import 是 CSS 内部依赖",
      "嵌套导入可能拉长加载链",
      "生产项目应明确管理样式依赖"
    ],
    "difficulty": 2,
    "followUps": [
      "构建工具为什么通常会把 CSS import 合并处理？"
    ],
    "references": [
      {
        "title": "MDN @import",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/@import"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-text-overflow",
    "category": "css",
    "tags": [
      "文本",
      "溢出"
    ],
    "title": "如何实现单行和多行文本溢出省略？",
    "answer": "单行省略通常需要 white-space: nowrap、overflow: hidden 和 text-overflow: ellipsis，并且元素必须有可计算的宽度约束。多行省略可使用 line-clamp 相关能力，但要根据目标浏览器和布局容器测试兼容性。\n\n省略只是视觉表现，完整文本仍应能通过 title、可访问名称或展开交互获得；不要只依赖截断后的内容传达关键信息。",
    "keyPoints": [
      "单行省略需要宽度、溢出和不换行约束",
      "多行省略要核对浏览器支持",
      "视觉截断不应丢失完整信息",
      "动态内容变化时要重新验证布局"
    ],
    "difficulty": 1,
    "codeExample": {
      "language": "css",
      "code": ".ellipsis {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}"
    },
    "references": [
      {
        "title": "MDN text-overflow",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-flex-grid-choice",
    "category": "css",
    "tags": [
      "Flex",
      "Grid",
      "布局"
    ],
    "title": "Grid 和 Flex 的使用场景应该怎么选？",
    "answer": "Flex 主要解决一维布局：在一行或一列上分配空间、对齐和排序，适合导航、工具栏和线性列表。Grid 同时描述行和列，适合卡片矩阵、页面骨架和需要二维轨道对齐的布局。\n\n选择时先看布局约束而不是追求某个技术标签；复杂页面也可以用 Grid 做整体结构、用 Flex 做组件内部排列，并配合响应式断点测试。",
    "keyPoints": [
      "Flex 擅长一维空间分配",
      "Grid 擅长二维轨道对齐",
      "两者可以嵌套组合",
      "选择依据是布局约束而不是流行程度"
    ],
    "difficulty": 1,
    "followUps": [
      "Grid 的 auto-fit 和 auto-fill 如何影响响应式卡片？"
    ],
    "references": [
      {
        "title": "MDN CSS grid layout",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout"
      },
      {
        "title": "MDN flexbox",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-z-index",
    "category": "css",
    "tags": [
      "层叠",
      "定位"
    ],
    "title": "z-index 什么时候生效，为什么数值大也可能被遮挡？",
    "answer": "z-index 参与层叠顺序，但不只对定位元素生效：定位元素、flex/grid 项目以及某些建立层叠上下文的元素都可能受它影响。最终结果首先受层叠上下文边界约束，子元素不能用更大的 z-index 跳出父层叠上下文与外部兄弟比较。\n\ntransform、opacity、isolation 等也可能建立新的层叠上下文。排查遮挡时应沿 DOM 向上检查上下文、定位和 overflow，而不是盲目增大数值。",
    "keyPoints": [
      "z-index 参与层叠顺序而非简单比较数字",
      "flex/grid 项目也可形成层叠顺序",
      "层叠上下文会限制子元素比较范围",
      "定位、transform、opacity 等可能创建上下文"
    ],
    "difficulty": 2,
    "followUps": [
      "如何用 isolation: isolate 管理组件层叠边界？"
    ],
    "references": [
      {
        "title": "MDN z-index",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/z-index"
      },
      {
        "title": "MDN stacking context",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-display-visibility",
    "category": "css",
    "tags": [
      "显示隐藏"
    ],
    "title": "display: none、visibility: hidden 与 opacity: 0 有什么区别？",
    "answer": "display: none 会让元素不生成布局盒，通常也不会进入无障碍树；visibility: hidden 保留布局空间但元素不可见且不能交互；opacity: 0 只把绘制透明度降为零，仍占空间，默认仍可命中指针并获得焦点。选择方案时要同时考虑布局、事件、焦点和辅助技术，而不能只看视觉效果。",
    "keyPoints": [
      "display: none 不参与布局",
      "visibility: hidden 保留空间但不可交互",
      "opacity: 0 默认仍可能接收事件"
    ],
    "difficulty": 1,
    "followUps": [
      "怎样让淡出动画结束后元素既不可见也不可交互？"
    ],
    "references": [
      {
        "title": "MDN visibility",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/visibility"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-units",
    "category": "css",
    "tags": [
      "单位",
      "响应式"
    ],
    "title": "px、em、rem、vw 和百分比应如何选择？",
    "answer": "px 是 CSS 像素，适合边框等稳定尺寸；em 通常相对当前元素字体大小，嵌套时会累积；rem 相对根元素字体大小，适合统一字号和间距体系。vw、vh 相对视口，百分比的参照则取决于具体属性和包含块。响应式布局应按语义选择单位，避免机械地把所有 px 换成相对单位。",
    "keyPoints": [
      "rem 相对根元素字体大小",
      "em 的参照与属性和当前字体有关",
      "百分比必须结合属性确认参照物"
    ],
    "difficulty": 1,
    "followUps": [
      "移动端 100vh 为什么可能被浏览器工具栏影响？"
    ],
    "references": [
      {
        "title": "MDN CSS values and units",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-inheritance",
    "category": "css",
    "tags": [
      "继承",
      "层叠"
    ],
    "title": "哪些 CSS 属性会继承，inherit、initial、unset 和 revert 有何区别？",
    "answer": "文本相关属性如 color、font-family 通常默认继承，而尺寸、边距、边框通常不继承。inherit 强制使用父元素计算值；initial 使用规范定义的初始值；unset 对可继承属性表现为 inherit，否则表现为 initial；revert 则回退到较早来源或层叠层的结果，适合撤销作者样式。",
    "keyPoints": [
      "是否继承由属性定义决定",
      "unset 会根据属性继承性选择行为",
      "revert 回退的是层叠来源而非固定初始值"
    ],
    "difficulty": 1,
    "followUps": [
      "all: unset 为什么可能让按钮失去浏览器默认样式？"
    ],
    "references": [
      {
        "title": "MDN CSS inheritance",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Inheritance"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-colors",
    "category": "css",
    "tags": [
      "颜色",
      "透明度"
    ],
    "title": "CSS 中颜色和透明度有哪些常用表达方式？",
    "answer": "颜色可使用关键字、十六进制、rgb()/hsl() 及更现代的颜色函数表达。rgba 或带 alpha 的现代语法只影响该颜色本身，而 opacity 会作用于整个元素及其后代的合成结果。需要半透明背景但保持文字清晰时，应给 background 设置 alpha，而不是降低容器 opacity。",
    "keyPoints": [
      "颜色函数可携带独立 alpha 通道",
      "opacity 会影响元素及全部后代",
      "透明背景优先使用带 alpha 的背景色"
    ],
    "difficulty": 1,
    "followUps": [
      "currentColor 在图标和边框样式中有什么价值？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-overflow",
    "category": "css",
    "tags": [
      "溢出",
      "滚动"
    ],
    "title": "overflow 的 visible、hidden、auto、scroll 和 clip 有什么差异？",
    "answer": "visible 默认允许内容绘制到盒外；hidden 裁剪内容并建立滚动容器，虽然没有滚动条仍可通过脚本滚动；auto 只在需要时提供滚动机制；scroll 通常始终保留滚动机制；clip 直接在裁剪边界截断且不建立滚动容器。设置非 visible/clip 的 overflow 还会创建 BFC。",
    "keyPoints": [
      "auto 根据内容决定是否滚动",
      "hidden 仍可能支持脚本滚动",
      "clip 不创建滚动容器"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么横向 overflow 设置可能改变纵向 overflow 的计算值？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-background",
    "category": "css",
    "tags": [
      "背景"
    ],
    "title": "background-size: cover 与 contain 有什么区别？",
    "answer": "cover 会保持图片宽高比并放大到完全覆盖背景定位区域，因此某个方向可能被裁切；contain 也保持比例，但保证整张图片都显示，区域可能留下空白。两者都不改变元素自身尺寸，实际裁切位置由 background-position 决定。内容图片若需要语义与可访问性，通常应使用 img 而非背景。",
    "keyPoints": [
      "cover 保证覆盖并可能裁切",
      "contain 保证完整并可能留白",
      "background-position 决定裁切重心"
    ],
    "difficulty": 1,
    "followUps": [
      "object-fit 与 background-size 的适用对象有何不同？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-flex-axis",
    "category": "css",
    "tags": [
      "Flex",
      "对齐"
    ],
    "title": "Flex 布局中的主轴、交叉轴和各类对齐属性如何理解？",
    "answer": "flex-direction 决定主轴方向，交叉轴与其垂直。justify-content 分配主轴剩余空间；align-items 设置单行内项目在交叉轴的默认对齐；align-self 可覆盖单个项目；align-content 只在多行且交叉轴存在剩余空间时分配各行位置。不能把水平、垂直与固定属性机械绑定。",
    "keyPoints": [
      "主轴由 flex-direction 决定",
      "justify-content 作用于主轴",
      "align-content 只对多行容器有意义"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么单行 Flex 容器设置 align-content 没有效果？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-flex-shrink",
    "category": "css",
    "tags": [
      "Flex",
      "尺寸"
    ],
    "title": "Flex 项目缩小时 flex-shrink 如何参与计算？",
    "answer": "当项目基础尺寸之和超过容器时会产生负自由空间。浏览器不是简单按 flex-shrink 数值等分，而是用 shrink 因子乘以项目的 flex 基础尺寸得到缩减权重，因此较大的项目通常缩得更多。最终结果还会受到 min/max 尺寸和内容最小尺寸冻结过程影响。",
    "keyPoints": [
      "shrink 只在负自由空间中生效",
      "缩减权重与基础尺寸相乘",
      "min-width 等约束会改变最终分配"
    ],
    "difficulty": 2,
    "followUps": [
      "两个宽度不同但 flex-shrink 相同的项目会缩小相同像素吗？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-grid-basics",
    "category": "css",
    "tags": [
      "Grid",
      "布局"
    ],
    "title": "CSS Grid 的显式网格、隐式网格和轨道分别是什么？",
    "answer": "通过 grid-template-columns/rows 声明的是显式网格，列或行之间的空间由 gap 控制。当项目被放到显式范围外，或自动放置需要更多轨道时，会生成隐式网格，其尺寸可由 grid-auto-columns/rows 设置。轨道是两条相邻网格线之间的空间，项目可跨越多个轨道。",
    "keyPoints": [
      "模板属性定义显式网格",
      "自动放置可能生成隐式轨道",
      "项目位置由网格线界定"
    ],
    "difficulty": 2,
    "followUps": [
      "grid-auto-flow: dense 可能对视觉顺序造成什么影响？"
    ],
    "references": [
      {
        "title": "MDN Basic concepts of grid layout",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-grid-fr-minmax",
    "category": "css",
    "tags": [
      "Grid",
      "响应式"
    ],
    "title": "Grid 中 fr、minmax()、auto-fit 和 auto-fill 如何配合？",
    "answer": "fr 表示分配完固定尺寸和间距后的弹性份额。minmax() 为轨道限定最小与最大值，例如 minmax(15rem, 1fr)。repeat(auto-fit, ...) 会把空轨道折叠，让已有项目扩张；auto-fill 则保留可容纳的空轨道。常用组合能在无需大量媒体查询时构建自适应卡片网格。",
    "keyPoints": [
      "fr 分配网格中的剩余空间",
      "minmax 同时约束轨道上下限",
      "auto-fit 会折叠空轨道"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 minmax(0, 1fr) 有时能避免内容撑破网格？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-containing-block",
    "category": "css",
    "tags": [
      "定位",
      "包含块"
    ],
    "title": "CSS 中包含块如何确定，为什么它会影响百分比和定位？",
    "answer": "包含块是计算某些尺寸与偏移的参照矩形。普通流元素通常依据最近块容器的内容区，绝对定位元素依据最近建立绝对定位包含块的祖先，fixed 通常依据视口；transform、contain 等属性也可能建立包含块。不同属性的百分比参照并不统一，排查定位问题应先确认包含块。",
    "keyPoints": [
      "包含块决定百分比与偏移的参照",
      "不同定位方案寻找包含块的规则不同",
      "transform 等属性可能改变定位参照"
    ],
    "difficulty": 2,
    "followUps": [
      "绝对定位元素的 percentage padding 通常参照哪个尺寸？"
    ],
    "references": [
      {
        "title": "MDN Layout and the containing block",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_display/Containing_block"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-stacking-context",
    "category": "css",
    "tags": [
      "层叠上下文",
      "z-index"
    ],
    "title": "什么是层叠上下文，为什么很大的 z-index 仍可能被遮挡？",
    "answer": "层叠上下文把一组后代作为原子整体参与父级层叠。定位且 z-index 非 auto、opacity 小于 1、transform 非 none、isolation: isolate 等都可能创建新上下文。子元素的 z-index 只能在所属上下文内部比较，无法越过父上下文，所以父级层叠顺序较低时，子项写再大的数也可能被外部元素覆盖。",
    "keyPoints": [
      "层叠上下文内部独立比较层级",
      "多种绘制和合成属性会创建上下文",
      "子元素不能凭 z-index 跨越父上下文"
    ],
    "difficulty": 2,
    "followUps": [
      "如何用开发者工具定位意外创建的层叠上下文？"
    ],
    "references": [
      {
        "title": "MDN Stacking context",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Stacking_context"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-responsive-design",
    "category": "css",
    "tags": [
      "响应式",
      "媒体查询"
    ],
    "title": "响应式布局应如何设计断点，而不是只适配固定设备？",
    "answer": "断点应由内容在当前宽度下何时变得拥挤或松散来决定，而不是照搬某几款手机型号。可先采用移动优先的基础样式，再用 min-width 媒体查询逐步增强。布局使用弹性尺寸、Grid/Flex 和合理的最大宽度，图片提供响应式资源，同时在真实内容与不同缩放级别下验证。",
    "keyPoints": [
      "断点由内容需求驱动",
      "移动优先便于渐进增强",
      "弹性布局与最大宽度共同控制可读性"
    ],
    "difficulty": 2,
    "followUps": [
      "媒体查询与容器查询分别适合解决什么问题？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-media-queries",
    "category": "css",
    "tags": [
      "媒体查询",
      "可访问性"
    ],
    "title": "除了视口宽度，媒体查询还能响应哪些用户和设备特征？",
    "answer": "媒体查询还能检测方向、分辨率、悬停与指针能力、颜色方案、对比度偏好和减少动画偏好等。例如 prefers-reduced-motion 可为希望减少动态效果的用户关闭非必要动画；hover 与 pointer 能避免只为鼠标设计交互。查询结果只代表环境能力或偏好，不应当作精确设备识别。",
    "keyPoints": [
      "媒体查询可响应用户偏好",
      "hover 与 pointer 描述输入能力",
      "不要用媒体特征猜测具体设备型号"
    ],
    "difficulty": 2,
    "followUps": [
      "如何为 prefers-reduced-motion 用户保留必要的状态反馈？"
    ],
    "references": [
      {
        "title": "MDN Using media queries",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-container-queries",
    "category": "css",
    "tags": [
      "容器查询",
      "组件化"
    ],
    "title": "容器查询解决了什么问题，使用时要做哪些声明？",
    "answer": "媒体查询依据视口，组件被复用到不同侧栏或主栏时往往无法只凭视口判断自身空间。容器查询让后代根据某个祖先容器的尺寸或样式改变布局。尺寸查询前需在容器上声明 container-type，必要时设置 container-name，再通过 @container 编写规则；它更适合独立可复用组件。",
    "keyPoints": [
      "容器查询基于组件可用空间",
      "尺寸查询需要建立查询容器",
      "可与媒体查询分工而非完全替代"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么不能让容器根据自身查询结果直接任意改变自身尺寸？"
    ],
    "references": [
      {
        "title": "MDN CSS container queries",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-transitions",
    "category": "css",
    "tags": [
      "动画",
      "过渡"
    ],
    "title": "CSS transition 的触发条件和常见陷阱是什么？",
    "answer": "transition 会在属性的计算值发生变化且该属性可插值时，生成从旧值到新值的过渡。display: none 等离散值传统上无法平滑插值，auto 尺寸也需谨慎处理。应明确 transition-property，避免 transition: all 意外动画布局属性；同时尊重减少动画偏好，并控制持续时间。",
    "keyPoints": [
      "只有可动画且值发生变化的属性才会过渡",
      "避免无边界地使用 transition: all",
      "动画应适配 prefers-reduced-motion"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么元素首次插入 DOM 时 transition 往往不会自动执行？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-animation",
    "category": "css",
    "tags": [
      "动画",
      "关键帧"
    ],
    "title": "CSS Animation 与 Transition 应如何选择？",
    "answer": "Transition 依赖状态前后两个值的变化，适合 hover、展开等简单交互；Animation 通过 @keyframes 描述多个阶段，可自动播放、循环、暂停和控制方向。两者都应优先动画 transform 与 opacity 以减少布局工作，但是否真正进入合成还由浏览器决定，不能盲目添加 will-change。",
    "keyPoints": [
      "Transition 适合状态间过渡",
      "Animation 能描述多阶段时间线",
      "优先选择低布局成本的动画属性"
    ],
    "difficulty": 2,
    "followUps": [
      "animation-fill-mode: forwards 为什么没有真正修改元素的基础样式？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-object-fit",
    "category": "css",
    "tags": [
      "图片",
      "替换元素"
    ],
    "title": "object-fit 和 object-position 如何控制图片或视频的展示？",
    "answer": "object-fit 控制替换元素的内容如何适配已确定的内容盒：contain 保证完整可见但可能留白，cover 填满盒子但可能裁切，fill 可拉伸变形，none 保持固有尺寸。object-position 决定内容在盒内的对齐或裁切重心。前提是元素盒的宽高已被布局明确约束。",
    "keyPoints": [
      "object-fit 作用于替换元素内容",
      "cover 可能裁切而 contain 可能留白",
      "object-position 控制内容对齐重心"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么只写 object-fit: cover 而不设置尺寸可能看不出效果？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-aspect-ratio",
    "category": "css",
    "tags": [
      "尺寸",
      "响应式"
    ],
    "title": "aspect-ratio 如何参与元素尺寸计算？",
    "answer": "aspect-ratio 为盒子提供首选宽高比，当至少一个轴的尺寸为自动值时，可由另一个轴推导尺寸。它不是无条件覆盖 width、height 或 min/max 约束；替换元素还可能有固有比例。为图片或媒体提前声明比例能在资源加载前预留空间，减少布局偏移。",
    "keyPoints": [
      "宽高比主要在自动尺寸计算中生效",
      "显式尺寸与 min/max 约束优先参与计算",
      "预留媒体比例可以减少布局偏移"
    ],
    "difficulty": 2,
    "followUps": [
      "img 同时有 width、height 属性和 CSS aspect-ratio 时如何确定尺寸？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-font-loading",
    "category": "css",
    "tags": [
      "字体",
      "性能"
    ],
    "title": "Web 字体加载会带来哪些体验问题，font-display 如何取舍？",
    "answer": "自定义字体需要网络加载，期间可能出现不可见文本、后备字体切换和布局偏移。@font-face 的 font-display 控制阻塞期与交换策略：swap 倾向立即显示后备字体后替换，optional 允许网络较差时继续使用后备字体。还应裁剪字符集、预加载关键字体并匹配后备字体度量。",
    "keyPoints": [
      "字体加载可能导致文本闪烁与布局偏移",
      "font-display 决定后备字体和替换策略",
      "字体子集与度量匹配能降低成本"
    ],
    "difficulty": 2,
    "followUps": [
      "预加载了字体为什么仍可能出现重复下载？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-logical-properties",
    "category": "css",
    "tags": [
      "国际化",
      "逻辑属性"
    ],
    "title": "CSS 逻辑属性相比 left、right 等物理属性有什么优势？",
    "answer": "margin-inline、padding-block、inset-inline-start 等逻辑属性依据书写模式和文字方向映射到实际边，不把布局绑定到固定的上下左右。它们能让同一组件更自然地适配从右到左语言或竖排文本。inline 对应文字行进方向，block 对应块堆叠方向，不能简单等同于水平和垂直。",
    "keyPoints": [
      "逻辑属性适配书写模式与方向",
      "inline 和 block 是抽象轴",
      "有利于 RTL 与竖排场景复用"
    ],
    "difficulty": 2,
    "followUps": [
      "在 writing-mode: vertical-rl 中 block-start 位于哪一侧？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-focus-styles",
    "category": "css",
    "tags": [
      "可访问性",
      "交互"
    ],
    "title": "为什么不应直接移除 outline，:focus-visible 有什么作用？",
    "answer": "键盘用户需要清晰的焦点指示来判断当前操作位置，直接 outline: none 会破坏可访问性。:focus-visible 让浏览器根据输入方式和控件类型决定何时显示焦点样式，通常可避免鼠标点击时不必要的焦点圈，同时保留键盘导航反馈。自定义样式还要保证对比度与可见范围。",
    "keyPoints": [
      "焦点指示是键盘导航的必要反馈",
      ":focus-visible 根据交互方式匹配",
      "自定义焦点样式需保证清晰对比"
    ],
    "difficulty": 2,
    "followUps": [
      "模态框打开后应如何管理焦点与焦点样式？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-print-styles",
    "category": "css",
    "tags": [
      "媒体查询",
      "打印"
    ],
    "title": "为页面编写打印样式时应重点处理什么？",
    "answer": "通过 @media print 可隐藏导航和交互控件、调整颜色与字号、移除不必要背景，并控制分页。break-before、break-after、break-inside 可减少标题与内容断裂，但具体分页仍受浏览器实现限制。链接地址、表格表头和关键图表在纸面上应保持可理解，不能只依赖屏幕交互。",
    "keyPoints": [
      "打印样式应移除无意义交互区域",
      "分页属性用于降低内容断裂",
      "纸面内容必须脱离悬停和点击仍可理解"
    ],
    "difficulty": 2,
    "followUps": [
      "如何让长表格打印到多页时重复表头？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-cascade-layers",
    "category": "css",
    "tags": [
      "层叠",
      "架构"
    ],
    "title": "@layer 如何帮助管理大型项目的 CSS 优先级？",
    "answer": "层叠层允许作者明确声明 reset、基础、组件、工具等样式的优先顺序，层顺序在选择器权重之前参与比较。普通的未分层作者样式优先于已分层普通样式，而 important 的层顺序会反转。它能减少靠提高选择器权重和 !important 覆盖样式的竞赛，但仍需合理组织组件边界。",
    "keyPoints": [
      "层顺序先于同来源内的选择器权重",
      "未分层普通样式高于已分层普通样式",
      "important 声明的层优先顺序会反转"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么把第三方样式放入较低层通常比增加覆盖选择器更稳定？"
    ],
    "references": [
      {
        "title": "MDN CSS cascade layers",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade_layers"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-isolation",
    "category": "css",
    "tags": [
      "层叠上下文",
      "组件化"
    ],
    "title": "isolation: isolate 在组件层级管理中有什么用途？",
    "answer": "isolation: isolate 会明确创建新的层叠上下文，使组件内部负值或很大的 z-index 不容易与页面外部层级互相干扰。它常用于包含装饰伪元素、混合模式或复杂浮层的组件根节点。该属性只隔离堆叠与合成关系，不会自动裁剪内容，也不能替代完整的浮层层级规范。",
    "keyPoints": [
      "isolate 明确建立层叠上下文",
      "可限制组件内部 z-index 的影响范围",
      "不会自动产生 overflow 裁剪"
    ],
    "difficulty": 2,
    "followUps": [
      "isolation 与 contain: paint 在裁剪和布局方面有何不同？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-subgrid",
    "category": "css",
    "tags": [
      "Grid",
      "组件布局"
    ],
    "title": "subgrid 解决了嵌套网格的什么对齐问题？",
    "answer": "普通嵌套 Grid 会建立自己的独立轨道，多个卡片内部标题、正文和按钮难以跨卡片对齐。子网格允许嵌套网格在某个轴复用父网格轨道尺寸和网格线，使后代沿共同轨道排列。它仍需父项跨越相应轨道，并应核对项目要求的浏览器支持范围。",
    "keyPoints": [
      "subgrid 复用父网格轨道",
      "适合跨重复组件对齐内部区域",
      "可分别在行轴或列轴启用"
    ],
    "difficulty": 2,
    "followUps": [
      "子网格的 gap 使用父级值还是自身值？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-multi-column",
    "category": "css",
    "tags": [
      "多列布局",
      "排版"
    ],
    "title": "多列布局与 Grid 布局的内容流动方式有什么不同？",
    "answer": "多列布局把连续内容像报纸一样从一列流向下一列，列数或列宽主要控制分栏，适合长文本排版。Grid 则把项目放在二维网格位置，更适合界面结构。多列中的元素可能被跨列断开，可用 break-inside 等属性降低断裂，但分页与分列结果仍由可用空间决定。",
    "keyPoints": [
      "多列布局强调连续内容分栏",
      "Grid 强调项目的二维定位",
      "break-inside 可控制但不保证所有分列行为"
    ],
    "difficulty": 2,
    "followUps": [
      "column-width 和 column-count 同时设置时浏览器如何取舍？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-replaced-elements",
    "category": "css",
    "tags": [
      "替换元素",
      "盒模型"
    ],
    "title": "什么是替换元素，它们的尺寸计算有何特殊之处？",
    "answer": "img、video、iframe 等元素的内容与尺寸可能来自外部资源，CSS 只控制其替换盒，因此称为替换元素。它们常具有固有宽度、高度或宽高比，auto 尺寸会结合这些固有数据、可用空间和 CSS 约束计算。伪元素、line-height 等能力在不同替换元素上的表现也与普通容器不同。",
    "keyPoints": [
      "替换内容不由普通 CSS 格式化模型直接生成",
      "替换元素可能提供固有尺寸和比例",
      "auto 尺寸会结合固有信息与 CSS 约束"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么给 img 设置 display: block 常能消除基线下方空隙？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-form-styling",
    "category": "css",
    "tags": [
      "表单",
      "兼容性"
    ],
    "title": "原生表单控件样式为什么难统一，appearance 应如何使用？",
    "answer": "表单控件由浏览器和操作系统共同提供默认外观，不同平台的内部结构、字体和交互状态可能不同。appearance: none 可移除部分原生外观以便自定义，但开发者必须补齐焦点、禁用、选中和高对比度等状态。若完全重做复杂控件，还需承担键盘和辅助技术行为，不只是视觉样式。",
    "keyPoints": [
      "原生控件外观具有平台差异",
      "appearance: none 会移除部分原生表现",
      "自定义后必须保留完整交互状态"
    ],
    "difficulty": 2,
    "followUps": [
      "如何在自定义 checkbox 时保留原生输入的可访问性？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-cascade-algorithm",
    "category": "css",
    "tags": [
      "层叠",
      "规范"
    ],
    "title": "请完整说明 CSS 层叠算法的主要比较顺序。",
    "answer": "浏览器先筛选匹配声明，再按来源与重要性排序，其中过渡、用户或作者 important、动画和普通声明处于不同层级；随后比较层叠层顺序，再考虑封装上下文、选择器权重、作用域邻近程度与源码顺序。只背 ID 大于 class 容易误判，因为权重只是整个层叠算法中的较后环节。",
    "keyPoints": [
      "来源和重要性先于选择器权重",
      "层叠层能改变同一来源内的优先顺序",
      "最终同级冲突才由源码顺序决定"
    ],
    "difficulty": 3,
    "followUps": [
      "CSS 动画值与 !important 声明冲突时谁优先？"
    ],
    "references": [
      {
        "title": "MDN Cascade",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Cascade"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-formatting-contexts",
    "category": "css",
    "tags": [
      "格式化上下文",
      "布局"
    ],
    "title": "BFC、IFC、FFC 和 GFC 分别描述什么布局环境？",
    "answer": "格式化上下文规定其内部盒如何排布。BFC 处理块盒纵向流动与浮动关系；IFC 组织行内盒、行盒、基线和文本换行；Flex 与 Grid 容器分别建立弹性和网格格式化上下文，使用各自的轴、轨道与对齐规则。它们不是单纯的清除浮动技巧，而是理解布局算法的边界。",
    "keyPoints": [
      "不同格式化上下文使用不同排版算法",
      "IFC 关注行盒与基线",
      "Flex 和 Grid 建立独立的布局规则"
    ],
    "difficulty": 3,
    "followUps": [
      "匿名块盒和匿名行内盒在格式化上下文中如何产生？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-intrinsic-sizing",
    "category": "css",
    "tags": [
      "尺寸算法",
      "布局"
    ],
    "title": "min-content、max-content 和 fit-content 表示什么内在尺寸？",
    "answer": "min-content 表示内容在可换行机会处尽量换行后的最小内在尺寸，长不可断单词仍可能很宽；max-content 表示不主动换行时所需的理想尺寸；fit-content 会在可用空间、最小和最大内在尺寸之间夹取结果。它们常用于 Grid 轨道、弹性布局和无需硬编码宽度的内容型组件。",
    "keyPoints": [
      "min-content 不是简单的零宽度",
      "max-content 倾向保持内容不换行",
      "fit-content 在内在上下限与可用空间间取值"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 1fr 轨道仍可能被长单词撑宽？"
    ],
    "references": [
      {
        "title": "MDN Intrinsic size",
        "url": "https://developer.mozilla.org/en-US/docs/Glossary/Intrinsic_Size"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-percentage-resolution",
    "category": "css",
    "tags": [
      "百分比",
      "尺寸算法"
    ],
    "title": "CSS 百分比为什么会在不同属性上参照不同尺寸？",
    "answer": "百分比不是统一相对父元素宽高，而由每个属性的规范定义决定。width 通常相对包含块宽度，height 要求包含块高度可确定时才容易解析；传统上 padding 和 margin 的百分比都相对包含块行内尺寸。绝对定位偏移、transform translate 和 border-radius 又各有参照，排查时应逐属性确认。",
    "keyPoints": [
      "百分比参照由具体属性定义",
      "百分比高度可能因包含块高度不确定而变成 auto",
      "translate 百分比通常参照元素自身参考盒"
    ],
    "difficulty": 3,
    "followUps": [
      "父元素只有 min-height 时，子元素 height: 100% 为什么可能无效？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-containment",
    "category": "css",
    "tags": [
      "contain",
      "性能"
    ],
    "title": "CSS containment 能隔离哪些工作，使用时有什么副作用？",
    "answer": "contain 可声明元素的尺寸、布局、样式或绘制与外部相对独立，让浏览器缩小失效计算范围。contain: paint 会裁剪越界绘制并创建相关上下文，size containment 会让外部尺寸计算不再依赖后代，若没有显式尺寸可能导致盒子塌为零。应按组件真实独立性选择维度，而不是全局滥用。",
    "keyPoints": [
      "contain 向浏览器声明子树独立边界",
      "paint containment 会裁剪越界内容",
      "size containment 可能改变元素固有尺寸贡献"
    ],
    "difficulty": 3,
    "followUps": [
      "content-visibility 与 contain-intrinsic-size 如何配合减少跳动？"
    ],
    "references": [
      {
        "title": "MDN contain",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/contain"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-content-visibility",
    "category": "css",
    "tags": [
      "渲染性能",
      "可见性"
    ],
    "title": "content-visibility: auto 如何优化长页面渲染？",
    "answer": "content-visibility: auto 允许浏览器跳过视口外子树的布局和绘制，在长列表或长文章中减少初始渲染成本，同时元素仍保留在 DOM 和多数语义结构中。跳过区域若没有稳定占位，滚动时可能发生尺寸跳变，通常配合 contain-intrinsic-size 提供预测尺寸，并需实测搜索与无障碍行为。",
    "keyPoints": [
      "可跳过离屏子树的布局和绘制",
      "并非删除 DOM 或等同 display: none",
      "需要固有占位尺寸降低滚动跳变"
    ],
    "difficulty": 3,
    "followUps": [
      "content-visibility 为什么不能直接替代虚拟列表？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-selector-performance",
    "category": "css",
    "tags": [
      "选择器",
      "性能"
    ],
    "title": "复杂 CSS 选择器会怎样匹配，是否值得为性能过度简化？",
    "answer": "浏览器通常从选择器最右侧候选元素开始向祖先验证关系，因此宽泛的末端选择器可能增加候选数量。但现代浏览器对选择器匹配已有大量优化，普通业务页面中网络、布局和绘制往往更重要。应优先避免深层耦合和高权重带来的维护问题，只有性能分析确认瓶颈时再针对性优化。",
    "keyPoints": [
      "选择器通常从右向左验证",
      "候选集合与 DOM 规模会影响匹配成本",
      "选择器简洁首先服务于可维护性"
    ],
    "difficulty": 3,
    "followUps": [
      "频繁切换根节点 class 时为什么可能引发大范围样式重算？"
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-has-selector",
    "category": "css",
    "tags": [
      "选择器",
      "关系伪类"
    ],
    "title": ":has() 关系伪类能解决哪些选择问题，使用时要注意什么？",
    "answer": ":has() 允许根据相对选择器是否匹配来选择锚元素，例如让表单组在内部输入无效时改变样式，或选择包含特定子元素的卡片。它也能表达后续兄弟关系，因此常被称为父选择能力。应保持查询范围清晰，关注目标浏览器支持，并避免用纯 CSS 状态替代必要的语义和脚本逻辑。",
    "keyPoints": [
      ":has() 根据后代或相对关系匹配锚元素",
      "可表达传统 CSS 难以实现的向上选择",
      "应控制作用范围并验证兼容性"
    ],
    "difficulty": 3,
    "followUps": [
      ":has(+ .item.selected) 可以匹配哪一个元素？"
    ],
    "references": [
      {
        "title": "MDN :has()",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "css-anchor-positioning",
    "category": "css",
    "tags": [
      "定位",
      "浮层"
    ],
    "title": "锚点定位适合解决什么问题，当前使用时应如何降级？",
    "answer": "CSS 锚点定位旨在让浮层以另一个元素为锚计算位置，并可定义可用空间不足时的回退位置，适合提示框、菜单等场景。它减少手工测量和滚动监听，但属于需要谨慎核对兼容性的较新能力。生产中应通过特性查询检测，并保留普通定位或成熟浮层库的降级路径。",
    "keyPoints": [
      "锚点定位建立触发元素与浮层的位置关系",
      "可声明溢出时的候选回退位置",
      "上线前必须核对支持并设计渐进增强"
    ],
    "difficulty": 3,
    "followUps": [
      "锚点定位能否自动解决浮层的焦点管理和可访问性？"
    ],
    "references": [
      {
        "title": "MDN CSS anchor positioning",
        "url": "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-var-let-const",
    "category": "javascript",
    "tags": [
      "变量",
      "作用域"
    ],
    "title": "var、let、const 的区别？",
    "answer": "var：函数作用域，存在变量提升，可以重复声明，没有块级作用域。\nlet /const：块级作用域 {}，存在暂时性死区，不能重复声明。\nlet 可以修改值；const 声明后不能修改引用（对象属性可以改）。\n暂时性死区：块内用 let/const，在声明之前访问会报错，不会像 var 返回 undefined。 开发尽量不用 var。",
    "keyPoints": [
      "var：函数作用域，存在变量提升，可以重复声明，没有块级作用域",
      "let /const：块级作用域 {}，存在暂时性死区，不能重复声明",
      "let 可以修改值；const 声明后不能修改引用（对象属性可以改）",
      "暂时性死区：块内用 let/const，在声明之前访问会报错，不会像 var 返回 undefined。 开发尽量不用 var"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-hoisting",
    "category": "javascript",
    "tags": [
      "作用域",
      "执行上下文"
    ],
    "title": "什么是变量提升？函数提升？",
    "answer": "JS 执行时，会先扫描代码，把 var 变量声明、函数声明提升到作用域顶部。\nvar 只提升声明，赋值留在原地；\n函数声明整体提升；函数表达式不会提升。 let/const 有提升，但存在暂时性死区，不能提前访问。\n运行\n```javascript\nconsole.log(a); // undefinedvar a = 10;\n```",
    "keyPoints": [
      "JS 执行时，会先扫描代码，把 var 变量声明、函数声明提升到作用域顶部",
      "var 只提升声明，赋值留在原地",
      "函数声明整体提升；函数表达式不会提升。 let/const 有提升，但存在暂时性死区，不能提前访问"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-closure",
    "category": "javascript",
    "tags": [
      "闭包",
      "作用域"
    ],
    "title": "闭包是什么？优缺点，使用场景？",
    "answer": "闭包：一个内部函数，访问外部函数作用域的变量，即使外部函数执行完毕，变量依然存活。 形成条件：函数嵌套 + 内部引用外部变量 + 内部函数被外部引用。\n用途：\n保存私有变量；\n实现柯里化；\n定时器回调保存变量。\n缺点：变量不会被垃圾回收，容易内存泄漏，不用的时候需要手动置为 null 释放。",
    "keyPoints": [
      "闭包：一个内部函数，访问外部函数作用域的变量，即使外部函数执行完毕，变量依然存活。 形成条件：函数嵌套 + 内部引用外部变量 + 内部函数被外部引用",
      "定时器回调保存变量",
      "缺点：变量不会被垃圾回收，容易内存泄漏，不用的时候需要手动置为 null 释放"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-prototype-chain",
    "category": "javascript",
    "tags": [
      "原型",
      "继承"
    ],
    "title": "原型、原型链是什么？",
    "answer": "每个对象都有__proto__，指向它的构造函数的prototype（原型对象）。 构造函数的 prototype 存放实例共享的方法。 原型链：对象通过__proto__一层一层向上查找属性，直到Object.prototype.__proto__ === null，查找终止。 属性查找规则：先找自身，找不到沿着原型链向上找。\ninstanceof原理：沿着原型链看构造函数 prototype 是否出现在实例原型链上。",
    "keyPoints": [
      "每个对象都有__proto__，指向它的构造函数的prototype（原型对象）。 构造函数的 prototype 存放实例共享的方法。 原型链：对象通过__proto__一层一层向上查找属性，直到Object.prototype.__proto__ === null，查找终止。 属性查找规则：先找自身，找不到沿着原型链向上找",
      "instanceof原理：沿着原型链看构造函数 prototype 是否出现在实例原型链上",
      "了解 原型 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-this-binding",
    "category": "javascript",
    "tags": [
      "this",
      "函数"
    ],
    "title": "this 指向问题？",
    "answer": "普通函数调用：fn() → this 指向 window（严格模式 undefined）\n对象方法调用：obj.fn() → this 指向 obj\nnew 调用：构造函数中 this 指向新创建的实例对象\ncall /apply/bind：手动指定 this\n箭头函数：没有自己的 this，继承外层作用域的 this，不能被 call/apply/bind 改变。\n面试常坑：回调函数 this 丢失；箭头函数不能做构造函数。",
    "keyPoints": [
      "普通函数调用：fn() → this 指向 window（严格模式 undefined）",
      "对象方法调用：obj.fn() → this 指向 obj",
      "new 调用：构造函数中 this 指向新创建的实例对象",
      "call /apply/bind：手动指定 this",
      "箭头函数：没有自己的 this，继承外层作用域的 this，不能被 call/apply/bind 改变"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-call-apply-bind",
    "category": "javascript",
    "tags": [
      "this",
      "函数"
    ],
    "title": "call、apply、bind 区别？",
    "answer": "call(thisArg, arg1, arg2) 参数逐个传入，立即执行函数\napply(thisArg, [arg1,arg2]) 参数数组传入，立即执行函数\nbind(thisArg) 返回新函数，不会立刻执行，需要手动调用。",
    "keyPoints": [
      "call(thisArg, arg1, arg2) 参数逐个传入，立即执行函数",
      "apply(thisArg, [arg1,arg2]) 参数数组传入，立即执行函数",
      "bind(thisArg) 返回新函数，不会立刻执行，需要手动调用"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-execution-context-stack",
    "category": "javascript",
    "tags": [
      "执行上下文",
      "调用栈"
    ],
    "title": "什么是执行上下文、执行栈？",
    "answer": "执行上下文：JS 代码运行环境，分为全局、函数、eval。 包含：变量环境、词法环境、this 绑定。 执行栈（调用栈）：后进先出，函数调用就压入栈，函数执行完弹出。栈溢出就是调用栈过深。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "执行上下文：JS 代码运行环境，分为全局、函数、eval。 包含：变量环境、词法环境、this 绑定。 执行栈（调用栈）：后进先出，函数调用就压入栈，函数执行完弹出。栈溢出就是调用栈过深",
      "辨别 调用栈 的适用场景",
      "了解 执行上下文 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-event-loop",
    "category": "javascript",
    "tags": [
      "异步",
      "事件循环"
    ],
    "title": "浏览器中的 JavaScript 事件循环如何调度任务和微任务？",
    "answer": "当前任务中的同步代码先执行；任务结束后，事件循环会执行微任务检查点，把当时可运行的微任务持续处理到队列清空。Promise 回调、queueMicrotask 和 await 后的续体通常属于微任务，定时器回调、消息事件等由不同任务源调度。\n\n浏览器会在合适的时机更新渲染，而不是机械地在每个任务后必然绘制一次。大量连续微任务可能让渲染和后续任务迟迟得不到机会。",
    "keyPoints": [
      "同步代码属于当前任务并先执行",
      "任务结束后会运行微任务检查点",
      "await 续体通常通过微任务恢复",
      "渲染发生在浏览器选择的更新机会",
      "持续产生微任务可能造成饥饿"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么递归 queueMicrotask 会让页面无法及时响应？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-promise-basics",
    "category": "javascript",
    "tags": [
      "Promise",
      "异步"
    ],
    "title": "Promise 了解？三种状态，常用方法？",
    "answer": "Promise 三种状态：pending（等待）、fulfilled（成功）、rejected（失败）。 状态一旦改变，就不可逆。\nAPI：\n.then() 处理成功，返回新 Promise\n.catch() 捕获异常\n.finally() 无论成功失败都会执行\n静态方法： Promise.all() 全部成功才成功，一个失败直接失败； Promise.race() 赛跑，第一个完成就结束； Promise.allSettled() 不管成功失败全部返回结果； Promise.any() 只要一个成功就成功，全部失败才失败。\n注意：Promise 本身是同步执行，.then 回调是微任务。",
    "keyPoints": [
      "Promise 三种状态：pending（等待）、fulfilled（成功）、rejected（失败）。 状态一旦改变，就不可逆",
      ".then() 处理成功，返回新 Promise",
      ".catch() 捕获异常",
      ".finally() 无论成功失败都会执行",
      "静态方法： Promise.all() 全部成功才成功，一个失败直接失败； Promise.race() 赛跑，第一个完成就结束； Promise.allSettled() 不管成功失败全部返回结果； Promise.any() 只要一个成功就成功，全部失败才失败"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-async-await",
    "category": "javascript",
    "tags": [
      "async/await",
      "异步"
    ],
    "title": "async/await 与 Promise 是什么关系，错误如何传播？",
    "answer": "async 函数调用后总会返回 Promise；return 普通值会兑现该 Promise，抛出异常会拒绝它。await 会先对操作数进行 Promise 化，并暂停当前 async 函数；Promise 落定后，函数续体通常通过微任务恢复。\n\nawait 不会阻塞线程，也不会自动并行执行多个任务。错误可由 try/catch 捕获，未捕获错误会使 async 函数返回的 Promise 拒绝。多个独立任务应先启动，再按需要用 Promise.all 等方式等待。",
    "keyPoints": [
      "async 函数始终返回 Promise",
      "await 暂停函数而不阻塞线程",
      "续体通常通过微任务恢复",
      "未捕获异常会转为 Promise 拒绝",
      "独立任务要显式设计并发"
    ],
    "difficulty": 2,
    "followUps": [
      "连续 await 为什么可能把可并行任务变成串行？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-deep-shallow-copy",
    "category": "javascript",
    "tags": [
      "对象",
      "拷贝"
    ],
    "title": "深拷贝和浅拷贝有什么区别，应如何选择实现？",
    "answer": "浅拷贝只创建新的外层容器，嵌套对象仍与原对象共享引用；对象展开、Object.assign、数组 slice 等都属于常见浅拷贝。深拷贝希望递归复制可克隆的数据图，但“完全切断所有引用”并不适用于函数、DOM、WeakMap 等所有值。\n\nJSON 往返会丢失 undefined、函数、Symbol、原型和多种内置对象，也不能处理循环引用。现代浏览器可优先评估 structuredClone；领域对象则应明确需要保留的类型、原型和共享关系。",
    "keyPoints": [
      "浅拷贝仍共享嵌套引用",
      "深拷贝必须先定义可克隆的数据范围",
      "JSON 往返会丢失多种类型和语义",
      "structuredClone 支持循环引用和更多内置类型",
      "不可变更新不等于盲目深拷贝"
    ],
    "difficulty": 2,
    "followUps": [
      "structuredClone 不能克隆哪些常见值？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-array-methods",
    "category": "javascript",
    "tags": [
      "数组"
    ],
    "title": "数组常用方法，哪些改变原数组，哪些不改变？",
    "answer": "改变原数组：push pop shift unshift splice reverse sort ❌不改变原数组：map filter reduce every some find findIndex slice concat\n高频考点：\nmap：映射，返回新数组，长度不变\nfilter：过滤，返回符合条件新数组\nreduce：累加器，可以实现求和、数组转对象、去重",
    "keyPoints": [
      "改变原数组：push pop shift unshift splice reverse sort ❌不改变原数组：map filter reduce every some find findIndex slice concat",
      "map：映射，返回新数组，长度不变",
      "filter：过滤，返回符合条件新数组",
      "reduce：累加器，可以实现求和、数组转对象、去重"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-equality",
    "category": "javascript",
    "tags": [
      "类型转换",
      "运算符"
    ],
    "title": "== 和 === 的区别？",
    "answer": "=== 严格相等，类型和值全部相等才 true，不做隐式转换，开发优先使用。 == 宽松相等，会做隐式类型转换。 经典坑：null == undefined → true；null === undefined → false。",
    "keyPoints": [
      "=== 严格相等，类型和值全部相等才 true，不做隐式转换，开发优先使用。 == 宽松相等，会做隐式类型转换。 经典坑：null == undefined → true；null === undefined → false",
      "辨别 运算符 的适用场景",
      "了解 类型转换 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-falsy-values",
    "category": "javascript",
    "tags": [
      "类型转换"
    ],
    "title": "0、''、null、undefined、NaN、false 哪些是假值？",
    "answer": "6 个假值：0 '' null undefined NaN false\n注意：[] {} 是真值。NaN 不等于任何东西，包括自己。判断 NaN 用Number.isNaN()。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "6 个假值：0 '' null undefined NaN false",
      "注意：[] {} 是真值。NaN 不等于任何东西，包括自己。判断 NaN 用Number.isNaN()",
      "了解 类型转换 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-garbage-collection",
    "category": "javascript",
    "tags": [
      "内存",
      "垃圾回收"
    ],
    "title": "垃圾回收机制？",
    "answer": "JS 自动垃圾回收，不用手动管理内存。 浏览器主要：标记清除算法。遍历标记存活对象，清除没有标记的对象。 引用计数存在循环引用问题，现代浏览器已经不用。\n内存泄漏常见场景：\n意外全局变量；\n闭包没有释放；\n定时器忘记清除；\nDOM 引用没有置空。",
    "keyPoints": [
      "JS 自动垃圾回收，不用手动管理内存。 浏览器主要：标记清除算法。遍历标记存活对象，清除没有标记的对象。 引用计数存在循环引用问题，现代浏览器已经不用",
      "内存泄漏常见场景：",
      "定时器忘记清除",
      "DOM 引用没有置空"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-new-operator",
    "category": "javascript",
    "tags": [
      "对象",
      "原型"
    ],
    "title": "new 操作符做了哪几件事？",
    "answer": "创建一个全新空对象；\n将新对象的__proto__指向构造函数的 prototype；\n将构造函数 this 绑定为这个新对象，执行构造函数；\n如果构造函数返回引用类型，返回该对象；否则返回新建对象。",
    "keyPoints": [
      "创建一个全新空对象",
      "将新对象的__proto__指向构造函数的 prototype",
      "将构造函数 this 绑定为这个新对象，执行构造函数",
      "如果构造函数返回引用类型，返回该对象；否则返回新建对象"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-debounce-throttle",
    "category": "javascript",
    "tags": [
      "性能",
      "函数"
    ],
    "title": "什么是防抖、节流，区别，使用场景？",
    "answer": "防抖 debounce：多次触发，只在最后一次执行。场景：搜索框输入联想。\n节流 throttle：固定时间只执行一次。场景：滚动事件、窗口 resize。 面试官大概率会让口述手写思路。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "防抖 debounce：多次触发，只在最后一次执行。场景：搜索框输入联想",
      "节流 throttle：固定时间只执行一次。场景：滚动事件、窗口 resize。 面试官大概率会让口述手写思路",
      "了解 性能 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-same-origin-cors",
    "category": "javascript",
    "tags": [
      "浏览器",
      "跨域"
    ],
    "title": "同源策略限制了什么，常见跨源方案如何选择？",
    "answer": "同源通常要求协议、主机和端口一致。同源策略主要限制不同源文档之间的读取和操作能力，并不是禁止浏览器发出所有跨源请求；非简单 CORS 请求会先预检，预检不通过时实际请求可能不会发送。\n\n生产接口通常由服务端配置 CORS；开发代理和反向代理通过同源转发解决开发或部署边界。postMessage 适合窗口通信，JSONP 只是历史上的脚本加载技巧，仅支持 GET 语义且不应作为现代通用方案。",
    "keyPoints": [
      "同源由协议、主机和端口共同决定",
      "策略重点限制跨源读取和 DOM 访问",
      "预检失败时实际请求可能不会发出",
      "CORS 必须由服务端明确授权",
      "代理与 postMessage 解决的是不同边界"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 CORS 成功也不代表接口已经完成授权校验？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-symbol",
    "category": "javascript",
    "tags": [
      "基础类型",
      "对象"
    ],
    "title": "Symbol 用途？",
    "answer": "生成独一无二的值，作为对象 key，避免属性名冲突。 Symbol('a') !== Symbol('a') for...in 遍历不到 Symbol 属性，Object.getOwnPropertySymbols()可以获取。",
    "keyPoints": [
      "生成独一无二的值，作为对象 key，避免属性名冲突。 Symbol('a') !== Symbol('a') for...in 遍历不到 Symbol 属性，Object.getOwnPropertySymbols()可以获取",
      "辨别 对象 的适用场景",
      "了解 基础类型 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-map-set-weak",
    "category": "javascript",
    "tags": [
      "集合",
      "内存"
    ],
    "title": "Set、Map、WeakSet、WeakMap 区别？",
    "answer": "Set：数组去重，元素唯一；\nMap：键可以是对象，不限于字符串；\nWeakSet / WeakMap：key 只能是对象，弱引用，不计入垃圾回收计数，防止内存泄漏。没有遍历方法。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "Set：数组去重，元素唯一",
      "Map：键可以是对象，不限于字符串",
      "WeakSet / WeakMap：key 只能是对象，弱引用，不计入垃圾回收计数，防止内存泄漏。没有遍历方法"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-for-in-for-of",
    "category": "javascript",
    "tags": [
      "遍历",
      "迭代器"
    ],
    "title": "for in 和 for of 的区别？",
    "answer": "for-in：遍历对象可枚举属性（包括原型链），适合对象；不适合数组，会拿到索引字符串。\nfor-of：遍历可迭代对象（Array、Map、Set），获取值，不会遍历原型属性，支持 break continue。",
    "keyPoints": [
      "for-in：遍历对象可枚举属性（包括原型链），适合对象；不适合数组，会拿到索引字符串",
      "for-of：遍历可迭代对象（Array、Map、Set），获取值，不会遍历原型属性，支持 break continue",
      "了解 遍历 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-iterator",
    "category": "javascript",
    "tags": [
      "迭代器",
      "协议"
    ],
    "title": "什么是可迭代对象（iterator）？",
    "answer": "拥有Symbol.iterator方法，返回迭代器。Array、Map、Set、字符串都是可迭代对象，可以用 for-of 遍历。对象默认不是可迭代对象。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "拥有Symbol.iterator方法，返回迭代器。Array、Map、Set、字符串都是可迭代对象，可以用 for-of 遍历。对象默认不是可迭代对象",
      "辨别 协议 的适用场景",
      "了解 迭代器 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-generator",
    "category": "javascript",
    "tags": [
      "生成器",
      "迭代器"
    ],
    "title": "什么是 Generator？简单了解？",
    "answer": "生成器函数 function*，yield 暂停，next 执行返回值。可以实现异步流程，现在基本被 async await 替代，校招一般问概念，很少手写。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "生成器函数 function*，yield 暂停，next 执行返回值。可以实现异步流程，现在基本被 async await 替代，校招一般问概念，很少手写",
      "辨别 迭代器 的适用场景",
      "了解 生成器 的风险和边界"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-inheritance",
    "category": "javascript",
    "tags": [
      "继承",
      "原型"
    ],
    "title": "原型链继承、组合继承、ES6 class 继承？",
    "answer": "class 本质是构造函数的语法糖。 extends实现继承，super()调用父类构造函数。\n\n面试时还应说明适用边界，并结合运行环境验证具体行为。\n\n回答时应区分规范语义、常见实现和具体项目约束。",
    "keyPoints": [
      "class 本质是构造函数的语法糖。 extends实现继承，super()调用父类构造函数",
      "辨别 原型 的适用场景",
      "了解 继承 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-dom-events",
    "category": "javascript",
    "tags": [
      "事件",
      "DOM"
    ],
    "title": "什么是 DOM0、DOM2 事件，事件捕获、冒泡，事件委托？",
    "answer": "事件流：捕获 → 目标 → 冒泡。 addEventListener 第三个参数 true 开启捕获，默认 false 冒泡。 事件委托：利用事件冒泡，父元素监听子元素事件，减少事件绑定，适合动态生成 DOM。",
    "keyPoints": [
      "事件流：捕获 → 目标 → 冒泡。 addEventListener 第三个参数 true 开启捕获，默认 false 冒泡。 事件委托：利用事件冒泡，父元素监听子元素事件，减少事件绑定，适合动态生成 DOM",
      "辨别 DOM 的适用场景",
      "了解 事件 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-lexical-environment",
    "category": "javascript",
    "tags": [
      "作用域",
      "执行上下文"
    ],
    "title": "词法环境和作用域链之间是什么关系？",
    "answer": "词法环境记录当前作用域的标识符绑定并指向外层环境。函数定义位置决定其外层词法环境，而不是调用位置。\n\n变量查找会沿环境引用逐级向外进行，直到找到绑定或抛出错误。面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "词法环境记录当前作用域的标识符绑定并指向外层环境",
      "函数定义位置决定其外层词法环境，而不是调用位置",
      "变量查找会沿环境引用逐级向外进行，直到找到绑定或抛出错误"
    ],
    "difficulty": 2,
    "followUps": [
      "闭包为什么能够保留外层词法环境？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-temporal-dead-zone",
    "category": "javascript",
    "tags": [
      "变量",
      "作用域"
    ],
    "title": "什么是暂时性死区，为什么 typeof 也可能报错？",
    "answer": "let、const 绑定从进入作用域时已经存在，但初始化前不能访问。暂时性死区从作用域开始持续到声明执行完成。\n\n对死区内绑定使用 typeof 仍会抛出 ReferenceError，这与未声明全局变量不同。",
    "keyPoints": [
      "let、const 绑定从进入作用域时已经存在，但初始化前不能访问",
      "暂时性死区从作用域开始持续到声明执行完成",
      "对死区内绑定使用 typeof 仍会抛出 ReferenceError，这与未声明全局变量不同"
    ],
    "difficulty": 2,
    "followUps": [
      "暂时性死区如何帮助发现初始化顺序问题？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-property-descriptors",
    "category": "javascript",
    "tags": [
      "对象",
      "属性描述符"
    ],
    "title": "JavaScript 属性描述符包含哪些字段？",
    "answer": "数据属性由 value、writable、enumerable 和 configurable 描述。访问器属性使用 get、set、enumerable 和 configurable。\n\nObject.defineProperty 新建属性时未提供的布尔字段默认是 false，和普通赋值不同。",
    "keyPoints": [
      "数据属性由 value、writable、enumerable 和 configurable 描述",
      "访问器属性使用 get、set、enumerable 和 configurable",
      "Object.defineProperty 新建属性时未提供的布尔字段默认是 false，和普通赋值不同"
    ],
    "difficulty": 2,
    "followUps": [
      "configurable 为 false 后还能修改哪些字段？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-currying",
    "category": "javascript",
    "tags": [
      "函数式编程",
      "函数"
    ],
    "title": "什么是函数柯里化，它适合哪些场景？",
    "answer": "柯里化把接收多个参数的函数转换为连续接收单个或部分参数的函数。它便于复用已绑定参数、构造配置函数和组合小函数。\n\n过度柯里化会增加调用层级和调试成本，不应替代清晰的业务接口。面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "柯里化把接收多个参数的函数转换为连续接收单个或部分参数的函数",
      "它便于复用已绑定参数、构造配置函数和组合小函数",
      "过度柯里化会增加调用层级和调试成本，不应替代清晰的业务接口"
    ],
    "difficulty": 2,
    "followUps": [
      "柯里化与偏函数应用有什么区别？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-function-composition",
    "category": "javascript",
    "tags": [
      "函数式编程",
      "组合"
    ],
    "title": "函数组合的核心思想是什么？",
    "answer": "函数组合把前一个函数的输出作为后一个函数的输入。可组合函数通常应保持输入输出契约清楚并尽量减少隐藏副作用。\n\n组合适合数据转换流水线，但异步、错误和多参数函数需要额外约定。面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "函数组合把前一个函数的输出作为后一个函数的输入",
      "可组合函数通常应保持输入输出契约清楚并尽量减少隐藏副作用",
      "组合适合数据转换流水线，但异步、错误和多参数函数需要额外约定"
    ],
    "difficulty": 2,
    "followUps": [
      "如何组合返回 Promise 的异步函数？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-promise-combinators",
    "category": "javascript",
    "tags": [
      "Promise",
      "异步"
    ],
    "title": "Promise.all、allSettled、race 和 any 如何选择？",
    "answer": "Promise.all 在任一输入拒绝时立即拒绝，适合全部成功才继续的任务。allSettled 等待所有结果，race 采用最先落定结果，any 采用最先兑现结果。\n\n这些方法不会自动取消仍在执行的底层任务，取消需要 AbortController 等协作机制。",
    "keyPoints": [
      "Promise.all 在任一输入拒绝时立即拒绝，适合全部成功才继续的任务",
      "allSettled 等待所有结果，race 采用最先落定结果，any 采用最先兑现结果",
      "这些方法不会自动取消仍在执行的底层任务，取消需要 AbortController 等协作机制"
    ],
    "difficulty": 3,
    "followUps": [
      "Promise.any 全部失败时会返回什么错误？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-promise-error-flow",
    "category": "javascript",
    "tags": [
      "Promise",
      "错误处理"
    ],
    "title": "Promise 链中的错误是如何传播和恢复的？",
    "answer": "then 回调抛错或返回拒绝 Promise 会让后续链进入拒绝分支。catch 本质上是 then 的拒绝处理器，返回普通值会把链恢复为兑现状态。\n\nfinally 不应改写业务结果，除非自身抛错或返回拒绝 Promise。",
    "keyPoints": [
      "then 回调抛错或返回拒绝 Promise 会让后续链进入拒绝分支",
      "catch 本质上是 then 的拒绝处理器，返回普通值会把链恢复为兑现状态",
      "finally 不应改写业务结果，除非自身抛错或返回拒绝 Promise"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么忘记 return 一个 Promise 会导致错误链断开？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-abort-controller",
    "category": "javascript",
    "tags": [
      "异步",
      "取消"
    ],
    "title": "AbortController 如何实现异步任务取消？",
    "answer": "AbortController 通过共享的 AbortSignal 发送取消通知。fetch 等支持 signal 的 API 会在取消后以 AbortError 结束，但取消并不回滚已经发生的副作用。\n\n自定义异步函数应监听 signal、及时清理资源并区分取消与真实失败。",
    "keyPoints": [
      "AbortController 通过共享的 AbortSignal 发送取消通知",
      "fetch 等支持 signal 的 API 会在取消后以 AbortError 结束，但取消并不回滚已经发生的副作用",
      "自定义异步函数应监听 signal、及时清理资源并区分取消与真实失败"
    ],
    "difficulty": 2,
    "followUps": [
      "多个任务如何共享或组合取消信号？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-esm-live-bindings",
    "category": "javascript",
    "tags": [
      "模块",
      "ESM"
    ],
    "title": "ES Module 的静态结构和实时绑定意味着什么？",
    "answer": "import 和 export 的静态语法让工具能在执行前分析依赖图。导入绑定是只读视图，会反映导出模块中绑定值的后续变化。\n\n模块默认严格模式且每个模块只求值一次，循环依赖时还要考虑初始化顺序。面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "import 和 export 的静态语法让工具能在执行前分析依赖图",
      "导入绑定是只读视图，会反映导出模块中绑定值的后续变化",
      "模块默认严格模式且每个模块只求值一次，循环依赖时还要考虑初始化顺序"
    ],
    "difficulty": 3,
    "followUps": [
      "循环依赖为什么可能触发暂时性死区错误？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-commonjs-esm",
    "category": "javascript",
    "tags": [
      "模块",
      "工程化"
    ],
    "title": "CommonJS 与 ES Module 的主要区别是什么？",
    "answer": "CommonJS 通常在运行时同步执行 require 并导出对象，ESM 使用静态 import/export。ESM 支持实时绑定和静态分析，CommonJS 的导出对象更接近执行后的值快照。\n\nNode.js 中两套模块系统的解析、文件扩展名和互操作规则需要结合项目配置判断。",
    "keyPoints": [
      "CommonJS 通常在运行时同步执行 require 并导出对象，ESM 使用静态 import/export",
      "ESM 支持实时绑定和静态分析，CommonJS 的导出对象更接近执行后的值快照",
      "Node.js 中两套模块系统的解析、文件扩展名和互操作规则需要结合项目配置判断"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么不能简单把 require 全部机械替换成 import？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-destructuring-spread",
    "category": "javascript",
    "tags": [
      "语法",
      "对象"
    ],
    "title": "解构赋值和展开语法有哪些常见陷阱？",
    "answer": "解构按属性名或迭代顺序读取值，并可设置只在 undefined 时生效的默认值。对象展开只复制自身可枚举属性，是浅拷贝而不是递归克隆。\n\n展开过程中会触发属性读取，且原型、不可枚举属性和属性描述符不会原样保留。",
    "keyPoints": [
      "解构按属性名或迭代顺序读取值，并可设置只在 undefined 时生效的默认值",
      "对象展开只复制自身可枚举属性，是浅拷贝而不是递归克隆",
      "展开过程中会触发属性读取，且原型、不可枚举属性和属性描述符不会原样保留"
    ],
    "difficulty": 1,
    "followUps": [
      "对象展开遇到 getter 时会发生什么？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-optional-nullish",
    "category": "javascript",
    "tags": [
      "语法",
      "空值"
    ],
    "title": "可选链 ?. 和空值合并 ?? 应该如何使用？",
    "answer": "可选链在左侧为 null 或 undefined 时短路并返回 undefined。空值合并只把 null 和 undefined 视为缺失，不会误伤 0、空字符串和 false。\n\n分组可能中断可选链的连续短路，赋值左侧也不能直接使用可选链。",
    "keyPoints": [
      "可选链在左侧为 null 或 undefined 时短路并返回 undefined",
      "空值合并只把 null 和 undefined 视为缺失，不会误伤 0、空字符串和 false",
      "分组可能中断可选链的连续短路，赋值左侧也不能直接使用可选链"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么配置默认值通常更适合使用 ?? 而不是 ||？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-number-precision",
    "category": "javascript",
    "tags": [
      "数字",
      "浮点数"
    ],
    "title": "为什么 0.1 + 0.2 不等于 0.3，如何比较浮点数？",
    "answer": "JavaScript Number 使用 IEEE 754 双精度浮点表示，许多十进制小数无法被二进制精确表示。浮点运算会产生舍入误差，直接使用严格相等比较计算结果可能失败。\n\n比较时可根据业务量级使用容差，金额等精确场景应采用整数最小单位或专用十进制方案。",
    "keyPoints": [
      "JavaScript Number 使用 IEEE 754 双精度浮点表示，许多十进制小数无法被二进制精确表示",
      "浮点运算会产生舍入误差，直接使用严格相等比较计算结果可能失败",
      "比较时可根据业务量级使用容差，金额等精确场景应采用整数最小单位或专用十进制方案"
    ],
    "difficulty": 2,
    "followUps": [
      "Number.EPSILON 能否作为所有浮点比较的固定容差？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-bigint",
    "category": "javascript",
    "tags": [
      "数字",
      "BigInt"
    ],
    "title": "BigInt 解决了什么问题，使用时有哪些限制？",
    "answer": "BigInt 可以精确表示超过 Number 安全整数范围的任意大整数。BigInt 字面量带 n，不能与 Number 直接混合进行算术运算。\n\nJSON 默认不能序列化 BigInt，涉及接口、数据库和浏览器兼容性时需要显式转换方案。",
    "keyPoints": [
      "BigInt 可以精确表示超过 Number 安全整数范围的任意大整数",
      "BigInt 字面量带 n，不能与 Number 直接混合进行算术运算",
      "JSON 默认不能序列化 BigInt，涉及接口、数据库和浏览器兼容性时需要显式转换方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 BigInt 不适合直接表示带小数的金额？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-proxy-reflect",
    "category": "javascript",
    "tags": [
      "元编程",
      "对象"
    ],
    "title": "Proxy 和 Reflect 如何配合使用？",
    "answer": "Proxy 可以拦截对象的读取、写入、删除、函数调用等内部操作。Reflect 提供与许多代理陷阱对应的默认语义，便于正确转发原始操作。\n\n代理必须遵守对象不可配置属性等语言不变量，否则运行时会抛出 TypeError。",
    "keyPoints": [
      "Proxy 可以拦截对象的读取、写入、删除、函数调用等内部操作",
      "Reflect 提供与许多代理陷阱对应的默认语义，便于正确转发原始操作",
      "代理必须遵守对象不可配置属性等语言不变量，否则运行时会抛出 TypeError"
    ],
    "difficulty": 3,
    "followUps": [
      "响应式系统使用 Proxy 时如何处理对象身份？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-json-limitations",
    "category": "javascript",
    "tags": [
      "序列化",
      "JSON"
    ],
    "title": "JSON.stringify 和 JSON.parse 有哪些限制？",
    "answer": "JSON 只能表达对象、数组、字符串、数字、布尔值和 null 等有限结构。undefined、函数和 Symbol 可能被忽略，BigInt 会报错，Date 通常变成字符串，循环引用会报错。\n\nreplacer、reviver 可以定制部分转换，但不能自动恢复原型、方法和所有内置类型。",
    "keyPoints": [
      "JSON 只能表达对象、数组、字符串、数字、布尔值和 null 等有限结构",
      "undefined、函数和 Symbol 可能被忽略，BigInt 会报错，Date 通常变成字符串，循环引用会报错",
      "replacer、reviver 可以定制部分转换，但不能自动恢复原型、方法和所有内置类型"
    ],
    "difficulty": 1,
    "followUps": [
      "如何安全处理包含循环引用的调试数据？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-structured-clone",
    "category": "javascript",
    "tags": [
      "拷贝",
      "Web API"
    ],
    "title": "structuredClone 与 JSON 深拷贝有什么区别？",
    "answer": "structuredClone 使用结构化克隆算法，支持循环引用、Map、Set、Date、ArrayBuffer 等更多类型。它不能克隆函数、DOM 节点等不可克隆值，也不会保留自定义类的完整行为语义。\n\n可转移对象可以把底层资源所有权移动到新对象，减少大数据复制成本。",
    "keyPoints": [
      "structuredClone 使用结构化克隆算法，支持循环引用、Map、Set、Date、ArrayBuffer 等更多类型",
      "它不能克隆函数、DOM 节点等不可克隆值，也不会保留自定义类的完整行为语义",
      "可转移对象可以把底层资源所有权移动到新对象，减少大数据复制成本"
    ],
    "difficulty": 2,
    "followUps": [
      "哪些对象适合通过 transfer 列表转移？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-array-sort",
    "category": "javascript",
    "tags": [
      "数组",
      "排序"
    ],
    "title": "Array.prototype.sort 使用时要注意什么？",
    "answer": "sort 默认把元素转为字符串并按 UTF-16 码元顺序比较，数字排序必须提供比较函数。sort 会原地修改数组，现代环境可使用 toSorted 获得不变更原数组的结果。\n\n比较函数应保持自反、反对称和传递等一致性，否则结果可能不可预测。",
    "keyPoints": [
      "sort 默认把元素转为字符串并按 UTF-16 码元顺序比较，数字排序必须提供比较函数",
      "sort 会原地修改数组，现代环境可使用 toSorted 获得不变更原数组的结果",
      "比较函数应保持自反、反对称和传递等一致性，否则结果可能不可预测"
    ],
    "difficulty": 1,
    "followUps": [
      "如何实现多字段稳定排序？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-flat-flatmap",
    "category": "javascript",
    "tags": [
      "数组",
      "数据处理"
    ],
    "title": "flat 和 flatMap 的区别是什么？",
    "answer": "flat 按指定深度展开嵌套数组，默认只展开一层。flatMap 先对每项映射再展开一层，适合一对零、一或多项的转换。\n\n两者都会返回新数组，并会忽略稀疏数组中的空槽，不能替代任意深度递归处理。面试时还应说明适用边界，并结合运行环境验证具体行为。",
    "keyPoints": [
      "flat 按指定深度展开嵌套数组，默认只展开一层",
      "flatMap 先对每项映射再展开一层，适合一对零、一或多项的转换",
      "两者都会返回新数组，并会忽略稀疏数组中的空槽，不能替代任意深度递归处理"
    ],
    "difficulty": 1,
    "followUps": [
      "flatMap 为什么只能展开一层？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-regexp-last-index",
    "category": "javascript",
    "tags": [
      "正则表达式",
      "状态"
    ],
    "title": "正则表达式的 global、sticky 和 lastIndex 有什么关系？",
    "answer": "带 g 或 y 标志的 RegExp 在 exec、test 等调用中会读写 lastIndex。global 从 lastIndex 之后继续搜索，sticky 要求恰好从 lastIndex 位置匹配。\n\n复用有状态正则时若忽略 lastIndex，连续 test 可能出现交替结果，应按调用场景重置或新建实例。",
    "keyPoints": [
      "带 g 或 y 标志的 RegExp 在 exec、test 等调用中会读写 lastIndex",
      "global 从 lastIndex 之后继续搜索，sticky 要求恰好从 lastIndex 位置匹配",
      "复用有状态正则时若忽略 lastIndex，连续 test 可能出现交替结果，应按调用场景重置或新建实例"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么循环调用 test 可能一真一假？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-error-handling",
    "category": "javascript",
    "tags": [
      "错误处理"
    ],
    "title": "JavaScript 应用如何设计错误处理边界？",
    "answer": "同步异常可用 try/catch 捕获，Promise 拒绝需要在异步链中显式处理。业务可预期失败与程序缺陷应使用不同错误类型或结果模型表达。\n\n捕获后应补充上下文并决定恢复、重试或上报，不能静默吞掉导致状态不一致的错误。",
    "keyPoints": [
      "同步异常可用 try/catch 捕获，Promise 拒绝需要在异步链中显式处理",
      "业务可预期失败与程序缺陷应使用不同错误类型或结果模型表达",
      "捕获后应补充上下文并决定恢复、重试或上报，不能静默吞掉导致状态不一致的错误"
    ],
    "difficulty": 2,
    "followUps": [
      "什么时候适合自定义 Error 子类？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-event-listener-options",
    "category": "javascript",
    "tags": [
      "DOM",
      "事件"
    ],
    "title": "addEventListener 的 capture、once、passive 和 signal 有什么作用？",
    "answer": "capture 决定监听器是否在捕获阶段触发，once 会在首次触发后自动移除。passive 表示监听器不会调用 preventDefault，可帮助浏览器优化触摸和滚动。\n\nsignal 可以通过 AbortController 批量移除监听器，减少组件销毁时的清理遗漏。",
    "keyPoints": [
      "capture 决定监听器是否在捕获阶段触发，once 会在首次触发后自动移除",
      "passive 表示监听器不会调用 preventDefault，可帮助浏览器优化触摸和滚动",
      "signal 可以通过 AbortController 批量移除监听器，减少组件销毁时的清理遗漏"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么不能把需要阻止滚动的监听器设置为 passive？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-top-level-await",
    "category": "javascript",
    "tags": [
      "模块",
      "异步"
    ],
    "title": "顶层 await 会如何影响 ES Module 依赖图？",
    "answer": "顶层 await 只允许在模块中使用，并使该模块的求值过程变为异步。依赖它的父模块会等待其完成，但依赖图中的其他无关分支仍可能继续执行。\n\n在公共模块中滥用顶层 await 会推迟应用启动，并让循环依赖问题更难分析。",
    "keyPoints": [
      "顶层 await 只允许在模块中使用，并使该模块的求值过程变为异步",
      "依赖它的父模块会等待其完成，但依赖图中的其他无关分支仍可能继续执行",
      "在公共模块中滥用顶层 await 会推迟应用启动，并让循环依赖问题更难分析"
    ],
    "difficulty": 3,
    "followUps": [
      "顶层 await 与动态 import 的加载边界有何不同？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-private-fields",
    "category": "javascript",
    "tags": [
      "类",
      "封装"
    ],
    "title": "JavaScript 私有字段 #field 与普通下划线属性有什么区别？",
    "answer": "# 私有字段由语言在语法和运行时强制限制，只能在声明它的类体内访问。它不属于普通字符串属性，不能通过 Object.keys、in 的字符串形式或代理陷阱直接访问。\n\n私有字段提供封装但也影响测试、序列化和继承设计，应避免把类变成难以组合的状态容器。",
    "keyPoints": [
      "# 私有字段由语言在语法和运行时强制限制，只能在声明它的类体内访问",
      "它不属于普通字符串属性，不能通过 Object.keys、in 的字符串形式或代理陷阱直接访问",
      "私有字段提供封装但也影响测试、序列化和继承设计，应避免把类变成难以组合的状态容器"
    ],
    "difficulty": 2,
    "followUps": [
      "子类能否直接访问父类的私有字段？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "js-weakref-finalization",
    "category": "javascript",
    "tags": [
      "内存",
      "高级 API"
    ],
    "title": "WeakRef 和 FinalizationRegistry 为什么应谨慎使用？",
    "answer": "WeakRef 允许在不阻止垃圾回收的情况下临时访问对象。FinalizationRegistry 可在对象回收后安排清理回调，但回调时间甚至是否执行都不确定。\n\n它们不适合承载关键资源释放或业务逻辑，只应用于可丢失缓存等少数高级场景。",
    "keyPoints": [
      "WeakRef 允许在不阻止垃圾回收的情况下临时访问对象",
      "FinalizationRegistry 可在对象回收后安排清理回调，但回调时间甚至是否执行都不确定",
      "它们不适合承载关键资源释放或业务逻辑，只应用于可丢失缓存等少数高级场景"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么文件句柄关闭不能依赖终结回调？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-vs-javascript",
    "category": "typescript",
    "tags": [
      "基础",
      "类型系统"
    ],
    "title": "TypeScript 相比 JavaScript 有哪些优势和限制？",
    "answer": "静态类型检查：编译阶段发现类型错误，而不是运行时报错；\n代码提示、智能补全，大型项目可读性、可维护性更好；\n接口、泛型可以约束数据结构，团队协作更规范；\n支持最新 ES 语法，编译向下兼容低版本 JS。\nTS 不会改变 JS 运行时，仅仅编译期做类型校验。",
    "keyPoints": [
      "静态类型检查：编译阶段发现类型错误，而不是运行时报错",
      "代码提示、智能补全，大型项目可读性、可维护性更好",
      "接口、泛型可以约束数据结构，团队协作更规范",
      "支持最新 ES 语法，编译向下兼容低版本 JS",
      "TS 不会改变 JS 运行时，仅仅编译期做类型校验"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-interface-type",
    "category": "typescript",
    "tags": [
      "interface",
      "type"
    ],
    "title": "type 和 interface 的区别？",
    "answer": "相同点：都可以定义对象类型，支持扩展。 区别：\ninterface 可以声明合并，写多个同名 interface 会自动合并；type 别名不能重复声明。\ntype 可以定义基本类型、联合、交叉、元组；interface 只能描述对象 / 函数。\ninterface 用extends做继承；type 用&交叉类型。\n```typescript\n// interface 声明合并interface User { name:string }interface User { age:number }// 合并得到 {name:string;age:number}\n```\n项目经验：描述对象、组件入参优先用 interface；联合类型、工具类型用 type。",
    "keyPoints": [
      "相同点：都可以定义对象类型，支持扩展。 区别：",
      "interface 可以声明合并，写多个同名 interface 会自动合并；type 别名不能重复声明",
      "type 可以定义基本类型、联合、交叉、元组；interface 只能描述对象 / 函数",
      "interface 用extends做继承；type 用&交叉类型",
      "项目经验：描述对象、组件入参优先用 interface；联合类型、工具类型用 type"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-unknown-any",
    "category": "typescript",
    "tags": [
      "类型安全",
      "特殊类型"
    ],
    "title": "any、unknown、never 和 void 有什么区别？",
    "answer": "any：关闭 TS 类型检查，可以任意读写调用，尽量少用，等于放弃 TS 能力。\nunknown：未知类型，相比 any 更安全；不能直接调用属性 / 方法，必须先做类型缩小判断。\nvoid：函数没有返回值；可以返回 undefined。\nnever：永远不会发生的值。函数抛出错误、死循环没有返回；联合类型穷尽判断后剩下的类型。\n简单记忆： any：啥都能干；unknown：啥都不能干，需要判断；never：根本不会出现。",
    "keyPoints": [
      "any：关闭 TS 类型检查，可以任意读写调用，尽量少用，等于放弃 TS 能力",
      "unknown：未知类型，相比 any 更安全；不能直接调用属性 / 方法，必须先做类型缩小判断",
      "void：函数没有返回值；可以返回 undefined",
      "never：永远不会发生的值。函数抛出错误、死循环没有返回；联合类型穷尽判断后剩下的类型",
      "简单记忆： any：啥都能干；unknown：啥都不能干，需要判断；never：根本不会出现"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-union-intersection",
    "category": "typescript",
    "tags": [
      "联合类型",
      "交叉类型"
    ],
    "title": "联合类型 | 和交叉类型 &？",
    "answer": "| 联合：满足其中一种类型即可 type A = number | string\n& 交叉：必须同时满足所有类型，把多个类型合并。\n```typescript\ntype Person = {name:string} & {age:number}// {name:string,age:number}\n```\n注意：基本类型交叉 string & number 得到 never，不可能同时满足。",
    "keyPoints": [
      "| 联合：满足其中一种类型即可 type A = number | string",
      "& 交叉：必须同时满足所有类型，把多个类型合并",
      "注意：基本类型交叉 string & number 得到 never，不可能同时满足"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-generics",
    "category": "typescript",
    "tags": [
      "泛型",
      "类型关系"
    ],
    "title": "泛型是什么？什么时候用泛型？",
    "answer": "泛型：类型参数，类型的参数化，让组件、函数支持多种类型，同时保留类型推导，不丢失类型信息，不写 any。\n示例：\n```typescript\nfunction fn<T>(arg:T):T {\nreturn arg}\n```\n使用场景：\n封装通用工具函数；\n封装通用组件；\naxios 请求返回值约束。\n泛型约束 extends：限制泛型必须具备某些属性\n```typescript\nfunction getLen<T extends {length:number}>(val:T){\nreturn val.length}\n```",
    "keyPoints": [
      "泛型：类型参数，类型的参数化，让组件、函数支持多种类型，同时保留类型推导，不丢失类型信息，不写 any",
      "封装通用工具函数",
      "axios 请求返回值约束",
      "泛型约束 extends：限制泛型必须具备某些属性"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-utility-types",
    "category": "typescript",
    "tags": [
      "工具类型",
      "类型转换"
    ],
    "title": "TS 工具类型 Partial、Required、Readonly、Pick、Omit、Exclude、Extract？",
    "answer": "高频，面试经常问，最好口述作用 答案：\nPartial<T>：把 T 所有属性变为可选\nRequired<T>：把 T 所有属性变为必选\nReadonly<T>：所有属性只读\nPick<T,K>：挑选 T 中的 K 属性，生成新类型\nOmit<T,K>：剔除 T 中的 K 属性\nExclude<T,U>：从 T 中排除可以赋值给 U 的类型\nExtract<T,U>：从 T 中提取可以赋值给 U 的类型\n校招重点记住前 6 个，会讲用途，不需要手写实现。",
    "keyPoints": [
      "高频，面试经常问，最好口述作用 答案：",
      "Partial<T>：把 T 所有属性变为可选",
      "Required<T>：把 T 所有属性变为必选",
      "Readonly<T>：所有属性只读",
      "Pick<T,K>：挑选 T 中的 K 属性，生成新类型"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-assertion",
    "category": "typescript",
    "tags": [
      "类型断言"
    ],
    "title": "as 类型断言，什么时候用？两种写法，风险？",
    "answer": "类型断言：告诉 TS “我比你更清楚这个类型”，绕过类型推导。 两种写法：\n```typescript\nconst a = val as stringconst b = <string>val\n```\n风险：断言不会做运行时校验，断言错了运行时会报错，TS 不会拦你。 不要滥用，优先用类型缩小（if 判断）代替断言。",
    "keyPoints": [
      "类型断言：告诉 TS “我比你更清楚这个类型”，绕过类型推导。 两种写法：",
      "风险：断言不会做运行时校验，断言错了运行时会报错，TS 不会拦你。 不要滥用，优先用类型缩小（if 判断）代替断言",
      "了解 类型断言 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-non-null-assertion",
    "category": "typescript",
    "tags": [
      "类型断言",
      "空值"
    ],
    "title": "! 非空断言操作符是什么？",
    "answer": "x! 告诉 TS：x 一定不是 null、undefined，消除 null 报错。\n同样只是编译期，运行时如果确实是 null，依然报错，慎用。\n\n类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "x! 告诉 TS：x 一定不是 null、undefined，消除 null 报错",
      "同样只是编译期，运行时如果确实是 null，依然报错，慎用",
      "了解 类型断言 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-optional-operators",
    "category": "typescript",
    "tags": [
      "可选属性",
      "空值"
    ],
    "title": "? 可选属性 / 可选链 ?. / 空值合并 ??",
    "answer": "可选属性 name?: string，属性可以不传，等价于 name:string | undefined\n可选链 obj?.info?.name，对象层级属性安全读取，中途为 null/undefined 直接返回 undefined，不抛异常。\n空值合并 a ?? b：a 为 null/undefined 才取 b；0、''、false 不会走后面。 区分 ||：|| 会把 0 '' false 也当成假值。",
    "keyPoints": [
      "可选属性 name?: string，属性可以不传，等价于 name:string | undefined",
      "可选链 obj?.info?.name，对象层级属性安全读取，中途为 null/undefined 直接返回 undefined，不抛异常",
      "空值合并 a ?? b：a 为 null/undefined 才取 b；0、''、false 不会走后面。 区分 ||：|| 会把 0 '' false 也当成假值"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-tsconfig-core",
    "category": "typescript",
    "tags": [
      "tsconfig",
      "编译配置"
    ],
    "title": "tsconfig.json 重要配置？",
    "answer": "target：编译输出 JS 版本\nmodule：模块规范 esnext/commonjs\nstrict:true：开启严格模式（最重要！开启后：noImplicitAny、strictNullChecks 全部打开，项目必开）\nstrictNullChecks：严格检查 null、undefined，防止空报错\nesModuleInterop：兼容 commonjs 模块导入\ninclude/exclude：指定哪些文件参与编译\nbaseUrl + paths：配置路径别名\n重点：strict 严格模式，几乎所有正式项目都会开启。",
    "keyPoints": [
      "target：编译输出 JS 版本",
      "module：模块规范 esnext/commonjs",
      "strict:true：开启严格模式（最重要！开启后：noImplicitAny、strictNullChecks 全部打开，项目必开）",
      "strictNullChecks：严格检查 null、undefined，防止空报错",
      "esModuleInterop：兼容 commonjs 模块导入"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-guards",
    "category": "typescript",
    "tags": [
      "类型守卫",
      "类型收窄"
    ],
    "title": "类型守卫（类型缩小）是什么，举例？",
    "answer": "通过判断，把联合类型缩小成更具体类型。 方式：typeof、instanceof、in、自定义 is 类型守卫。\n```typescript\nfunction isString(val:unknown): val is string{\nreturn typeof val === 'string'}\n```\nval is string 是类型谓词，返回 true 后，变量被收窄为 string。",
    "keyPoints": [
      "通过判断，把联合类型缩小成更具体类型。 方式：typeof、instanceof、in、自定义 is 类型守卫",
      "val is string 是类型谓词，返回 true 后，变量被收窄为 string",
      "了解 类型守卫 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-generics-business",
    "category": "typescript",
    "tags": [
      "泛型",
      "业务建模"
    ],
    "title": "泛型接口、泛型函数实际业务场景？",
    "answer": "后端返回统一格式：\n```typescript\ninterface Response<T> {\ncode:number\ndata:T\nmsg:string}// Response<User> 把User传入T，约束data字段\n```\naxios 封装的时候大量这么写。",
    "keyPoints": [
      "后端返回统一格式：",
      "axios 封装的时候大量这么写",
      "了解 泛型 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-declare-module",
    "category": "typescript",
    "tags": [
      "声明",
      "模块"
    ],
    "title": "declare 声明，declare module 作用？",
    "answer": "declare 用来写类型声明，没有实际 JS 代码。\ndeclare module 'xxx'：给没有 ts 类型的第三方模块、图片资源做模块声明，解决 import 报红。 项目中 .d.ts 文件就是类型声明文件。",
    "keyPoints": [
      "declare 用来写类型声明，没有实际 JS 代码",
      "declare module 'xxx'：给没有 ts 类型的第三方模块、图片资源做模块声明，解决 import 报红。 项目中 .d.ts 文件就是类型声明文件",
      "了解 声明 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-declaration-files",
    "category": "typescript",
    "tags": [
      "声明文件"
    ],
    "title": ".d.ts 文件作用？",
    "answer": "d.ts 是 TypeScript 类型声明文件，只存放类型，不编译产出 js。 存放全局类型、模块声明，整个项目可以直接使用里面的类型，不需要 import 导入。\n\n类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "d.ts 是 TypeScript 类型声明文件，只存放类型，不编译产出 js。 存放全局类型、模块声明，整个项目可以直接使用里面的类型，不需要 import 导入",
      "辨别 声明文件 的适用场景",
      "了解 声明文件 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-readonly",
    "category": "typescript",
    "tags": [
      "只读",
      "类型约束"
    ],
    "title": "解释 readonly 修饰符？",
    "answer": "readonly name:string，对象属性只能初始化赋值，之后不能修改。 注意：readonly 只约束属性本身，对象内部子属性依然可以修改；只是编译期约束，不影响运行。\n\n类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "readonly name:string，对象属性只能初始化赋值，之后不能修改。 注意：readonly 只约束属性本身，对象内部子属性依然可以修改；只是编译期约束，不影响运行",
      "辨别 类型约束 的适用场景",
      "了解 只读 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-structural-typing",
    "category": "typescript",
    "tags": [
      "结构化类型",
      "兼容性"
    ],
    "title": "什么是类型兼容性（结构化类型）？",
    "answer": "TS 是结构化类型系统，不看名字，看结构是否匹配。 只要对象具备需要的全部属性，就算类型兼容，可以赋值。\n```typescript\ninterface Cat {name:string}const dog = {name:'旺财',age:2}let c:Cat = dog //可以赋值，满足name属性\n```",
    "keyPoints": [
      "TS 是结构化类型系统，不看名字，看结构是否匹配。 只要对象具备需要的全部属性，就算类型兼容，可以赋值",
      "辨别 兼容性 的适用场景",
      "了解 结构化类型 的风险和边界"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-enum-const-enum",
    "category": "typescript",
    "tags": [
      "枚举",
      "编译输出"
    ],
    "title": "普通 enum 与 const enum 有什么区别和工程限制？",
    "answer": "普通 enum 通常会生成运行时 JavaScript 对象，数字枚举还可能生成反向映射。const enum 的成员通常在编译时内联，因此没有对应运行时对象并可减少输出。\n\nconst enum 会受到 isolatedModules、跨包声明发布和不同编译器处理方式限制；发布库时尤其要避免消费者与声明版本不一致。简单常量集合也可以用 as const 对象配合联合类型表达。",
    "keyPoints": [
      "普通 enum 通常存在运行时对象",
      "const enum 成员通常被内联",
      "isolatedModules 等配置会限制 const enum",
      "跨包发布要考虑版本和编译器兼容",
      "as const 对象是常见替代方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么公共类型声明中的 const enum 可能造成版本错配？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-no-implicit-any",
    "category": "typescript",
    "tags": [
      "编译配置",
      "类型推断"
    ],
    "title": "为什么会出现 noImplicitAny 报错？",
    "answer": "strict 模式开启noImplicitAny，当 TS 无法自动推导类型时，不会隐式给 any，直接报错，要求手动标注类型。\n\n类型只在编译阶段提供约束，外部数据仍需要运行时校验。\n\n回答时应区分规范语义、常见实现和具体项目约束。",
    "keyPoints": [
      "strict 模式开启noImplicitAny，当 TS 无法自动推导类型时，不会隐式给 any，直接报错，要求手动标注类型",
      "辨别 类型推断 的适用场景",
      "了解 编译配置 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-function-overloads",
    "category": "typescript",
    "tags": [
      "函数",
      "重载"
    ],
    "title": "函数重载是什么？",
    "answer": "同一个函数，接收不同参数，返回不同类型。写多个类型声明，一个实现。\n注意：重载只是 TS 编译期，JS 没有重载。\n```typescript\nfunction fn(x:number):numberfunction fn(x:string):stringfunction fn(x:number|string){\nreturn x}\n```",
    "keyPoints": [
      "同一个函数，接收不同参数，返回不同类型。写多个类型声明，一个实现",
      "注意：重载只是 TS 编译期，JS 没有重载",
      "了解 函数 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-missing-library-types",
    "category": "typescript",
    "tags": [
      "声明文件",
      "第三方库"
    ],
    "title": "TS 中如何处理第三方库没有类型定义？",
    "answer": "优先安装 @types/xxx 社区类型包；\n没有的话，在 d.ts 写 declare module 'xxx'；\n临时方案：import xxx from 'xxx' as any（不推荐临时使用）。",
    "keyPoints": [
      "优先安装 @types/xxx 社区类型包",
      "没有的话，在 d.ts 写 declare module 'xxx'",
      "临时方案：import xxx from 'xxx' as any（不推荐临时使用）"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-inference",
    "category": "typescript",
    "tags": [
      "类型推断"
    ],
    "title": "TypeScript 会在哪些位置进行类型推断？",
    "answer": "变量初始化、默认参数和函数返回值会触发从表达式到声明的类型推断。上下文类型会从调用位置、事件处理器或目标类型反向约束表达式。\n\n推断追求实用而非证明所有关系，公共 API 仍应在关键边界显式声明类型。",
    "keyPoints": [
      "变量初始化、默认参数和函数返回值会触发从表达式到声明的类型推断",
      "上下文类型会从调用位置、事件处理器或目标类型反向约束表达式",
      "推断追求实用而非证明所有关系，公共 API 仍应在关键边界显式声明类型"
    ],
    "difficulty": 1,
    "followUps": [
      "什么时候应给函数返回值添加显式类型？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-literal-as-const",
    "category": "typescript",
    "tags": [
      "字面量类型",
      "只读"
    ],
    "title": "字面量类型和 as const 有什么作用？",
    "answer": "字面量类型把值限制为某个具体字符串、数字或布尔值，而不是更宽的基础类型。as const 会阻止字面量拓宽，并把对象属性和数组元素推断为只读的窄类型。\n\n它只影响编译期类型，不会在运行时冻结对象，运行时不可变仍需 Object.freeze 等机制。",
    "keyPoints": [
      "字面量类型把值限制为某个具体字符串、数字或布尔值，而不是更宽的基础类型",
      "as const 会阻止字面量拓宽，并把对象属性和数组元素推断为只读的窄类型",
      "它只影响编译期类型，不会在运行时冻结对象，运行时不可变仍需 Object.freeze 等机制"
    ],
    "difficulty": 2,
    "followUps": [
      "as const 与显式 readonly 类型有什么区别？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-overview",
    "category": "typescript",
    "tags": [
      "类型系统",
      "基础"
    ],
    "title": "TypeScript 中常见类型应如何分类？",
    "answer": "string、number、boolean、bigint、symbol、null 和 undefined 描述 JavaScript 运行时值。对象、数组、函数、元组、联合和字面量类型用于表达更具体的数据形状。\n\nany、unknown、never、void 等是静态类型工具，不能简单称为 JavaScript 原始数据类型。",
    "keyPoints": [
      "string、number、boolean、bigint、symbol、null 和 undefined 描述 JavaScript 运行时值",
      "对象、数组、函数、元组、联合和字面量类型用于表达更具体的数据形状",
      "any、unknown、never、void 等是静态类型工具，不能简单称为 JavaScript 原始数据类型"
    ],
    "difficulty": 1,
    "followUps": [
      "void、undefined 和 never 用作返回类型时有何区别？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-keyof-indexed-access",
    "category": "typescript",
    "tags": [
      "keyof",
      "索引访问"
    ],
    "title": "keyof 和索引访问类型 T[K] 如何配合？",
    "answer": "keyof T 会得到对象类型已知属性键组成的联合类型。T[K] 根据键类型读取对应属性值类型，K 可以是单个键或键联合。\n\n将 K 约束为 keyof T 可以让取值函数保持键与返回值之间的精确关系。",
    "keyPoints": [
      "keyof T 会得到对象类型已知属性键组成的联合类型",
      "T[K] 根据键类型读取对应属性值类型，K 可以是单个键或键联合",
      "将 K 约束为 keyof T 可以让取值函数保持键与返回值之间的精确关系"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 Object.keys 的返回类型通常不是 Array<keyof T>？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-mapped-types",
    "category": "typescript",
    "tags": [
      "映射类型",
      "类型转换"
    ],
    "title": "什么是映射类型，如何修改属性修饰符？",
    "answer": "映射类型遍历键联合并为每个键产生新的属性声明。可以使用 readonly、? 以及加减修饰符批量增加或移除只读和可选约束。\n\n键重映射的 as 子句还能过滤或重命名属性，但复杂转换应保持可读性。类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "映射类型遍历键联合并为每个键产生新的属性声明",
      "可以使用 readonly、? 以及加减修饰符批量增加或移除只读和可选约束",
      "键重映射的 as 子句还能过滤或重命名属性，但复杂转换应保持可读性"
    ],
    "difficulty": 2,
    "followUps": [
      "如何实现一个只让指定键可选的类型？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-conditional-types",
    "category": "typescript",
    "tags": [
      "条件类型"
    ],
    "title": "条件类型 T extends U ? X : Y 如何工作？",
    "answer": "条件类型根据类型关系在两个结果分支中选择类型。当检查对象是裸类型参数且传入联合类型时，条件类型通常会分发到联合的每个成员。\n\n用元组包装检查类型可以关闭分发，递归条件类型还要关注复杂度和实例化深度。类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "条件类型根据类型关系在两个结果分支中选择类型",
      "当检查对象是裸类型参数且传入联合类型时，条件类型通常会分发到联合的每个成员",
      "用元组包装检查类型可以关闭分发，递归条件类型还要关注复杂度和实例化深度"
    ],
    "difficulty": 3,
    "followUps": [
      "如何让条件类型不对联合类型分发？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-infer-keyword",
    "category": "typescript",
    "tags": [
      "条件类型",
      "infer"
    ],
    "title": "条件类型中的 infer 关键字有什么作用？",
    "answer": "infer 可以在 extends 匹配模式中声明待推断的类型变量。它常用于提取函数返回值、参数、Promise 内部值或数组元素类型。\n\n多个推断位置和协变逆变关系会影响结果，过度嵌套会让类型难以解释。",
    "keyPoints": [
      "infer 可以在 extends 匹配模式中声明待推断的类型变量",
      "它常用于提取函数返回值、参数、Promise 内部值或数组元素类型",
      "多个推断位置和协变逆变关系会影响结果，过度嵌套会让类型难以解释"
    ],
    "difficulty": 3,
    "followUps": [
      "如何实现一个 Awaited 的简化版本？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-template-literal-types",
    "category": "typescript",
    "tags": [
      "模板字面量类型"
    ],
    "title": "模板字面量类型适合解决什么问题？",
    "answer": "模板字面量类型可以用字符串字面量联合拼接出受约束的字符串集合。它适合事件名、路由参数、CSS 属性前缀等有限命名协议。\n\n组合联合类型会产生笛卡尔积，规模过大时应改用代码生成或更宽的字符串类型。类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "模板字面量类型可以用字符串字面量联合拼接出受约束的字符串集合",
      "它适合事件名、路由参数、CSS 属性前缀等有限命名协议",
      "组合联合类型会产生笛卡尔积，规模过大时应改用代码生成或更宽的字符串类型"
    ],
    "difficulty": 3,
    "followUps": [
      "如何从 onClick 推导出 click 事件名？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-satisfies",
    "category": "typescript",
    "tags": [
      "satisfies",
      "类型推断"
    ],
    "title": "satisfies 与类型注解、类型断言有什么区别？",
    "answer": "satisfies 会检查表达式满足目标类型，但尽量保留表达式自身更具体的推断结果。类型注解通常把变量视为声明的目标类型，类型断言则可能绕过本应失败的检查。\n\n它适合校验配置对象键和值的约束，同时保留字面量信息用于后续推断。",
    "keyPoints": [
      "satisfies 会检查表达式满足目标类型，但尽量保留表达式自身更具体的推断结果",
      "类型注解通常把变量视为声明的目标类型，类型断言则可能绕过本应失败的检查",
      "它适合校验配置对象键和值的约束，同时保留字面量信息用于后续推断"
    ],
    "difficulty": 2,
    "followUps": [
      "satisfies 能否改变变量的运行时值？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-excess-property-checks",
    "category": "typescript",
    "tags": [
      "对象类型",
      "类型检查"
    ],
    "title": "什么是对象字面量的多余属性检查？",
    "answer": "新鲜对象字面量直接赋给目标类型时会额外检查未知属性，帮助发现拼写错误。先赋给变量再传递时通常回到结构化兼容检查，因此行为看起来可能不同。\n\n不应通过随意断言绕过检查，真正允许额外字段时应设计索引签名或泛型接口。",
    "keyPoints": [
      "新鲜对象字面量直接赋给目标类型时会额外检查未知属性，帮助发现拼写错误",
      "先赋给变量再传递时通常回到结构化兼容检查，因此行为看起来可能不同",
      "不应通过随意断言绕过检查，真正允许额外字段时应设计索引签名或泛型接口"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么同一个对象直接传参和通过变量传参结果不同？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-discriminated-unions",
    "category": "typescript",
    "tags": [
      "联合类型",
      "类型收窄"
    ],
    "title": "可辨识联合如何建模状态？",
    "answer": "可辨识联合让每个成员共享一个字面量判别字段，并携带各自专属数据。switch 或条件判断判别字段后，编译器可以把值收窄到具体成员。\n\n它比多个互相独立的可选字段更能排除非法状态，适合请求状态和领域事件。",
    "keyPoints": [
      "可辨识联合让每个成员共享一个字面量判别字段，并携带各自专属数据",
      "switch 或条件判断判别字段后，编译器可以把值收窄到具体成员",
      "它比多个互相独立的可选字段更能排除非法状态，适合请求状态和领域事件"
    ],
    "difficulty": 2,
    "followUps": [
      "如何为异步请求设计不可出现非法组合的状态类型？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-exhaustive-never",
    "category": "typescript",
    "tags": [
      "never",
      "穷尽检查"
    ],
    "title": "如何使用 never 做联合类型的穷尽检查？",
    "answer": "所有联合成员都被分支处理后，剩余值应被收窄为 never。在 default 分支把值赋给 never 或调用 assertNever，可以让新增成员时产生编译错误。\n\n穷尽检查只覆盖静态联合，外部输入仍必须先做运行时验证。",
    "keyPoints": [
      "所有联合成员都被分支处理后，剩余值应被收窄为 never",
      "在 default 分支把值赋给 never 或调用 assertNever，可以让新增成员时产生编译错误",
      "穷尽检查只覆盖静态联合，外部输入仍必须先做运行时验证"
    ],
    "difficulty": 3,
    "followUps": [
      "新增联合成员后如何让所有遗漏分支立即报错？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-predicates",
    "category": "typescript",
    "tags": [
      "类型守卫",
      "谓词"
    ],
    "title": "自定义类型谓词 value is T 应该如何编写？",
    "answer": "返回类型 value is T 告诉编译器在函数返回 true 时收窄对应参数。实现必须真的检查足够的运行时条件，否则会向类型系统提供错误保证。\n\n复杂外部数据更适合使用经过测试的校验器，并从校验规则推导静态类型。",
    "keyPoints": [
      "返回类型 value is T 告诉编译器在函数返回 true 时收窄对应参数",
      "实现必须真的检查足够的运行时条件，否则会向类型系统提供错误保证",
      "复杂外部数据更适合使用经过测试的校验器，并从校验规则推导静态类型"
    ],
    "difficulty": 2,
    "followUps": [
      "错误的类型谓词为什么比类型断言更危险？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-assertion-functions",
    "category": "typescript",
    "tags": [
      "断言函数",
      "类型收窄"
    ],
    "title": "asserts 条件和 asserts value is T 有什么作用？",
    "answer": "断言函数在条件不成立时应抛出异常，正常返回后编译器会收窄控制流中的类型。asserts condition 适合不变量检查，asserts value is T 可同时验证并收窄具体值。\n\n声明必须与运行时实现保持一致，不能只写类型签名而省略真实校验。",
    "keyPoints": [
      "断言函数在条件不成立时应抛出异常，正常返回后编译器会收窄控制流中的类型",
      "asserts condition 适合不变量检查，asserts value is T 可同时验证并收窄具体值",
      "声明必须与运行时实现保持一致，不能只写类型签名而省略真实校验"
    ],
    "difficulty": 3,
    "followUps": [
      "断言函数与返回 boolean 的类型守卫如何选择？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-branded-types",
    "category": "typescript",
    "tags": [
      "类型建模",
      "品牌类型"
    ],
    "title": "如何用品牌类型区分结构相同但语义不同的值？",
    "answer": "TypeScript 结构化类型会让形状相同的值彼此兼容，品牌字段可引入名义上的区别。品牌值通常应通过验证或构造函数创建，而不是让调用方随意断言。\n\n它适合用户 ID、订单 ID 和已校验字符串，但会增加边界转换成本。",
    "keyPoints": [
      "TypeScript 结构化类型会让形状相同的值彼此兼容，品牌字段可引入名义上的区别",
      "品牌值通常应通过验证或构造函数创建，而不是让调用方随意断言",
      "它适合用户 ID、订单 ID 和已校验字符串，但会增加边界转换成本"
    ],
    "difficulty": 3,
    "followUps": [
      "品牌类型如何与运行时校验配合？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-variadic-tuples",
    "category": "typescript",
    "tags": [
      "元组",
      "泛型"
    ],
    "title": "可变元组类型解决了什么问题？",
    "answer": "可变元组允许在元组类型中展开泛型元组并保留元素位置关系。它能精确描述参数拼接、函数组合和部分参数绑定的输入输出。\n\n复杂的元组运算会增加类型检查成本，公共 API 应权衡精确度与可读性。类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "可变元组允许在元组类型中展开泛型元组并保留元素位置关系",
      "它能精确描述参数拼接、函数组合和部分参数绑定的输入输出",
      "复杂的元组运算会增加类型检查成本，公共 API 应权衡精确度与可读性"
    ],
    "difficulty": 3,
    "followUps": [
      "如何给 bind 的部分参数保留剩余参数类型？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-function-variance",
    "category": "typescript",
    "tags": [
      "类型兼容性",
      "函数"
    ],
    "title": "函数参数和返回值的型变如何影响兼容性？",
    "answer": "返回值通常按协变方向检查，能返回更具体类型的函数可用于要求更宽结果的位置。在 strictFunctionTypes 等条件下，函数参数更接近逆变检查，以避免处理能力不足的函数被误用。\n\n方法、回调和可变对象还存在兼容性细节，不能只背协变逆变名词而忽略配置和位置。",
    "keyPoints": [
      "返回值通常按协变方向检查，能返回更具体类型的函数可用于要求更宽结果的位置",
      "在 strictFunctionTypes 等条件下，函数参数更接近逆变检查，以避免处理能力不足的函数被误用",
      "方法、回调和可变对象还存在兼容性细节，不能只背协变逆变名词而忽略配置和位置"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么接受 Dog 的回调不能总替代接受 Animal 的回调？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-generic-constraints",
    "category": "typescript",
    "tags": [
      "泛型",
      "约束"
    ],
    "title": "泛型约束 extends 应该如何设计？",
    "answer": "泛型约束声明实现真正依赖的最小能力，而不是提前固定具体业务类型。K extends keyof T 可以表达键必须来自对象并让返回值保持 T[K] 关系。\n\n约束过宽会丢失安全性，约束过窄会降低复用性，调用处推断结果也需要检查。",
    "keyPoints": [
      "泛型约束声明实现真正依赖的最小能力，而不是提前固定具体业务类型",
      "K extends keyof T 可以表达键必须来自对象并让返回值保持 T[K] 关系",
      "约束过宽会丢失安全性，约束过窄会降低复用性，调用处推断结果也需要检查"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 <T extends object> 仍不能直接访问任意属性？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-class-modifiers",
    "category": "typescript",
    "tags": [
      "类",
      "访问控制"
    ],
    "title": "public、protected、private 和 # 私有字段有什么区别？",
    "answer": "TypeScript 的 public、protected、private 主要提供编译期访问检查。JavaScript # 私有字段具有运行时强制封装，和 TypeScript private 的发射行为不同。\n\n结构化兼容性遇到 private/protected 成员时还会考虑成员声明来源，影响类之间赋值。",
    "keyPoints": [
      "TypeScript 的 public、protected、private 主要提供编译期访问检查",
      "JavaScript # 私有字段具有运行时强制封装，和 TypeScript private 的发射行为不同",
      "结构化兼容性遇到 private/protected 成员时还会考虑成员声明来源，影响类之间赋值"
    ],
    "difficulty": 1,
    "followUps": [
      "什么时候应使用 # 私有字段而不是 private？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-abstract-classes",
    "category": "typescript",
    "tags": [
      "类",
      "抽象"
    ],
    "title": "抽象类与 interface 应该如何选择？",
    "answer": "抽象类可以包含状态、构造逻辑和已实现方法，并定义必须由子类实现的抽象成员。interface 主要描述结构契约，可被不同继承体系的对象实现并支持声明合并。\n\n需要共享运行时实现时选择抽象类，只需要描述能力时通常优先接口或组合。",
    "keyPoints": [
      "抽象类可以包含状态、构造逻辑和已实现方法，并定义必须由子类实现的抽象成员",
      "interface 主要描述结构契约，可被不同继承体系的对象实现并支持声明合并",
      "需要共享运行时实现时选择抽象类，只需要描述能力时通常优先接口或组合"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么抽象类不能被直接实例化？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-implements",
    "category": "typescript",
    "tags": [
      "类",
      "接口"
    ],
    "title": "类使用 implements 时会得到什么检查？",
    "answer": "implements 检查类实例侧是否满足接口声明的结构。它不会改变类成员的推断类型，也不会自动生成方法或进行运行时校验。\n\n构造函数和静态成员属于类的静态侧，需要用单独的构造签名表达约束。类型只在编译阶段提供约束，外部数据仍需要运行时校验。",
    "keyPoints": [
      "implements 检查类实例侧是否满足接口声明的结构",
      "它不会改变类成员的推断类型，也不会自动生成方法或进行运行时校验",
      "构造函数和静态成员属于类的静态侧，需要用单独的构造签名表达约束"
    ],
    "difficulty": 1,
    "followUps": [
      "如何约束一个类的构造函数签名？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-decorators",
    "category": "typescript",
    "tags": [
      "装饰器",
      "元编程"
    ],
    "title": "使用 TypeScript 装饰器时为什么要区分新旧语义？",
    "answer": "现代 JavaScript 装饰器与 TypeScript 历史 experimentalDecorators 模式的调用签名和能力不同。框架、编译目标和 tsconfig 配置决定实际使用哪套语义，迁移时不能机械替换。\n\n装饰器适合声明式扩展，但隐藏控制流和元数据依赖会增加测试与调试成本。",
    "keyPoints": [
      "现代 JavaScript 装饰器与 TypeScript 历史 experimentalDecorators 模式的调用签名和能力不同",
      "框架、编译目标和 tsconfig 配置决定实际使用哪套语义，迁移时不能机械替换",
      "装饰器适合声明式扩展，但隐藏控制流和元数据依赖会增加测试与调试成本"
    ],
    "difficulty": 3,
    "followUps": [
      "如何确认一个框架使用的是哪套装饰器语义？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-module-resolution",
    "category": "typescript",
    "tags": [
      "模块",
      "编译配置"
    ],
    "title": "TypeScript 模块解析策略为什么要匹配运行环境？",
    "answer": "moduleResolution 决定编译器如何把导入路径映射到文件和类型声明。Node、NodeNext、Bundler 等策略对扩展名、exports 和条件导出有不同处理。\n\n类型检查能找到模块不代表运行时一定能加载，配置必须与打包器或 Node 行为一致。",
    "keyPoints": [
      "moduleResolution 决定编译器如何把导入路径映射到文件和类型声明",
      "Node、NodeNext、Bundler 等策略对扩展名、exports 和条件导出有不同处理",
      "类型检查能找到模块不代表运行时一定能加载，配置必须与打包器或 Node 行为一致"
    ],
    "difficulty": 3,
    "followUps": [
      "paths 配置为什么不会自动改写运行时导入路径？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-import-type",
    "category": "typescript",
    "tags": [
      "模块",
      "类型擦除"
    ],
    "title": "import type 和普通 import 有什么区别？",
    "answer": "import type 明确表示导入只用于类型位置，发射 JavaScript 时可以被完全移除。它有助于避免不必要的运行时依赖和某些循环依赖，并配合 verbatimModuleSyntax 明确模块意图。\n\n如果值在装饰器或运行时代码中使用，就不能只通过 import type 导入。",
    "keyPoints": [
      "import type 明确表示导入只用于类型位置，发射 JavaScript 时可以被完全移除",
      "它有助于避免不必要的运行时依赖和某些循环依赖，并配合 verbatimModuleSyntax 明确模块意图",
      "如果值在装饰器或运行时代码中使用，就不能只通过 import type 导入"
    ],
    "difficulty": 1,
    "followUps": [
      "什么时候类型导入仍会影响声明文件输出？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-project-references",
    "category": "typescript",
    "tags": [
      "工程化",
      "编译"
    ],
    "title": "TypeScript Project References 解决什么问题？",
    "answer": "项目引用把大型代码库拆成具有明确依赖关系的复合项目。tsc --build 可以按依赖顺序增量构建，并利用声明输出作为项目边界。\n\n它需要 composite、输出目录和引用关系等配置，拆分边界不合理反而会增加维护成本。",
    "keyPoints": [
      "项目引用把大型代码库拆成具有明确依赖关系的复合项目",
      "tsc --build 可以按依赖顺序增量构建，并利用声明输出作为项目边界",
      "它需要 composite、输出目录和引用关系等配置，拆分边界不合理反而会增加维护成本"
    ],
    "difficulty": 3,
    "followUps": [
      "项目引用与普通 tsconfig extends 有什么区别？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-declaration-merging",
    "category": "typescript",
    "tags": [
      "声明合并",
      "interface"
    ],
    "title": "TypeScript 的声明合并会发生在哪些声明上？",
    "answer": "同名 interface 可以合并成员，namespace 也可与某些类、函数或枚举声明组合。type 别名不会进行同名合并，这也是公共扩展契约常使用 interface 的原因之一。\n\n声明合并会跨文件影响全局或模块类型，应控制作用域并避免意外污染。",
    "keyPoints": [
      "同名 interface 可以合并成员，namespace 也可与某些类、函数或枚举声明组合",
      "type 别名不会进行同名合并，这也是公共扩展契约常使用 interface 的原因之一",
      "声明合并会跨文件影响全局或模块类型，应控制作用域并避免意外污染"
    ],
    "difficulty": 2,
    "followUps": [
      "第三方库如何利用接口合并开放插件扩展？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-global-augmentation",
    "category": "typescript",
    "tags": [
      "声明文件",
      "全局扩展"
    ],
    "title": "如何安全地扩展全局对象或第三方模块类型？",
    "answer": "全局扩展通常放在模块文件的 declare global 中，模块扩展使用 declare module 指定目标模块。扩展声明必须被编译器包含并与实际运行时代码保持一致。\n\n应尽量把扩展范围限制在明确入口，避免让全局类型与真实环境不一致。",
    "keyPoints": [
      "全局扩展通常放在模块文件的 declare global 中，模块扩展使用 declare module 指定目标模块",
      "扩展声明必须被编译器包含并与实际运行时代码保持一致",
      "应尽量把扩展范围限制在明确入口，避免让全局类型与真实环境不一致"
    ],
    "difficulty": 3,
    "followUps": [
      "给 Window 添加属性时如何保证运行时也完成初始化？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-js-interop",
    "category": "typescript",
    "tags": [
      "迁移",
      "JavaScript"
    ],
    "title": "allowJs、checkJs 和 JSDoc 如何帮助渐进迁移？",
    "answer": "allowJs 允许 TypeScript 项目包含 JavaScript 文件，checkJs 进一步对其执行类型检查。JSDoc 可以在不改为 .ts 的情况下补充参数、返回值和泛型等类型信息。\n\n渐进迁移应先收紧边界和高风险模块，再逐步提高严格配置，避免一次开启所有规则导致大量断言。",
    "keyPoints": [
      "allowJs 允许 TypeScript 项目包含 JavaScript 文件，checkJs 进一步对其执行类型检查",
      "JSDoc 可以在不改为 .ts 的情况下补充参数、返回值和泛型等类型信息",
      "渐进迁移应先收紧边界和高风险模块，再逐步提高严格配置，避免一次开启所有规则导致大量断言"
    ],
    "difficulty": 1,
    "followUps": [
      "大型 JavaScript 项目应如何安排 TypeScript 迁移顺序？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-type-composition",
    "category": "typescript",
    "tags": [
      "高级类型",
      "类型运算"
    ],
    "title": "TypeScript 如何从已有类型组合出新类型？",
    "answer": "联合和交叉类型分别表达多种可能与同时满足多组约束。keyof、索引访问和映射类型可以从对象键和值关系派生新结构。\n\n条件类型与 infer 能按类型关系选择和提取信息，但复杂类型应控制递归和分发成本。",
    "keyPoints": [
      "联合和交叉类型分别表达多种可能与同时满足多组约束",
      "keyof、索引访问和映射类型可以从对象键和值关系派生新结构",
      "条件类型与 infer 能按类型关系选择和提取信息，但复杂类型应控制递归和分发成本"
    ],
    "difficulty": 3,
    "followUps": [
      "什么时候应把复杂类型运算改为显式领域类型？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "ts-modules-namespaces",
    "category": "typescript",
    "tags": [
      "模块",
      "命名空间"
    ],
    "title": "TypeScript 中模块与 namespace 有什么区别？",
    "answer": "包含顶层 import 或 export 的文件是模块，依赖关系由模块加载器和工具链处理。namespace 主要在全局脚本中组织名称，历史上被称为内部模块。\n\n现代应用通常优先 ES Module，namespace 更多用于特定声明文件或非模块脚本兼容。",
    "keyPoints": [
      "包含顶层 import 或 export 的文件是模块，依赖关系由模块加载器和工具链处理",
      "namespace 主要在全局脚本中组织名称，历史上被称为内部模块",
      "现代应用通常优先 ES Module，namespace 更多用于特定声明文件或非模块脚本兼容"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么现代打包项目通常不推荐 namespace？"
    ],
    "references": [
      {
        "title": "TypeScript Handbook",
        "url": "https://www.typescriptlang.org/docs/handbook/intro.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-reactivity",
    "category": "vue",
    "tags": [
      "响应式"
    ],
    "title": "Vue 3 的响应式系统如何追踪依赖？",
    "answer": "Vue 3 使用 Proxy 拦截对象访问与修改。组件或 computed 在读取响应式值时收集依赖，值变化后触发相关副作用重新执行。\n\nref 用于包装单个值，reactive 用于对象；解构 reactive 属性可能丢失响应式连接，可使用 toRefs。",
    "keyPoints": [
      "Proxy 拦截 get/set",
      "读取时收集、修改时触发",
      "ref 与 reactive 使用场景不同"
    ],
    "difficulty": 2,
    "updatedAt": "2026-08-12"
  },
  {
    "id": "vue-computed-watch",
    "category": "vue",
    "tags": [
      "Composition API"
    ],
    "title": "computed 与 watch 的区别是什么？",
    "answer": "computed 用于从已有状态推导新值，结果会缓存，只有依赖变化才重新计算；watch 用于监听变化并执行副作用，例如请求数据、写入缓存。\n\n不要用 watch 去维护本可由 computed 推导出的状态。",
    "keyPoints": [
      "computed 是派生状态",
      "watch 用于副作用",
      "computed 有缓存"
    ],
    "difficulty": 1,
    "updatedAt": "2026-08-12"
  },
  {
    "id": "vue-sfc-structure",
    "category": "vue",
    "tags": [
      "SFC",
      "基础"
    ],
    "title": "Vue 单文件组件由哪些部分组成？",
    "answer": "单文件组件通常由 template、script 和 style 三部分组成。template 描述视图，script 管理逻辑，style 管理样式；setup 属性让 script 直接使用 Composition API 与编译宏。\n\n它是一种构建期文件格式，需要由 Vue 的编译工具处理。",
    "keyPoints": [
      "template、script、style 分离关注点",
      "script setup 是编译期语法",
      "SFC 需要构建工具编译"
    ],
    "difficulty": 1,
    "followUps": [
      "script setup 中为什么不需要手动返回模板变量？"
    ],
    "references": [
      {
        "title": "Vue - Single-File Components",
        "url": "https://vuejs.org/guide/scaling-up/sfc.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-template-syntax",
    "category": "vue",
    "tags": [
      "模板",
      "基础"
    ],
    "title": "Vue 模板中插值与指令分别适合什么场景？",
    "answer": "双大括号插值用于渲染文本，表达式会转为字符串。指令以 v- 开头，用于响应式地操作属性、事件或 DOM 行为，例如 v-bind、v-on 和 v-if。\n\n模板表达式应保持简单，复杂计算放进 computed 或方法中。",
    "keyPoints": [
      "插值主要输出文本",
      "指令为元素附加响应式行为",
      "模板表达式只支持单个表达式"
    ],
    "difficulty": 1,
    "followUps": [
      "v-html 有什么安全风险？"
    ],
    "references": [
      {
        "title": "Vue - Template Syntax",
        "url": "https://vuejs.org/guide/essentials/template-syntax.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-bind-model",
    "category": "vue",
    "tags": [
      "v-bind",
      "v-model"
    ],
    "title": "v-bind 与 v-model 的区别是什么？",
    "answer": "v-bind 将 JavaScript 值单向绑定到属性或 prop。v-model 是表单或组件双向绑定的语法糖，包含值传入和更新事件监听。\n\n组件上的默认 v-model 对应 modelValue prop 与 update:modelValue 事件，也可以声明命名 model。",
    "keyPoints": [
      "v-bind 是单向绑定",
      "v-model 组合 prop 与更新事件",
      "组件可定义多个命名 model"
    ],
    "difficulty": 1,
    "followUps": [
      "如何为自定义组件实现 v-model？"
    ],
    "references": [
      {
        "title": "Vue - Component v-model",
        "url": "https://vuejs.org/guide/components/v-model.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-ref-basics",
    "category": "vue",
    "tags": [
      "ref",
      "响应式"
    ],
    "title": "ref 创建的值为什么在脚本中要访问 .value？",
    "answer": "JavaScript 无法拦截普通局部变量的读写，ref 用带 value 访问器的对象承载值，以便追踪读取与触发更新。模板会自动解包顶层 ref，因此通常不写 .value。\n\n嵌套在 reactive 对象中的 ref 也会在属性访问时解包，但数组和原生集合中的 ref 不会自动解包。",
    "keyPoints": [
      "value 访问器提供追踪入口",
      "模板会解包顶层 ref",
      "数组与集合中的 ref 仍需 .value"
    ],
    "difficulty": 1,
    "followUps": [
      "模板 ref 与响应式 ref 有什么关系？"
    ],
    "references": [
      {
        "title": "Vue - Reactivity Fundamentals",
        "url": "https://vuejs.org/guide/essentials/reactivity-fundamentals.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-reactive-basics",
    "category": "vue",
    "tags": [
      "reactive",
      "响应式"
    ],
    "title": "reactive 有哪些常见限制？",
    "answer": "reactive 只适用于对象类型，返回的是原对象的 Proxy。替换整个响应式对象会断开旧对象的依赖连接，直接解构基本类型属性也会失去响应性。\n\n需要可替换的整体状态或基本类型时，通常优先使用 ref。",
    "keyPoints": [
      "只接收对象类型",
      "返回 Proxy 而非原对象",
      "替换或解构可能断开响应式连接"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么调用接收普通值的函数也会丢失响应性？"
    ],
    "references": [
      {
        "title": "Vue - Limitations of reactive",
        "url": "https://vuejs.org/guide/essentials/reactivity-fundamentals.html#limitations-of-reactive"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-props-one-way-flow",
    "category": "vue",
    "tags": [
      "组件通信",
      "props"
    ],
    "title": "为什么不应直接修改 Vue 组件的 props？",
    "answer": "props 遵循父到子的单向数据流，父组件更新时会刷新子组件的 props。子组件直接赋值会收到警告，也容易让数据来源难以追踪。\n\n需要本地初始值时创建本地 ref，需要变更父状态时触发事件，由父组件完成更新。",
    "keyPoints": [
      "props 是只读输入",
      "父组件拥有状态所有权",
      "通过 emit 请求父组件更新"
    ],
    "difficulty": 1,
    "followUps": [
      "对象 prop 的嵌套属性为什么仍可能被修改？"
    ],
    "references": [
      {
        "title": "Vue - One-Way Data Flow",
        "url": "https://vuejs.org/guide/components/props.html#one-way-data-flow"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-component-events",
    "category": "vue",
    "tags": [
      "组件通信",
      "emits"
    ],
    "title": "Vue 组件事件如何声明与传递参数？",
    "answer": "子组件用 defineEmits 声明事件并调用返回的 emit 函数，父组件通过 v-on 监听。事件参数作为 emit 的后续参数传递，TypeScript 项目可为事件名和参数建立类型约束。\n\n组件事件只会传给直接父组件，不像原生 DOM 事件那样冒泡。",
    "keyPoints": [
      "defineEmits 声明公共事件",
      "参数随 emit 传递",
      "组件事件不会自动冒泡"
    ],
    "difficulty": 1,
    "followUps": [
      "如何对事件参数做运行时校验？"
    ],
    "references": [
      {
        "title": "Vue - Component Events",
        "url": "https://vuejs.org/guide/components/events.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-slots-basics",
    "category": "vue",
    "tags": [
      "插槽",
      "组件设计"
    ],
    "title": "默认插槽、具名插槽和作用域插槽分别解决什么问题？",
    "answer": "默认插槽承载主要内容，具名插槽让父组件填充多个明确区域，作用域插槽让子组件把数据暴露给父组件提供的模板。\n\n插槽内容在父组件作用域中求值，不能直接访问子组件内部状态，除非子组件通过 slot props 暴露。",
    "keyPoints": [
      "具名插槽对应多个内容区域",
      "作用域插槽向外暴露数据",
      "插槽内容属于父级作用域"
    ],
    "difficulty": 1,
    "followUps": [
      "无渲染组件如何利用作用域插槽复用逻辑？"
    ],
    "references": [
      {
        "title": "Vue - Slots",
        "url": "https://vuejs.org/guide/components/slots.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-lifecycle-hooks",
    "category": "vue",
    "tags": [
      "生命周期",
      "Composition API"
    ],
    "title": "Vue 3 组件常用生命周期钩子的执行时机是什么？",
    "answer": "setup 在组件实例创建阶段同步执行；onMounted 在组件 DOM 首次创建并插入后调用；onUpdated 在响应式更新刷新 DOM 后调用；onUnmounted 在组件卸载后调用。\n\n清理定时器、订阅和事件监听通常放在 onUnmounted，服务端渲染期间不会调用 onMounted。",
    "keyPoints": [
      "setup 同步注册钩子",
      "mounted 后可访问组件 DOM",
      "unmounted 负责清理副作用"
    ],
    "difficulty": 1,
    "followUps": [
      "父子组件的 mounted 钩子顺序如何理解？"
    ],
    "references": [
      {
        "title": "Vue - Lifecycle Hooks",
        "url": "https://vuejs.org/guide/essentials/lifecycle.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-if-show",
    "category": "vue",
    "tags": [
      "条件渲染",
      "性能"
    ],
    "title": "v-if 与 v-show 应该如何选择？",
    "answer": "v-if 按条件创建或销毁分支，初始条件为假时不会渲染；v-show 始终创建元素，只切换 CSS display。\n\n条件很少改变时 v-if 通常合适，频繁切换且节点创建成本较高时可考虑 v-show。",
    "keyPoints": [
      "v-if 控制挂载与卸载",
      "v-show 控制 display",
      "选择取决于初始与切换成本"
    ],
    "difficulty": 1,
    "followUps": [
      "v-if 与 v-for 同时使用为什么不推荐？"
    ],
    "references": [
      {
        "title": "Vue - v-if vs. v-show",
        "url": "https://vuejs.org/guide/essentials/conditional.html#v-if-vs-v-show"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-list-key",
    "category": "vue",
    "tags": [
      "列表渲染",
      "key"
    ],
    "title": "Vue 列表渲染中的 key 有什么作用？",
    "answer": "key 为同级虚拟节点提供稳定身份，帮助 Vue 在列表变化时复用、移动或卸载正确的节点，并保留对应组件状态和表单 DOM 状态。\n\nkey 应来自稳定唯一的业务标识；列表会重排时不宜使用索引。",
    "keyPoints": [
      "key 标识同级节点身份",
      "影响 DOM 与组件状态复用",
      "优先使用稳定业务 ID"
    ],
    "difficulty": 1,
    "followUps": [
      "什么场景下故意改变 key 可以重置组件？"
    ],
    "references": [
      {
        "title": "Vue - Maintaining State with key",
        "url": "https://vuejs.org/guide/essentials/list.html#maintaining-state-with-key"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-class-style-binding",
    "category": "vue",
    "tags": [
      "样式绑定",
      "模板"
    ],
    "title": "Vue 如何动态绑定 class 和内联 style？",
    "answer": "v-bind:class 支持字符串、对象和数组，对象键按布尔值切换类名。v-bind:style 支持样式对象或数组，属性可用 camelCase 或短横线写法。\n\n组件根元素上的静态 class 与父组件传入的 class 会合并。",
    "keyPoints": [
      "class 支持字符串、对象和数组",
      "style 推荐绑定对象",
      "根元素 class 可自动合并"
    ],
    "difficulty": 1,
    "followUps": [
      "频繁创建新的 style 对象会带来什么影响？"
    ],
    "references": [
      {
        "title": "Vue - Class and Style Bindings",
        "url": "https://vuejs.org/guide/essentials/class-and-style.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-form-modifiers",
    "category": "vue",
    "tags": [
      "表单",
      "v-model"
    ],
    "title": "v-model 的 lazy、number 和 trim 修饰符分别做什么？",
    "answer": "lazy 让文本输入在 change 而不是 input 事件后同步；number 尝试把输入转换为数字；trim 会去掉输入字符串首尾空白。\n\nnumber 转换失败时会保留原字符串，因此业务校验仍不可省略。",
    "keyPoints": [
      "lazy 改变同步事件",
      "number 尝试数值转换",
      "trim 去除首尾空白"
    ],
    "difficulty": 1,
    "followUps": [
      "自定义组件如何支持自定义 v-model 修饰符？"
    ],
    "references": [
      {
        "title": "Vue - v-model modifiers",
        "url": "https://vuejs.org/guide/essentials/forms.html#modifiers"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-event-modifiers",
    "category": "vue",
    "tags": [
      "事件",
      "模板"
    ],
    "title": "Vue 事件修饰符解决了什么问题？",
    "answer": "事件修饰符把 preventDefault、stopPropagation、once 和监听阶段等 DOM 细节留在模板中，使方法专注业务逻辑。常见修饰符包括 .stop、.prevent、.self、.capture、.once 和 .passive。\n\n修饰符顺序会影响生成代码语义，.passive 与 .prevent 不应同时使用。",
    "keyPoints": [
      "声明式处理 DOM 事件细节",
      "修饰符顺序有语义",
      "passive 监听器不能阻止默认行为"
    ],
    "difficulty": 1,
    "followUps": [
      ".self 与 .stop 在事件委托场景有何区别？"
    ],
    "references": [
      {
        "title": "Vue - Event Modifiers",
        "url": "https://vuejs.org/guide/essentials/event-handling.html#event-modifiers"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-watch-effect",
    "category": "vue",
    "tags": [
      "watchEffect",
      "副作用"
    ],
    "title": "watch 与 watchEffect 的依赖追踪方式有什么不同？",
    "answer": "watch 显式指定数据源，只在源发生变化时执行回调，并能访问新旧值。watchEffect 会立即执行，在同步执行期间自动追踪读取的响应式依赖。\n\n异步 watchEffect 只追踪第一个 await 之前读取的依赖；需要精确控制时优先 watch。",
    "keyPoints": [
      "watch 显式声明数据源",
      "watchEffect 自动收集同步依赖",
      "异步边界会结束自动收集"
    ],
    "difficulty": 2,
    "followUps": [
      "如何取消上一次监听触发的异步请求？"
    ],
    "references": [
      {
        "title": "Vue - watchEffect",
        "url": "https://vuejs.org/guide/essentials/watchers.html#watcheffect"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-shallow-ref",
    "category": "vue",
    "tags": [
      "shallowRef",
      "性能"
    ],
    "title": "shallowRef 适合保存什么数据？",
    "answer": "shallowRef 只让 .value 的替换具有响应性，不会深度转换内部对象。它适合大型不可变数据、第三方实例或由外部状态系统管理的对象。\n\n直接修改内部属性不会触发更新，需替换整个 value 或显式调用 triggerRef。",
    "keyPoints": [
      "只追踪 value 替换",
      "避免深层代理成本",
      "内部突变默认不触发更新"
    ],
    "difficulty": 2,
    "followUps": [
      "shallowReactive 与 shallowRef 如何选择？"
    ],
    "references": [
      {
        "title": "Vue - Reduce Reactivity Overhead",
        "url": "https://vuejs.org/guide/best-practices/performance.html#reduce-reactivity-overhead-for-large-immutable-structures"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-to-ref-to-refs",
    "category": "vue",
    "tags": [
      "toRef",
      "toRefs"
    ],
    "title": "toRef 与 toRefs 如何避免响应式解构丢失？",
    "answer": "toRef 为对象的单个属性建立双向连接的 ref，toRefs 把响应式对象的每个可枚举属性转换为相连的 ref。解构这些 ref 后，读写仍会映射到源对象。\n\ntoRefs 只处理调用时已存在的属性，可能不存在的属性用 toRef 更合适。",
    "keyPoints": [
      "属性 ref 与源对象双向连接",
      "toRefs 适合组合式函数返回对象",
      "可选属性优先 toRef"
    ],
    "difficulty": 2,
    "followUps": [
      "toRef 与 computed 的 getter 写法有什么区别？"
    ],
    "references": [
      {
        "title": "Vue - toRef and toRefs",
        "url": "https://vuejs.org/api/reactivity-utilities.html#toref"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-composables-design",
    "category": "vue",
    "tags": [
      "组合式函数",
      "复用"
    ],
    "title": "如何设计一个可靠的 Vue 组合式函数？",
    "answer": "组合式函数用 ref、computed 和生命周期钩子封装有状态逻辑，命名通常以 use 开头。输入可用 toValue 兼容值、ref 或 getter，输出通常返回多个 ref，便于解构且保持响应性。\n\n它应明确副作用何时建立和清理，并避免隐藏的全局共享状态。",
    "keyPoints": [
      "封装有状态逻辑而非 UI",
      "输入输出保留响应性",
      "副作用必须有清理边界"
    ],
    "difficulty": 2,
    "followUps": [
      "组合式函数与无渲染组件的取舍是什么？"
    ],
    "references": [
      {
        "title": "Vue - Composables",
        "url": "https://vuejs.org/guide/reusability/composables.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-provide-inject",
    "category": "vue",
    "tags": [
      "provide",
      "inject",
      "组件通信"
    ],
    "title": "provide 与 inject 适合解决什么问题？",
    "answer": "provide/inject 让祖先向任意后代提供依赖，避免中间组件逐层透传 props。为了保持可维护性，通常由提供方集中修改状态，对外提供 readonly 状态和明确的更新函数。\n\n大型项目可使用 Symbol 作为注入键，并通过 InjectionKey 获得 TypeScript 类型。",
    "keyPoints": [
      "解决深层依赖传递",
      "响应式值应以 ref 或 reactive 提供",
      "Symbol 键减少命名冲突"
    ],
    "difficulty": 2,
    "followUps": [
      "inject 找不到提供值时如何设置默认值？"
    ],
    "references": [
      {
        "title": "Vue - Provide / Inject",
        "url": "https://vuejs.org/guide/components/provide-inject.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-custom-directives",
    "category": "vue",
    "tags": [
      "自定义指令",
      "DOM"
    ],
    "title": "什么场景适合使用 Vue 自定义指令？",
    "answer": "自定义指令适合封装需要直接操作底层 DOM 的可复用行为，如聚焦、拖拽或权限可见性。它提供 mounted、updated、unmounted 等钩子访问元素与绑定值。\n\n能够用组件或组合式函数表达的逻辑通常不应改用指令，避免生命周期和状态流变得隐蔽。",
    "keyPoints": [
      "聚焦底层 DOM 复用",
      "钩子与组件生命周期相近",
      "业务结构优先用组件表达"
    ],
    "difficulty": 2,
    "followUps": [
      "自定义指令如何清理事件监听器？"
    ],
    "references": [
      {
        "title": "Vue - Custom Directives",
        "url": "https://vuejs.org/guide/reusability/custom-directives.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-teleport",
    "category": "vue",
    "tags": [
      "Teleport",
      "组件"
    ],
    "title": "Teleport 为什么适合实现弹窗？",
    "answer": "Teleport 把一段模板渲染到组件 DOM 层级之外的目标容器，避免祖先的 overflow、transform 或层叠上下文干扰弹窗定位。\n\n它只改变真实 DOM 位置，组件逻辑层级不变，因此 props、事件和 provide/inject 仍按原组件树工作。",
    "keyPoints": [
      "跨 DOM 容器渲染",
      "逻辑组件树保持不变",
      "适合模态框与全局浮层"
    ],
    "difficulty": 2,
    "followUps": [
      "多个 Teleport 能否挂载到同一目标？"
    ],
    "references": [
      {
        "title": "Vue - Teleport",
        "url": "https://vuejs.org/guide/built-ins/teleport.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-suspense",
    "category": "vue",
    "tags": [
      "Suspense",
      "异步组件"
    ],
    "title": "Vue Suspense 的作用和使用限制是什么？",
    "answer": "Suspense 可以协调组件树中的异步 setup 和异步组件，在依赖完成前显示 fallback，完成后一次切换到默认内容。\n\n截至 Vue 3 官方文档仍将其标为实验性功能，API 可能变化；生产使用应评估版本并准备普通 loading 状态。",
    "keyPoints": [
      "协调异步依赖",
      "default 与 fallback 两个插槽",
      "实验性 API 需关注版本"
    ],
    "difficulty": 2,
    "followUps": [
      "Suspense 与异步组件自己的 loadingComponent 如何协作？"
    ],
    "references": [
      {
        "title": "Vue - Suspense",
        "url": "https://vuejs.org/guide/built-ins/suspense.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-async-components",
    "category": "vue",
    "tags": [
      "异步组件",
      "代码分割"
    ],
    "title": "defineAsyncComponent 如何实现组件懒加载？",
    "answer": "defineAsyncComponent 接收返回 Promise 的加载函数，只在组件实际渲染时请求实现，常与动态 import 配合形成独立代码块。\n\n高级配置可设置 loading、error、delay、timeout 以及重试策略；路由页面通常直接使用路由器的动态 import。",
    "keyPoints": [
      "按实际渲染时机加载",
      "动态 import 支持代码分割",
      "可配置加载与失败状态"
    ],
    "difficulty": 2,
    "followUps": [
      "异步组件加载失败如何实现重试？"
    ],
    "references": [
      {
        "title": "Vue - Async Components",
        "url": "https://vuejs.org/guide/components/async.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-keep-alive",
    "category": "vue",
    "tags": [
      "KeepAlive",
      "缓存"
    ],
    "title": "KeepAlive 如何缓存动态组件状态？",
    "answer": "KeepAlive 包裹动态组件时会缓存已移出的组件实例，而不是卸载它们。再次切换回来时复用实例和本地状态。\n\n缓存组件会经历 activated 与 deactivated，include、exclude 和 max 可控制范围；被停用时仍要考虑持续运行的副作用。",
    "keyPoints": [
      "缓存组件实例而非 DOM 快照",
      "使用激活与停用生命周期",
      "可限制缓存名称和数量"
    ],
    "difficulty": 2,
    "followUps": [
      "KeepAlive 与路由页面缓存如何配合？"
    ],
    "references": [
      {
        "title": "Vue - KeepAlive",
        "url": "https://vuejs.org/guide/built-ins/keep-alive.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-transition",
    "category": "vue",
    "tags": [
      "Transition",
      "动画"
    ],
    "title": "Transition 组件如何驱动进入和离开动画？",
    "answer": "Transition 为单个元素或组件的插入、移除添加阶段类名，也可使用 JavaScript 钩子。它由 v-if、v-show、动态组件或 key 变化触发。\n\nVue 会侦测首个 transitionend 或 animationend；混用多段动画时可显式指定 type 或 duration。",
    "keyPoints": [
      "基于插入和移除阶段",
      "支持 CSS 类与 JavaScript 钩子",
      "只接受单个直接子节点"
    ],
    "difficulty": 2,
    "followUps": [
      "TransitionGroup 为什么要求每个列表项有 key？"
    ],
    "references": [
      {
        "title": "Vue - Transition",
        "url": "https://vuejs.org/guide/built-ins/transition.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-next-tick",
    "category": "vue",
    "tags": [
      "nextTick",
      "更新机制"
    ],
    "title": "什么时候需要使用 nextTick？",
    "answer": "Vue 会缓冲同一轮同步代码中的状态变化，在下一次更新周期批量刷新 DOM。修改响应式状态后若必须读取更新后的 DOM，可 await nextTick。\n\nnextTick 只等待 Vue 当前 DOM 更新完成，不等同于等待浏览器完成绘制，也不应成为修复状态设计的常规手段。",
    "keyPoints": [
      "DOM 更新是异步批处理",
      "nextTick 等待当前刷新完成",
      "不保证浏览器已经绘制"
    ],
    "difficulty": 2,
    "followUps": [
      "nextTick 与 Promise 微任务是什么关系？"
    ],
    "references": [
      {
        "title": "Vue - nextTick",
        "url": "https://vuejs.org/api/general.html#nexttick"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-component-v-model",
    "category": "vue",
    "tags": [
      "组件通信",
      "v-model"
    ],
    "title": "一个组件如何支持多个 v-model？",
    "answer": "Vue 3.4 及以上可用 defineModel 为默认或命名 model 声明绑定，父组件使用 v-model:first-name 等参数。较早的 Vue 3 写法是分别声明 prop 与 update:propName 事件。\n\n每个 model 都应有清晰的数据所有权，并谨慎使用 get/set 转换避免父子值不一致。",
    "keyPoints": [
      "命名参数支持多个 model",
      "defineModel 是编译宏",
      "旧写法是 prop 加 update 事件"
    ],
    "difficulty": 2,
    "followUps": [
      "defineModel 的默认值为什么可能造成不同步？"
    ],
    "references": [
      {
        "title": "Vue - Component v-model",
        "url": "https://vuejs.org/guide/components/v-model.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-fallthrough-attributes",
    "category": "vue",
    "tags": [
      "透传属性",
      "组件设计"
    ],
    "title": "Vue 的透传属性是什么，如何控制它们？",
    "answer": "未在 props 或 emits 中声明的属性和监听器称为透传属性。单根组件会默认把它们加到根元素，并合并 class、style 与监听器。\n\n多根组件不会自动透传；可设置 inheritAttrs: false，并通过 useAttrs 或 $attrs 显式绑定到合适节点。",
    "keyPoints": [
      "未声明属性进入 attrs",
      "单根组件默认继承",
      "多根或封装组件需显式分配"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么声明 emits 会影响同名监听器的透传？"
    ],
    "references": [
      {
        "title": "Vue - Fallthrough Attributes",
        "url": "https://vuejs.org/guide/components/attrs.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-scoped-css",
    "category": "vue",
    "tags": [
      "SFC",
      "CSS"
    ],
    "title": "Vue scoped CSS 的作用原理是什么？",
    "answer": "SFC 编译器为组件元素和选择器添加同一作用域属性，使规则通常只匹配当前组件。它不是 Shadow DOM，父组件的 scoped 样式仍可影响子组件根元素。\n\n需要命中子组件内部可使用 :deep()，插槽内容用 :slotted()，全局规则用 :global()。",
    "keyPoints": [
      "通过编译后的属性选择器隔离",
      "不是浏览器原生 Shadow DOM",
      "深度选择器应谨慎使用"
    ],
    "difficulty": 2,
    "followUps": [
      "scoped CSS 对选择器性能有什么影响？"
    ],
    "references": [
      {
        "title": "Vue Loader - Scoped CSS",
        "url": "https://vue-loader.vuejs.org/guide/scoped-css.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-pinia-state",
    "category": "vue",
    "tags": [
      "Pinia",
      "状态管理"
    ],
    "title": "Pinia 中 state、getter 和 action 各承担什么职责？",
    "answer": "state 保存可变业务状态，getter 表达可缓存的派生状态，action 封装同步或异步业务操作。组件通过 store 使用它们，解构响应式状态时应用 storeToRefs。\n\nPinia 是 Vue 官方推荐的状态管理库，但局部状态仍应留在组件或组合式函数中。",
    "keyPoints": [
      "state 存原始状态",
      "getter 表达派生值",
      "action 组织业务变更"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么直接解构 store 会丢失响应性？"
    ],
    "references": [
      {
        "title": "Pinia - Core Concepts",
        "url": "https://pinia.vuejs.org/core-concepts/"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-router-guards",
    "category": "vue",
    "tags": [
      "Vue Router",
      "导航守卫"
    ],
    "title": "Vue Router 导航守卫应该如何划分职责？",
    "answer": "全局 beforeEach 适合认证和全局策略，路由独享 beforeEnter 处理特定记录，组件内守卫处理与组件实例相关的离开或更新逻辑。\n\n守卫可返回 false、重定向位置或抛出错误；现代写法优先返回值，避免旧式 next 被重复调用。",
    "keyPoints": [
      "按全局、路由、组件划分",
      "返回值决定取消或重定向",
      "异步守卫会阻塞导航确认"
    ],
    "difficulty": 2,
    "followUps": [
      "认证重定向如何避免无限循环？"
    ],
    "references": [
      {
        "title": "Vue Router - Navigation Guards",
        "url": "https://router.vuejs.org/guide/advanced/navigation-guards.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-router-dynamic-routes",
    "category": "vue",
    "tags": [
      "Vue Router",
      "动态路由"
    ],
    "title": "Vue Router 如何动态添加路由？",
    "answer": "router.addRoute 可在运行时添加路由记录，并返回移除函数。若当前地址已经匹配新路由，需要 replace 当前 fullPath 或在守卫中返回新地址，才能展示新匹配结果。\n\n动态路由适合权限模块或插件系统，但服务端仍必须校验权限，前端路由不是安全边界。",
    "keyPoints": [
      "addRoute 修改匹配器",
      "新增后可能需要 replace",
      "前端权限控制不替代服务端鉴权"
    ],
    "difficulty": 2,
    "followUps": [
      "同名路由再次添加时会发生什么？"
    ],
    "references": [
      {
        "title": "Vue Router - Dynamic Routing",
        "url": "https://router.vuejs.org/guide/advanced/dynamic-routing.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-reactive-collections",
    "category": "vue",
    "tags": [
      "响应式",
      "Map",
      "Set"
    ],
    "title": "Vue 3 如何追踪 Map 和 Set 的变化？",
    "answer": "Vue 为 Map、Set 等集合类型提供专门的 Proxy 处理，追踪 get、has、size、迭代等读取，并在 set、add、delete、clear 时触发相关依赖。\n\n集合中存取的对象可能返回响应式代理；比较身份时应保持使用同一层的代理对象，避免混用原对象。",
    "keyPoints": [
      "集合方法由专门代理处理",
      "迭代和 size 也会建立依赖",
      "注意原对象与代理身份差异"
    ],
    "difficulty": 2,
    "followUps": [
      "修改 Map 中对象的嵌套属性会触发哪些依赖？"
    ],
    "references": [
      {
        "title": "Vue - reactive",
        "url": "https://vuejs.org/api/reactivity-core.html#reactive"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-update-scheduler",
    "category": "vue",
    "tags": [
      "调度器",
      "渲染"
    ],
    "title": "Vue 为什么要批量调度组件更新？",
    "answer": "同一同步任务中状态可能被多次修改，Vue 会把相关组件更新任务去重并排入队列，在微任务阶段统一刷新，避免重复渲染和中间 DOM 状态。\n\nwatch 的 flush 选项可选择 pre、post 或 sync；sync 不批处理，应只用于简单且低频的数据源。",
    "keyPoints": [
      "更新任务会排队与去重",
      "批处理避免重复 DOM 操作",
      "flush 控制监听回调时机"
    ],
    "difficulty": 2,
    "followUps": [
      "post flush 的 watcher 适合读取什么状态？"
    ],
    "references": [
      {
        "title": "Vue - Callback Flush Timing",
        "url": "https://vuejs.org/guide/essentials/watchers.html#callback-flush-timing"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-readonly-state",
    "category": "vue",
    "tags": [
      "readonly",
      "状态设计"
    ],
    "title": "readonly 与 const 的约束有什么不同？",
    "answer": "const 只禁止变量重新赋值，仍可修改对象属性。readonly 返回深层只读代理，写入时开发环境会警告，同时继续追踪源对象变化。\n\n它常用于组合式函数或 provide 暴露只读状态，再配合明确的命令函数完成修改。",
    "keyPoints": [
      "const 约束变量绑定",
      "readonly 约束代理属性写入",
      "只读代理仍响应源对象变化"
    ],
    "difficulty": 2,
    "followUps": [
      "shallowReadonly 常用于什么场景？"
    ],
    "references": [
      {
        "title": "Vue - readonly",
        "url": "https://vuejs.org/api/reactivity-core.html#readonly"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-define-expose",
    "category": "vue",
    "tags": [
      "defineExpose",
      "组件封装"
    ],
    "title": "script setup 组件为什么需要 defineExpose？",
    "answer": "script setup 组件默认关闭公共实例，父组件通过模板 ref 不能任意访问其内部变量。defineExpose 显式声明允许父组件访问的属性和方法，形成受控的命令式接口。\n\n应优先使用 props 与事件通信，只在聚焦、滚动等确需命令式控制时暴露最小接口。",
    "keyPoints": [
      "script setup 默认不暴露内部绑定",
      "defineExpose 声明公共实例接口",
      "命令式 API 应保持最小"
    ],
    "difficulty": 2,
    "followUps": [
      "异步组件中 defineExpose 的调用时机有什么要求？"
    ],
    "references": [
      {
        "title": "Vue - Template Refs on Component",
        "url": "https://vuejs.org/guide/essentials/template-refs.html#ref-on-component"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-typescript-props-emits",
    "category": "vue",
    "tags": [
      "TypeScript",
      "props",
      "emits"
    ],
    "title": "Vue 3 中如何为 props 和 emits 提供类型安全？",
    "answer": "script setup 可向 defineProps 和 defineEmits 传入类型参数，由编译器生成模板和脚本类型，并在支持范围内推导运行时声明。withDefaults 可为类型式 props 设置默认值。\n\n类型校验只发生在开发与构建阶段，来自网络或存储的数据仍需运行时校验。",
    "keyPoints": [
      "编译宏接受类型参数",
      "事件名和载荷都可约束",
      "外部不可信数据仍需运行时验证"
    ],
    "difficulty": 2,
    "followUps": [
      "类型式声明和运行时声明能否同时使用？"
    ],
    "references": [
      {
        "title": "Vue - TypeScript with Composition API",
        "url": "https://vuejs.org/guide/typescript/composition-api.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-large-list-performance",
    "category": "vue",
    "tags": [
      "性能",
      "列表"
    ],
    "title": "Vue 大列表渲染可以从哪些方面优化？",
    "answer": "先减少需要挂载的 DOM：分页或虚拟列表通常收益最大。随后稳定子组件 props、使用 key、避免模板中重复重计算，并把大型不可变数据放进 shallowRef。\n\nv-once 适合永久静态内容，v-memo 可按依赖跳过子树更新，但应在测量确认瓶颈后使用。",
    "keyPoints": [
      "虚拟化减少 DOM 数量",
      "稳定 props 降低子组件更新",
      "性能指令需基于测量使用"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么只给列表项加 memo 不一定有效？"
    ],
    "references": [
      {
        "title": "Vue - Performance Best Practices",
        "url": "https://vuejs.org/guide/best-practices/performance.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-template-refs",
    "category": "vue",
    "tags": [
      "模板 ref",
      "DOM"
    ],
    "title": "模板 ref 的可用时机和类型应该如何处理？",
    "answer": "模板 ref 只在组件挂载后指向元素或组件实例，在条件渲染移除节点时可能重新变为 null，因此访问前要判空。Vue 3.5 及以上可用 useTemplateRef 获取更好的静态类型推导。\n\n模板 ref 用于不可声明式表达的 DOM 操作，不应替代正常数据流。",
    "keyPoints": [
      "挂载前与卸载后可能为空",
      "条件渲染会改变引用",
      "Vue 3.5 可用 useTemplateRef"
    ],
    "difficulty": 2,
    "followUps": [
      "v-for 中的模板 ref 最终是什么结构？"
    ],
    "references": [
      {
        "title": "Vue - Template Refs",
        "url": "https://vuejs.org/guide/essentials/template-refs.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-error-handling",
    "category": "vue",
    "tags": [
      "错误处理",
      "可观测性"
    ],
    "title": "Vue 应用如何分层捕获组件错误？",
    "answer": "组件可用 onErrorCaptured 捕获后代在渲染、事件和生命周期中的错误；应用级可配置 app.config.errorHandler 统一上报。异步业务请求自身的拒绝仍应在业务边界处理。\n\n错误处理器应记录组件和操作上下文，并提供可恢复 UI，不能只吞掉异常。",
    "keyPoints": [
      "组件边界处理局部降级",
      "全局处理器用于统一上报",
      "异步业务错误需显式捕获"
    ],
    "difficulty": 2,
    "followUps": [
      "onErrorCaptured 返回 false 有什么效果？"
    ],
    "references": [
      {
        "title": "Vue - onErrorCaptured",
        "url": "https://vuejs.org/api/composition-api-lifecycle.html#onerrorcaptured"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-plugin-design",
    "category": "vue",
    "tags": [
      "插件",
      "应用 API"
    ],
    "title": "一个 Vue 插件通常如何扩展应用？",
    "answer": "插件导出 install 方法或函数，由 app.use 调用。它可以注册全局组件和指令、通过 provide 提供资源，或添加 globalProperties。\n\n插件应避免隐式修改大量全局行为，为配置提供类型和默认值，并确保重复安装不会产生额外副作用。",
    "keyPoints": [
      "app.use 调用 install",
      "可注册全局资源或 provide",
      "控制全局影响与重复安装"
    ],
    "difficulty": 2,
    "followUps": [
      "插件中的全局属性如何获得 TypeScript 类型？"
    ],
    "references": [
      {
        "title": "Vue - Plugins",
        "url": "https://vuejs.org/guide/reusability/plugins.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-render-functions",
    "category": "vue",
    "tags": [
      "渲染函数",
      "h"
    ],
    "title": "什么时候应使用渲染函数而不是模板？",
    "answer": "模板更直观并可获得编译器优化；当视图结构高度动态、需要程序化生成节点或实现底层组件库时，渲染函数更灵活。h 创建虚拟节点，插槽通常以函数传递。\n\n虚拟节点必须唯一，不能把同一个 vnode 对象重复放入树中。",
    "keyPoints": [
      "模板优先满足常规 UI",
      "渲染函数适合程序化结构",
      "vnode 在树中必须唯一"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么插槽使用函数有利于依赖追踪？"
    ],
    "references": [
      {
        "title": "Vue - Render Functions & JSX",
        "url": "https://vuejs.org/guide/extras/render-function.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-compiler-pipeline",
    "category": "vue",
    "tags": [
      "编译器",
      "原理"
    ],
    "title": "Vue 模板从源码到渲染函数经历了什么？",
    "answer": "编译器先解析模板生成 AST，再进行节点转换和静态分析，最后生成创建虚拟节点的渲染函数代码。编译阶段会标记动态节点、提升静态内容并生成 patch flag。\n\n运行时据此跳过稳定内容，把更新工作集中到编译器已标记的动态部分。",
    "keyPoints": [
      "解析生成 AST",
      "转换阶段进行静态分析",
      "代码生成携带优化提示",
      "运行时利用 patch flag"
    ],
    "difficulty": 3,
    "followUps": [
      "运行时编译版与预编译版的体积差异来自哪里？"
    ],
    "references": [
      {
        "title": "Vue - Rendering Mechanism",
        "url": "https://vuejs.org/guide/extras/rendering-mechanism.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-virtual-dom-patch",
    "category": "vue",
    "tags": [
      "虚拟 DOM",
      "diff"
    ],
    "title": "Vue 3 如何减少虚拟 DOM diff 的工作量？",
    "answer": "Vue 保留虚拟 DOM 的声明式与跨平台能力，同时利用模板编译信息优化更新。静态节点会提升，动态子节点收集进 block，patch flag 指出需要比较的是文本、class 还是 props。\n\n列表仍依赖 key 和最长递增子序列等策略减少移动，但真实性能还受组件边界和 DOM 规模影响。",
    "keyPoints": [
      "静态提升复用 vnode",
      "block 跟踪动态后代",
      "patch flag 缩小属性比较范围",
      "key 帮助列表复用"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么手写 render 函数通常无法获得同等编译优化？"
    ],
    "references": [
      {
        "title": "Vue - Compiler-Informed Virtual DOM",
        "url": "https://vuejs.org/guide/extras/rendering-mechanism.html#compiler-informed-virtual-dom"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-effect-scope",
    "category": "vue",
    "tags": [
      "effectScope",
      "响应式"
    ],
    "title": "effectScope 如何管理一组响应式副作用？",
    "answer": "effectScope 捕获其 run 回调内创建的 computed、watch 和 watchEffect，调用 stop 时可一次性停止它们。组件 setup 自带作用域，组件卸载时自动清理。\n\n它主要用于构建可独立销毁的组合式工具、库或临时状态域，onScopeDispose 可注册额外清理逻辑。",
    "keyPoints": [
      "批量收集响应式 effect",
      "stop 统一释放",
      "组件 setup 已有隐式作用域",
      "库代码可注册 scope dispose"
    ],
    "difficulty": 3,
    "followUps": [
      "detached effect scope 与普通 scope 有何区别？"
    ],
    "references": [
      {
        "title": "Vue - effectScope",
        "url": "https://vuejs.org/api/reactivity-advanced.html#effectscope"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-ssr-hydration",
    "category": "vue",
    "tags": [
      "SSR",
      "水合"
    ],
    "title": "Vue SSR 水合不匹配通常由什么引起？",
    "answer": "水合要求客户端首次渲染结构与服务端 HTML 一致。随机数、时区、本地环境分支、无效 HTML 被浏览器纠正，以及请求数据不一致都可能造成 mismatch。\n\n应把服务端状态序列化给客户端，对环境差异延后到 mounted，并为随机输出传递相同种子；不要简单忽略警告。",
    "keyPoints": [
      "首屏服务端与客户端输出必须确定",
      "共享初始状态避免数据分叉",
      "浏览器 HTML 修正也会导致不匹配",
      "客户端特有逻辑延后执行"
    ],
    "difficulty": 3,
    "followUps": [
      "水合不匹配对性能和事件绑定有什么影响？"
    ],
    "references": [
      {
        "title": "Vue SSR - Hydration Mismatch",
        "url": "https://vuejs.org/guide/scaling-up/ssr.html#hydration-mismatch"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-custom-renderer",
    "category": "vue",
    "tags": [
      "渲染器",
      "跨平台"
    ],
    "title": "Vue 的自定义渲染器为什么能支持非 DOM 平台？",
    "answer": "Vue runtime-core 把组件、响应式和 diff 与平台操作分离。createRenderer 接收创建、插入、删除、设置文本和 patchProp 等宿主操作，即可把虚拟节点提交到 Canvas、终端或原生 UI。\n\n平台层仍要正确实现节点身份、插入顺序和属性更新语义，渲染器 API 面向高级库作者。",
    "keyPoints": [
      "runtime-core 与宿主操作解耦",
      "渲染器注入节点操作",
      "响应式和组件模型可复用",
      "宿主实现决定最终输出"
    ],
    "difficulty": 3,
    "followUps": [
      "自定义渲染器如何处理事件系统？"
    ],
    "references": [
      {
        "title": "Vue - Custom Renderer API",
        "url": "https://vuejs.org/api/custom-renderer.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-proxy-identity",
    "category": "vue",
    "tags": [
      "Proxy",
      "身份"
    ],
    "title": "响应式代理与原对象的身份问题会造成哪些陷阱？",
    "answer": "reactive 返回的 Proxy 与原对象不全等，多次代理同一对象会返回同一代理，但对代理再次 reactive 也保持代理身份。若同时在集合或比较逻辑中混用原对象与代理，查找可能失败。\n\n通常应始终操作代理；toRaw 只用于临时读取或外部互操作，不应长期持有并修改原对象。",
    "keyPoints": [
      "代理与原对象不全等",
      "同一原对象的代理会缓存",
      "避免跨边界混用两种身份",
      "toRaw 不应用于绕过响应式写入"
    ],
    "difficulty": 3,
    "followUps": [
      "markRaw 如何影响嵌套对象的身份？"
    ],
    "references": [
      {
        "title": "Vue - toRaw and markRaw",
        "url": "https://vuejs.org/api/reactivity-advanced.html#toraw"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-compiler-macros",
    "category": "vue",
    "tags": [
      "编译宏",
      "script setup"
    ],
    "title": "为什么 defineProps 等 script setup API 被称为编译宏？",
    "answer": "defineProps、defineEmits、defineExpose 和 defineModel 无需导入，编译器会识别并把声明提升或转换为组件选项与 setup 代码。它们只能在 script setup 的规定位置使用，不是运行时普通函数。\n\n由于参数会提升到模块作用域，宏声明不能任意引用 setup 中后创建的局部变量。",
    "keyPoints": [
      "由 SFC 编译器识别",
      "无需运行时导入",
      "声明可能提升到模块作用域",
      "受语法位置与可分析性限制"
    ],
    "difficulty": 3,
    "followUps": [
      "defineOptions 与普通组件选项如何合并？"
    ],
    "references": [
      {
        "title": "Vue - script setup",
        "url": "https://vuejs.org/api/sfc-script-setup.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-ssr-request-isolation",
    "category": "vue",
    "tags": [
      "SSR",
      "状态管理"
    ],
    "title": "Vue SSR 为什么必须为每个请求创建独立应用状态？",
    "answer": "Node 服务进程会处理多个用户请求，模块顶层的单例响应式状态会跨请求复用，可能造成数据串扰和隐私泄露。SSR 工厂应为每个请求创建 app、router 和 store。\n\n客户端水合时再使用服务端序列化的当前请求状态，并对序列化内容进行安全转义。",
    "keyPoints": [
      "服务端模块是跨请求单例",
      "每个请求创建独立应用与 store",
      "初始状态需安全序列化",
      "避免跨用户状态污染"
    ],
    "difficulty": 3,
    "followUps": [
      "哪些无状态资源可以安全地跨请求缓存？"
    ],
    "references": [
      {
        "title": "Vue SSR - Cross-Request State Pollution",
        "url": "https://vuejs.org/guide/scaling-up/ssr.html#cross-request-state-pollution"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-state-architecture",
    "category": "vue",
    "tags": [
      "架构",
      "状态管理"
    ],
    "title": "复杂 Vue 应用如何划分本地状态、共享状态和服务端状态？",
    "answer": "只影响单个组件树的交互状态应尽量就近保存；少量跨层依赖可用 provide/inject；跨页面且需要统一变更规则的客户端状态再进入 Pinia。服务端数据还涉及缓存、失效和请求竞态，适合由专门的数据获取层管理。\n\n划分依据是所有权、生命周期和一致性要求，而不是把所有数据集中到一个 store。",
    "keyPoints": [
      "状态按所有权就近放置",
      "共享范围决定通信方式",
      "服务端缓存与客户端状态职责不同",
      "集中状态应有明确变更入口"
    ],
    "difficulty": 3,
    "followUps": [
      "如何避免 Pinia store 之间形成循环依赖？"
    ],
    "references": [
      {
        "title": "Vue - State Management",
        "url": "https://vuejs.org/guide/scaling-up/state-management.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-testing-async",
    "category": "vue",
    "tags": [
      "测试",
      "异步更新"
    ],
    "title": "测试 Vue 组件时如何可靠等待异步更新？",
    "answer": "触发同步状态变化后等待 Vue Test Utils 返回的 nextTick 或 await wrapper 操作，确保 DOM 已刷新。对不受 Vue 调度的 Promise 请求，需要等待相关 Promise 完成，例如使用 flushPromises。\n\n测试应从用户可见输出和事件断言行为，避免依赖组件内部实现或随意增加定时等待。",
    "keyPoints": [
      "Vue DOM 更新需等待 nextTick",
      "外部 Promise 需单独等待",
      "断言公开行为而非内部状态",
      "避免不确定的 sleep"
    ],
    "difficulty": 3,
    "followUps": [
      "如何测试 Suspense 中的异步 setup 组件？"
    ],
    "references": [
      {
        "title": "Vue Test Utils - Asynchronous Behavior",
        "url": "https://test-utils.vuejs.org/guide/advanced/async-suspense.html"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "vue-reactivity-debugging",
    "category": "vue",
    "tags": [
      "响应式",
      "调试"
    ],
    "title": "如何定位 Vue 组件发生了意外重新渲染的原因？",
    "answer": "开发环境可在 onRenderTracked 与 onRenderTriggered 中查看哪个 target、key 和操作类型建立或触发了渲染依赖，computed 和 watcher 也支持 onTrack、onTrigger 调试选项。\n\n这些钩子仅用于开发调试。定位后应减少不必要依赖、稳定 props 或拆分组件，而不是永久加入规避更新的开关。",
    "keyPoints": [
      "tracked 查看依赖如何建立",
      "triggered 查看更新由谁触发",
      "computed 与 watch 也有调试钩子",
      "仅开发环境使用"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么读取一个 reactive 对象的全部键会扩大依赖范围？"
    ],
    "references": [
      {
        "title": "Vue - Reactivity Debugging",
        "url": "https://vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-render",
    "category": "browser",
    "tags": [
      "导航",
      "渲染"
    ],
    "title": "从浏览器内部视角看，输入 URL 到页面展示经历了什么？",
    "answer": "导航先经过 URL 解析、权限策略、缓存与 Service Worker 检查，需要联网时再完成 DNS、连接和 HTTP 交换。拿到 HTML 后，解析器逐步构建 DOM，样式表形成 CSSOM，同时预加载扫描器尝试提前发现子资源。\n\n浏览器随后计算样式、生成布局盒、执行布局、绘制并合成到屏幕。普通同步脚本可能暂停 HTML 解析；样式表不阻止 DOM 节点继续被解析，但通常阻塞渲染，并可能让依赖已计算样式的脚本等待。最终过程是流式和增量的，不是严格串行的九个步骤。",
    "keyPoints": [
      "导航可能先命中缓存或 Service Worker",
      "HTML 解析与子资源加载是增量并行过程",
      "DOM 与 CSSOM 参与样式计算和布局",
      "同步脚本可能阻塞解析",
      "样式表通常阻塞渲染并可能间接阻塞脚本"
    ],
    "difficulty": 3,
    "followUps": [
      "预加载扫描器为什么无法发现所有动态资源？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-render-cost",
    "category": "browser",
    "tags": [
      "渲染",
      "性能"
    ],
    "title": "重排、重绘和合成有什么区别，如何定位性能问题？",
    "answer": "布局会计算元素几何信息；当样式变化使几何失效时，需要重新布局。读取 offsetWidth 等属性本身不总是昂贵，但在前面存在尚未处理的样式写入时，可能强制同步布局。重绘更新像素记录，合成则组合已经绘制的图层。\n\ntransform 和 opacity 常能避免布局，并可能只触发合成，但不保证一定使用 GPU 或完全没有绘制成本。优化应先通过性能轨迹定位布局、绘制和合成开销，再批量读写、拆分长任务并谨慎使用 will-change。",
    "keyPoints": [
      "布局负责几何计算",
      "交替读写容易造成强制同步布局",
      "重绘更新绘制记录",
      "transform/opacity 可能只需合成但并非绝对",
      "分层过多会增加内存与合成成本"
    ],
    "difficulty": 2,
    "followUps": [
      "如何在 Performance 面板中识别 layout thrashing？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-script-async-defer",
    "category": "browser",
    "tags": [
      "脚本",
      "解析"
    ],
    "title": "script 标签 async /defer 的区别？",
    "answer": "普通 script：下载、执行都会阻塞 DOM 解析。\nasync：异步下载脚本，下载完成立刻执行，执行顺序无法保证。适合不依赖 DOM、无依赖的脚本。\ndefer：异步下载脚本，等到 DOM 全部解析完成之后执行，保留脚本书写顺序。",
    "keyPoints": [
      "普通 script：下载、执行都会阻塞 DOM 解析",
      "async：异步下载脚本，下载完成立刻执行，执行顺序无法保证。适合不依赖 DOM、无依赖的脚本",
      "defer：异步下载脚本，等到 DOM 全部解析完成之后执行，保留脚本书写顺序"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-dom-bom",
    "category": "browser",
    "tags": [
      "DOM",
      "BOM"
    ],
    "title": "DOM、BOM 分别是什么？",
    "answer": "DOM：文档对象模型，操作页面文档节点，增删改查元素。\nBOM：浏览器对象模型，操作浏览器窗口：window、location、history、navigator、setTimeout。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "DOM：文档对象模型，操作页面文档节点，增删改查元素",
      "BOM：浏览器对象模型，操作浏览器窗口：window、location、history、navigator、setTimeout",
      "了解 DOM 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-event-flow",
    "category": "browser",
    "tags": [
      "事件",
      "事件委托"
    ],
    "title": "事件流：捕获、目标、冒泡；事件委托原理和优缺点？",
    "answer": "DOM 事件流三个阶段：捕获阶段 → 目标阶段 → 冒泡阶段。 addEventListener('click',fn,false)，false 冒泡；true 开启捕获。\n事件委托（事件代理） 原理：利用事件冒泡，把子元素事件绑定到父元素上。 优点：\n减少事件绑定数量，节省内存；\n对动态新增的 DOM 节点自动生效，不用重复绑定事件。 缺点：部分事件不冒泡（blur、focus）无法委托；层级太深会有性能损耗。",
    "keyPoints": [
      "DOM 事件流三个阶段：捕获阶段 → 目标阶段 → 冒泡阶段。 addEventListener('click',fn,false)，false 冒泡；true 开启捕获",
      "事件委托（事件代理） 原理：利用事件冒泡，把子元素事件绑定到父元素上。 优点：",
      "减少事件绑定数量，节省内存",
      "对动态新增的 DOM 节点自动生效，不用重复绑定事件。 缺点：部分事件不冒泡（blur、focus）无法委托；层级太深会有性能损耗"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-storage",
    "category": "browser",
    "tags": [
      "存储",
      "Cookie"
    ],
    "title": "Cookie、localStorage、sessionStorage 区别？",
    "answer": "Cookie：约 4KB；每次 http 请求自动携带发给后端；可设置过期时间；有 HttpOnly、Secure、SameSite 安全属性。\nlocalStorage：约 5MB；永久存储，手动删除；不会随请求发送；同域所有标签页共享。\nsessionStorage：约 5MB；仅当前标签会话，关闭标签页销毁；不同标签互相隔离。\n存储都受同源策略限制。",
    "keyPoints": [
      "Cookie：约 4KB；每次 http 请求自动携带发给后端；可设置过期时间；有 HttpOnly、Secure、SameSite 安全属性",
      "localStorage：约 5MB；永久存储，手动删除；不会随请求发送；同域所有标签页共享",
      "sessionStorage：约 5MB；仅当前标签会话，关闭标签页销毁；不同标签互相隔离",
      "存储都受同源策略限制"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-same-origin",
    "category": "browser",
    "tags": [
      "安全",
      "同源策略"
    ],
    "title": "同源策略是什么，为什么要有同源策略？",
    "answer": "同源：协议、域名、端口三者全部相同。 浏览器同源策略限制不同源页面之间 DOM、数据、接口访问。 目的：安全防护，防止恶意网站窃取用户信息，防范 CSRF 攻击。 跨域：请求是发出去的，浏览器拦截返回结果。",
    "keyPoints": [
      "同源：协议、域名、端口三者全部相同。 浏览器同源策略限制不同源页面之间 DOM、数据、接口访问。 目的：安全防护，防止恶意网站窃取用户信息，防范 CSRF 攻击。 跨域：请求是发出去的，浏览器拦截返回结果",
      "辨别 同源策略 的适用场景",
      "了解 安全 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-cache",
    "category": "browser",
    "tags": [
      "缓存",
      "内存"
    ],
    "title": "浏览器中的 Memory Cache、Disk Cache 与 HTTP 缓存是什么关系？",
    "answer": "HTTP 缓存规则决定响应是否可存储、何时新鲜以及何时需要重新验证；Memory Cache、Disk Cache 是浏览器可能采用的内部存储位置和实现策略，不是与强缓存、协商缓存并列的协议层分类。\n\n浏览器可能根据资源大小、生命周期、隐私模式和内存压力决定放在内存或磁盘，具体优先顺序并无可依赖的统一标准。开发者应通过 Cache-Control、ETag、Vary 等表达语义，而不是依赖资源一定进入某种内部缓存。",
    "keyPoints": [
      "HTTP 缓存定义可存储和复用语义",
      "Memory/Disk 是浏览器内部实现位置",
      "内部放置策略不可作为业务契约",
      "Cache-Control 和验证器用于表达缓存策略",
      "开发者工具标签不等于协议规范分类"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 from memory cache 不能说明响应一定没有重新验证？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-gc-memory-leak",
    "category": "browser",
    "tags": [
      "内存",
      "垃圾回收"
    ],
    "title": "垃圾回收机制，浏览器 GC，常见内存泄漏场景？",
    "answer": "浏览器 JS 主要使用标记-清除算法。 从根对象 window 出发，标记所有可达对象；没有标记的视为垃圾，回收释放内存。\n内存泄漏常见场景：\n意外的全局变量；\n闭包没有释放，引用一直存活；\n定时器、事件监听忘记清除；\nDOM 元素引用保存，DOM 删除后变量没有置 null；\n不合理的缓存无限增长。\n排查：Chrome DevTools Memory 面板。",
    "keyPoints": [
      "浏览器 JS 主要使用标记-清除算法。 从根对象 window 出发，标记所有可达对象；没有标记的视为垃圾，回收释放内存",
      "内存泄漏常见场景：",
      "意外的全局变量",
      "闭包没有释放，引用一直存活",
      "定时器、事件监听忘记清除"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-render-blocking",
    "category": "browser",
    "tags": [
      "渲染",
      "资源加载"
    ],
    "title": "什么是渲染阻塞资源，脚本和样式如何影响关键路径？",
    "answer": "普通同步脚本在解析到 script 时通常暂停 HTML 解析并执行；defer、async 和模块脚本具有不同下载与执行时机。样式表一般不阻止 HTML 解析器继续构建 DOM，但会阻塞首次渲染，并可能让后续需要计算样式的脚本等待。\n\n图片通常不阻塞 DOM 解析，但会影响 load、布局稳定性和 LCP。是否属于关键阻塞资源取决于位置、媒体条件、优先级和首屏依赖，应该结合网络瀑布图与性能轨迹判断。",
    "keyPoints": [
      "同步脚本通常阻塞 HTML 解析",
      "defer/async/module 改变执行时机",
      "样式表通常阻塞首次渲染",
      "图片可影响 LCP 和布局但不阻塞 DOM 解析",
      "关键性取决于首屏依赖与加载顺序"
    ],
    "difficulty": 2,
    "followUps": [
      "media 属性如何让非当前媒体样式降低阻塞优先级？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-foit-fout",
    "category": "browser",
    "tags": [
      "字体",
      "渲染"
    ],
    "title": "页面白屏、FOIT、FOUT 概念？",
    "answer": "白屏：关键资源缺失，页面长时间看不到内容。\nFOIT：字体未下载完成，文字隐藏，下载完才显示文字。\nFOUT：先用后备字体显示，字体下载完成替换。 现在一般推荐 FOUT，提升用户体验。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "白屏：关键资源缺失，页面长时间看不到内容",
      "FOIT：字体未下载完成，文字隐藏，下载完才显示文字",
      "FOUT：先用后备字体显示，字体下载完成替换。 现在一般推荐 FOUT，提升用户体验"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-raf-timeout",
    "category": "browser",
    "tags": [
      "动画",
      "调度"
    ],
    "title": "requestAnimationFrame 和 setTimeout 区别？",
    "answer": "requestAnimationFrame：和浏览器刷新频率同步（一般 60 帧），在下一次渲染前执行，动画性能更好；页面隐藏时自动暂停，节省 CPU。\nsetTimeout：定时器，时间只是最小延迟，受 JS 主线程阻塞影响，时间不准。\n做动画优先 requestAnimationFrame。",
    "keyPoints": [
      "requestAnimationFrame：和浏览器刷新频率同步（一般 60 帧），在下一次渲染前执行，动画性能更好；页面隐藏时自动暂停，节省 CPU",
      "setTimeout：定时器，时间只是最小延迟，受 JS 主线程阻塞影响，时间不准",
      "做动画优先 requestAnimationFrame"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-event-loop",
    "category": "browser",
    "tags": [
      "事件循环",
      "渲染"
    ],
    "title": "微任务、宏任务，浏览器事件循环完整流程？",
    "answer": "宏任务：script 整体代码、setTimeout、setInterval、ajax、UI 渲染。 微任务：Promise.then/catch、await 之后代码、MutationObserver。\n浏览器执行顺序：\n执行同步代码；\n同步执行完，把所有微任务全部清空；\n浏览器进行页面渲染；\n取出一个宏任务执行；循环往复。\n注意：渲染时机在一轮微任务全部执行完毕之后。",
    "keyPoints": [
      "宏任务：script 整体代码、setTimeout、setInterval、ajax、UI 渲染。 微任务：Promise.then/catch、await 之后代码、MutationObserver",
      "浏览器执行顺序：",
      "同步执行完，把所有微任务全部清空",
      "浏览器进行页面渲染",
      "取出一个宏任务执行；循环往复"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-mutation-observer",
    "category": "browser",
    "tags": [
      "DOM",
      "观察器"
    ],
    "title": "MutationObserver 是干什么的？",
    "answer": "异步监听 DOM 树变化，DOM 增删改、属性变化触发回调；属于微任务。 对比 Mutation 事件是同步，性能差。校招了解概念即可，很少手写。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "异步监听 DOM 树变化，DOM 增删改、属性变化触发回调；属于微任务。 对比 Mutation 事件是同步，性能差。校招了解概念即可，很少手写",
      "辨别 观察器 的适用场景",
      "了解 DOM 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-cross-tab",
    "category": "browser",
    "tags": [
      "跨页面通信"
    ],
    "title": "跨标签页通信有哪些方案？",
    "answer": "localStorage + storage 事件；\nSharedWorker；\nBroadcastChannel；\npostMessage（iframe、窗口之间）。\n面试记住前 3 种即可。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "localStorage + storage 事件",
      "SharedWorker",
      "BroadcastChannel",
      "postMessage（iframe、窗口之间）",
      "面试记住前 3 种即可"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-post-message",
    "category": "browser",
    "tags": [
      "跨域",
      "通信"
    ],
    "title": "postMessage 作用，安全注意点？",
    "answer": "可以实现不同源 iframe、窗口之间通信，不受同源策略限制。 安全：接收消息的时候一定要校验 origin 来源，防止恶意页面发送消息。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。\n\n回答时应区分规范语义、常见实现和具体项目约束。",
    "keyPoints": [
      "可以实现不同源 iframe、窗口之间通信，不受同源策略限制。 安全：接收消息的时候一定要校验 origin 来源，防止恶意页面发送消息",
      "辨别 通信 的适用场景",
      "了解 跨域 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-layout-thrashing",
    "category": "browser",
    "tags": [
      "布局",
      "性能"
    ],
    "title": "回流防抖？浏览器的 Layout thrashing（布局抖动）？",
    "answer": "布局抖动：循环中一边读取布局属性 (offsetWidth)，一边修改 DOM，浏览器反复强制重排，性能很差。 解决：读写分离，全部读完布局属性，再统一修改 DOM。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "布局抖动：循环中一边读取布局属性 (offsetWidth)，一边修改 DOM，浏览器反复强制重排，性能很差。 解决：读写分离，全部读完布局属性，再统一修改 DOM",
      "辨别 性能 的适用场景",
      "了解 布局 的风险和边界"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-service-worker",
    "category": "browser",
    "tags": [
      "Service Worker",
      "离线"
    ],
    "title": "Service Worker 了解？",
    "answer": "独立于主线程的后台线程，离线缓存，PWA 技术。可以拦截请求，做离线缓存。 特点：脱离页面，页面关闭依然运行；必须 HTTPS 环境。\n校招了解概念，大厂才深挖。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "独立于主线程的后台线程，离线缓存，PWA 技术。可以拦截请求，做离线缓存。 特点：脱离页面，页面关闭依然运行；必须 HTTPS 环境",
      "校招了解概念，大厂才深挖",
      "了解 Service Worker 的风险和边界"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-virtual-dom",
    "category": "browser",
    "tags": [
      "DOM",
      "框架"
    ],
    "title": "虚拟 DOM 和真实 DOM 对比？",
    "answer": "虚拟 DOM：JS 对象，描述 DOM 结构。 真实 DOM：浏览器 DOM 节点，操作开销大。 虚拟 DOM 不是更快，是复杂场景下减少频繁完整重排；简单操作直接操作 DOM 会更快。\n\n浏览器实现存在差异，上线前应结合目标环境和性能工具验证。",
    "keyPoints": [
      "虚拟 DOM：JS 对象，描述 DOM 结构。 真实 DOM：浏览器 DOM 节点，操作开销大。 虚拟 DOM 不是更快，是复杂场景下减少频繁完整重排；简单操作直接操作 DOM 会更快",
      "辨别 框架 的适用场景",
      "了解 DOM 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-process-model",
    "category": "browser",
    "tags": [
      "进程",
      "架构"
    ],
    "title": "浏览器的进程模型（多进程）？",
    "answer": "现代浏览器是多进程架构：\n浏览器主进程：界面、标签管理；\n渲染进程（每个标签页）：JS 引擎、DOM 解析、渲染；\nGPU 进程：GPU 合成；\n网络进程：网络请求。\n同一个域名现在会开启渲染进程隔离。JS 渲染线程和 GUI 渲染线程互斥，JS 长时间阻塞会卡住页面渲染。",
    "keyPoints": [
      "现代浏览器是多进程架构：",
      "浏览器主进程：界面、标签管理",
      "渲染进程（每个标签页）：JS 引擎、DOM 解析、渲染",
      "GPU 进程：GPU 合成",
      "网络进程：网络请求"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-html-parser",
    "category": "browser",
    "tags": [
      "HTML",
      "解析"
    ],
    "title": "浏览器 HTML 解析器如何构建 DOM？",
    "answer": "HTML 解析器把字节解码为字符并经过分词、树构建算法生成 DOM。解析具有错误恢复规则，非法嵌套可能被自动重排而与源码结构不同。\n\n同步脚本、document.write 和网络等待可能影响解析进度，不能把 HTML 当作普通 XML 处理。",
    "keyPoints": [
      "HTML 解析器把字节解码为字符并经过分词、树构建算法生成 DOM",
      "解析具有错误恢复规则，非法嵌套可能被自动重排而与源码结构不同",
      "同步脚本、document.write 和网络等待可能影响解析进度，不能把 HTML 当作普通 XML 处理"
    ],
    "difficulty": 1,
    "followUps": [
      "非法表格嵌套为什么可能导致节点位置变化？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-cssom-render-tree",
    "category": "browser",
    "tags": [
      "CSSOM",
      "渲染"
    ],
    "title": "CSSOM、DOM 和渲染树之间是什么关系？",
    "answer": "浏览器解析样式表形成 CSSOM，并结合 DOM 计算每个可见节点的样式。渲染树包含参与视觉布局的盒，不会简单一一对应所有 DOM 节点。\n\ndisplay:none、伪元素和匿名盒等情况说明 DOM 与渲染结构存在差异。",
    "keyPoints": [
      "浏览器解析样式表形成 CSSOM，并结合 DOM 计算每个可见节点的样式",
      "渲染树包含参与视觉布局的盒，不会简单一一对应所有 DOM 节点",
      "display:none、伪元素和匿名盒等情况说明 DOM 与渲染结构存在差异"
    ],
    "difficulty": 2,
    "followUps": [
      "visibility:hidden 的元素是否进入布局？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-preload-scanner",
    "category": "browser",
    "tags": [
      "资源加载",
      "解析"
    ],
    "title": "预加载扫描器如何改善页面加载？",
    "answer": "主 HTML 解析器被脚本阻塞时，预加载扫描器仍可提前发现图片、样式和脚本 URL。提前发起请求能减少关键资源排队时间，但动态拼接地址或深层 CSS 依赖可能无法被发现。\n\npreload 提示应与真实资源类型、跨源属性和使用时机匹配，否则会浪费带宽。",
    "keyPoints": [
      "主 HTML 解析器被脚本阻塞时，预加载扫描器仍可提前发现图片、样式和脚本 URL",
      "提前发起请求能减少关键资源排队时间，但动态拼接地址或深层 CSS 依赖可能无法被发现",
      "preload 提示应与真实资源类型、跨源属性和使用时机匹配，否则会浪费带宽"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么动态注入的关键资源更容易被发现得太晚？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-critical-rendering-path",
    "category": "browser",
    "tags": [
      "渲染",
      "性能"
    ],
    "title": "什么是关键渲染路径，优化时应关注什么？",
    "answer": "关键渲染路径涵盖取得 HTML、构建 DOM/CSSOM、计算样式、布局、绘制和合成等关键步骤。关键 CSS、阻塞脚本、字体和首屏媒体会影响首次可见内容的时机。\n\n优化应基于网络瀑布图和性能轨迹缩短依赖链，而不是机械内联所有资源。",
    "keyPoints": [
      "关键渲染路径涵盖取得 HTML、构建 DOM/CSSOM、计算样式、布局、绘制和合成等关键步骤",
      "关键 CSS、阻塞脚本、字体和首屏媒体会影响首次可见内容的时机",
      "优化应基于网络瀑布图和性能轨迹缩短依赖链，而不是机械内联所有资源"
    ],
    "difficulty": 3,
    "followUps": [
      "如何识别真正阻塞首屏的 CSS？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-compositor-layers",
    "category": "browser",
    "tags": [
      "合成",
      "性能"
    ],
    "title": "浏览器为什么创建合成层，层越多越好吗？",
    "answer": "合成层允许浏览器把部分绘制结果作为独立纹理变换并在合成阶段组合。transform、视频、滚动区域等因素可能触发分层，但具体启发式由浏览器决定。\n\n过多图层会增加显存、上传和合成成本，will-change 应按需短期使用并通过工具验证。",
    "keyPoints": [
      "合成层允许浏览器把部分绘制结果作为独立纹理变换并在合成阶段组合",
      "transform、视频、滚动区域等因素可能触发分层，但具体启发式由浏览器决定",
      "过多图层会增加显存、上传和合成成本，will-change 应按需短期使用并通过工具验证"
    ],
    "difficulty": 3,
    "followUps": [
      "如何在开发者工具中检查图层数量和合成原因？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-domcontentloaded-load",
    "category": "browser",
    "tags": [
      "生命周期",
      "事件"
    ],
    "title": "DOMContentLoaded 与 load 事件有什么区别？",
    "answer": "DOMContentLoaded 在文档解析完成并等待延迟脚本执行后触发，不等待普通图片等所有子资源。load 会等待页面及大多数依赖资源完成加载后触发。\n\n异步脚本、模块脚本、样式依赖和缓存会影响具体时序，业务初始化应选择最早满足依赖的时机。",
    "keyPoints": [
      "DOMContentLoaded 在文档解析完成并等待延迟脚本执行后触发，不等待普通图片等所有子资源",
      "load 会等待页面及大多数依赖资源完成加载后触发",
      "异步脚本、模块脚本、样式依赖和缓存会影响具体时序，业务初始化应选择最早满足依赖的时机"
    ],
    "difficulty": 1,
    "followUps": [
      "defer 脚本与 DOMContentLoaded 的顺序是什么？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-history-navigation",
    "category": "browser",
    "tags": [
      "History API",
      "路由"
    ],
    "title": "History API 如何支持前端路由？",
    "answer": "pushState 和 replaceState 可以修改会话历史和 URL，而不触发传统整页导航。用户前进后退会触发 popstate，应用需根据 URL 恢复界面状态。\n\n服务端必须为可直接访问的前端路由提供回退，同时要处理滚动、标题和无障碍焦点。",
    "keyPoints": [
      "pushState 和 replaceState 可以修改会话历史和 URL，而不触发传统整页导航",
      "用户前进后退会触发 popstate，应用需根据 URL 恢复界面状态",
      "服务端必须为可直接访问的前端路由提供回退，同时要处理滚动、标题和无障碍焦点"
    ],
    "difficulty": 1,
    "followUps": [
      "pushState 为什么不会自动触发 popstate？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-indexeddb",
    "category": "browser",
    "tags": [
      "存储",
      "IndexedDB"
    ],
    "title": "IndexedDB 适合保存什么数据？",
    "answer": "IndexedDB 是浏览器中的异步事务型对象数据库，适合较大的结构化数据和离线索引。对象仓库、索引和事务决定读写范围，版本升级通过 onupgradeneeded 修改结构。\n\n配额、隐私分区和清理策略因浏览器而异，关键数据仍需服务端持久化。",
    "keyPoints": [
      "IndexedDB 是浏览器中的异步事务型对象数据库，适合较大的结构化数据和离线索引",
      "对象仓库、索引和事务决定读写范围，版本升级通过 onupgradeneeded 修改结构",
      "配额、隐私分区和清理策略因浏览器而异，关键数据仍需服务端持久化"
    ],
    "difficulty": 1,
    "followUps": [
      "版本升级事务失败时如何恢复？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-cache-api",
    "category": "browser",
    "tags": [
      "缓存",
      "Service Worker"
    ],
    "title": "Cache API 与 HTTP 缓存有什么区别？",
    "answer": "Cache API 允许脚本显式保存 Request 和 Response 对，常由 Service Worker 管理离线资源。它不会自动遵循应用期望的更新策略，也不等同于浏览器透明管理的 HTTP 缓存。\n\n应用需要设计版本、清理、匹配键和失败回退，避免长期保留过期或敏感响应。",
    "keyPoints": [
      "Cache API 允许脚本显式保存 Request 和 Response 对，常由 Service Worker 管理离线资源",
      "它不会自动遵循应用期望的更新策略，也不等同于浏览器透明管理的 HTTP 缓存",
      "应用需要设计版本、清理、匹配键和失败回退，避免长期保留过期或敏感响应"
    ],
    "difficulty": 2,
    "followUps": [
      "Cache API 为什么不能替代业务数据库？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-web-worker",
    "category": "browser",
    "tags": [
      "Worker",
      "并发"
    ],
    "title": "Web Worker 能解决什么问题？",
    "answer": "Web Worker 在独立线程环境执行脚本，可以把计算密集任务移出页面主线程。Worker 不能直接访问 DOM，需要通过消息和结构化克隆或可转移对象通信。\n\n线程创建、数据复制和任务拆分有成本，短小任务不一定能从 Worker 获益。",
    "keyPoints": [
      "Web Worker 在独立线程环境执行脚本，可以把计算密集任务移出页面主线程",
      "Worker 不能直接访问 DOM，需要通过消息和结构化克隆或可转移对象通信",
      "线程创建、数据复制和任务拆分有成本，短小任务不一定能从 Worker 获益"
    ],
    "difficulty": 2,
    "followUps": [
      "如何把大 ArrayBuffer 高效传给 Worker？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-shared-worker",
    "category": "browser",
    "tags": [
      "Worker",
      "多页面"
    ],
    "title": "SharedWorker 与普通 Web Worker 有什么区别？",
    "answer": "SharedWorker 可以被同源的多个页面或上下文连接并共享一个后台执行实例。各连接通过 MessagePort 通信，生命周期和浏览器支持比普通 Worker 更复杂。\n\n它适合少数跨标签共享协调场景，但常需要 BroadcastChannel、Service Worker 等替代方案评估。",
    "keyPoints": [
      "SharedWorker 可以被同源的多个页面或上下文连接并共享一个后台执行实例",
      "各连接通过 MessagePort 通信，生命周期和浏览器支持比普通 Worker 更复杂",
      "它适合少数跨标签共享协调场景，但常需要 BroadcastChannel、Service Worker 等替代方案评估"
    ],
    "difficulty": 3,
    "followUps": [
      "SharedWorker 何时会被浏览器终止？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-intersection-observer",
    "category": "browser",
    "tags": [
      "观察器",
      "性能"
    ],
    "title": "IntersectionObserver 适合哪些场景？",
    "answer": "IntersectionObserver 异步报告目标与根视口或容器的交叉变化。它适合懒加载、曝光统计和无限滚动触发，避免在滚动事件中频繁同步测量布局。\n\n回调并非逐像素实时触发，阈值、rootMargin 和遮挡语义需要按业务设计。",
    "keyPoints": [
      "IntersectionObserver 异步报告目标与根视口或容器的交叉变化",
      "它适合懒加载、曝光统计和无限滚动触发，避免在滚动事件中频繁同步测量布局",
      "回调并非逐像素实时触发，阈值、rootMargin 和遮挡语义需要按业务设计"
    ],
    "difficulty": 1,
    "followUps": [
      "曝光统计为什么还要结合可见时长？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-resize-observer",
    "category": "browser",
    "tags": [
      "观察器",
      "布局"
    ],
    "title": "ResizeObserver 与 window resize 有什么区别？",
    "answer": "ResizeObserver 观察具体元素内容盒或边框盒尺寸变化，而不只监听视口大小。它适合容器驱动组件和图表自适应，但回调中继续修改尺寸可能造成观察循环。\n\n应批量处理更新并避免在回调里无条件写回导致 ResizeObserver loop 警告。",
    "keyPoints": [
      "ResizeObserver 观察具体元素内容盒或边框盒尺寸变化，而不只监听视口大小",
      "它适合容器驱动组件和图表自适应，但回调中继续修改尺寸可能造成观察循环",
      "应批量处理更新并避免在回调里无条件写回导致 ResizeObserver loop 警告"
    ],
    "difficulty": 2,
    "followUps": [
      "如何避免尺寸观察回调反复触发自身？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-performance-observer",
    "category": "browser",
    "tags": [
      "性能",
      "观察器"
    ],
    "title": "PerformanceObserver 可以采集哪些性能数据？",
    "answer": "PerformanceObserver 订阅浏览器产生的 performance entry，例如资源、导航、长任务和 Web Vitals 相关条目。supportedEntryTypes 可用于判断环境支持，buffered 选项能读取观察前已产生的部分记录。\n\n采集代码自身应轻量，并对采样、聚合和用户隐私做控制。",
    "keyPoints": [
      "PerformanceObserver 订阅浏览器产生的 performance entry，例如资源、导航、长任务和 Web Vitals 相关条目",
      "supportedEntryTypes 可用于判断环境支持，buffered 选项能读取观察前已产生的部分记录",
      "采集代码自身应轻量，并对采样、聚合和用户隐私做控制"
    ],
    "difficulty": 3,
    "followUps": [
      "如何用 PerformanceObserver 观察 LCP？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-page-visibility",
    "category": "browser",
    "tags": [
      "生命周期",
      "可见性"
    ],
    "title": "Page Visibility API 有什么用途？",
    "answer": "document.visibilityState 和 visibilitychange 可以判断页面是否处于可见状态。页面隐藏时可暂停轮播、降低轮询频率或记录会话状态，减少后台资源消耗。\n\n隐藏不等于页面即将永久卸载，保存关键数据还要结合 pagehide 等生命周期信号。",
    "keyPoints": [
      "document.visibilityState 和 visibilitychange 可以判断页面是否处于可见状态",
      "页面隐藏时可暂停轮播、降低轮询频率或记录会话状态，减少后台资源消耗",
      "隐藏不等于页面即将永久卸载，保存关键数据还要结合 pagehide 等生命周期信号"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么不应依赖 beforeunload 作为唯一保存时机？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-bfcache",
    "category": "browser",
    "tags": [
      "导航",
      "缓存"
    ],
    "title": "什么是往返缓存 bfcache？",
    "answer": "bfcache 可以保存完整页面状态，使前进后退时无需重新创建文档即可快速恢复。pageshow 和 pagehide 的 persisted 属性可用于识别保存与恢复。\n\n某些不可安全冻结的行为会影响可用性，应用恢复后还要刷新过期数据和连接状态。",
    "keyPoints": [
      "bfcache 可以保存完整页面状态，使前进后退时无需重新创建文档即可快速恢复",
      "pageshow 和 pagehide 的 persisted 属性可用于识别保存与恢复",
      "某些不可安全冻结的行为会影响可用性，应用恢复后还要刷新过期数据和连接状态"
    ],
    "difficulty": 3,
    "followUps": [
      "页面从 bfcache 恢复时会重新触发 DOMContentLoaded 吗？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-speculation-rules",
    "category": "browser",
    "tags": [
      "导航",
      "预渲染"
    ],
    "title": "预取、预连接和预渲染有什么区别？",
    "answer": "preconnect 提前建立连接，prefetch 提前下载未来可能使用的资源或文档。prerender 会提前加载并渲染整个页面，命中时导航极快但资源和隐私成本更高。\n\n提示必须基于较高置信度并考虑用户网络、登录状态和副作用，不能无差别预加载。",
    "keyPoints": [
      "preconnect 提前建立连接，prefetch 提前下载未来可能使用的资源或文档",
      "prerender 会提前加载并渲染整个页面，命中时导航极快但资源和隐私成本更高",
      "提示必须基于较高置信度并考虑用户网络、登录状态和副作用，不能无差别预加载"
    ],
    "difficulty": 3,
    "followUps": [
      "预渲染页面如何避免重复执行分析上报？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-web-components",
    "category": "browser",
    "tags": [
      "Web Components",
      "组件"
    ],
    "title": "Web Components 由哪些核心能力组成？",
    "answer": "Custom Elements 定义自定义元素及生命周期，Shadow DOM 提供封装树。template 和 slot 支持可复用结构与内容分发，CSS 自定义属性常用于跨边界主题配置。\n\n原生组件仍需设计属性反射、表单参与、可访问性和服务端渲染策略。",
    "keyPoints": [
      "Custom Elements 定义自定义元素及生命周期，Shadow DOM 提供封装树",
      "template 和 slot 支持可复用结构与内容分发，CSS 自定义属性常用于跨边界主题配置",
      "原生组件仍需设计属性反射、表单参与、可访问性和服务端渲染策略"
    ],
    "difficulty": 2,
    "followUps": [
      "自定义元素升级过程会在什么时候发生？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-shadow-dom",
    "category": "browser",
    "tags": [
      "Shadow DOM",
      "封装"
    ],
    "title": "Shadow DOM 提供了哪些封装边界？",
    "answer": "Shadow DOM 把内部节点树与外部文档查询和样式匹配建立边界。事件可以根据 composed 属性穿过边界，并在传播时发生目标重定向。\n\n封装不是安全边界，外部仍可通过公开引用、CSS 自定义属性和 part 等设计接口交互。",
    "keyPoints": [
      "Shadow DOM 把内部节点树与外部文档查询和样式匹配建立边界",
      "事件可以根据 composed 属性穿过边界，并在传播时发生目标重定向",
      "封装不是安全边界，外部仍可通过公开引用、CSS 自定义属性和 part 等设计接口交互"
    ],
    "difficulty": 3,
    "followUps": [
      "composedPath 如何帮助理解事件跨边界传播？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-accessibility-tree",
    "category": "browser",
    "tags": [
      "可访问性",
      "渲染"
    ],
    "title": "可访问性树与 DOM 有什么关系？",
    "answer": "浏览器根据 DOM、样式和 ARIA 计算可访问性树，辅助技术通过它理解角色、名称、状态和关系。部分隐藏或纯装饰节点不会出现在树中，错误 ARIA 也可能覆盖原生语义。\n\n应优先使用语义 HTML，并通过浏览器无障碍面板和真实辅助技术验证。",
    "keyPoints": [
      "浏览器根据 DOM、样式和 ARIA 计算可访问性树，辅助技术通过它理解角色、名称、状态和关系",
      "部分隐藏或纯装饰节点不会出现在树中，错误 ARIA 也可能覆盖原生语义",
      "应优先使用语义 HTML，并通过浏览器无障碍面板和真实辅助技术验证"
    ],
    "difficulty": 2,
    "followUps": [
      "display:none 与 aria-hidden 对可访问性树有什么影响？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-clipboard-api",
    "category": "browser",
    "tags": [
      "Clipboard",
      "权限"
    ],
    "title": "Clipboard API 使用时有哪些安全限制？",
    "answer": "异步 Clipboard API 通常要求安全上下文，并受用户激活和权限策略限制。读取剪贴板比写入更敏感，不同浏览器的提示与授权行为存在差异。\n\n应用应提供失败回退、避免静默读取敏感信息，并只写入用户明确请求的内容。",
    "keyPoints": [
      "异步 Clipboard API 通常要求安全上下文，并受用户激活和权限策略限制",
      "读取剪贴板比写入更敏感，不同浏览器的提示与授权行为存在差异",
      "应用应提供失败回退、避免静默读取敏感信息，并只写入用户明确请求的内容"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么复制按钮应在真实点击事件中调用 API？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-permissions-api",
    "category": "browser",
    "tags": [
      "权限",
      "隐私"
    ],
    "title": "Permissions API 能否统一管理所有浏览器权限？",
    "answer": "Permissions API 可以查询部分能力的 granted、denied 或 prompt 状态。并非所有权限都支持查询，浏览器还会结合用户手势、权限策略和站点设置决定实际调用结果。\n\n权限状态可能变化，应用必须处理 API 调用仍然失败的情况，不能仅依赖预查询。",
    "keyPoints": [
      "Permissions API 可以查询部分能力的 granted、denied 或 prompt 状态",
      "并非所有权限都支持查询，浏览器还会结合用户手势、权限策略和站点设置决定实际调用结果",
      "权限状态可能变化，应用必须处理 API 调用仍然失败的情况，不能仅依赖预查询"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么查询结果为 granted 仍可能操作失败？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-iframe-sandbox",
    "category": "browser",
    "tags": [
      "iframe",
      "安全"
    ],
    "title": "iframe sandbox 如何限制嵌入页面？",
    "answer": "sandbox 在默认情况下限制脚本、表单、导航、弹窗和源身份等多项能力。allow-* 令牌只应按最小权限逐项开放，组合 allow-scripts 与 allow-same-origin 对同源内容尤其危险。\n\n还应配合 CSP、Permissions Policy、postMessage 源校验和独立域名形成完整边界。",
    "keyPoints": [
      "sandbox 在默认情况下限制脚本、表单、导航、弹窗和源身份等多项能力",
      "allow-* 令牌只应按最小权限逐项开放，组合 allow-scripts 与 allow-same-origin 对同源内容尤其危险",
      "还应配合 CSP、Permissions Policy、postMessage 源校验和独立域名形成完整边界"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么同源 iframe 同时允许脚本和 same-origin 风险较高？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-task-scheduling",
    "category": "browser",
    "tags": [
      "调度",
      "性能"
    ],
    "title": "requestIdleCallback、scheduler.postTask 和普通任务如何选择？",
    "answer": "requestIdleCallback 适合可延后的低优先级工作，但触发时机不保证且支持范围有限。scheduler.postTask 可表达任务优先级和取消，但需要检查目标浏览器支持。\n\n关键交互应拆分长任务并及时让出主线程，不能把业务正确性依赖于空闲回调一定执行。",
    "keyPoints": [
      "requestIdleCallback 适合可延后的低优先级工作，但触发时机不保证且支持范围有限",
      "scheduler.postTask 可表达任务优先级和取消，但需要检查目标浏览器支持",
      "关键交互应拆分长任务并及时让出主线程，不能把业务正确性依赖于空闲回调一定执行"
    ],
    "difficulty": 3,
    "followUps": [
      "后台统计任务如何设置超时兜底？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-long-tasks",
    "category": "browser",
    "tags": [
      "性能",
      "主线程"
    ],
    "title": "什么是长任务，它为什么影响交互响应？",
    "answer": "主线程连续执行超过较长时间的任务会阻塞输入、渲染和其他任务调度。大量脚本解析、同步计算和一次性 DOM 工作都可能形成长任务。\n\n可通过性能轨迹定位归因，把工作拆分、延后或移到 Worker，并关注真实 INP 等用户指标。",
    "keyPoints": [
      "主线程连续执行超过较长时间的任务会阻塞输入、渲染和其他任务调度",
      "大量脚本解析、同步计算和一次性 DOM 工作都可能形成长任务",
      "可通过性能轨迹定位归因，把工作拆分、延后或移到 Worker，并关注真实 INP 等用户指标"
    ],
    "difficulty": 2,
    "followUps": [
      "任务拆分后如何避免总执行时间反而显著增加？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-event-retargeting",
    "category": "browser",
    "tags": [
      "事件",
      "Shadow DOM"
    ],
    "title": "事件穿过 Shadow DOM 时为什么会发生重定向？",
    "answer": "为保护组件内部结构，事件从 Shadow DOM 传播到外部时 target 可能被重定向为宿主元素。是否穿过边界由事件的 composed 属性决定，传播阶段仍受 bubbles 和捕获规则影响。\n\n需要了解原始传播路径时可检查 composedPath，但组件不应泄漏不稳定的内部实现契约。",
    "keyPoints": [
      "为保护组件内部结构，事件从 Shadow DOM 传播到外部时 target 可能被重定向为宿主元素",
      "是否穿过边界由事件的 composed 属性决定，传播阶段仍受 bubbles 和捕获规则影响",
      "需要了解原始传播路径时可检查 composedPath，但组件不应泄漏不稳定的内部实现契约"
    ],
    "difficulty": 3,
    "followUps": [
      "自定义事件如何设置 bubbles 和 composed？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-resource-timing",
    "category": "browser",
    "tags": [
      "性能",
      "网络"
    ],
    "title": "Resource Timing API 可以分析哪些加载阶段？",
    "answer": "资源性能条目包含排队、DNS、连接、TLS、请求和响应等时间戳。跨源资源若未通过 Timing-Allow-Origin 授权，部分详细时间会被隐藏。\n\n结合 transferSize、encodedBodySize 和 decodedBodySize 可以判断缓存与压缩，但仍要考虑协议复用。",
    "keyPoints": [
      "资源性能条目包含排队、DNS、连接、TLS、请求和响应等时间戳",
      "跨源资源若未通过 Timing-Allow-Origin 授权，部分详细时间会被隐藏",
      "结合 transferSize、encodedBodySize 和 decodedBodySize 可以判断缓存与压缩，但仍要考虑协议复用"
    ],
    "difficulty": 2,
    "followUps": [
      "如何从资源时间判断可能命中了缓存？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-navigation-timing",
    "category": "browser",
    "tags": [
      "性能",
      "导航"
    ],
    "title": "Navigation Timing 如何拆解一次页面导航？",
    "answer": "导航性能条目描述重定向、DNS、连接、请求响应、DOM 处理和 load 等阶段。同一连接复用时 DNS 或连接阶段可能为零，不能据此误判数据缺失。\n\n应结合服务端时间、资源瀑布和用户性能指标定位瓶颈，而不是只看 loadEventEnd。",
    "keyPoints": [
      "导航性能条目描述重定向、DNS、连接、请求响应、DOM 处理和 load 等阶段",
      "同一连接复用时 DNS 或连接阶段可能为零，不能据此误判数据缺失",
      "应结合服务端时间、资源瀑布和用户性能指标定位瓶颈，而不是只看 loadEventEnd"
    ],
    "difficulty": 2,
    "followUps": [
      "TTFB 较高可能由哪些环节造成？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-memory-profiling",
    "category": "browser",
    "tags": [
      "内存",
      "调试"
    ],
    "title": "如何用浏览器工具定位前端内存泄漏？",
    "answer": "可以比较多次堆快照、查看对象保留路径并观察执行操作后的内存趋势。脱离 DOM、未移除监听器、定时器、闭包和无限缓存是常见泄漏来源。\n\n垃圾回收时机不确定，测试应重复稳定操作并确认对象在强制回收后仍被意外引用。",
    "keyPoints": [
      "可以比较多次堆快照、查看对象保留路径并观察执行操作后的内存趋势",
      "脱离 DOM、未移除监听器、定时器、闭包和无限缓存是常见泄漏来源",
      "垃圾回收时机不确定，测试应重复稳定操作并确认对象在强制回收后仍被意外引用"
    ],
    "difficulty": 3,
    "followUps": [
      "保留路径比单纯对象数量更能说明什么问题？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "browser-storage-partitioning",
    "category": "browser",
    "tags": [
      "存储",
      "隐私"
    ],
    "title": "浏览器存储分区会怎样影响第三方内容？",
    "answer": "现代浏览器可能按顶级站点对第三方 Cookie、缓存和其他状态进行分区。同一个嵌入源在不同顶级站点下可能看到不同存储空间，传统跨站跟踪和单点状态共享会失效。\n\n应用应使用明确的身份协议和受支持的存储访问机制，并避免依赖浏览器实现细节绕过隐私策略。",
    "keyPoints": [
      "现代浏览器可能按顶级站点对第三方 Cookie、缓存和其他状态进行分区",
      "同一个嵌入源在不同顶级站点下可能看到不同存储空间，传统跨站跟踪和单点状态共享会失效",
      "应用应使用明确的身份协议和受支持的存储访问机制，并避免依赖浏览器实现细节绕过隐私策略"
    ],
    "difficulty": 3,
    "followUps": [
      "第三方 iframe 如何在合规前提下请求存储访问？"
    ],
    "references": [
      {
        "title": "MDN Web APIs",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http-versions",
    "category": "network",
    "tags": [
      "HTTP",
      "协议版本"
    ],
    "title": "HTTP/1.0、HTTP/1.1、HTTP/2 和 HTTP/3 有什么关键区别？",
    "answer": "HTTP/1.0 的连接复用不是默认规范语义，但实现可通过扩展使用 keep-alive；HTTP/1.1 默认持久连接，并完善缓存、分块传输和范围请求等能力。HTTP/1.1 流水线部署有限，常见客户端仍受同一连接响应顺序影响。\n\nHTTP/2 使用二进制帧、流多路复用和 HPACK，缓解应用层队头阻塞，但多个流仍共享 TCP 的丢包恢复。HTTP/3 运行在 QUIC 上，不同流的传输丢包通常互不阻塞，并支持更快建连和连接迁移；0-RTT 只适用于满足条件的恢复连接且存在重放风险。",
    "keyPoints": [
      "HTTP/1.1 默认使用持久连接",
      "HTTP/2 采用二进制分帧和多路复用",
      "HTTP/2 仍受 TCP 层丢包影响",
      "HTTP/3 基于 QUIC 隔离不同流的传输阻塞",
      "0-RTT 有条件且需防范重放"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 HTTP/2 下域名分片通常失去收益？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-get-post",
    "category": "network",
    "tags": [
      "HTTP",
      "请求方法"
    ],
    "title": "GET 和 POST 的语义、缓存与幂等性有什么区别？",
    "answer": "GET 的语义是获取资源，属于安全且幂等的方法；POST 用于让资源按请求表示执行处理，通常不保证幂等。查询参数和消息体只是常见用法：协议语法不把 POST 参数限定在 body，但 GET 请求体缺乏通用语义，浏览器 Fetch 也不允许 GET/HEAD 携带 body。\n\nGET 响应更容易被缓存，但 POST 响应在满足明确缓存头和缓存实现支持时也可以缓存。URL 与消息体大小都受浏览器、代理和服务器配置限制，不能概括为 GET 有固定上限而 POST 无限。",
    "keyPoints": [
      "GET 是安全且幂等的资源读取语义",
      "POST 通常用于非幂等处理",
      "GET 请求体缺乏通用互操作语义",
      "POST 响应在满足条件时也可缓存",
      "URL 与请求体都存在实现限制"
    ],
    "difficulty": 1,
    "followUps": [
      "PUT 与 POST 在幂等性和资源标识上有什么区别？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-idempotency",
    "category": "network",
    "tags": [
      "HTTP",
      "幂等性"
    ],
    "title": "什么是幂等性？哪些 HTTP 方法是幂等？",
    "answer": "幂等：多次发起相同请求，服务器产生的效果和一次请求完全一样。 幂等方法：GET、PUT、DELETE 非幂等：POST\n场景：重复提交表单，后端要做幂等处理，防止重复创建数据。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "幂等：多次发起相同请求，服务器产生的效果和一次请求完全一样。 幂等方法：GET、PUT、DELETE 非幂等：POST",
      "场景：重复提交表单，后端要做幂等处理，防止重复创建数据",
      "了解 HTTP 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http-cache",
    "category": "network",
    "tags": [
      "HTTP",
      "缓存"
    ],
    "title": "HTTP 强缓存和协商缓存是如何配合的？",
    "answer": "缓存先根据 Cache-Control、Expires 等新鲜度信息判断响应是否可直接复用；命中新鲜缓存时通常不联系源站。响应过期或标记 no-cache 时，需要用 If-None-Match/ETag 或 If-Modified-Since/Last-Modified 重新验证，未变化可返回 304。\n\nno-cache 表示复用前必须验证，不等于完全不存储；no-store 才是要求缓存不要存储。若同时发送两个验证器，HTTP 语义规定 If-None-Match 优先，但具体缓存行为还受 Vary、请求指令、共享缓存和实现策略影响。",
    "keyPoints": [
      "新鲜缓存可直接复用",
      "no-cache 表示复用前重新验证",
      "no-store 表示不要存储",
      "ETag 与 Last-Modified 可用于条件请求",
      "Vary 会影响缓存键"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么带内容哈希的静态资源适合 immutable 长缓存？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-status-codes",
    "category": "network",
    "tags": [
      "HTTP",
      "状态码"
    ],
    "title": "2xx、3xx、4xx、5xx 状态码，常见状态码？",
    "answer": "2xx 成功 200 OK；201 创建成功；204 No-Content 无返回内容。\n3xx 重定向 / 缓存 301 永久重定向；302 临时重定向；304 协商缓存；307 临时重定向，保持请求方法。\n4xx 客户端错误 400 参数错误；401 未认证；403 权限禁止；404 资源不存在；405 方法不允许；429 请求过多限流。\n5xx 服务端错误 500 服务器内部错误；502 网关错误；503 服务不可用；504 网关超时。",
    "keyPoints": [
      "2xx 成功 200 OK；201 创建成功；204 No-Content 无返回内容",
      "3xx 重定向 / 缓存 301 永久重定向；302 临时重定向；304 协商缓存；307 临时重定向，保持请求方法",
      "4xx 客户端错误 400 参数错误；401 未认证；403 权限禁止；404 资源不存在；405 方法不允许；429 请求过多限流",
      "5xx 服务端错误 500 服务器内部错误；502 网关错误；503 服务不可用；504 网关超时"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-https-tls",
    "category": "network",
    "tags": [
      "HTTPS",
      "TLS"
    ],
    "title": "现代 HTTPS 和 TLS 握手如何建立安全连接？",
    "answer": "HTTPS 是在 TLS 安全通道上传输 HTTP。客户端与服务端协商协议版本和密码套件，服务端发送证书链证明公钥身份；客户端验证主机名、有效期、签名链等信息。现代 TLS 通常通过（EC）DHE 等密钥交换共同派生会话密钥，证书私钥用于签名认证，而不是简单用 RSA 加密一个预主密钥。\n\n后续应用数据使用对称加密和完整性保护。TLS 1.3 简化握手并支持会话恢复；0-RTT 数据存在重放风险，只适合可安全重放的操作。",
    "keyPoints": [
      "证书链用于认证服务器身份",
      "现代握手通常使用临时 Diffie-Hellman 密钥交换",
      "应用数据使用对称加密和完整性保护",
      "TLS 1.3 简化握手",
      "0-RTT 需要考虑重放风险"
    ],
    "difficulty": 3,
    "followUps": [
      "证书认证与密钥交换为什么是两个不同问题？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-tcp",
    "category": "network",
    "tags": [
      "TCP",
      "连接"
    ],
    "title": "TCP 三次握手和四次挥手分别解决什么问题？",
    "answer": "三次握手（建立连接）：\n客户端发 SYN；\n服务端返回 SYN+ACK；\n客户端返回 ACK。 目的：双向收发能力确认，防止旧无效连接。\n四次挥手（断开连接）：\n客户端发 FIN；\n服务端 ACK 确认；\n服务端数据发送完毕，发送 FIN；\n客户端 ACK 确认。\nTIME-WAIT 状态：客户端最后等待，确保对方收到 ACK，等待 2MSLS。\n面试小技巧：前端不用深挖内核细节，讲清楚目的即可，不要背一堆标志位。",
    "keyPoints": [
      "三次握手（建立连接）：",
      "客户端发 SYN",
      "服务端返回 SYN+ACK",
      "客户端返回 ACK。 目的：双向收发能力确认，防止旧无效连接",
      "四次挥手（断开连接）："
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-tcp-udp",
    "category": "network",
    "tags": [
      "TCP",
      "UDP"
    ],
    "title": "TCP 和 UDP 区别？",
    "answer": "TCP：面向连接；可靠传输；握手挥手；重传、拥塞控制；慢；HTTP/1/2 基于 TCP。\nUDP：无连接；不可靠；没有重传；速度快；QUIC (HTTP3) 基于 UDP。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "TCP：面向连接；可靠传输；握手挥手；重传、拥塞控制；慢；HTTP/1/2 基于 TCP",
      "UDP：无连接；不可靠；没有重传；速度快；QUIC (HTTP3) 基于 UDP",
      "了解 TCP 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-cors",
    "category": "network",
    "tags": [
      "同源策略",
      "CORS"
    ],
    "title": "什么是跨域，同源策略，为什么浏览器要有同源策略？",
    "answer": "同源：协议、域名、端口三者全部相同。 同源策略：浏览器安全策略，限制不同源的脚本读取对方响应。 目的：防止恶意网站窃取用户数据，防止 CSRF 攻击。\n跨域不是请求发不出去，请求已经到达服务器，浏览器拦截返回结果。\n跨域解决方案：\nCORS（后端设置响应头 Access-Control-Allow-Origin，生产首选）\n开发环境：webpack/vite proxy 代理\nNginx 反向代理\nJSONP，仅支持 GET，老旧方案。\nCORS 简单区分简单请求、预检 OPTIONS 请求： 满足：method 为 GET/POST/HEAD，头部只有简单字段，就是简单请求； 否则浏览器先发 OPTIONS 预检请求，确认服务器允许跨域，再发真实请求。",
    "keyPoints": [
      "同源：协议、域名、端口三者全部相同。 同源策略：浏览器安全策略，限制不同源的脚本读取对方响应。 目的：防止恶意网站窃取用户数据，防止 CSRF 攻击",
      "跨域不是请求发不出去，请求已经到达服务器，浏览器拦截返回结果",
      "CORS（后端设置响应头 Access-Control-Allow-Origin，生产首选）",
      "开发环境：webpack/vite proxy 代理",
      "Nginx 反向代理"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-web-storage-cookie",
    "category": "network",
    "tags": [
      "Cookie",
      "存储"
    ],
    "title": "Cookie、sessionStorage、localStorage 区别？",
    "answer": "Cookie\n存储大小 4k；每次 http 请求自动携带发给后端；可以设置过期时间；\n分域；有 HttpOnly、Secure、SameSite 属性，防范 XSS、CSRF。\nlocalStorage\n最大 5M；永久存储，手动清除；不会随 http 请求发送；同域共享。\nsessionStorage\n5M；页面会话级别，关闭标签页就清除；不同标签页不共享。\n安全：HttpOnly 的 cookie JS 不能读取，防御 XSS 窃取 cookie。SameSite 防止 CSRF。",
    "keyPoints": [
      "存储大小 4k；每次 http 请求自动携带发给后端；可以设置过期时间",
      "分域；有 HttpOnly、Secure、SameSite 属性，防范 XSS、CSRF",
      "localStorage",
      "最大 5M；永久存储，手动清除；不会随 http 请求发送；同域共享",
      "sessionStorage"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-xss-csrf",
    "category": "network",
    "tags": [
      "安全",
      "XSS",
      "CSRF"
    ],
    "title": "XSS 和 CSRF 是什么，怎么防御（前端安全必问）？",
    "answer": "XSS 跨站脚本攻击\n恶意脚本注入页面执行。分为存储型、反射型、DOM 型。 防御：\n输入输出转义，对 HTML 特殊字符转义；\n使用 CSP 内容安全策略；\nCookie 设置 HttpOnly，防止 JS 读取 cookie；\nVue/React 默认插值会做转义，v-innerHTML 危险。\nCSRF 跨站请求伪造\n利用浏览器自动携带 cookie，诱导用户在恶意页面发起请求，冒充用户操作。 防御：\ntoken 校验，请求携带自定义 token；\nCookie 设置 SameSite=Strict/Lax；\n校验 Referer。",
    "keyPoints": [
      "XSS 跨站脚本攻击",
      "恶意脚本注入页面执行。分为存储型、反射型、DOM 型。 防御：",
      "输入输出转义，对 HTML 特殊字符转义",
      "使用 CSP 内容安全策略",
      "Cookie 设置 HttpOnly，防止 JS 读取 cookie"
    ],
    "difficulty": 3,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-url-request-flow",
    "category": "network",
    "tags": [
      "DNS",
      "HTTP",
      "TLS"
    ],
    "title": "从网络链路角度看，输入 URL 后发生了什么？",
    "answer": "浏览器解析 URL 和策略，检查缓存、Service Worker、代理等可能的响应来源；需要联网时解析 DNS，选择并建立 TCP+TLS、QUIC 等连接，再发送 HTTP 请求。连接可能被复用，不一定每次都重新握手。\n\n响应经过重定向、缓存和安全检查后交给浏览器加载器。HTML 解析与子资源发现会并行推进，样式表通常阻塞首次渲染并可能阻塞后续脚本，普通同步脚本会阻塞解析；async、defer 和模块脚本具有不同调度语义。",
    "keyPoints": [
      "缓存或 Service Worker 可能直接提供响应",
      "连接可能复用而非每次新建",
      "DNS、传输连接和 HTTP 是不同阶段",
      "子资源发现与 HTML 解析可并行推进",
      "脚本和样式会以不同方式影响解析与渲染"
    ],
    "difficulty": 3,
    "followUps": [
      "连接复用时 DNS、TCP 和 TLS 阶段会如何反映在性能条目中？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-script-loading",
    "category": "network",
    "tags": [
      "资源加载",
      "脚本"
    ],
    "title": "script 标签 async 和 defer 的区别？",
    "answer": "普通 script：下载、执行都会阻塞 DOM 解析。\nasync：脚本异步下载，下载完立刻执行，执行顺序不保证。\ndefer：异步下载，DOM 解析完成之后再执行，保持脚本顺序执行。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "普通 script：下载、执行都会阻塞 DOM 解析",
      "async：脚本异步下载，下载完立刻执行，执行顺序不保证",
      "defer：异步下载，DOM 解析完成之后再执行，保持脚本顺序执行"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-etag-last-modified",
    "category": "network",
    "tags": [
      "HTTP",
      "缓存"
    ],
    "title": "什么是 ETag，和 Last-Modified 对比？",
    "answer": "Last-Modified 是文件修改时间，秒级；如果文件内容没变，时间改动会误判。 ETag 是资源内容哈希，内容变化才改变，精度更高；但是服务器计算 ETag 有性能开销。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "Last-Modified 是文件修改时间，秒级；如果文件内容没变，时间改动会误判。 ETag 是资源内容哈希，内容变化才改变，精度更高；但是服务器计算 ETag 有性能开销",
      "辨别 缓存 的适用场景",
      "了解 HTTP 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-csp",
    "category": "network",
    "tags": [
      "安全",
      "CSP"
    ],
    "title": "什么是 CSP 内容安全策略？",
    "answer": "安全响应头，限制页面可以加载哪些脚本、资源，用来防御 XSS 攻击。 可以禁止内联脚本、禁止 eval，指定允许的资源域名。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。\n\n回答时应区分规范语义、常见实现和具体项目约束。",
    "keyPoints": [
      "安全响应头，限制页面可以加载哪些脚本、资源，用来防御 XSS 攻击。 可以禁止内联脚本、禁止 eval，指定允许的资源域名",
      "辨别 CSP 的适用场景",
      "了解 安全 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-redirect-301-302",
    "category": "network",
    "tags": [
      "HTTP",
      "重定向"
    ],
    "title": "301 和 302 区别，有什么坑？",
    "answer": "301 永久重定向：浏览器会缓存重定向结果。 302 临时重定向：不缓存。 坑：302 会把 POST 请求变成 GET，所以出现 307 保持原请求方法。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "301 永久重定向：浏览器会缓存重定向结果。 302 临时重定向：不缓存。 坑：302 会把 POST 请求变成 GET，所以出现 307 保持原请求方法",
      "辨别 重定向 的适用场景",
      "了解 HTTP 的风险和边界"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-request-headers",
    "category": "network",
    "tags": [
      "HTTP",
      "请求头"
    ],
    "title": "请求头常见字段：User-Agent、Referer、Origin、Content-Type？",
    "answer": "User-Agent：浏览器设备信息；\nReferer：请求来源页面地址；\nOrigin：请求源，跨域请求带上；\nContent-Type：请求体格式； application/json、application/x-www-form-urlencoded、multipart/form-data上传文件。",
    "keyPoints": [
      "User-Agent：浏览器设备信息",
      "Referer：请求来源页面地址",
      "Origin：请求源，跨域请求带上",
      "Content-Type：请求体格式； application/json、application/x-www-form-urlencoded、multipart/form-data上传文件"
    ],
    "difficulty": 1,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-multipart-form-data",
    "category": "network",
    "tags": [
      "HTTP",
      "文件上传"
    ],
    "title": "上传文件为什么用 multipart/form-data？",
    "answer": "普通表单编码无法传输二进制文件；multipart/form-data 把表单切割成多段，支持二进制文件上传。\n\n具体行为还会受到协议版本、代理、缓存和服务端配置影响。\n\n回答时应区分规范语义、常见实现和具体项目约束。",
    "keyPoints": [
      "普通表单编码无法传输二进制文件；multipart/form-data 把表单切割成多段，支持二进制文件上传",
      "辨别 文件上传 的适用场景",
      "了解 HTTP 的风险和边界"
    ],
    "difficulty": 2,
    "followUps": [
      "如果把这个结论用于真实项目，还需要检查哪些边界条件？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-dns-resolution",
    "category": "network",
    "tags": [
      "DNS",
      "域名"
    ],
    "title": "DNS 解析通常经历哪些步骤？",
    "answer": "客户端会先检查浏览器、系统和本地解析器缓存，再向递归解析器查询。递归解析器可能依次访问根、顶级域和权威 DNS 服务器获得记录。\n\n缓存时间由 TTL 等策略影响，hosts、代理和加密 DNS 也可能改变实际查询路径。",
    "keyPoints": [
      "客户端会先检查浏览器、系统和本地解析器缓存，再向递归解析器查询",
      "递归解析器可能依次访问根、顶级域和权威 DNS 服务器获得记录",
      "缓存时间由 TTL 等策略影响，hosts、代理和加密 DNS 也可能改变实际查询路径"
    ],
    "difficulty": 2,
    "followUps": [
      "DNS 缓存污染或过期时如何定位？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-dns-records",
    "category": "network",
    "tags": [
      "DNS",
      "记录类型"
    ],
    "title": "A、AAAA、CNAME、MX 和 TXT 记录分别做什么？",
    "answer": "A 和 AAAA 分别把名称映射到 IPv4 与 IPv6 地址。CNAME 为名称建立别名，MX 指定邮件服务器，TXT 保存可验证的文本信息。\n\n记录类型的可组合规则、根域限制和服务商实现需要结合权威 DNS 配置确认。",
    "keyPoints": [
      "A 和 AAAA 分别把名称映射到 IPv4 与 IPv6 地址",
      "CNAME 为名称建立别名，MX 指定邮件服务器，TXT 保存可验证的文本信息",
      "记录类型的可组合规则、根域限制和服务商实现需要结合权威 DNS 配置确认"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 CNAME 通常不能与同名其他记录并存？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-tcp-reliability",
    "category": "network",
    "tags": [
      "TCP",
      "可靠传输"
    ],
    "title": "TCP 如何提供可靠、有序的字节流？",
    "answer": "TCP 使用序列号、确认应答和校验机制识别丢失、重复与乱序数据。发送端根据重传超时和快速重传等信号重新发送未确认数据。\n\n可靠性只保证连接内字节传输，不保证应用消息边界、业务幂等或对端已经持久化处理。",
    "keyPoints": [
      "TCP 使用序列号、确认应答和校验机制识别丢失、重复与乱序数据",
      "发送端根据重传超时和快速重传等信号重新发送未确认数据",
      "可靠性只保证连接内字节传输，不保证应用消息边界、业务幂等或对端已经持久化处理"
    ],
    "difficulty": 3,
    "followUps": [
      "TCP 确认收到是否等于应用已经处理？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-flow-congestion-control",
    "category": "network",
    "tags": [
      "TCP",
      "拥塞控制"
    ],
    "title": "流量控制和拥塞控制有什么区别？",
    "answer": "流量控制通过接收窗口避免发送端压垮单个接收方缓冲区。拥塞控制根据网络丢包、时延等信号调整拥塞窗口，避免压垮传输路径。\n\n实际发送量同时受接收窗口和拥塞窗口限制，不同 TCP 算法的增长与恢复策略也不同。",
    "keyPoints": [
      "流量控制通过接收窗口避免发送端压垮单个接收方缓冲区",
      "拥塞控制根据网络丢包、时延等信号调整拥塞窗口，避免压垮传输路径",
      "实际发送量同时受接收窗口和拥塞窗口限制，不同 TCP 算法的增长与恢复策略也不同"
    ],
    "difficulty": 3,
    "followUps": [
      "带宽很高但 RTT 很大时为什么吞吐仍可能受限？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-certificate-validation",
    "category": "network",
    "tags": [
      "TLS",
      "证书"
    ],
    "title": "浏览器如何验证 HTTPS 证书？",
    "answer": "浏览器会检查证书有效期、主机名、用途和签名链是否能连接到受信任根证书。还会结合吊销信息、证书透明度和本地安全策略判断连接是否可信。\n\n证书验证只确认身份绑定与链路安全，不代表网站业务内容本身可信。具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "浏览器会检查证书有效期、主机名、用途和签名链是否能连接到受信任根证书",
      "还会结合吊销信息、证书透明度和本地安全策略判断连接是否可信",
      "证书验证只确认身份绑定与链路安全，不代表网站业务内容本身可信"
    ],
    "difficulty": 3,
    "followUps": [
      "中间证书缺失为什么会导致部分客户端失败？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http-message",
    "category": "network",
    "tags": [
      "HTTP",
      "报文"
    ],
    "title": "HTTP 请求和响应报文由哪些部分组成？",
    "answer": "HTTP 消息包含起始行、头字段和可选消息体，具体线格式会随协议版本变化。请求方法与目标描述操作，响应状态码表达处理结果，头字段携带元数据。\n\nContent-Length、Transfer-Encoding、Content-Type 等字段决定消息边界或语义，不能混为一谈。",
    "keyPoints": [
      "HTTP 消息包含起始行、头字段和可选消息体，具体线格式会随协议版本变化",
      "请求方法与目标描述操作，响应状态码表达处理结果，头字段携带元数据",
      "Content-Length、Transfer-Encoding、Content-Type 等字段决定消息边界或语义，不能混为一谈"
    ],
    "difficulty": 1,
    "followUps": [
      "HTTP/2 中为什么看不到传统文本起始行？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-content-negotiation",
    "category": "network",
    "tags": [
      "HTTP",
      "内容协商"
    ],
    "title": "HTTP 内容协商如何选择响应格式？",
    "answer": "客户端可以通过 Accept、Accept-Language、Accept-Encoding 等字段表达偏好。服务端选择表示形式并通过 Content-Type、Content-Language、Content-Encoding 返回结果。\n\n参与缓存选择的请求头应通过 Vary 声明，否则共享缓存可能复用错误变体。",
    "keyPoints": [
      "客户端可以通过 Accept、Accept-Language、Accept-Encoding 等字段表达偏好",
      "服务端选择表示形式并通过 Content-Type、Content-Language、Content-Encoding 返回结果",
      "参与缓存选择的请求头应通过 Vary 声明，否则共享缓存可能复用错误变体"
    ],
    "difficulty": 2,
    "followUps": [
      "Vary: Accept-Encoding 对缓存键有什么影响？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-content-encoding",
    "category": "network",
    "tags": [
      "HTTP",
      "压缩"
    ],
    "title": "gzip、Brotli 等内容编码如何协商？",
    "answer": "客户端用 Accept-Encoding 声明支持的编码，服务端用 Content-Encoding 标记实际压缩方式。文本资源通常压缩收益明显，已经压缩的图片视频再次压缩可能收益有限。\n\n压缩会消耗 CPU，并需正确设置缓存变体和防范少数与机密数据相关的压缩侧信道。",
    "keyPoints": [
      "客户端用 Accept-Encoding 声明支持的编码，服务端用 Content-Encoding 标记实际压缩方式",
      "文本资源通常压缩收益明显，已经压缩的图片视频再次压缩可能收益有限",
      "压缩会消耗 CPU，并需正确设置缓存变体和防范少数与机密数据相关的压缩侧信道"
    ],
    "difficulty": 2,
    "followUps": [
      "Brotli 为什么常用于 HTTPS 静态资源？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-connection-reuse",
    "category": "network",
    "tags": [
      "HTTP",
      "连接复用"
    ],
    "title": "HTTP 连接复用为什么能改善性能？",
    "answer": "复用连接可以减少 TCP 和 TLS 握手带来的往返与计算成本。HTTP/1.1 可在连接上顺序发送多个请求，HTTP/2 和 HTTP/3 支持更强的并发复用。\n\n空闲超时、代理限制、域名分片和连接迁移都会影响实际复用效果。",
    "keyPoints": [
      "复用连接可以减少 TCP 和 TLS 握手带来的往返与计算成本",
      "HTTP/1.1 可在连接上顺序发送多个请求，HTTP/2 和 HTTP/3 支持更强的并发复用",
      "空闲超时、代理限制、域名分片和连接迁移都会影响实际复用效果"
    ],
    "difficulty": 2,
    "followUps": [
      "域名分片为什么可能损害 HTTP/2 性能？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http2-multiplexing",
    "category": "network",
    "tags": [
      "HTTP/2",
      "多路复用"
    ],
    "title": "HTTP/2 多路复用解决了什么问题？",
    "answer": "HTTP/2 把消息拆成带流标识的二进制帧，让多个请求响应交错使用同一连接。它缓解 HTTP/1.1 应用层队头阻塞和多连接开销，并支持流级优先级与控制。\n\n多个流仍共享同一 TCP 连接，底层丢包可能阻塞后续字节到达所有流。",
    "keyPoints": [
      "HTTP/2 把消息拆成带流标识的二进制帧，让多个请求响应交错使用同一连接",
      "它缓解 HTTP/1.1 应用层队头阻塞和多连接开销，并支持流级优先级与控制",
      "多个流仍共享同一 TCP 连接，底层丢包可能阻塞后续字节到达所有流"
    ],
    "difficulty": 3,
    "followUps": [
      "HTTP/2 为什么仍可能受到 TCP 队头阻塞？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http2-hpack",
    "category": "network",
    "tags": [
      "HTTP/2",
      "头部压缩"
    ],
    "title": "HPACK 为什么能压缩 HTTP/2 头部？",
    "answer": "HPACK 使用静态表、动态表和霍夫曼编码减少重复头字段传输。编码器和解码器维护同步状态，因此表大小和敏感字段处理会影响压缩与安全。\n\n头部压缩降低冗余但不压缩消息体，消息体仍由 Content-Encoding 等机制处理。",
    "keyPoints": [
      "HPACK 使用静态表、动态表和霍夫曼编码减少重复头字段传输",
      "编码器和解码器维护同步状态，因此表大小和敏感字段处理会影响压缩与安全",
      "头部压缩降低冗余但不压缩消息体，消息体仍由 Content-Encoding 等机制处理"
    ],
    "difficulty": 3,
    "followUps": [
      "为什么 Authorization 等敏感字段不应随意进入动态表？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-http3-quic",
    "category": "network",
    "tags": [
      "HTTP/3",
      "QUIC"
    ],
    "title": "HTTP/3 和 QUIC 的核心变化是什么？",
    "answer": "HTTP/3 把 HTTP 语义映射到基于 UDP 的 QUIC 传输上，并内置 TLS 1.3。QUIC 在用户态管理多个独立流，一个流丢包通常不会阻塞其他流的数据交付。\n\n它还支持连接迁移和更快建连，但会受到网络设备 UDP 策略与实现成熟度影响。",
    "keyPoints": [
      "HTTP/3 把 HTTP 语义映射到基于 UDP 的 QUIC 传输上，并内置 TLS 1.3",
      "QUIC 在用户态管理多个独立流，一个流丢包通常不会阻塞其他流的数据交付",
      "它还支持连接迁移和更快建连，但会受到网络设备 UDP 策略与实现成熟度影响"
    ],
    "difficulty": 3,
    "followUps": [
      "QUIC 连接 ID 如何支持网络切换？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-cdn",
    "category": "network",
    "tags": [
      "CDN",
      "缓存"
    ],
    "title": "CDN 如何加速静态资源和动态请求？",
    "answer": "CDN 通过分布式边缘节点让用户从更近位置获取缓存内容。缓存键、TTL、回源策略和主动失效决定命中率与内容新鲜度。\n\n动态加速还可能优化路由与连接复用，但个性化响应必须避免被错误共享缓存。具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "CDN 通过分布式边缘节点让用户从更近位置获取缓存内容",
      "缓存键、TTL、回源策略和主动失效决定命中率与内容新鲜度",
      "动态加速还可能优化路由与连接复用，但个性化响应必须避免被错误共享缓存"
    ],
    "difficulty": 2,
    "followUps": [
      "带哈希静态资源为什么适合长时间 CDN 缓存？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-reverse-proxy",
    "category": "network",
    "tags": [
      "代理",
      "架构"
    ],
    "title": "反向代理在 Web 架构中承担哪些职责？",
    "answer": "反向代理代表服务端接收客户端请求，并转发到内部应用实例。它可以处理 TLS 终止、负载均衡、缓存、压缩、鉴权和统一日志。\n\n代理会改变客户端地址与协议观察结果，应用需正确处理 Forwarded 或 X-Forwarded-* 且只信任受控代理。",
    "keyPoints": [
      "反向代理代表服务端接收客户端请求，并转发到内部应用实例",
      "它可以处理 TLS 终止、负载均衡、缓存、压缩、鉴权和统一日志",
      "代理会改变客户端地址与协议观察结果，应用需正确处理 Forwarded 或 X-Forwarded-* 且只信任受控代理"
    ],
    "difficulty": 2,
    "followUps": [
      "错误信任 X-Forwarded-For 会带来什么风险？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-load-balancing",
    "category": "network",
    "tags": [
      "负载均衡",
      "可用性"
    ],
    "title": "常见负载均衡策略有什么取舍？",
    "answer": "轮询、最少连接、哈希和基于权重的策略适合不同请求成本与状态模型。健康检查和故障摘除决定流量是否会继续进入异常实例。\n\n粘性会话简化有状态应用但降低弹性，通常更推荐外置会话状态或无状态服务。具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "轮询、最少连接、哈希和基于权重的策略适合不同请求成本与状态模型",
      "健康检查和故障摘除决定流量是否会继续进入异常实例",
      "粘性会话简化有状态应用但降低弹性，通常更推荐外置会话状态或无状态服务"
    ],
    "difficulty": 2,
    "followUps": [
      "一致性哈希适合解决什么分配问题？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-websocket",
    "category": "network",
    "tags": [
      "WebSocket",
      "实时通信"
    ],
    "title": "WebSocket 的握手和通信特点是什么？",
    "answer": "WebSocket 通常先通过 HTTP Upgrade 握手，再在同一连接上进行全双工帧通信。它适合双向低延迟消息，但心跳、重连、背压、鉴权续期和水平扩展需由应用设计。\n\n浏览器 WebSocket API 不提供通用请求头自定义，跨站连接仍要在服务端校验 Origin 和身份。",
    "keyPoints": [
      "WebSocket 通常先通过 HTTP Upgrade 握手，再在同一连接上进行全双工帧通信",
      "它适合双向低延迟消息，但心跳、重连、背压、鉴权续期和水平扩展需由应用设计",
      "浏览器 WebSocket API 不提供通用请求头自定义，跨站连接仍要在服务端校验 Origin 和身份"
    ],
    "difficulty": 2,
    "followUps": [
      "WebSocket 断线重连如何避免重复消息？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-sse",
    "category": "network",
    "tags": [
      "SSE",
      "实时通信"
    ],
    "title": "Server-Sent Events 与 WebSocket 如何选择？",
    "answer": "SSE 基于 HTTP 文本事件流，主要支持服务端到浏览器的单向推送。浏览器 EventSource 提供自动重连和事件 ID 机制，代理兼容通常较好。\n\n需要双向高频二进制通信时 WebSocket 更合适，只需服务器推送时 SSE 往往更简单。",
    "keyPoints": [
      "SSE 基于 HTTP 文本事件流，主要支持服务端到浏览器的单向推送",
      "浏览器 EventSource 提供自动重连和事件 ID 机制，代理兼容通常较好",
      "需要双向高频二进制通信时 WebSocket 更合适，只需服务器推送时 SSE 往往更简单"
    ],
    "difficulty": 2,
    "followUps": [
      "SSE 如何从 Last-Event-ID 继续接收？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-polling",
    "category": "network",
    "tags": [
      "轮询",
      "实时通信"
    ],
    "title": "短轮询、长轮询和流式响应有什么区别？",
    "answer": "短轮询按固定间隔重复请求，简单但可能产生大量空响应和延迟。长轮询让服务端等待事件或超时后返回，客户端随后立即发起下一次请求。\n\n流式响应保持连接并持续传输分块数据，需要考虑代理缓冲、断线恢复和背压。具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "短轮询按固定间隔重复请求，简单但可能产生大量空响应和延迟",
      "长轮询让服务端等待事件或超时后返回，客户端随后立即发起下一次请求",
      "流式响应保持连接并持续传输分块数据，需要考虑代理缓冲、断线恢复和背压"
    ],
    "difficulty": 1,
    "followUps": [
      "什么业务量级下短轮询仍是合理选择？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-rest",
    "category": "network",
    "tags": [
      "API",
      "REST"
    ],
    "title": "REST 风格接口的核心约束是什么？",
    "answer": "REST 强调资源标识、统一接口、无状态交互和可缓存等约束。HTTP 方法、状态码和表示形式应表达资源操作语义，而不是只把所有请求包装成一个动作入口。\n\n实际 API 可以借鉴 REST 约束，但不应把 URL 命名规则等同于完整 REST 架构。",
    "keyPoints": [
      "REST 强调资源标识、统一接口、无状态交互和可缓存等约束",
      "HTTP 方法、状态码和表示形式应表达资源操作语义，而不是只把所有请求包装成一个动作入口",
      "实际 API 可以借鉴 REST 约束，但不应把 URL 命名规则等同于完整 REST 架构"
    ],
    "difficulty": 2,
    "followUps": [
      "无状态约束是否意味着服务端不能保存任何数据？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-graphql",
    "category": "network",
    "tags": [
      "API",
      "GraphQL"
    ],
    "title": "GraphQL 相比 REST 有哪些优势和成本？",
    "answer": "GraphQL 允许客户端按模式查询所需字段，减少多端字段组合中的过取和欠取。单一端点并不等于单一成本，服务端需要限制查询深度、复杂度并解决 N+1 访问。\n\nHTTP 缓存、错误状态和文件上传等能力需要额外约定，是否采用取决于领域和团队工具链。",
    "keyPoints": [
      "GraphQL 允许客户端按模式查询所需字段，减少多端字段组合中的过取和欠取",
      "单一端点并不等于单一成本，服务端需要限制查询深度、复杂度并解决 N+1 访问",
      "HTTP 缓存、错误状态和文件上传等能力需要额外约定，是否采用取决于领域和团队工具链"
    ],
    "difficulty": 2,
    "followUps": [
      "DataLoader 如何缓解 GraphQL N+1 问题？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-rpc",
    "category": "network",
    "tags": [
      "API",
      "RPC"
    ],
    "title": "RPC 与资源风格 HTTP API 有什么区别？",
    "answer": "RPC 以调用远程方法为中心，接口通常明确表达动作和参数。资源风格 API 更强调统一方法作用于资源表示，两者都可以运行在 HTTP 等传输之上。\n\nRPC 生成代码和强契约有利于内部服务，但版本演进、重试语义和跨语言兼容仍需设计。",
    "keyPoints": [
      "RPC 以调用远程方法为中心，接口通常明确表达动作和参数",
      "资源风格 API 更强调统一方法作用于资源表示，两者都可以运行在 HTTP 等传输之上",
      "RPC 生成代码和强契约有利于内部服务，但版本演进、重试语义和跨语言兼容仍需设计"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么 RPC 超时后不能直接假设服务端未执行？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-cookie-security",
    "category": "network",
    "tags": [
      "Cookie",
      "安全"
    ],
    "title": "Cookie 的 Secure、HttpOnly、SameSite 和 Domain 如何配置？",
    "answer": "Secure 限制 Cookie 通过安全连接发送，HttpOnly 阻止脚本读取但不阻止自动携带。SameSite 控制跨站请求携带策略，Domain 和 Path 决定作用范围但不是可靠的安全隔离边界。\n\n会话 Cookie 应缩小作用域、设置合理过期并配合 CSRF 防御，跨站场景还要满足 Secure 等要求。",
    "keyPoints": [
      "Secure 限制 Cookie 通过安全连接发送，HttpOnly 阻止脚本读取但不阻止自动携带",
      "SameSite 控制跨站请求携带策略，Domain 和 Path 决定作用范围但不是可靠的安全隔离边界",
      "会话 Cookie 应缩小作用域、设置合理过期并配合 CSRF 防御，跨站场景还要满足 Secure 等要求"
    ],
    "difficulty": 2,
    "followUps": [
      "SameSite=None 为什么通常必须配合 Secure？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-cors-credentials",
    "category": "network",
    "tags": [
      "CORS",
      "凭据"
    ],
    "title": "携带凭据的 CORS 请求需要满足哪些条件？",
    "answer": "客户端需显式设置 credentials，服务端也要返回 Access-Control-Allow-Credentials: true。允许凭据时 Access-Control-Allow-Origin 不能使用通配符，而应返回经过白名单验证的具体源。\n\nCORS 只控制浏览器脚本读取响应，不替代身份认证、CSRF 防御和服务端授权。",
    "keyPoints": [
      "客户端需显式设置 credentials，服务端也要返回 Access-Control-Allow-Credentials: true",
      "允许凭据时 Access-Control-Allow-Origin 不能使用通配符，而应返回经过白名单验证的具体源",
      "CORS 只控制浏览器脚本读取响应，不替代身份认证、CSRF 防御和服务端授权"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么动态回显 Origin 之前必须校验白名单？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-preflight-cache",
    "category": "network",
    "tags": [
      "CORS",
      "预检"
    ],
    "title": "CORS 预检结果可以如何缓存？",
    "answer": "浏览器可根据 Access-Control-Max-Age 在一段时间内复用预检许可。预检缓存与普通 HTTP 响应缓存是不同的内部缓存，浏览器还可能限制最大缓存时间。\n\n方法、请求头或源变化会影响许可匹配，不能依赖预检缓存绕过服务端鉴权。",
    "keyPoints": [
      "浏览器可根据 Access-Control-Max-Age 在一段时间内复用预检许可",
      "预检缓存与普通 HTTP 响应缓存是不同的内部缓存，浏览器还可能限制最大缓存时间",
      "方法、请求头或源变化会影响许可匹配，不能依赖预检缓存绕过服务端鉴权"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么减少自定义请求头可能降低预检频率？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-sri",
    "category": "network",
    "tags": [
      "安全",
      "资源完整性"
    ],
    "title": "Subresource Integrity 如何防止第三方资源被篡改？",
    "answer": "SRI 让页面在 link 或 script 上声明资源内容的密码学摘要。浏览器下载后校验摘要，不匹配就拒绝执行或应用该资源。\n\n跨源资源通常还要满足 CORS 要求，版本更新时必须同步更新摘要并保留可用回退策略。",
    "keyPoints": [
      "SRI 让页面在 link 或 script 上声明资源内容的密码学摘要",
      "浏览器下载后校验摘要，不匹配就拒绝执行或应用该资源",
      "跨源资源通常还要满足 CORS 要求，版本更新时必须同步更新摘要并保留可用回退策略"
    ],
    "difficulty": 2,
    "followUps": [
      "SRI 与 CSP 可以怎样配合？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-hsts",
    "category": "network",
    "tags": [
      "HTTPS",
      "安全"
    ],
    "title": "HSTS 解决了什么问题？",
    "answer": "HSTS 响应头要求浏览器在有效期内只通过 HTTPS 访问指定站点。它可以阻止后续 HTTP 降级和部分 SSL stripping 攻击，并可选择覆盖子域。\n\n首次访问前仍可能没有策略，预加载列表能缩小窗口但需要满足严格申请和退出条件。",
    "keyPoints": [
      "HSTS 响应头要求浏览器在有效期内只通过 HTTPS 访问指定站点",
      "它可以阻止后续 HTTP 降级和部分 SSL stripping 攻击，并可选择覆盖子域",
      "首次访问前仍可能没有策略，预加载列表能缩小窗口但需要满足严格申请和退出条件"
    ],
    "difficulty": 2,
    "followUps": [
      "includeSubDomains 开启前为什么要检查所有子域？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-mixed-content",
    "category": "network",
    "tags": [
      "HTTPS",
      "安全"
    ],
    "title": "什么是混合内容，浏览器会如何处理？",
    "answer": "HTTPS 页面加载 HTTP 子资源会破坏安全上下文，被称为混合内容。脚本、样式等主动内容通常会被阻止，部分被动资源可能升级或按浏览器策略处理。\n\n应从源站和构建产物消除 HTTP URL，并用 CSP 报告或升级指令辅助迁移。",
    "keyPoints": [
      "HTTPS 页面加载 HTTP 子资源会破坏安全上下文，被称为混合内容",
      "脚本、样式等主动内容通常会被阻止，部分被动资源可能升级或按浏览器策略处理",
      "应从源站和构建产物消除 HTTP URL，并用 CSP 报告或升级指令辅助迁移"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么只把首页改成 HTTPS 仍可能不安全？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-fetch-abort",
    "category": "network",
    "tags": [
      "Fetch",
      "取消"
    ],
    "title": "Fetch 请求如何实现超时和取消？",
    "answer": "Fetch 本身通过 AbortSignal 接收取消通知，可由 AbortController 或 AbortSignal.timeout 等方式触发。取消会让读取请求或响应过程失败，但无法保证服务端没有收到或执行请求。\n\n业务应区分超时、用户取消和网络失败，并清理重试计时器与流读取资源。",
    "keyPoints": [
      "Fetch 本身通过 AbortSignal 接收取消通知，可由 AbortController 或 AbortSignal.timeout 等方式触发",
      "取消会让读取请求或响应过程失败，但无法保证服务端没有收到或执行请求",
      "业务应区分超时、用户取消和网络失败，并清理重试计时器与流读取资源"
    ],
    "difficulty": 2,
    "followUps": [
      "取消 POST 请求后为什么仍需考虑幂等性？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-retry-backoff",
    "category": "network",
    "tags": [
      "可靠性",
      "重试"
    ],
    "title": "网络请求重试为什么需要指数退避和抖动？",
    "answer": "立即同步重试会在故障时放大流量并造成重试风暴。指数退避逐步拉长间隔，随机抖动避免大量客户端在同一时刻再次请求。\n\n只有幂等或带幂等键的操作才适合自动重试，还应设置总时限、次数和可重试错误范围。具体行为还会受到协议版本、代理、缓存和服务端配置影响。",
    "keyPoints": [
      "立即同步重试会在故障时放大流量并造成重试风暴",
      "指数退避逐步拉长间隔，随机抖动避免大量客户端在同一时刻再次请求",
      "只有幂等或带幂等键的操作才适合自动重试，还应设置总时限、次数和可重试错误范围"
    ],
    "difficulty": 3,
    "followUps": [
      "Retry-After 响应头应如何参与退避策略？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-rate-limiting",
    "category": "network",
    "tags": [
      "限流",
      "可靠性"
    ],
    "title": "服务端限流常见算法有哪些？",
    "answer": "固定窗口实现简单但边界可能突发，滑动窗口能更平滑地统计请求。令牌桶允许一定突发并控制平均速率，漏桶更强调恒定流出。\n\n客户端收到限流响应应尊重 Retry-After 并避免并发重试，服务端还要选择用户、IP 或令牌等合理维度。",
    "keyPoints": [
      "固定窗口实现简单但边界可能突发，滑动窗口能更平滑地统计请求",
      "令牌桶允许一定突发并控制平均速率，漏桶更强调恒定流出",
      "客户端收到限流响应应尊重 Retry-After 并避免并发重试，服务端还要选择用户、IP 或令牌等合理维度"
    ],
    "difficulty": 2,
    "followUps": [
      "分布式限流如何避免多个节点各自超发？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-resumable-upload",
    "category": "network",
    "tags": [
      "文件上传",
      "可靠性"
    ],
    "title": "大文件分片和断点续传需要设计哪些协议？",
    "answer": "客户端把文件切片并为文件或分片计算稳定标识，服务端记录已接收范围。重试上传应具备幂等性，合并前要校验顺序、大小、摘要和用户权限。\n\n并发分片能提高吞吐但会增加内存、连接和服务端合并压力，还需处理取消与过期清理。",
    "keyPoints": [
      "客户端把文件切片并为文件或分片计算稳定标识，服务端记录已接收范围",
      "重试上传应具备幂等性，合并前要校验顺序、大小、摘要和用户权限",
      "并发分片能提高吞吐但会增加内存、连接和服务端合并压力，还需处理取消与过期清理"
    ],
    "difficulty": 3,
    "followUps": [
      "如何避免相同分片重复写入？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "network-range-requests",
    "category": "network",
    "tags": [
      "HTTP",
      "范围请求"
    ],
    "title": "HTTP Range 请求如何支持断点下载？",
    "answer": "客户端用 Range 请求指定需要的字节范围，服务端支持时返回 206 和 Content-Range。Accept-Ranges 可提示能力，If-Range 能在资源未变化时继续范围下载。\n\n多个范围、压缩表示和资源变化会增加实现复杂度，客户端必须验证总长度与响应范围。",
    "keyPoints": [
      "客户端用 Range 请求指定需要的字节范围，服务端支持时返回 206 和 Content-Range",
      "Accept-Ranges 可提示能力，If-Range 能在资源未变化时继续范围下载",
      "多个范围、压缩表示和资源变化会增加实现复杂度，客户端必须验证总长度与响应范围"
    ],
    "difficulty": 2,
    "followUps": [
      "资源 ETag 变化后为什么不应继续拼接旧分片？"
    ],
    "references": [
      {
        "title": "MDN HTTP Guide",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ],
    "updatedAt": "2026-08-18"
  },
  {
    "id": "engineering-01",
    "category": "engineering",
    "tags": [
      "工程化基础",
      "工程化"
    ],
    "title": "前端工程化要解决哪些问题？",
    "answer": "前端工程化把代码组织、依赖安装、质量检查、构建发布和协作流程标准化。目标不是堆工具，而是降低变更风险并让团队可以稳定交付。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "前端工程化把代码组织、依赖安装、质量检查、构建发布和协作流程标准化",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端工程化要解决哪些问题”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN JavaScript Modules",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      },
      {
        "title": "npm package.json",
        "url": "https://docs.npmjs.com/cli/v10/configuring-npm/package-json"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-02",
    "category": "engineering",
    "tags": [
      "模块化",
      "工程化"
    ],
    "title": "ES Module 与 CommonJS 有什么区别？",
    "answer": "ES Module 的 import/export 语法可被静态分析，支持更可靠的 Tree Shaking；CommonJS 在运行时通过 require 加载，兼容 Node.js 历史生态但静态分析能力较弱。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "ES Module 的 import/export 语法可被静态分析，支持更可靠的 Tree Shaking；CommonJS 在运行时通过 require 加载，兼容 Node.js 历史生态但静态分析能力较弱",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“ES Module 与 CommonJS 有什么区别”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "npm package.json",
        "url": "https://docs.npmjs.com/cli/v10/configuring-npm/package-json"
      },
      {
        "title": "TypeScript tsconfig Reference",
        "url": "https://www.typescriptlang.org/tsconfig/"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-03",
    "category": "engineering",
    "tags": [
      "模块化",
      "工程化"
    ],
    "title": "为什么推荐使用 ES Module 的静态导入？",
    "answer": "静态导入让构建工具在编译阶段知道依赖关系，可以做 Tree Shaking、循环依赖提示和更准确的代码分割。动态 import 应留给确实需要按需加载的边界。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "静态导入让构建工具在编译阶段知道依赖关系，可以做 Tree Shaking、循环依赖提示和更准确的代码分割",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“为什么推荐使用 ES Module 的静态导入”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "TypeScript tsconfig Reference",
        "url": "https://www.typescriptlang.org/tsconfig/"
      },
      {
        "title": "Git Documentation",
        "url": "https://git-scm.com/docs"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-04",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "构建工具中的开发模式和生产模式有什么差异？",
    "answer": "开发模式强调启动速度、源码映射和快速增量更新；生产模式强调压缩、分包、缓存友好文件名和运行时体积。两者的配置目标不同，不能只把开发配置直接用于上线。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "开发模式强调启动速度、源码映射和快速增量更新；生产模式强调压缩、分包、缓存友好文件名和运行时体积",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“构建工具中的开发模式和生产模式有什么差异”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "Git Documentation",
        "url": "https://git-scm.com/docs"
      },
      {
        "title": "GitHub Actions Documentation",
        "url": "https://docs.github.com/en/actions"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-05",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "Tree Shaking 为什么有时删除不了未使用代码？",
    "answer": "Tree Shaking 依赖静态 ESM 和正确的副作用声明。模块顶层执行副作用、CommonJS 封装、错误的 sideEffects 配置或动态访问导出，都会让工具保守地保留代码。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "Tree Shaking 依赖静态 ESM 和正确的副作用声明",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“Tree Shaking 为什么有时删除不了未使用代码”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "GitHub Actions Documentation",
        "url": "https://docs.github.com/en/actions"
      },
      {
        "title": "OWASP Dependency-Check",
        "url": "https://owasp.org/www-project-dependency-check/"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-06",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "代码分割应该按什么边界设计？",
    "answer": "通常按路由、页面和低频功能做分割，并把稳定的大型公共依赖提取为共享 chunk。分割过细会增加请求和运行时开销，应该用构建分析和真实访问路径验证。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "通常按路由、页面和低频功能做分割，并把稳定的大型公共依赖提取为共享 chunk",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“代码分割应该按什么边界设计”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "OWASP Dependency-Check",
        "url": "https://owasp.org/www-project-dependency-check/"
      },
      {
        "title": "web.dev Learn Testing",
        "url": "https://web.dev/learn/testing/"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-07",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "动态 import 的典型应用和注意事项是什么？",
    "answer": "动态 import 返回 Promise，适合路由懒加载、编辑器和图表等低频重模块。需要处理加载失败、预加载时机和 chunk 缓存失效，不能把首屏必需代码盲目延后。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "动态 import 返回 Promise，适合路由懒加载、编辑器和图表等低频重模块",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“动态 import 的典型应用和注意事项是什么”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Learn Testing",
        "url": "https://web.dev/learn/testing/"
      },
      {
        "title": "MDN Content Security Policy",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-08",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "source map 有哪些类型，线上如何处理？",
    "answer": "source map 用于把压缩产物映射回源码，inline-source-map 便于开发但体积大，hidden-source-map 可供错误平台使用而不直接暴露映射地址。生产环境要控制访问权限并避免泄露源码。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "source map 用于把压缩产物映射回源码，inline-source-map 便于开发但体积大，hidden-source-map 可供错误平台使用而不直接暴露映射地址",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“source map 有哪些类型，线上如何处理”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Content Security Policy",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
      },
      {
        "title": "Node.js Releases",
        "url": "https://nodejs.org/en/about/previous-releases"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-09",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "前端构建产物为什么要使用内容哈希？",
    "answer": "文件名包含内容哈希后，内容不变的资源可以长期缓存，内容变化会生成新 URL，避免用户拿到旧文件。HTML 通常需要短缓存或协商缓存来发现最新入口文件。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "文件名包含内容哈希后，内容不变的资源可以长期缓存，内容变化会生成新 URL，避免用户拿到旧文件",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“前端构建产物为什么要使用内容哈希”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "Node.js Releases",
        "url": "https://nodejs.org/en/about/previous-releases"
      },
      {
        "title": "Semantic Versioning",
        "url": "https://semver.org/"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-10",
    "category": "engineering",
    "tags": [
      "依赖治理",
      "工程化"
    ],
    "title": "package.json 中 dependencies、devDependencies 如何区分？",
    "answer": "运行时需要的包放在 dependencies，只有本地开发、类型检查、测试和构建需要的工具放在 devDependencies。部署方式不同可能只安装生产依赖，因此错误分类会导致线上缺包。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "运行时需要的包放在 dependencies，只有本地开发、类型检查、测试和构建需要的工具放在 devDependencies",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“package.json 中 dependencies、devDependencies 如何区分”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "Semantic Versioning",
        "url": "https://semver.org/"
      },
      {
        "title": "MDN Web App Manifest",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-11",
    "category": "engineering",
    "tags": [
      "依赖治理",
      "工程化"
    ],
    "title": "lockfile 的作用是什么？",
    "answer": "lockfile 固定直接和间接依赖的精确版本、解析地址及完整性校验，使不同开发机和 CI 获得可复现安装结果。升级依赖应通过包管理器更新并审查锁文件差异。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "lockfile 固定直接和间接依赖的精确版本、解析地址及完整性校验，使不同开发机和 CI 获得可复现安装结果",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“lockfile 的作用是什么”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Web App Manifest",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest"
      },
      {
        "title": "SLSA Framework",
        "url": "https://slsa.dev/"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-12",
    "category": "engineering",
    "tags": [
      "依赖治理",
      "工程化"
    ],
    "title": "如何处理 npm 依赖的安全漏洞？",
    "answer": "先判断漏洞是否被实际代码路径触发，再升级直接依赖或使用兼容的 override/resolution。不能只盲目执行 force 修复，还要运行测试、构建并记录风险接受或替代方案。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "先判断漏洞是否被实际代码路径触发，再升级直接依赖或使用兼容的 override/resolution",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“如何处理 npm 依赖的安全漏洞”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "SLSA Framework",
        "url": "https://slsa.dev/"
      },
      {
        "title": "MDN JavaScript Modules",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-13",
    "category": "engineering",
    "tags": [
      "npm",
      "工程化"
    ],
    "title": "npm install、npm ci 和 npm update 有什么区别？",
    "answer": "npm install 会根据 package.json 和 lockfile 安装并可能更新锁文件；npm ci 要求锁文件存在且严格按锁文件做干净安装，适合 CI；npm update 会主动解析更高的兼容版本。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "npm install 会根据 package.json 和 lockfile 安装并可能更新锁文件；npm ci 要求锁文件存在且严格按锁文件做干净安装，适合 CI；npm update 会主动解析更高的兼容版本",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 CI 更适合使用 npm ci？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "npm CLI Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-ci"
      }
    ]
  },
  {
    "id": "engineering-14",
    "category": "engineering",
    "tags": [
      "Webpack",
      "工程化"
    ],
    "title": "Webpack 中 loader 和 plugin 分别解决什么问题？",
    "answer": "loader 在模块加载时转换特定类型的文件，例如把 TypeScript 或 Sass 转成可处理的模块；plugin 能介入更广泛的构建生命周期，完成 HTML 生成、资源清理和分析等任务。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "loader 在模块加载时转换特定类型的文件，例如把 TypeScript 或 Sass 转成可处理的模块；plugin 能介入更广泛的构建生命周期，完成 HTML 生成、资源清理和分析等任务",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "如何判断一个需求应该写 loader 还是 plugin？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      }
    ]
  },
  {
    "id": "engineering-15",
    "category": "engineering",
    "tags": [
      "Babel",
      "工程化"
    ],
    "title": "Babel 在前端工程中解决什么问题？",
    "answer": "Babel 主要负责把新语法转换为目标环境能理解的 JavaScript，例如箭头函数、可选链和 JSX；它本身不负责补齐所有运行时 API，Promise 等能力还需要 polyfill 或降级方案。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "Babel 主要负责把新语法转换为目标环境能理解的 JavaScript，例如箭头函数、可选链和 JSX；它本身不负责补齐所有运行时 API，Promise 等能力还需要 polyfill 或降级方案",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "Babel 转译和 polyfill 的边界是什么？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Babel Documentation",
        "url": "https://babeljs.io/docs/"
      }
    ]
  },
  {
    "id": "engineering-16",
    "category": "engineering",
    "tags": [
      "Vite",
      "工程化"
    ],
    "title": "Vite 为什么开发启动和热更新通常比传统打包器快？",
    "answer": "Vite 开发阶段利用浏览器原生 ESM 按需提供模块，避免启动时先把整个项目打包；修改文件时只重新处理受影响模块。生产构建仍会进行完整打包和优化，不能把开发速度等同于线上产物速度。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "Vite 开发阶段利用浏览器原生 ESM 按需提供模块，避免启动时先把整个项目打包；修改文件时只重新处理受影响模块",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "Vite 生产构建为什么仍然需要 Rollup 一类的打包过程？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Vite Guide",
        "url": "https://vite.dev/guide/"
      }
    ]
  },
  {
    "id": "engineering-17",
    "category": "engineering",
    "tags": [
      "热更新",
      "工程化"
    ],
    "title": "HMR 的工作原理是什么，为什么有时会失效？",
    "answer": "开发服务器监听文件变化后，只向浏览器推送受影响模块的更新，运行时尝试替换模块并保留状态。模块边界不支持热替换、状态初始化有副作用或依赖链处理失败时会退回整页刷新。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "开发服务器监听文件变化后，只向浏览器推送受影响模块的更新，运行时尝试替换模块并保留状态",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "如何定位 HMR 失效是由模块边界还是代码副作用导致的？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      },
      {
        "title": "Vite Guide",
        "url": "https://vite.dev/guide/"
      }
    ]
  },
  {
    "id": "engineering-18",
    "category": "engineering",
    "tags": [
      "Webpack",
      "工程化"
    ],
    "title": "Webpack 中 resolve.alias 和 extensions 有什么用途？",
    "answer": "resolve.alias 为长路径或多入口提供稳定别名，extensions 让导入时可以省略部分扩展名。配置必须同时被 TypeScript、测试工具和编辑器理解，否则会出现开发能运行但检查或测试失败的路径不一致。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "resolve.alias 为长路径或多入口提供稳定别名，extensions 让导入时可以省略部分扩展名",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么别名配置经常需要在多个工具中同步？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      }
    ]
  },
  {
    "id": "engineering-19",
    "category": "engineering",
    "tags": [
      "环境配置",
      "工程化"
    ],
    "title": "前端开发、测试和生产环境变量应该如何管理？",
    "answer": "环境变量应区分公开配置和服务端秘密，公开值只影响构建或运行时行为，密钥不能打进浏览器产物。不同环境使用明确的配置文件和校验，避免把本地接口地址、调试开关带到生产。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "环境变量应区分公开配置和服务端秘密，公开值只影响构建或运行时行为，密钥不能打进浏览器产物",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么前端环境变量不能当作真正的密钥？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Vite Guide",
        "url": "https://vite.dev/guide/"
      }
    ]
  },
  {
    "id": "engineering-20",
    "category": "engineering",
    "tags": [
      "兼容性",
      "工程化"
    ],
    "title": "Browserslist 在前端项目中有什么作用？",
    "answer": "Browserslist 用一套目标浏览器查询同时约束 Babel、Autoprefixer 和压缩工具，使转译和 CSS 前缀策略保持一致。目标范围应基于用户数据和业务要求，而不是默认兼容所有浏览器。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "Browserslist 用一套目标浏览器查询同时约束 Babel、Autoprefixer 和压缩工具，使转译和 CSS 前缀策略保持一致",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "修改浏览器支持范围后需要重新验证哪些产物？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Babel Documentation",
        "url": "https://babeljs.io/docs/"
      }
    ]
  },
  {
    "id": "engineering-21",
    "category": "engineering",
    "tags": [
      "版本管理",
      "工程化"
    ],
    "title": "语义化版本中的 major、minor、patch 分别表示什么？",
    "answer": "major 通常表示不兼容的 API 变化，minor 表示向后兼容的功能增加，patch 表示向后兼容的问题修复。实际升级还要阅读 changelog，因为依赖的行为和类型变化不一定完全符合直觉。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "major 通常表示不兼容的 API 变化，minor 表示向后兼容的功能增加，patch 表示向后兼容的问题修复",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么锁文件仍然需要提交，即使 package.json 使用了范围版本？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "npm CLI Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-ci"
      }
    ]
  },
  {
    "id": "engineering-22",
    "category": "engineering",
    "tags": [
      "依赖管理",
      "工程化"
    ],
    "title": "dependencies、devDependencies 和 peerDependencies 如何区分？",
    "answer": "dependencies 是运行时必须安装的依赖，devDependencies 只服务于开发、测试和构建；peerDependencies 用于声明插件与宿主库的兼容范围，避免插件偷偷安装多份宿主依赖。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "dependencies 是运行时必须安装的依赖，devDependencies 只服务于开发、测试和构建；peerDependencies 用于声明插件与宿主库的兼容范围，避免插件偷偷安装多份宿主依赖",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "组件库为什么通常把 React 或 Vue 声明为 peerDependencies？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "npm CLI Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-ci"
      }
    ]
  },
  {
    "id": "engineering-23",
    "category": "engineering",
    "tags": [
      "CI/CD",
      "工程化"
    ],
    "title": "前端项目从提交到部署的 CI 流程如何设计？",
    "answer": "常见流程是锁定运行时并干净安装，依次执行类型检查、Lint、单元测试、构建和产物检查，再部署预览或生产。快速且稳定的检查应先执行，失败信息要能定位到具体步骤。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "常见流程是锁定运行时并干净安装，依次执行类型检查、Lint、单元测试、构建和产物检查，再部署预览或生产",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 CI 要使用干净环境而不是复用开发机 node_modules？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "npm CLI Docs",
        "url": "https://docs.npmjs.com/cli/v10/commands/npm-ci"
      }
    ]
  },
  {
    "id": "engineering-24",
    "category": "engineering",
    "tags": [
      "Git Hooks",
      "工程化"
    ],
    "title": "前端项目为什么使用 lint-staged 和 Git Hooks？",
    "answer": "Git Hook 可以在提交前只检查本次修改的文件，快速阻止明显的格式和代码质量问题；完整类型检查、测试和构建仍应放在 CI 中，不能把本地 Hook 当作唯一质量保障。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "Git Hook 可以在提交前只检查本次修改的文件，快速阻止明显的格式和代码质量问题；完整类型检查、测试和构建仍应放在 CI 中，不能把本地 Hook 当作唯一质量保障",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "本地 Hook 和 CI 质量关卡如何分工？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      }
    ]
  },
  {
    "id": "engineering-25",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "单元测试、集成测试和端到端测试如何选择？",
    "answer": "单元测试适合纯函数和独立组件，集成测试验证模块组合，端到端测试验证真实用户流程。测试数量应以风险和反馈速度为依据，关键链路保留少量稳定的 E2E。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "单元测试适合纯函数和独立组件，集成测试验证模块组合，端到端测试验证真实用户流程",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么不能只依赖端到端测试？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-26",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "前端如何 mock 网络请求，避免测试不稳定？",
    "answer": "应在请求边界使用可控的 mock server 或请求拦截器，明确成功、失败、超时和空数据响应。不要在组件内部到处写临时 mock，否则测试会偏离真实调用方式且难以复用。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "应在请求边界使用可控的 mock server 或请求拦截器，明确成功、失败、超时和空数据响应",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "网络 mock 如何覆盖接口变更导致的契约问题？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-27",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "测试覆盖率应该如何理解？",
    "answer": "覆盖率能显示哪些代码被执行过，但不能证明断言正确或边界完整。应重点关注核心业务分支、错误处理和纯逻辑，结合变更风险设阈值，避免为了百分比堆无价值测试。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "覆盖率能显示哪些代码被执行过，但不能证明断言正确或边界完整",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 100% 覆盖率仍可能有线上 bug？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-28",
    "category": "engineering",
    "tags": [
      "发布",
      "工程化"
    ],
    "title": "前端配置为什么不应把密钥打进产物？",
    "answer": "浏览器端代码和环境变量都可被用户下载，任何打包进去的值都不是秘密。密钥应留在服务端，通过受控接口完成需要授权的操作，前端只接收最小公开配置。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "浏览器端代码和环境变量都可被用户下载，任何打包进去的值都不是秘密",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端配置为什么不应把密钥打进产物”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-29",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "单元测试、集成测试和端到端测试如何分工？",
    "answer": "单元测试验证纯函数和小组件，集成测试验证多个模块组合，端到端测试验证关键用户流程。测试金字塔应让快速稳定的测试占多数，把少量 E2E 用于高价值路径。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "单元测试验证纯函数和小组件，集成测试验证多个模块组合，端到端测试验证关键用户流程",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“单元测试、集成测试和端到端测试如何分工”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-30",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "前端测试中为什么要优先验证用户行为？",
    "answer": "按实现细节编写的测试容易在重构时失效，而按可见行为和可访问语义编写更接近真实风险。应验证输入、点击、加载和错误状态，同时对复杂纯逻辑保留直接单测。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "按实现细节编写的测试容易在重构时失效，而按可见行为和可访问语义编写更接近真实风险",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“前端测试中为什么要优先验证用户行为”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-31",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "如何测试异步请求和竞态？",
    "answer": "测试应覆盖成功、失败、超时、取消和响应乱序等情况。使用可控的 mock server 或 Promise，并断言旧请求结果不会覆盖新查询，避免只测理想的单次响应。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "测试应覆盖成功、失败、超时、取消和响应乱序等情况",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“如何测试异步请求和竞态”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-32",
    "category": "engineering",
    "tags": [
      "测试",
      "工程化"
    ],
    "title": "什么是视觉回归测试？",
    "answer": "视觉回归测试对固定场景截图并与基线比较，用于发现样式、字体和布局意外变化。基线要固定浏览器和数据，差异需要人工确认，不能把像素差异直接等同于缺陷。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "视觉回归测试对固定场景截图并与基线比较，用于发现样式、字体和布局意外变化",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“什么是视觉回归测试”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-33",
    "category": "engineering",
    "tags": [
      "可观测性",
      "工程化"
    ],
    "title": "前端错误监控应采集哪些上下文？",
    "answer": "至少记录错误类型、堆栈、版本、页面路由、设备和浏览器信息，并通过 source map 还原源码位置。用户标识必须脱敏，采样和上报失败不能阻塞主流程。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "至少记录错误类型、堆栈、版本、页面路由、设备和浏览器信息，并通过 source map 还原源码位置",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“前端错误监控应采集哪些上下文”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-34",
    "category": "engineering",
    "tags": [
      "可观测性",
      "工程化"
    ],
    "title": "如何区分前端 JS 错误和资源加载错误？",
    "answer": "window error 可捕获脚本运行时异常，unhandledrejection 关注未处理 Promise；资源加载失败需要在捕获阶段或 Resource Timing 中识别。不同类型应分别统计并关联发布版本。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "window error 可捕获脚本运行时异常，unhandledrejection 关注未处理 Promise；资源加载失败需要在捕获阶段或 Resource Timing 中识别",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“如何区分前端 JS 错误和资源加载错误”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-35",
    "category": "engineering",
    "tags": [
      "可观测性",
      "工程化"
    ],
    "title": "前端日志上报为什么要采样和限流？",
    "answer": "高流量页面若全量上报会增加网络、存储和成本，也可能放大隐私风险。应按错误等级、版本和用户会话采样，对重复错误聚合，并在网络空闲时批量发送。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "高流量页面若全量上报会增加网络、存储和成本，也可能放大隐私风险",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“前端日志上报为什么要采样和限流”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-36",
    "category": "engineering",
    "tags": [
      "架构",
      "工程化"
    ],
    "title": "如何划分前端模块边界？",
    "answer": "边界应围绕业务能力和稳定契约，而不是按文件类型机械拆分。模块暴露最小 API，避免互相读写内部状态，并通过依赖方向约束降低循环依赖和修改扩散。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "边界应围绕业务能力和稳定契约，而不是按文件类型机械拆分",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“如何划分前端模块边界”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-37",
    "category": "engineering",
    "tags": [
      "架构",
      "工程化"
    ],
    "title": "什么是渐进式重构？",
    "answer": "渐进式重构在保持线上可用的前提下，用兼容接口、适配层和小步提交逐段替换旧实现。每一步都应可回滚并有测试或监控证明，避免一次性重写造成长期分支。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "渐进式重构在保持线上可用的前提下，用兼容接口、适配层和小步提交逐段替换旧实现",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“什么是渐进式重构”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-38",
    "category": "engineering",
    "tags": [
      "架构",
      "工程化"
    ],
    "title": "前端如何管理跨页面共享状态？",
    "answer": "先区分服务端数据、页面状态和真正跨页面的客户端状态。优先保持状态靠近使用处，只有存在明确共享需求时才引入集中存储，并规定更新来源、缓存失效和持久化边界。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "先区分服务端数据、页面状态和真正跨页面的客户端状态",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“前端如何管理跨页面共享状态”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-39",
    "category": "engineering",
    "tags": [
      "规范",
      "工程化"
    ],
    "title": "如何制定前端浏览器兼容策略？",
    "answer": "根据用户数据和业务目标确定支持范围，再用 browserslist、转译和 polyfill 实现，而不是默认兼容所有浏览器。对不支持的能力提供降级或明确提示，并在 CI 验证关键版本。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "根据用户数据和业务目标确定支持范围，再用 browserslist、转译和 polyfill 实现，而不是默认兼容所有浏览器",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“如何制定前端浏览器兼容策略”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-40",
    "category": "engineering",
    "tags": [
      "规范",
      "工程化"
    ],
    "title": "polyfill 与 transpile 有什么区别？",
    "answer": "transpile 把新语法转换为旧语法，polyfill 则补充运行时缺失的 API。两者需要按目标浏览器按需引入，过量 polyfill 会增加首屏体积，不能把语法转换当成 API 兼容。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "transpile 把新语法转换为旧语法，polyfill 则补充运行时缺失的 API",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“polyfill 与 transpile 有什么区别”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-41",
    "category": "engineering",
    "tags": [
      "安全",
      "工程化"
    ],
    "title": "前端如何防范 XSS？",
    "answer": "优先使用框架默认转义，避免把不可信字符串写入 innerHTML；必须渲染富文本时进行白名单清洗，并配置 CSP 降低脚本注入影响。URL、模板和第三方内容都要作为不可信输入处理。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "优先使用框架默认转义，避免把不可信字符串写入 innerHTML；必须渲染富文本时进行白名单清洗，并配置 CSP 降低脚本注入影响",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“前端如何防范 XSS”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-42",
    "category": "engineering",
    "tags": [
      "安全",
      "工程化"
    ],
    "title": "前端依赖供应链攻击有哪些防护措施？",
    "answer": "锁定依赖版本并校验完整性，限制安装脚本权限，审查新增依赖维护状态和权限范围。CI 使用最小权限令牌、漏洞扫描和制品审计，发现异常时保留可追溯的构建记录。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "锁定依赖版本并校验完整性，限制安装脚本权限，审查新增依赖维护状态和权限范围",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“前端依赖供应链攻击有哪些防护措施”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-43",
    "category": "engineering",
    "tags": [
      "构建优化",
      "工程化"
    ],
    "title": "Webpack externals 适合什么场景？",
    "answer": "externals 把指定依赖排除出打包产物，运行时改由 CDN 或宿主环境提供，可减少包体但增加全局变量、版本和网络可用性风险。只有稳定且可控的公共依赖才适合这样处理。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "externals 把指定依赖排除出打包产物，运行时改由 CDN 或宿主环境提供，可减少包体但增加全局变量、版本和网络可用性风险",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 3,
    "followUps": [
      "使用 externals 后如何保证本地、测试和生产版本一致？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      }
    ]
  },
  {
    "id": "engineering-44",
    "category": "engineering",
    "tags": [
      "性能工程",
      "工程化"
    ],
    "title": "如何避免重复打包同一个依赖？",
    "answer": "检查多版本依赖、别名和 monorepo 解析结果，统一可兼容版本并配置共享 chunk。对于 ESM/CJS 双份引入，要统一入口，避免仅凭文件名判断重复而忽略实际运行时路径。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "检查多版本依赖、别名和 monorepo 解析结果，统一可兼容版本并配置共享 chunk",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“如何避免重复打包同一个依赖”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-45",
    "category": "engineering",
    "tags": [
      "脚本",
      "工程化"
    ],
    "title": "package scripts 应如何组织？",
    "answer": "脚本名称应表达动作和环境，公共流程组合现有脚本而不是复制命令。跨平台命令要避免依赖特定 shell，并把关键参数集中在配置文件或环境变量中，方便本地和 CI 一致执行。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "脚本名称应表达动作和环境，公共流程组合现有脚本而不是复制命令",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“package scripts 应如何组织”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-46",
    "category": "engineering",
    "tags": [
      "发布",
      "工程化"
    ],
    "title": "前端如何处理缓存导致的版本不一致？",
    "answer": "静态资源使用内容哈希，HTML 和配置采用短缓存或版本校验；服务端发布时保证新旧资源在过渡期同时可用。检测到 chunk 加载失败时可提示刷新或重新获取入口，但不能无限重试。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "静态资源使用内容哈希，HTML 和配置采用短缓存或版本校验；服务端发布时保证新旧资源在过渡期同时可用",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端如何处理缓存导致的版本不一致”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-47",
    "category": "engineering",
    "tags": [
      "工程实践",
      "工程化"
    ],
    "title": "如何评估一个新前端工具是否值得引入？",
    "answer": "先确认原生能力和现有工具无法解决，再评估包体、维护活跃度、许可证、学习成本和退出成本。通过小范围 PoC 与构建、测试指标验证收益，避免为单一问题引入长期依赖。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "先确认原生能力和现有工具无法解决，再评估包体、维护活跃度、许可证、学习成本和退出成本",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“如何评估一个新前端工具是否值得引入”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-48",
    "category": "engineering",
    "tags": [
      "发布",
      "工程化"
    ],
    "title": "前端如何用 feature flag 控制新功能发布？",
    "answer": "Feature flag 让代码先发布、功能后开放，可以按用户或比例灰度并快速关闭。开关应有默认安全值、权限约束和清理计划，长期保留无用开关会增加测试和维护成本。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "Feature flag 让代码先发布、功能后开放，可以按用户或比例灰度并快速关闭",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "功能开关失效或配置拉取失败时应该默认开启还是关闭？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-49",
    "category": "engineering",
    "tags": [
      "发布",
      "工程化"
    ],
    "title": "前端发布后发现严重问题，回滚应该回滚什么？",
    "answer": "静态资源发布应保留带版本的历史产物，入口 HTML 或配置切回上一版本即可快速恢复。回滚前要确认接口兼容，不能只切前端代码而让旧版本调用不到当前后端。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "静态资源发布应保留带版本的历史产物，入口 HTML 或配置切回上一版本即可快速恢复",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么前后端发布需要保持一段时间的接口向后兼容？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-50",
    "category": "engineering",
    "tags": [
      "工程配置",
      "工程化"
    ],
    "title": "为什么项目要固定 Node.js 和包管理器版本？",
    "answer": "不同 Node 或包管理器版本可能产生不同依赖解析、原生模块编译和构建结果。通过 engines、corepack、.nvmrc 或 CI 运行时声明统一版本，能减少“本地能跑、CI 失败”的问题。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "不同 Node 或包管理器版本可能产生不同依赖解析、原生模块编译和构建结果",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "如何在 CI 中验证开发者使用了正确的运行时版本？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-51",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "如何区分开发构建、测试构建和生产构建配置？",
    "answer": "三种构建的目标不同：开发关注源码映射和 HMR，测试关注可控环境与覆盖率，生产关注压缩、缓存和安全配置。应复用基础配置并显式覆盖差异，避免用环境变量堆叠不可读的条件。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "三种构建的目标不同：开发关注源码映射和 HMR，测试关注可控环境与覆盖率，生产关注压缩、缓存和安全配置",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "哪些配置不应该从开发环境直接带入生产？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "engineering-52",
    "category": "engineering",
    "tags": [
      "构建",
      "工程化"
    ],
    "title": "前端构建中的 source map 应该如何选择？",
    "answer": "source map 用于把压缩后的堆栈映射回源码，开发环境可选择更快的内联映射，生产环境通常上传到错误监控平台而不公开映射文件。要兼顾调试效率、产物体积和源码泄露风险。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "source map 用于把压缩后的堆栈映射回源码，开发环境可选择更快的内联映射，生产环境通常上传到错误监控平台而不公开映射文件",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么生产 source map 不应直接暴露在公共静态目录？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      }
    ]
  },
  {
    "id": "engineering-53",
    "category": "engineering",
    "tags": [
      "升级",
      "工程化"
    ],
    "title": "升级 Webpack、Vite 或插件时应该检查什么？",
    "answer": "先阅读迁移说明并记录当前构建时间、包体和错误率，再在独立分支升级依赖。完成类型检查、测试、生产构建和关键页面验证后分批发布，并保留旧产物作为回滚方案。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "先阅读迁移说明并记录当前构建时间、包体和错误率，再在独立分支升级依赖",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "如何判断升级带来的构建变慢来自插件还是依赖解析？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "Webpack Guides",
        "url": "https://webpack.js.org/guides/"
      },
      {
        "title": "Vite Guide",
        "url": "https://vite.dev/guide/"
      }
    ]
  },
  {
    "id": "performance-01",
    "category": "performance",
    "tags": [
      "Web Vitals",
      "性能优化"
    ],
    "title": "前端性能优化应该从哪里开始？",
    "answer": "先明确用户路径和目标指标，再用实验室工具与真实用户数据定位瓶颈。优化应遵循测量、提出假设、做小改动、复测和持续监控，避免凭感觉堆缓存或拆组件。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "先明确用户路径和目标指标，再用实验室工具与真实用户数据定位瓶颈",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端性能优化应该从哪里开始”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      },
      {
        "title": "MDN Performance API",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance_API"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-02",
    "category": "performance",
    "tags": [
      "Web Vitals",
      "性能优化"
    ],
    "title": "LCP 指标衡量什么，常见优化方向有哪些？",
    "answer": "LCP 衡量视口内最大文本或图片内容的呈现时间。应定位具体 LCP 元素，减少 TTFB、提前发现关键资源、优化图片和字体，并避免被阻塞的 CSS 或长任务延迟绘制。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "LCP 衡量视口内最大文本或图片内容的呈现时间",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“LCP 指标衡量什么，常见优化方向有哪些”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Performance API",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Performance_API"
      },
      {
        "title": "MDN Preloading Content",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-03",
    "category": "performance",
    "tags": [
      "Web Vitals",
      "性能优化"
    ],
    "title": "CLS 为什么会升高，如何避免布局偏移？",
    "answer": "未预留图片和广告尺寸、字体替换、异步插入内容都可能造成 CLS。为媒体设置宽高比或固定尺寸，避免在已有内容上方插入，并合理使用字体加载策略。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "未预留图片和广告尺寸、字体替换、异步插入内容都可能造成 CLS",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“CLS 为什么会升高，如何避免布局偏移”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Preloading Content",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/preload"
      },
      {
        "title": "MDN Responsive Images",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-04",
    "category": "performance",
    "tags": [
      "Web Vitals",
      "性能优化"
    ],
    "title": "INP 衡量什么，如何降低交互延迟？",
    "answer": "INP 关注用户交互到下一次绘制完成的延迟，长任务、复杂事件处理和大量 DOM 更新都会拖慢它。应拆分长任务、减少同步计算、延迟非关键工作并优化事件处理路径。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "INP 关注用户交互到下一次绘制完成的延迟，长任务、复杂事件处理和大量 DOM 更新都会拖慢它",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“INP 衡量什么，如何降低交互延迟”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Responsive Images",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
      },
      {
        "title": "web.dev Optimize LCP",
        "url": "https://web.dev/articles/optimize-lcp"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-05",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "TTFB 受哪些因素影响，前端能做什么？",
    "answer": "TTFB 包含网络连接、请求排队、服务端处理和首字节返回时间。前端可使用 CDN、合理缓存、预连接和减少重定向降低等待，但服务端查询和渲染通常需要后端协同优化。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "TTFB 包含网络连接、请求排队、服务端处理和首字节返回时间",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“TTFB 受哪些因素影响，前端能做什么”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Optimize LCP",
        "url": "https://web.dev/articles/optimize-lcp"
      },
      {
        "title": "web.dev Optimize CLS",
        "url": "https://web.dev/articles/optimize-cls"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-06",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "从输入 URL 到首屏渲染，性能优化应看哪些阶段？",
    "answer": "应拆分 DNS、连接、请求、响应、解析、脚本执行、样式计算和绘制阶段，用 Performance 面板与 Navigation Timing 对照。每阶段的瓶颈不同，不能只看总耗时或单个网络请求。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "应拆分 DNS、连接、请求、响应、解析、脚本执行、样式计算和绘制阶段，用 Performance 面板与 Navigation Timing 对照",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“从输入 URL 到首屏渲染，性能优化应看哪些阶段”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Optimize CLS",
        "url": "https://web.dev/articles/optimize-cls"
      },
      {
        "title": "web.dev Optimize INP",
        "url": "https://web.dev/articles/optimize-inp"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-07",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "preload、prefetch 和 preconnect 如何选择？",
    "answer": "preload 用于当前页面很快必需的已知资源，prefetch 面向未来导航的低优先级资源，preconnect 提前建立跨域连接。误用 preload 会抢占关键带宽，prefetch 也不应替代首屏资源优化。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "preload 用于当前页面很快必需的已知资源，prefetch 面向未来导航的低优先级资源，preconnect 提前建立跨域连接",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“preload、prefetch 和 preconnect 如何选择”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Optimize INP",
        "url": "https://web.dev/articles/optimize-inp"
      },
      {
        "title": "MDN Web Workers",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-08",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "关键渲染路径包含哪些资源？",
    "answer": "HTML、阻塞解析的脚本、关键 CSS、首屏字体和 LCP 图片通常位于关键路径。应减少它们的数量和体积，延后非关键脚本，并用优先级提示让浏览器作出正确调度。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "HTML、阻塞解析的脚本、关键 CSS、首屏字体和 LCP 图片通常位于关键路径",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“关键渲染路径包含哪些资源”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN Web Workers",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"
      },
      {
        "title": "MDN HTTP Caching",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-09",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "如何优化 JavaScript 对首屏的影响？",
    "answer": "减少入口代码和第三方脚本，按路由和功能懒加载；对非关键任务使用 defer、async、requestIdleCallback 或调度拆分。优化后还要确认代码执行时间，而不只是压缩包体。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "减少入口代码和第三方脚本，按路由和功能懒加载；对非关键任务使用 defer、async、requestIdleCallback 或调度拆分",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“如何优化 JavaScript 对首屏的影响”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "MDN HTTP Caching",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
      },
      {
        "title": "Chrome DevTools Performance",
        "url": "https://developer.chrome.com/docs/devtools/performance"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-10",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "async、defer 和普通 script 有什么区别？",
    "answer": "普通脚本会阻塞 HTML 解析；defer 下载不阻塞解析并在文档解析完成后按顺序执行；async 下载不阻塞但加载后立即执行且顺序不保证。选择取决于脚本是否依赖 DOM 和其他脚本。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "普通脚本会阻塞 HTML 解析；defer 下载不阻塞解析并在文档解析完成后按顺序执行；async 下载不阻塞但加载后立即执行且顺序不保证",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“async、defer 和普通 script 有什么区别”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "Chrome DevTools Performance",
        "url": "https://developer.chrome.com/docs/devtools/performance"
      },
      {
        "title": "Chrome DevTools Memory",
        "url": "https://developer.chrome.com/docs/devtools/memory-problems"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-11",
    "category": "performance",
    "tags": [
      "加载性能",
      "性能优化"
    ],
    "title": "为什么第三方脚本经常成为性能瓶颈？",
    "answer": "第三方脚本会增加 DNS、连接、下载和主线程执行成本，且其行为不完全受本团队控制。应审查必要性、延迟加载、使用 facade 或服务端集成，并监控供应商版本变化。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "第三方脚本会增加 DNS、连接、下载和主线程执行成本，且其行为不完全受本团队控制",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“为什么第三方脚本经常成为性能瓶颈”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "Chrome DevTools Memory",
        "url": "https://developer.chrome.com/docs/devtools/memory-problems"
      },
      {
        "title": "web.dev Performance Budgets",
        "url": "https://web.dev/articles/performance-budgets-101"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-12",
    "category": "performance",
    "tags": [
      "资源优化",
      "性能优化"
    ],
    "title": "现代图片格式和响应式图片如何使用？",
    "answer": "根据设备和内容选择 AVIF、WebP 或合适的 JPEG/PNG，并通过 srcset、sizes 和 picture 提供不同尺寸与格式。不要只压缩文件，还要避免下载远大于显示尺寸的图片。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "根据设备和内容选择 AVIF、WebP 或合适的 JPEG/PNG，并通过 srcset、sizes 和 picture 提供不同尺寸与格式",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“现代图片格式和响应式图片如何使用”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "references": [
      {
        "title": "web.dev Performance Budgets",
        "url": "https://web.dev/articles/performance-budgets-101"
      },
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      }
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-13",
    "category": "performance",
    "tags": [
      "资源优化",
      "性能优化"
    ],
    "title": "首屏图片应该如何加载？",
    "answer": "确定为 LCP 图片时可使用合适尺寸、现代格式和 fetchpriority=high，必要时 preload；非首屏图片使用 loading=lazy。高优先级资源必须克制，否则会挤压 CSS 和字体带宽。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "确定为 LCP 图片时可使用合适尺寸、现代格式和 fetchpriority=high，必要时 preload；非首屏图片使用 loading=lazy",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“首屏图片应该如何加载”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-14",
    "category": "performance",
    "tags": [
      "资源优化",
      "性能优化"
    ],
    "title": "字体加载如何避免阻塞和文字跳动？",
    "answer": "压缩并子集化字体，使用 font-display 控制替换策略，预加载确实首屏使用的字体并声明正确的 crossorigin。应配套备用字体度量或调整布局，降低字体切换造成的 CLS。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "压缩并子集化字体，使用 font-display 控制替换策略，预加载确实首屏使用的字体并声明正确的 crossorigin",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“字体加载如何避免阻塞和文字跳动”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-15",
    "category": "performance",
    "tags": [
      "资源优化",
      "性能优化"
    ],
    "title": "SVG、PNG 和 CSS 图形如何取舍？",
    "answer": "图标和简单矢量适合 SVG，照片适合压缩位图，简单装饰可用 CSS。要考虑可访问性、缓存复用、解析成本和安全清洗，不能因为格式先进就忽略实际尺寸与使用频率。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "图标和简单矢量适合 SVG，照片适合压缩位图，简单装饰可用 CSS",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“SVG、PNG 和 CSS 图形如何取舍”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-16",
    "category": "performance",
    "tags": [
      "缓存",
      "性能优化"
    ],
    "title": "前端静态资源缓存策略如何设计？",
    "answer": "带内容哈希的 JS、CSS、图片可以长时间 immutable 缓存；HTML、配置和服务端数据采用短缓存或协商缓存。发布流程要保证新旧资源在缓存过渡期能共存，避免 chunk 404。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "带内容哈希的 JS、CSS、图片可以长时间 immutable 缓存；HTML、配置和服务端数据采用短缓存或协商缓存",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端静态资源缓存策略如何设计”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-17",
    "category": "performance",
    "tags": [
      "缓存",
      "性能优化"
    ],
    "title": "Service Worker 缓存策略有哪些常见模式？",
    "answer": "常见模式包括 cache first、network first、stale while revalidate 和 network only。策略应按资源是否实时、离线需求和更新风险选择，并处理版本升级、失败回退和缓存空间上限。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "常见模式包括 cache first、network first、stale while revalidate 和 network only",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“Service Worker 缓存策略有哪些常见模式”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-18",
    "category": "performance",
    "tags": [
      "首屏",
      "工程化"
    ],
    "title": "页面白屏常见原因有哪些，如何定位？",
    "answer": "白屏可能由 HTML 返回慢、关键 CSS 或脚本阻塞、JavaScript 执行异常、接口串行等待或首屏内容渲染过晚造成。应结合 Navigation Timing、Performance 面板、错误监控和首屏截图区分网络、执行与渲染阶段。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "白屏可能由 HTML 返回慢、关键 CSS 或脚本阻塞、JavaScript 执行异常、接口串行等待或首屏内容渲染过晚造成",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "如何区分网络慢导致的白屏和 JS 报错导致的白屏？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      },
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-19",
    "category": "performance",
    "tags": [
      "Web Vitals",
      "工程化"
    ],
    "title": "FCP 和 LCP 有什么区别？",
    "answer": "FCP 表示首次有内容绘制，LCP 表示最大文本或图片内容绘制；FCP 更早反映页面开始有反馈，LCP 更接近主要内容可见。优化时要分别看资源阻塞和最大元素加载链路。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "FCP 表示首次有内容绘制，LCP 表示最大文本或图片内容绘制；FCP 更早反映页面开始有反馈，LCP 更接近主要内容可见",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么 FCP 很快但 LCP 仍然很慢？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      }
    ]
  },
  {
    "id": "performance-20",
    "category": "performance",
    "tags": [
      "渲染",
      "性能优化"
    ],
    "title": "重绘和回流有什么区别，如何降低成本？",
    "answer": "重绘只更新像素，回流会重新计算几何并可能影响后代和兄弟节点，通常更昂贵。减少 DOM 规模、批量更新、隔离布局上下文和使用合成属性能降低成本，但要用时间线验证。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "重绘只更新像素，回流会重新计算几何并可能影响后代和兄弟节点，通常更昂贵",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“重绘和回流有什么区别，如何降低成本”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-21",
    "category": "performance",
    "tags": [
      "渲染",
      "性能优化"
    ],
    "title": "为什么 transform 动画通常比改变 top 更流畅？",
    "answer": "transform 通常可在合成阶段处理，避免每帧重新布局；top 等几何属性会触发布局和绘制。仍需控制图层数量、动画元素面积和主线程工作，不能把所有元素都强制提升图层。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "transform 通常可在合成阶段处理，避免每帧重新布局；top 等几何属性会触发布局和绘制",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“为什么 transform 动画通常比改变 top 更流畅”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-22",
    "category": "performance",
    "tags": [
      "渲染",
      "性能优化"
    ],
    "title": "虚拟列表解决什么问题，使用时有哪些坑？",
    "answer": "虚拟列表只渲染视口附近的少量项目，降低 DOM 数量和布局成本。需要处理动态高度、滚动定位、键稳定性、可访问性和快速滚动时的占位，否则会出现跳动或内容丢失。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "虚拟列表只渲染视口附近的少量项目，降低 DOM 数量和布局成本",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“虚拟列表解决什么问题，使用时有哪些坑”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-23",
    "category": "performance",
    "tags": [
      "渲染",
      "性能优化"
    ],
    "title": "长列表应该如何优化？",
    "answer": "先减少每项渲染成本和不必要更新，再考虑分页、虚拟化和图片懒加载。列表项应使用稳定 key，避免在滚动事件中执行重计算，并通过性能面板确认瓶颈确实在 DOM 或布局。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "先减少每项渲染成本和不必要更新，再考虑分页、虚拟化和图片懒加载",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“长列表应该如何优化”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-24",
    "category": "performance",
    "tags": [
      "主线程",
      "性能优化"
    ],
    "title": "什么是长任务，如何拆分？",
    "answer": "主线程上持续超过约 50ms 的任务会阻塞输入和绘制。可把循环分片到多个任务、使用 scheduler 或 setTimeout 让出主线程，并将纯计算移到 Web Worker，拆分后要保持状态一致。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "主线程上持续超过约 50ms 的任务会阻塞输入和绘制",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“什么是长任务，如何拆分”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-25",
    "category": "performance",
    "tags": [
      "主线程",
      "性能优化"
    ],
    "title": "Web Worker 适合处理哪些工作？",
    "answer": "Worker 适合解析大 JSON、搜索索引、图像处理等 CPU 密集且可独立执行的任务。主线程与 Worker 通过消息传递，结构化克隆会有成本，必要时使用 Transferable，不能直接访问 DOM。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "Worker 适合解析大 JSON、搜索索引、图像处理等 CPU 密集且可独立执行的任务",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“Web Worker 适合处理哪些工作”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-26",
    "category": "performance",
    "tags": [
      "网络",
      "工程化"
    ],
    "title": "DNS、TCP 和 TLS 握手如何影响首屏加载？",
    "answer": "首次访问通常要经历 DNS 解析、TCP 建连和 HTTPS 的 TLS 握手，这些往返会增加请求开始前的等待。可通过 CDN、连接复用、缓存 DNS、preconnect 和减少跨域来源降低成本。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "首次访问通常要经历 DNS 解析、TCP 建连和 HTTPS 的 TLS 握手，这些往返会增加请求开始前的等待",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "preconnect 为什么不能给所有第三方域名都加？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-27",
    "category": "performance",
    "tags": [
      "网络",
      "工程化"
    ],
    "title": "CDN 为什么能加速静态资源？",
    "answer": "CDN 把静态资源缓存到靠近用户的边缘节点，减少跨地域传输距离和源站压力。要配合内容哈希、合理缓存头和回源策略，发布时避免 HTML 与资源版本错配。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "CDN 把静态资源缓存到靠近用户的边缘节点，减少跨地域传输距离和源站压力",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "CDN 缓存未及时更新时有哪些处理方式？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN HTTP Caching",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
      }
    ]
  },
  {
    "id": "performance-28",
    "category": "performance",
    "tags": [
      "事件性能",
      "性能优化"
    ],
    "title": "防抖和节流分别适合什么场景？",
    "answer": "防抖在连续触发停止后执行，适合搜索输入和 resize；节流限制执行频率，适合滚动、拖拽和持续上报。实现时要处理尾调用、this、参数以及组件销毁后的定时器清理。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "防抖在连续触发停止后执行，适合搜索输入和 resize；节流限制执行频率，适合滚动、拖拽和持续上报",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“防抖和节流分别适合什么场景”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-29",
    "category": "performance",
    "tags": [
      "内存",
      "性能优化"
    ],
    "title": "前端常见内存泄漏来源有哪些？",
    "answer": "未移除的事件监听、定时器、Observer、订阅和闭包引用都可能让页面对象无法回收。组件卸载时应统一清理，并用 heap snapshot 比较快照确认泄漏对象和保留路径。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "未移除的事件监听、定时器、Observer、订阅和闭包引用都可能让页面对象无法回收",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“前端常见内存泄漏来源有哪些”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-30",
    "category": "performance",
    "tags": [
      "传输",
      "工程化"
    ],
    "title": "gzip 和 Brotli 压缩应该如何选择？",
    "answer": "文本资源如 HTML、CSS、JavaScript 和 JSON 适合压缩传输；Brotli 在许多文本场景压缩率更好，gzip 兼容范围更广。图片和视频通常已经压缩，重复压缩收益很小。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "文本资源如 HTML、CSS、JavaScript 和 JSON 适合压缩传输；Brotli 在许多文本场景压缩率更好，gzip 兼容范围更广",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "为什么压缩传输体积变小后，解析和执行时间仍可能很长？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-31",
    "category": "performance",
    "tags": [
      "网络",
      "性能优化"
    ],
    "title": "HTTP/2 多路复用对前端性能意味着什么？",
    "answer": "HTTP/2 在单连接上复用多个流并压缩头部，通常减少连接和队头等待，但 TCP 丢包仍可能影响整条连接。应减少不必要请求并让资源优先级合理，不能简单套用 HTTP/1 的域名分片。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "HTTP/2 在单连接上复用多个流并压缩头部，通常减少连接和队头等待，但 TCP 丢包仍可能影响整条连接",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“HTTP/2 多路复用对前端性能意味着什么”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-32",
    "category": "performance",
    "tags": [
      "加载",
      "工程化"
    ],
    "title": "图片和组件懒加载应该如何设计？",
    "answer": "首屏关键图片和内容不能盲目懒加载，否则会拖慢 LCP；视口外图片、低频组件和路由页面适合在接近使用时加载。懒加载还要处理占位尺寸、加载失败和快速滚动场景。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "首屏关键图片和内容不能盲目懒加载，否则会拖慢 LCP；视口外图片、低频组件和路由页面适合在接近使用时加载",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "懒加载如何避免图片出现布局跳动？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "web.dev Fast Load Times",
        "url": "https://web.dev/fast/"
      }
    ]
  },
  {
    "id": "performance-33",
    "category": "performance",
    "tags": [
      "加载",
      "工程化"
    ],
    "title": "浏览器请求瀑布图中如何判断资源被阻塞？",
    "answer": "观察请求的排队、阻塞、连接、等待首字节和下载阶段，并结合 Initiator 找出依赖链。若关键资源排在大量低优先级资源之后，应减少请求、调整优先级或改变加载顺序。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "观察请求的排队、阻塞、连接、等待首字节和下载阶段，并结合 Initiator 找出依赖链",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么一个小脚本也可能阻塞首屏渲染？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-34",
    "category": "performance",
    "tags": [
      "网络",
      "性能优化"
    ],
    "title": "请求瀑布图应该重点看什么？",
    "answer": "关注关键请求的排队、阻塞、DNS、连接、TTFB、下载和依赖关系，找出被串行化的资源与低优先级误判。瀑布图只是线索，还要结合带宽、缓存命中和真实设备复测。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "关注关键请求的排队、阻塞、DNS、连接、TTFB、下载和依赖关系，找出被串行化的资源与低优先级误判",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“请求瀑布图应该重点看什么”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-35",
    "category": "performance",
    "tags": [
      "请求",
      "工程化"
    ],
    "title": "AbortController 在前端请求优化中有什么作用？",
    "answer": "AbortController 可以取消已经过期的 fetch，例如搜索关键词变化、页面离开或重复提交时取消旧请求。取消后要区分 AbortError 与真实网络失败，避免把主动取消误报成系统错误。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "AbortController 可以取消已经过期的 fetch，例如搜索关键词变化、页面离开或重复提交时取消旧请求",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "取消旧请求后如何避免旧响应覆盖新数据？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-36",
    "category": "performance",
    "tags": [
      "缓存",
      "工程化"
    ],
    "title": "前端如何缓存接口数据并避免脏数据？",
    "answer": "应按接口实时性设置缓存时间和失效策略，查询参数、用户身份和权限必须纳入缓存键。写操作成功后主动更新或失效相关缓存，不能用永久缓存替代服务端一致性。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "应按接口实时性设置缓存时间和失效策略，查询参数、用户身份和权限必须纳入缓存键",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "哪些数据不适合放在浏览器长期缓存中？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN HTTP Caching",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching"
      }
    ]
  },
  {
    "id": "performance-37",
    "category": "performance",
    "tags": [
      "数据",
      "性能优化"
    ],
    "title": "前端如何避免重复请求？",
    "answer": "为相同查询建立缓存和请求去重，设置合理的新鲜度与失效条件；页面离开时取消无用请求，写操作后主动更新或失效相关缓存。缓存必须考虑用户、权限和参数边界。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "为相同查询建立缓存和请求去重，设置合理的新鲜度与失效条件；页面离开时取消无用请求，写操作后主动更新或失效相关缓存",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“前端如何避免重复请求”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-38",
    "category": "performance",
    "tags": [
      "框架性能",
      "性能优化"
    ],
    "title": "组件渲染为什么会变慢，如何定位？",
    "answer": "常见原因是状态范围过大、父组件频繁更新、列表 key 不稳定和昂贵计算重复执行。使用框架 Profiler、性能时间线和实际交互复现定位，再通过拆分状态、记忆化或虚拟化验证收益。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "常见原因是状态范围过大、父组件频繁更新、列表 key 不稳定和昂贵计算重复执行",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“组件渲染为什么会变慢，如何定位”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-39",
    "category": "performance",
    "tags": [
      "框架性能",
      "性能优化"
    ],
    "title": "记忆化优化什么时候会适得其反？",
    "answer": "memo、useMemo 或 computed 也有比较和缓存维护成本，若计算很轻或依赖经常变化，收益可能为负。应先用 profiling 证明重复计算是瓶颈，并保持依赖完整避免陈旧数据。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "memo、useMemo 或 computed 也有比较和缓存维护成本，若计算很轻或依赖经常变化，收益可能为负",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“记忆化优化什么时候会适得其反”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-40",
    "category": "performance",
    "tags": [
      "渲染",
      "工程化"
    ],
    "title": "React 或 Vue 列表中的 key 为什么重要？",
    "answer": "key 帮助框架判断列表项是否是同一个实体，从而复用正确的节点和组件状态。使用数组下标作为 key 在插入、删除和排序后可能复用错误节点，造成输入框内容或动画错位。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "key 帮助框架判断列表项是否是同一个实体，从而复用正确的节点和组件状态",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "什么情况下使用数组下标作为 key 仍然可以接受？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-41",
    "category": "performance",
    "tags": [
      "框架性能",
      "性能优化"
    ],
    "title": "Hydration 为什么可能阻塞交互？",
    "answer": "Hydration 需要在客户端重新执行组件并绑定事件，页面越大、JS 越多，主线程占用越久。可减少首屏组件、采用局部或渐进式 hydration，并确保服务端与客户端输出一致。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "Hydration 需要在客户端重新执行组件并绑定事件，页面越大、JS 越多，主线程占用越久",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 2,
    "followUps": [
      "在真实项目中如何验证“Hydration 为什么可能阻塞交互”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-42",
    "category": "performance",
    "tags": [
      "渲染",
      "工程化"
    ],
    "title": "为什么 DOM 节点过多会拖慢页面？",
    "answer": "DOM 越大，样式匹配、布局、绘制和更新传播的成本通常越高，频繁修改还可能触发更大范围的计算。应减少无意义节点、分页或虚拟化长列表，并用 Performance 面板验证实际瓶颈。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "DOM 越大，样式匹配、布局、绘制和更新传播的成本通常越高，频繁修改还可能触发更大范围的计算",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 1,
    "followUps": [
      "减少 DOM 数量和减少 JavaScript 执行哪个应优先？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-43",
    "category": "performance",
    "tags": [
      "可访问性",
      "性能优化"
    ],
    "title": "可访问性为什么也是性能工程的一部分？",
    "answer": "语义 HTML、合理焦点和减少无意义 DOM 既改善辅助技术体验，也常常减少脚本和样式复杂度。性能优化不能通过移除键盘操作、隐藏文本或延迟必要反馈来换分数。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "语义 HTML、合理焦点和减少无意义 DOM 既改善辅助技术体验，也常常减少脚本和样式复杂度",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“可访问性为什么也是性能工程的一部分”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-44",
    "category": "performance",
    "tags": [
      "渲染",
      "工程化"
    ],
    "title": "如何优化组件的重复渲染？",
    "answer": "先用框架 Profiler 找到频繁更新和昂贵组件，再缩小状态范围、拆分组件、稳定 props 引用或缓存确有成本的计算。盲目给所有组件加 memo 可能增加比较开销并掩盖状态设计问题。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "先用框架 Profiler 找到频繁更新和昂贵组件，再缩小状态范围、拆分组件、稳定 props 引用或缓存确有成本的计算",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "如何证明一次组件渲染优化确实有效？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-45",
    "category": "performance",
    "tags": [
      "监控",
      "性能优化"
    ],
    "title": "前端性能预算应该如何制定？",
    "answer": "为 JS、CSS、图片、关键请求数、LCP、INP 和 CLS 设定可执行阈值，并纳入 CI 或发布监控。预算要基于用户设备和业务目标，超预算时明确负责人和例外审批。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "为 JS、CSS、图片、关键请求数、LCP、INP 和 CLS 设定可执行阈值，并纳入 CI 或发布监控",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“前端性能预算应该如何制定”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-46",
    "category": "performance",
    "tags": [
      "监控",
      "性能优化"
    ],
    "title": "如何监控 SPA 的路由切换性能？",
    "answer": "为路由开始、数据准备、渲染完成和可交互建立统一标记，结合 Long Task、资源和错误信息上报。不要只用页面加载事件衡量 SPA，切换失败和取消也要结束计时。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "为路由开始、数据准备、渲染完成和可交互建立统一标记，结合 Long Task、资源和错误信息上报",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 1,
    "followUps": [
      "在真实项目中如何验证“如何监控 SPA 的路由切换性能”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-47",
    "category": "performance",
    "tags": [
      "监控",
      "工程化"
    ],
    "title": "前端如何监控白屏和首屏可用时间？",
    "answer": "可以记录导航开始、首个内容、关键元素出现和首次可交互时间，同时上报 JS 错误、资源失败和接口超时。SPA 还要为路由切换单独打点，不能只依赖 load 事件。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "可以记录导航开始、首个内容、关键元素出现和首次可交互时间，同时上报 JS 错误、资源失败和接口超时",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "白屏监控如何避免把用户主动停留在空状态误判为故障？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      }
    ]
  },
  {
    "id": "performance-48",
    "category": "performance",
    "tags": [
      "优化方法",
      "性能优化"
    ],
    "title": "如何判断一次性能优化是否值得上线？",
    "answer": "比较优化前后的关键指标、错误率、包体、服务端成本和用户路径完成率，并确认不同设备没有回归。收益若只在实验室出现而真实数据无变化，应回到瓶颈和样本质量重新分析。\n\n面试中应结合项目中的取舍说明验证方式、失败边界和回滚方案，避免只罗列工具名或背诵单一结论。",
    "keyPoints": [
      "比较优化前后的关键指标、错误率、包体、服务端成本和用户路径完成率，并确认不同设备没有回归",
      "先用指标和工具定位问题再选择方案",
      "关注兼容性、成本与失败边界",
      "通过自动化检查或真实用户数据验证"
    ],
    "difficulty": 3,
    "followUps": [
      "在真实项目中如何验证“如何判断一次性能优化是否值得上线”的收益？",
      "如果优化或改造引入回归，如何发现并回滚？"
    ],
    "updatedAt": "2026-09-11"
  },
  {
    "id": "performance-49",
    "category": "performance",
    "tags": [
      "性能方法",
      "工程化"
    ],
    "title": "如何做一次可靠的性能对比实验？",
    "answer": "固定页面数据、浏览器、设备和网络条件，先采集多次基线，再只改一个主要变量并重复测量。除了平均值，还要观察 P75、长任务、错误率和包体，避免偶然波动造成错误结论。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "固定页面数据、浏览器、设备和网络条件，先采集多次基线，再只改一个主要变量并重复测量",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "为什么性能测试需要多次运行而不能只看一次 Lighthouse 分数？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "MDN Web Performance",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance"
      }
    ]
  },
  {
    "id": "performance-50",
    "category": "performance",
    "tags": [
      "性能预算",
      "工程化"
    ],
    "title": "前端性能预算通常包括哪些项目？",
    "answer": "预算可以覆盖首屏 JavaScript、CSS、图片体积、请求数、LCP、INP、CLS 和关键接口耗时。预算应绑定用户设备和业务路径，在 CI 和线上监控中持续检查，超限要能定位到具体提交。\n\n回答时应结合具体构建命令、产物变化或线上指标说明取舍，不能只说“用了某个工具”。",
    "keyPoints": [
      "预算可以覆盖首屏 JavaScript、CSS、图片体积、请求数、LCP、INP、CLS 和关键接口耗时",
      "先说明原理，再说明项目中的使用边界",
      "用构建结果、测试或线上数据验证效果",
      "保留失败时的降级和回滚方案"
    ],
    "difficulty": 2,
    "followUps": [
      "性能预算超限时应该优先削减哪类资源？",
      "这个方案在什么情况下会失效或带来额外成本？"
    ],
    "updatedAt": "2026-09-11",
    "references": [
      {
        "title": "web.dev Core Web Vitals",
        "url": "https://web.dev/articles/vitals"
      },
      {
        "title": "web.dev Fast Load Times",
        "url": "https://web.dev/fast/"
      }
    ]
  }
]
