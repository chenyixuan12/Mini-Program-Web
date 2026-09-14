import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const importsDirectory = path.join(projectRoot, 'question-bank', 'imports')
const setsDirectory = path.join(projectRoot, 'question-bank', 'sets')
const updatedAt = '2026-08-18'

const categoryMetadata = {
  javascript: {
    input: 'javascript-doc.raw.json',
    output: '03-javascript.json',
    language: 'javascript',
    reference: { title: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
    closing: '面试时还应说明适用边界，并结合运行环境验证具体行为。',
  },
  typescript: {
    input: 'typescript-doc.raw.json',
    output: '04-typescript.json',
    language: 'typescript',
    reference: { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
    closing: '类型只在编译阶段提供约束，外部数据仍需要运行时校验。',
  },
  network: {
    input: 'network-doc.raw.json',
    output: '08-network.json',
    language: 'javascript',
    reference: { title: 'MDN HTTP Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP' },
    closing: '具体行为还会受到协议版本、代理、缓存和服务端配置影响。',
  },
  browser: {
    input: 'browser-doc.raw.json',
    output: '07-browser.json',
    language: 'javascript',
    reference: { title: 'MDN Web APIs', url: 'https://developer.mozilla.org/en-US/docs/Web/API' },
    closing: '浏览器实现存在差异，上线前应结合目标环境和性能工具验证。',
  },
}

const documentConfigs = {
  javascript: [
    ['js-var-let-const', ['变量', '作用域'], 1],
    ['js-hoisting', ['作用域', '执行上下文'], 2],
    ['js-closure', ['闭包', '作用域'], 2],
    ['js-prototype-chain', ['原型', '继承'], 2],
    ['js-this-binding', ['this', '函数'], 2],
    ['js-call-apply-bind', ['this', '函数'], 1],
    ['js-execution-context-stack', ['执行上下文', '调用栈'], 2],
    ['js-event-loop', ['异步', '事件循环'], 2],
    ['js-promise-basics', ['Promise', '异步'], 1],
    ['js-async-await', ['async/await', '异步'], 2],
    ['js-deep-shallow-copy', ['对象', '拷贝'], 2],
    ['js-array-methods', ['数组'], 1],
    ['js-equality', ['类型转换', '运算符'], 1],
    ['js-falsy-values', ['类型转换'], 1],
    ['js-garbage-collection', ['内存', '垃圾回收'], 2],
    ['js-new-operator', ['对象', '原型'], 2],
    ['js-debounce-throttle', ['性能', '函数'], 2],
    ['js-same-origin-cors', ['浏览器', '跨域'], 2],
    ['js-symbol', ['基础类型', '对象'], 2],
    ['js-map-set-weak', ['集合', '内存'], 2],
    ['js-for-in-for-of', ['遍历', '迭代器'], 1],
    ['js-iterator', ['迭代器', '协议'], 2],
    ['js-generator', ['生成器', '迭代器'], 3],
    ['js-inheritance', ['继承', '原型'], 2],
    ['js-dom-events', ['事件', 'DOM'], 2],
  ],
  typescript: [
    ['ts-vs-javascript', ['基础', '类型系统'], 1, 'TypeScript 相比 JavaScript 有哪些优势和限制？'],
    ['ts-interface-type', ['interface', 'type'], 2],
    ['ts-unknown-any', ['类型安全', '特殊类型'], 2, 'any、unknown、never 和 void 有什么区别？'],
    ['ts-union-intersection', ['联合类型', '交叉类型'], 2],
    ['ts-generics', ['泛型', '类型关系'], 2],
    ['ts-utility-types', ['工具类型', '类型转换'], 2],
    ['ts-type-assertion', ['类型断言'], 1],
    ['ts-non-null-assertion', ['类型断言', '空值'], 1],
    ['ts-optional-operators', ['可选属性', '空值'], 1],
    ['ts-tsconfig-core', ['tsconfig', '编译配置'], 2],
    ['ts-type-guards', ['类型守卫', '类型收窄'], 2],
    ['ts-generics-business', ['泛型', '业务建模'], 2],
    ['ts-declare-module', ['声明', '模块'], 2],
    ['ts-declaration-files', ['声明文件'], 1],
    ['ts-readonly', ['只读', '类型约束'], 1],
    ['ts-structural-typing', ['结构化类型', '兼容性'], 3],
    ['ts-enum-const-enum', ['枚举', '编译输出'], 2],
    ['ts-no-implicit-any', ['编译配置', '类型推断'], 1],
    ['ts-function-overloads', ['函数', '重载'], 2],
    ['ts-missing-library-types', ['声明文件', '第三方库'], 2],
  ],
  network: [
    ['network-http-versions', ['HTTP', '协议版本'], 3],
    ['network-get-post', ['HTTP', '请求方法'], 1],
    ['network-idempotency', ['HTTP', '幂等性'], 2],
    ['network-http-cache', ['HTTP', '缓存'], 2],
    ['network-status-codes', ['HTTP', '状态码'], 1],
    ['network-https-tls', ['HTTPS', 'TLS'], 3],
    ['network-tcp', ['TCP', '连接'], 2, 'TCP 三次握手和四次挥手分别解决什么问题？'],
    ['network-tcp-udp', ['TCP', 'UDP'], 1],
    ['network-cors', ['同源策略', 'CORS'], 2],
    ['network-web-storage-cookie', ['Cookie', '存储'], 1],
    ['network-xss-csrf', ['安全', 'XSS', 'CSRF'], 3],
    ['network-url-request-flow', ['DNS', 'HTTP', 'TLS'], 3, '从网络链路角度看，输入 URL 后发生了什么？'],
    ['network-script-loading', ['资源加载', '脚本'], 2],
    ['network-etag-last-modified', ['HTTP', '缓存'], 2],
    ['network-csp', ['安全', 'CSP'], 2],
    ['network-redirect-301-302', ['HTTP', '重定向'], 1],
    ['network-request-headers', ['HTTP', '请求头'], 1],
    ['network-multipart-form-data', ['HTTP', '文件上传'], 2],
  ],
  browser: [
    ['browser-render', ['导航', '渲染'], 3, '从浏览器内部视角看，输入 URL 到页面展示经历了什么？'],
    ['browser-render-cost', ['渲染', '性能'], 2],
    ['browser-script-async-defer', ['脚本', '解析'], 2],
    ['browser-dom-bom', ['DOM', 'BOM'], 1],
    ['browser-event-flow', ['事件', '事件委托'], 2],
    ['browser-storage', ['存储', 'Cookie'], 1],
    ['browser-same-origin', ['安全', '同源策略'], 2],
    ['browser-cache', ['缓存', '内存'], 2, '浏览器中的 Memory Cache、Disk Cache 与 HTTP 缓存是什么关系？'],
    ['browser-gc-memory-leak', ['内存', '垃圾回收'], 2],
    ['browser-render-blocking', ['渲染', '资源加载'], 2],
    ['browser-foit-fout', ['字体', '渲染'], 2],
    ['browser-raf-timeout', ['动画', '调度'], 2],
    ['browser-event-loop', ['事件循环', '渲染'], 3],
    ['browser-mutation-observer', ['DOM', '观察器'], 2],
    ['browser-cross-tab', ['跨页面通信'], 2],
    ['browser-post-message', ['跨域', '通信'], 2],
    ['browser-layout-thrashing', ['布局', '性能'], 3],
    ['browser-service-worker', ['Service Worker', '离线'], 3],
    ['browser-virtual-dom', ['DOM', '框架'], 2],
    ['browser-process-model', ['进程', '架构'], 3],
  ],
}

const documentOverrides = {
  'js-event-loop': {
    title: '浏览器中的 JavaScript 事件循环如何调度任务和微任务？',
    answer: '当前任务中的同步代码先执行；任务结束后，事件循环会执行微任务检查点，把当时可运行的微任务持续处理到队列清空。Promise 回调、queueMicrotask 和 await 后的续体通常属于微任务，定时器回调、消息事件等由不同任务源调度。\n\n浏览器会在合适的时机更新渲染，而不是机械地在每个任务后必然绘制一次。大量连续微任务可能让渲染和后续任务迟迟得不到机会。',
    keyPoints: ['同步代码属于当前任务并先执行', '任务结束后会运行微任务检查点', 'await 续体通常通过微任务恢复', '渲染发生在浏览器选择的更新机会', '持续产生微任务可能造成饥饿'],
    followUps: ['为什么递归 queueMicrotask 会让页面无法及时响应？'],
  },
  'js-async-await': {
    title: 'async/await 与 Promise 是什么关系，错误如何传播？',
    answer: 'async 函数调用后总会返回 Promise；return 普通值会兑现该 Promise，抛出异常会拒绝它。await 会先对操作数进行 Promise 化，并暂停当前 async 函数；Promise 落定后，函数续体通常通过微任务恢复。\n\nawait 不会阻塞线程，也不会自动并行执行多个任务。错误可由 try/catch 捕获，未捕获错误会使 async 函数返回的 Promise 拒绝。多个独立任务应先启动，再按需要用 Promise.all 等方式等待。',
    keyPoints: ['async 函数始终返回 Promise', 'await 暂停函数而不阻塞线程', '续体通常通过微任务恢复', '未捕获异常会转为 Promise 拒绝', '独立任务要显式设计并发'],
    followUps: ['连续 await 为什么可能把可并行任务变成串行？'],
  },
  'js-deep-shallow-copy': {
    title: '深拷贝和浅拷贝有什么区别，应如何选择实现？',
    answer: '浅拷贝只创建新的外层容器，嵌套对象仍与原对象共享引用；对象展开、Object.assign、数组 slice 等都属于常见浅拷贝。深拷贝希望递归复制可克隆的数据图，但“完全切断所有引用”并不适用于函数、DOM、WeakMap 等所有值。\n\nJSON 往返会丢失 undefined、函数、Symbol、原型和多种内置对象，也不能处理循环引用。现代浏览器可优先评估 structuredClone；领域对象则应明确需要保留的类型、原型和共享关系。',
    keyPoints: ['浅拷贝仍共享嵌套引用', '深拷贝必须先定义可克隆的数据范围', 'JSON 往返会丢失多种类型和语义', 'structuredClone 支持循环引用和更多内置类型', '不可变更新不等于盲目深拷贝'],
    followUps: ['structuredClone 不能克隆哪些常见值？'],
  },
  'js-same-origin-cors': {
    title: '同源策略限制了什么，常见跨源方案如何选择？',
    answer: '同源通常要求协议、主机和端口一致。同源策略主要限制不同源文档之间的读取和操作能力，并不是禁止浏览器发出所有跨源请求；非简单 CORS 请求会先预检，预检不通过时实际请求可能不会发送。\n\n生产接口通常由服务端配置 CORS；开发代理和反向代理通过同源转发解决开发或部署边界。postMessage 适合窗口通信，JSONP 只是历史上的脚本加载技巧，仅支持 GET 语义且不应作为现代通用方案。',
    keyPoints: ['同源由协议、主机和端口共同决定', '策略重点限制跨源读取和 DOM 访问', '预检失败时实际请求可能不会发出', 'CORS 必须由服务端明确授权', '代理与 postMessage 解决的是不同边界'],
    followUps: ['为什么 CORS 成功也不代表接口已经完成授权校验？'],
  },
  'ts-enum-const-enum': {
    title: '普通 enum 与 const enum 有什么区别和工程限制？',
    answer: '普通 enum 通常会生成运行时 JavaScript 对象，数字枚举还可能生成反向映射。const enum 的成员通常在编译时内联，因此没有对应运行时对象并可减少输出。\n\nconst enum 会受到 isolatedModules、跨包声明发布和不同编译器处理方式限制；发布库时尤其要避免消费者与声明版本不一致。简单常量集合也可以用 as const 对象配合联合类型表达。',
    keyPoints: ['普通 enum 通常存在运行时对象', 'const enum 成员通常被内联', 'isolatedModules 等配置会限制 const enum', '跨包发布要考虑版本和编译器兼容', 'as const 对象是常见替代方案'],
    followUps: ['为什么公共类型声明中的 const enum 可能造成版本错配？'],
  },
  'network-http-versions': {
    title: 'HTTP/1.0、HTTP/1.1、HTTP/2 和 HTTP/3 有什么关键区别？',
    answer: 'HTTP/1.0 的连接复用不是默认规范语义，但实现可通过扩展使用 keep-alive；HTTP/1.1 默认持久连接，并完善缓存、分块传输和范围请求等能力。HTTP/1.1 流水线部署有限，常见客户端仍受同一连接响应顺序影响。\n\nHTTP/2 使用二进制帧、流多路复用和 HPACK，缓解应用层队头阻塞，但多个流仍共享 TCP 的丢包恢复。HTTP/3 运行在 QUIC 上，不同流的传输丢包通常互不阻塞，并支持更快建连和连接迁移；0-RTT 只适用于满足条件的恢复连接且存在重放风险。',
    keyPoints: ['HTTP/1.1 默认使用持久连接', 'HTTP/2 采用二进制分帧和多路复用', 'HTTP/2 仍受 TCP 层丢包影响', 'HTTP/3 基于 QUIC 隔离不同流的传输阻塞', '0-RTT 有条件且需防范重放'],
    followUps: ['为什么 HTTP/2 下域名分片通常失去收益？'],
  },
  'network-get-post': {
    title: 'GET 和 POST 的语义、缓存与幂等性有什么区别？',
    answer: 'GET 的语义是获取资源，属于安全且幂等的方法；POST 用于让资源按请求表示执行处理，通常不保证幂等。查询参数和消息体只是常见用法：协议语法不把 POST 参数限定在 body，但 GET 请求体缺乏通用语义，浏览器 Fetch 也不允许 GET/HEAD 携带 body。\n\nGET 响应更容易被缓存，但 POST 响应在满足明确缓存头和缓存实现支持时也可以缓存。URL 与消息体大小都受浏览器、代理和服务器配置限制，不能概括为 GET 有固定上限而 POST 无限。',
    keyPoints: ['GET 是安全且幂等的资源读取语义', 'POST 通常用于非幂等处理', 'GET 请求体缺乏通用互操作语义', 'POST 响应在满足条件时也可缓存', 'URL 与请求体都存在实现限制'],
    followUps: ['PUT 与 POST 在幂等性和资源标识上有什么区别？'],
  },
  'network-http-cache': {
    title: 'HTTP 强缓存和协商缓存是如何配合的？',
    answer: '缓存先根据 Cache-Control、Expires 等新鲜度信息判断响应是否可直接复用；命中新鲜缓存时通常不联系源站。响应过期或标记 no-cache 时，需要用 If-None-Match/ETag 或 If-Modified-Since/Last-Modified 重新验证，未变化可返回 304。\n\nno-cache 表示复用前必须验证，不等于完全不存储；no-store 才是要求缓存不要存储。若同时发送两个验证器，HTTP 语义规定 If-None-Match 优先，但具体缓存行为还受 Vary、请求指令、共享缓存和实现策略影响。',
    keyPoints: ['新鲜缓存可直接复用', 'no-cache 表示复用前重新验证', 'no-store 表示不要存储', 'ETag 与 Last-Modified 可用于条件请求', 'Vary 会影响缓存键'],
    followUps: ['为什么带内容哈希的静态资源适合 immutable 长缓存？'],
  },
  'network-https-tls': {
    title: '现代 HTTPS 和 TLS 握手如何建立安全连接？',
    answer: 'HTTPS 是在 TLS 安全通道上传输 HTTP。客户端与服务端协商协议版本和密码套件，服务端发送证书链证明公钥身份；客户端验证主机名、有效期、签名链等信息。现代 TLS 通常通过（EC）DHE 等密钥交换共同派生会话密钥，证书私钥用于签名认证，而不是简单用 RSA 加密一个预主密钥。\n\n后续应用数据使用对称加密和完整性保护。TLS 1.3 简化握手并支持会话恢复；0-RTT 数据存在重放风险，只适合可安全重放的操作。',
    keyPoints: ['证书链用于认证服务器身份', '现代握手通常使用临时 Diffie-Hellman 密钥交换', '应用数据使用对称加密和完整性保护', 'TLS 1.3 简化握手', '0-RTT 需要考虑重放风险'],
    followUps: ['证书认证与密钥交换为什么是两个不同问题？'],
  },
  'network-url-request-flow': {
    title: '从网络链路角度看，输入 URL 后发生了什么？',
    answer: '浏览器解析 URL 和策略，检查缓存、Service Worker、代理等可能的响应来源；需要联网时解析 DNS，选择并建立 TCP+TLS、QUIC 等连接，再发送 HTTP 请求。连接可能被复用，不一定每次都重新握手。\n\n响应经过重定向、缓存和安全检查后交给浏览器加载器。HTML 解析与子资源发现会并行推进，样式表通常阻塞首次渲染并可能阻塞后续脚本，普通同步脚本会阻塞解析；async、defer 和模块脚本具有不同调度语义。',
    keyPoints: ['缓存或 Service Worker 可能直接提供响应', '连接可能复用而非每次新建', 'DNS、传输连接和 HTTP 是不同阶段', '子资源发现与 HTML 解析可并行推进', '脚本和样式会以不同方式影响解析与渲染'],
    followUps: ['连接复用时 DNS、TCP 和 TLS 阶段会如何反映在性能条目中？'],
  },
  'browser-render': {
    title: '从浏览器内部视角看，输入 URL 到页面展示经历了什么？',
    answer: '导航先经过 URL 解析、权限策略、缓存与 Service Worker 检查，需要联网时再完成 DNS、连接和 HTTP 交换。拿到 HTML 后，解析器逐步构建 DOM，样式表形成 CSSOM，同时预加载扫描器尝试提前发现子资源。\n\n浏览器随后计算样式、生成布局盒、执行布局、绘制并合成到屏幕。普通同步脚本可能暂停 HTML 解析；样式表不阻止 DOM 节点继续被解析，但通常阻塞渲染，并可能让依赖已计算样式的脚本等待。最终过程是流式和增量的，不是严格串行的九个步骤。',
    keyPoints: ['导航可能先命中缓存或 Service Worker', 'HTML 解析与子资源加载是增量并行过程', 'DOM 与 CSSOM 参与样式计算和布局', '同步脚本可能阻塞解析', '样式表通常阻塞渲染并可能间接阻塞脚本'],
    followUps: ['预加载扫描器为什么无法发现所有动态资源？'],
  },
  'browser-render-cost': {
    title: '重排、重绘和合成有什么区别，如何定位性能问题？',
    answer: '布局会计算元素几何信息；当样式变化使几何失效时，需要重新布局。读取 offsetWidth 等属性本身不总是昂贵，但在前面存在尚未处理的样式写入时，可能强制同步布局。重绘更新像素记录，合成则组合已经绘制的图层。\n\ntransform 和 opacity 常能避免布局，并可能只触发合成，但不保证一定使用 GPU 或完全没有绘制成本。优化应先通过性能轨迹定位布局、绘制和合成开销，再批量读写、拆分长任务并谨慎使用 will-change。',
    keyPoints: ['布局负责几何计算', '交替读写容易造成强制同步布局', '重绘更新绘制记录', 'transform/opacity 可能只需合成但并非绝对', '分层过多会增加内存与合成成本'],
    followUps: ['如何在 Performance 面板中识别 layout thrashing？'],
  },
  'browser-cache': {
    title: '浏览器中的 Memory Cache、Disk Cache 与 HTTP 缓存是什么关系？',
    answer: 'HTTP 缓存规则决定响应是否可存储、何时新鲜以及何时需要重新验证；Memory Cache、Disk Cache 是浏览器可能采用的内部存储位置和实现策略，不是与强缓存、协商缓存并列的协议层分类。\n\n浏览器可能根据资源大小、生命周期、隐私模式和内存压力决定放在内存或磁盘，具体优先顺序并无可依赖的统一标准。开发者应通过 Cache-Control、ETag、Vary 等表达语义，而不是依赖资源一定进入某种内部缓存。',
    keyPoints: ['HTTP 缓存定义可存储和复用语义', 'Memory/Disk 是浏览器内部实现位置', '内部放置策略不可作为业务契约', 'Cache-Control 和验证器用于表达缓存策略', '开发者工具标签不等于协议规范分类'],
    followUps: ['为什么 from memory cache 不能说明响应一定没有重新验证？'],
  },
  'browser-render-blocking': {
    title: '什么是渲染阻塞资源，脚本和样式如何影响关键路径？',
    answer: '普通同步脚本在解析到 script 时通常暂停 HTML 解析并执行；defer、async 和模块脚本具有不同下载与执行时机。样式表一般不阻止 HTML 解析器继续构建 DOM，但会阻塞首次渲染，并可能让后续需要计算样式的脚本等待。\n\n图片通常不阻塞 DOM 解析，但会影响 load、布局稳定性和 LCP。是否属于关键阻塞资源取决于位置、媒体条件、优先级和首屏依赖，应该结合网络瀑布图与性能轨迹判断。',
    keyPoints: ['同步脚本通常阻塞 HTML 解析', 'defer/async/module 改变执行时机', '样式表通常阻塞首次渲染', '图片可影响 LCP 和布局但不阻塞 DOM 解析', '关键性取决于首屏依赖与加载顺序'],
    followUps: ['media 属性如何让非当前媒体样式降低阻塞优先级？'],
  },
}

const supplementalTopics = {
  javascript: [
    ['js-lexical-environment', ['作用域', '执行上下文'], 2, '词法环境和作用域链之间是什么关系？', '词法环境记录当前作用域的标识符绑定并指向外层环境', '函数定义位置决定其外层词法环境，而不是调用位置', '变量查找会沿环境引用逐级向外进行，直到找到绑定或抛出错误', '闭包为什么能够保留外层词法环境？'],
    ['js-temporal-dead-zone', ['变量', '作用域'], 2, '什么是暂时性死区，为什么 typeof 也可能报错？', 'let、const 绑定从进入作用域时已经存在，但初始化前不能访问', '暂时性死区从作用域开始持续到声明执行完成', '对死区内绑定使用 typeof 仍会抛出 ReferenceError，这与未声明全局变量不同', '暂时性死区如何帮助发现初始化顺序问题？'],
    ['js-property-descriptors', ['对象', '属性描述符'], 2, 'JavaScript 属性描述符包含哪些字段？', '数据属性由 value、writable、enumerable 和 configurable 描述', '访问器属性使用 get、set、enumerable 和 configurable', 'Object.defineProperty 新建属性时未提供的布尔字段默认是 false，和普通赋值不同', 'configurable 为 false 后还能修改哪些字段？'],
    ['js-currying', ['函数式编程', '函数'], 2, '什么是函数柯里化，它适合哪些场景？', '柯里化把接收多个参数的函数转换为连续接收单个或部分参数的函数', '它便于复用已绑定参数、构造配置函数和组合小函数', '过度柯里化会增加调用层级和调试成本，不应替代清晰的业务接口', '柯里化与偏函数应用有什么区别？'],
    ['js-function-composition', ['函数式编程', '组合'], 2, '函数组合的核心思想是什么？', '函数组合把前一个函数的输出作为后一个函数的输入', '可组合函数通常应保持输入输出契约清楚并尽量减少隐藏副作用', '组合适合数据转换流水线，但异步、错误和多参数函数需要额外约定', '如何组合返回 Promise 的异步函数？'],
    ['js-promise-combinators', ['Promise', '异步'], 3, 'Promise.all、allSettled、race 和 any 如何选择？', 'Promise.all 在任一输入拒绝时立即拒绝，适合全部成功才继续的任务', 'allSettled 等待所有结果，race 采用最先落定结果，any 采用最先兑现结果', '这些方法不会自动取消仍在执行的底层任务，取消需要 AbortController 等协作机制', 'Promise.any 全部失败时会返回什么错误？'],
    ['js-promise-error-flow', ['Promise', '错误处理'], 2, 'Promise 链中的错误是如何传播和恢复的？', 'then 回调抛错或返回拒绝 Promise 会让后续链进入拒绝分支', 'catch 本质上是 then 的拒绝处理器，返回普通值会把链恢复为兑现状态', 'finally 不应改写业务结果，除非自身抛错或返回拒绝 Promise', '为什么忘记 return 一个 Promise 会导致错误链断开？'],
    ['js-abort-controller', ['异步', '取消'], 2, 'AbortController 如何实现异步任务取消？', 'AbortController 通过共享的 AbortSignal 发送取消通知', 'fetch 等支持 signal 的 API 会在取消后以 AbortError 结束，但取消并不回滚已经发生的副作用', '自定义异步函数应监听 signal、及时清理资源并区分取消与真实失败', '多个任务如何共享或组合取消信号？'],
    ['js-esm-live-bindings', ['模块', 'ESM'], 3, 'ES Module 的静态结构和实时绑定意味着什么？', 'import 和 export 的静态语法让工具能在执行前分析依赖图', '导入绑定是只读视图，会反映导出模块中绑定值的后续变化', '模块默认严格模式且每个模块只求值一次，循环依赖时还要考虑初始化顺序', '循环依赖为什么可能触发暂时性死区错误？'],
    ['js-commonjs-esm', ['模块', '工程化'], 3, 'CommonJS 与 ES Module 的主要区别是什么？', 'CommonJS 通常在运行时同步执行 require 并导出对象，ESM 使用静态 import/export', 'ESM 支持实时绑定和静态分析，CommonJS 的导出对象更接近执行后的值快照', 'Node.js 中两套模块系统的解析、文件扩展名和互操作规则需要结合项目配置判断', '为什么不能简单把 require 全部机械替换成 import？'],
    ['js-destructuring-spread', ['语法', '对象'], 1, '解构赋值和展开语法有哪些常见陷阱？', '解构按属性名或迭代顺序读取值，并可设置只在 undefined 时生效的默认值', '对象展开只复制自身可枚举属性，是浅拷贝而不是递归克隆', '展开过程中会触发属性读取，且原型、不可枚举属性和属性描述符不会原样保留', '对象展开遇到 getter 时会发生什么？'],
    ['js-optional-nullish', ['语法', '空值'], 1, '可选链 ?. 和空值合并 ?? 应该如何使用？', '可选链在左侧为 null 或 undefined 时短路并返回 undefined', '空值合并只把 null 和 undefined 视为缺失，不会误伤 0、空字符串和 false', '分组可能中断可选链的连续短路，赋值左侧也不能直接使用可选链', '为什么配置默认值通常更适合使用 ?? 而不是 ||？'],
    ['js-number-precision', ['数字', '浮点数'], 2, '为什么 0.1 + 0.2 不等于 0.3，如何比较浮点数？', 'JavaScript Number 使用 IEEE 754 双精度浮点表示，许多十进制小数无法被二进制精确表示', '浮点运算会产生舍入误差，直接使用严格相等比较计算结果可能失败', '比较时可根据业务量级使用容差，金额等精确场景应采用整数最小单位或专用十进制方案', 'Number.EPSILON 能否作为所有浮点比较的固定容差？'],
    ['js-bigint', ['数字', 'BigInt'], 2, 'BigInt 解决了什么问题，使用时有哪些限制？', 'BigInt 可以精确表示超过 Number 安全整数范围的任意大整数', 'BigInt 字面量带 n，不能与 Number 直接混合进行算术运算', 'JSON 默认不能序列化 BigInt，涉及接口、数据库和浏览器兼容性时需要显式转换方案', '为什么 BigInt 不适合直接表示带小数的金额？'],
    ['js-proxy-reflect', ['元编程', '对象'], 3, 'Proxy 和 Reflect 如何配合使用？', 'Proxy 可以拦截对象的读取、写入、删除、函数调用等内部操作', 'Reflect 提供与许多代理陷阱对应的默认语义，便于正确转发原始操作', '代理必须遵守对象不可配置属性等语言不变量，否则运行时会抛出 TypeError', '响应式系统使用 Proxy 时如何处理对象身份？'],
    ['js-json-limitations', ['序列化', 'JSON'], 1, 'JSON.stringify 和 JSON.parse 有哪些限制？', 'JSON 只能表达对象、数组、字符串、数字、布尔值和 null 等有限结构', 'undefined、函数和 Symbol 可能被忽略，BigInt 会报错，Date 通常变成字符串，循环引用会报错', 'replacer、reviver 可以定制部分转换，但不能自动恢复原型、方法和所有内置类型', '如何安全处理包含循环引用的调试数据？'],
    ['js-structured-clone', ['拷贝', 'Web API'], 2, 'structuredClone 与 JSON 深拷贝有什么区别？', 'structuredClone 使用结构化克隆算法，支持循环引用、Map、Set、Date、ArrayBuffer 等更多类型', '它不能克隆函数、DOM 节点等不可克隆值，也不会保留自定义类的完整行为语义', '可转移对象可以把底层资源所有权移动到新对象，减少大数据复制成本', '哪些对象适合通过 transfer 列表转移？'],
    ['js-array-sort', ['数组', '排序'], 1, 'Array.prototype.sort 使用时要注意什么？', 'sort 默认把元素转为字符串并按 UTF-16 码元顺序比较，数字排序必须提供比较函数', 'sort 会原地修改数组，现代环境可使用 toSorted 获得不变更原数组的结果', '比较函数应保持自反、反对称和传递等一致性，否则结果可能不可预测', '如何实现多字段稳定排序？'],
    ['js-flat-flatmap', ['数组', '数据处理'], 1, 'flat 和 flatMap 的区别是什么？', 'flat 按指定深度展开嵌套数组，默认只展开一层', 'flatMap 先对每项映射再展开一层，适合一对零、一或多项的转换', '两者都会返回新数组，并会忽略稀疏数组中的空槽，不能替代任意深度递归处理', 'flatMap 为什么只能展开一层？'],
    ['js-regexp-last-index', ['正则表达式', '状态'], 3, '正则表达式的 global、sticky 和 lastIndex 有什么关系？', '带 g 或 y 标志的 RegExp 在 exec、test 等调用中会读写 lastIndex', 'global 从 lastIndex 之后继续搜索，sticky 要求恰好从 lastIndex 位置匹配', '复用有状态正则时若忽略 lastIndex，连续 test 可能出现交替结果，应按调用场景重置或新建实例', '为什么循环调用 test 可能一真一假？'],
    ['js-error-handling', ['错误处理'], 2, 'JavaScript 应用如何设计错误处理边界？', '同步异常可用 try/catch 捕获，Promise 拒绝需要在异步链中显式处理', '业务可预期失败与程序缺陷应使用不同错误类型或结果模型表达', '捕获后应补充上下文并决定恢复、重试或上报，不能静默吞掉导致状态不一致的错误', '什么时候适合自定义 Error 子类？'],
    ['js-event-listener-options', ['DOM', '事件'], 2, 'addEventListener 的 capture、once、passive 和 signal 有什么作用？', 'capture 决定监听器是否在捕获阶段触发，once 会在首次触发后自动移除', 'passive 表示监听器不会调用 preventDefault，可帮助浏览器优化触摸和滚动', 'signal 可以通过 AbortController 批量移除监听器，减少组件销毁时的清理遗漏', '为什么不能把需要阻止滚动的监听器设置为 passive？'],
    ['js-top-level-await', ['模块', '异步'], 3, '顶层 await 会如何影响 ES Module 依赖图？', '顶层 await 只允许在模块中使用，并使该模块的求值过程变为异步', '依赖它的父模块会等待其完成，但依赖图中的其他无关分支仍可能继续执行', '在公共模块中滥用顶层 await 会推迟应用启动，并让循环依赖问题更难分析', '顶层 await 与动态 import 的加载边界有何不同？'],
    ['js-private-fields', ['类', '封装'], 2, 'JavaScript 私有字段 #field 与普通下划线属性有什么区别？', '# 私有字段由语言在语法和运行时强制限制，只能在声明它的类体内访问', '它不属于普通字符串属性，不能通过 Object.keys、in 的字符串形式或代理陷阱直接访问', '私有字段提供封装但也影响测试、序列化和继承设计，应避免把类变成难以组合的状态容器', '子类能否直接访问父类的私有字段？'],
    ['js-weakref-finalization', ['内存', '高级 API'], 3, 'WeakRef 和 FinalizationRegistry 为什么应谨慎使用？', 'WeakRef 允许在不阻止垃圾回收的情况下临时访问对象', 'FinalizationRegistry 可在对象回收后安排清理回调，但回调时间甚至是否执行都不确定', '它们不适合承载关键资源释放或业务逻辑，只应用于可丢失缓存等少数高级场景', '为什么文件句柄关闭不能依赖终结回调？'],
  ],
  typescript: [
    ['ts-type-inference', ['类型推断'], 1, 'TypeScript 会在哪些位置进行类型推断？', '变量初始化、默认参数和函数返回值会触发从表达式到声明的类型推断', '上下文类型会从调用位置、事件处理器或目标类型反向约束表达式', '推断追求实用而非证明所有关系，公共 API 仍应在关键边界显式声明类型', '什么时候应给函数返回值添加显式类型？'],
    ['ts-literal-as-const', ['字面量类型', '只读'], 2, '字面量类型和 as const 有什么作用？', '字面量类型把值限制为某个具体字符串、数字或布尔值，而不是更宽的基础类型', 'as const 会阻止字面量拓宽，并把对象属性和数组元素推断为只读的窄类型', '它只影响编译期类型，不会在运行时冻结对象，运行时不可变仍需 Object.freeze 等机制', 'as const 与显式 readonly 类型有什么区别？'],
    ['ts-type-overview', ['类型系统', '基础'], 1, 'TypeScript 中常见类型应如何分类？', 'string、number、boolean、bigint、symbol、null 和 undefined 描述 JavaScript 运行时值', '对象、数组、函数、元组、联合和字面量类型用于表达更具体的数据形状', 'any、unknown、never、void 等是静态类型工具，不能简单称为 JavaScript 原始数据类型', 'void、undefined 和 never 用作返回类型时有何区别？'],
    ['ts-keyof-indexed-access', ['keyof', '索引访问'], 2, 'keyof 和索引访问类型 T[K] 如何配合？', 'keyof T 会得到对象类型已知属性键组成的联合类型', 'T[K] 根据键类型读取对应属性值类型，K 可以是单个键或键联合', '将 K 约束为 keyof T 可以让取值函数保持键与返回值之间的精确关系', '为什么 Object.keys 的返回类型通常不是 Array<keyof T>？'],
    ['ts-mapped-types', ['映射类型', '类型转换'], 2, '什么是映射类型，如何修改属性修饰符？', '映射类型遍历键联合并为每个键产生新的属性声明', '可以使用 readonly、? 以及加减修饰符批量增加或移除只读和可选约束', '键重映射的 as 子句还能过滤或重命名属性，但复杂转换应保持可读性', '如何实现一个只让指定键可选的类型？'],
    ['ts-conditional-types', ['条件类型'], 3, '条件类型 T extends U ? X : Y 如何工作？', '条件类型根据类型关系在两个结果分支中选择类型', '当检查对象是裸类型参数且传入联合类型时，条件类型通常会分发到联合的每个成员', '用元组包装检查类型可以关闭分发，递归条件类型还要关注复杂度和实例化深度', '如何让条件类型不对联合类型分发？'],
    ['ts-infer-keyword', ['条件类型', 'infer'], 3, '条件类型中的 infer 关键字有什么作用？', 'infer 可以在 extends 匹配模式中声明待推断的类型变量', '它常用于提取函数返回值、参数、Promise 内部值或数组元素类型', '多个推断位置和协变逆变关系会影响结果，过度嵌套会让类型难以解释', '如何实现一个 Awaited 的简化版本？'],
    ['ts-template-literal-types', ['模板字面量类型'], 3, '模板字面量类型适合解决什么问题？', '模板字面量类型可以用字符串字面量联合拼接出受约束的字符串集合', '它适合事件名、路由参数、CSS 属性前缀等有限命名协议', '组合联合类型会产生笛卡尔积，规模过大时应改用代码生成或更宽的字符串类型', '如何从 onClick 推导出 click 事件名？'],
    ['ts-satisfies', ['satisfies', '类型推断'], 2, 'satisfies 与类型注解、类型断言有什么区别？', 'satisfies 会检查表达式满足目标类型，但尽量保留表达式自身更具体的推断结果', '类型注解通常把变量视为声明的目标类型，类型断言则可能绕过本应失败的检查', '它适合校验配置对象键和值的约束，同时保留字面量信息用于后续推断', 'satisfies 能否改变变量的运行时值？'],
    ['ts-excess-property-checks', ['对象类型', '类型检查'], 2, '什么是对象字面量的多余属性检查？', '新鲜对象字面量直接赋给目标类型时会额外检查未知属性，帮助发现拼写错误', '先赋给变量再传递时通常回到结构化兼容检查，因此行为看起来可能不同', '不应通过随意断言绕过检查，真正允许额外字段时应设计索引签名或泛型接口', '为什么同一个对象直接传参和通过变量传参结果不同？'],
    ['ts-discriminated-unions', ['联合类型', '类型收窄'], 2, '可辨识联合如何建模状态？', '可辨识联合让每个成员共享一个字面量判别字段，并携带各自专属数据', 'switch 或条件判断判别字段后，编译器可以把值收窄到具体成员', '它比多个互相独立的可选字段更能排除非法状态，适合请求状态和领域事件', '如何为异步请求设计不可出现非法组合的状态类型？'],
    ['ts-exhaustive-never', ['never', '穷尽检查'], 3, '如何使用 never 做联合类型的穷尽检查？', '所有联合成员都被分支处理后，剩余值应被收窄为 never', '在 default 分支把值赋给 never 或调用 assertNever，可以让新增成员时产生编译错误', '穷尽检查只覆盖静态联合，外部输入仍必须先做运行时验证', '新增联合成员后如何让所有遗漏分支立即报错？'],
    ['ts-type-predicates', ['类型守卫', '谓词'], 2, '自定义类型谓词 value is T 应该如何编写？', '返回类型 value is T 告诉编译器在函数返回 true 时收窄对应参数', '实现必须真的检查足够的运行时条件，否则会向类型系统提供错误保证', '复杂外部数据更适合使用经过测试的校验器，并从校验规则推导静态类型', '错误的类型谓词为什么比类型断言更危险？'],
    ['ts-assertion-functions', ['断言函数', '类型收窄'], 3, 'asserts 条件和 asserts value is T 有什么作用？', '断言函数在条件不成立时应抛出异常，正常返回后编译器会收窄控制流中的类型', 'asserts condition 适合不变量检查，asserts value is T 可同时验证并收窄具体值', '声明必须与运行时实现保持一致，不能只写类型签名而省略真实校验', '断言函数与返回 boolean 的类型守卫如何选择？'],
    ['ts-branded-types', ['类型建模', '品牌类型'], 3, '如何用品牌类型区分结构相同但语义不同的值？', 'TypeScript 结构化类型会让形状相同的值彼此兼容，品牌字段可引入名义上的区别', '品牌值通常应通过验证或构造函数创建，而不是让调用方随意断言', '它适合用户 ID、订单 ID 和已校验字符串，但会增加边界转换成本', '品牌类型如何与运行时校验配合？'],
    ['ts-variadic-tuples', ['元组', '泛型'], 3, '可变元组类型解决了什么问题？', '可变元组允许在元组类型中展开泛型元组并保留元素位置关系', '它能精确描述参数拼接、函数组合和部分参数绑定的输入输出', '复杂的元组运算会增加类型检查成本，公共 API 应权衡精确度与可读性', '如何给 bind 的部分参数保留剩余参数类型？'],
    ['ts-function-variance', ['类型兼容性', '函数'], 3, '函数参数和返回值的型变如何影响兼容性？', '返回值通常按协变方向检查，能返回更具体类型的函数可用于要求更宽结果的位置', '在 strictFunctionTypes 等条件下，函数参数更接近逆变检查，以避免处理能力不足的函数被误用', '方法、回调和可变对象还存在兼容性细节，不能只背协变逆变名词而忽略配置和位置', '为什么接受 Dog 的回调不能总替代接受 Animal 的回调？'],
    ['ts-generic-constraints', ['泛型', '约束'], 2, '泛型约束 extends 应该如何设计？', '泛型约束声明实现真正依赖的最小能力，而不是提前固定具体业务类型', 'K extends keyof T 可以表达键必须来自对象并让返回值保持 T[K] 关系', '约束过宽会丢失安全性，约束过窄会降低复用性，调用处推断结果也需要检查', '为什么 <T extends object> 仍不能直接访问任意属性？'],
    ['ts-class-modifiers', ['类', '访问控制'], 1, 'public、protected、private 和 # 私有字段有什么区别？', 'TypeScript 的 public、protected、private 主要提供编译期访问检查', 'JavaScript # 私有字段具有运行时强制封装，和 TypeScript private 的发射行为不同', '结构化兼容性遇到 private/protected 成员时还会考虑成员声明来源，影响类之间赋值', '什么时候应使用 # 私有字段而不是 private？'],
    ['ts-abstract-classes', ['类', '抽象'], 2, '抽象类与 interface 应该如何选择？', '抽象类可以包含状态、构造逻辑和已实现方法，并定义必须由子类实现的抽象成员', 'interface 主要描述结构契约，可被不同继承体系的对象实现并支持声明合并', '需要共享运行时实现时选择抽象类，只需要描述能力时通常优先接口或组合', '为什么抽象类不能被直接实例化？'],
    ['ts-implements', ['类', '接口'], 1, '类使用 implements 时会得到什么检查？', 'implements 检查类实例侧是否满足接口声明的结构', '它不会改变类成员的推断类型，也不会自动生成方法或进行运行时校验', '构造函数和静态成员属于类的静态侧，需要用单独的构造签名表达约束', '如何约束一个类的构造函数签名？'],
    ['ts-decorators', ['装饰器', '元编程'], 3, '使用 TypeScript 装饰器时为什么要区分新旧语义？', '现代 JavaScript 装饰器与 TypeScript 历史 experimentalDecorators 模式的调用签名和能力不同', '框架、编译目标和 tsconfig 配置决定实际使用哪套语义，迁移时不能机械替换', '装饰器适合声明式扩展，但隐藏控制流和元数据依赖会增加测试与调试成本', '如何确认一个框架使用的是哪套装饰器语义？'],
    ['ts-module-resolution', ['模块', '编译配置'], 3, 'TypeScript 模块解析策略为什么要匹配运行环境？', 'moduleResolution 决定编译器如何把导入路径映射到文件和类型声明', 'Node、NodeNext、Bundler 等策略对扩展名、exports 和条件导出有不同处理', '类型检查能找到模块不代表运行时一定能加载，配置必须与打包器或 Node 行为一致', 'paths 配置为什么不会自动改写运行时导入路径？'],
    ['ts-import-type', ['模块', '类型擦除'], 1, 'import type 和普通 import 有什么区别？', 'import type 明确表示导入只用于类型位置，发射 JavaScript 时可以被完全移除', '它有助于避免不必要的运行时依赖和某些循环依赖，并配合 verbatimModuleSyntax 明确模块意图', '如果值在装饰器或运行时代码中使用，就不能只通过 import type 导入', '什么时候类型导入仍会影响声明文件输出？'],
    ['ts-project-references', ['工程化', '编译'], 3, 'TypeScript Project References 解决什么问题？', '项目引用把大型代码库拆成具有明确依赖关系的复合项目', 'tsc --build 可以按依赖顺序增量构建，并利用声明输出作为项目边界', '它需要 composite、输出目录和引用关系等配置，拆分边界不合理反而会增加维护成本', '项目引用与普通 tsconfig extends 有什么区别？'],
    ['ts-declaration-merging', ['声明合并', 'interface'], 2, 'TypeScript 的声明合并会发生在哪些声明上？', '同名 interface 可以合并成员，namespace 也可与某些类、函数或枚举声明组合', 'type 别名不会进行同名合并，这也是公共扩展契约常使用 interface 的原因之一', '声明合并会跨文件影响全局或模块类型，应控制作用域并避免意外污染', '第三方库如何利用接口合并开放插件扩展？'],
    ['ts-global-augmentation', ['声明文件', '全局扩展'], 3, '如何安全地扩展全局对象或第三方模块类型？', '全局扩展通常放在模块文件的 declare global 中，模块扩展使用 declare module 指定目标模块', '扩展声明必须被编译器包含并与实际运行时代码保持一致', '应尽量把扩展范围限制在明确入口，避免让全局类型与真实环境不一致', '给 Window 添加属性时如何保证运行时也完成初始化？'],
    ['ts-js-interop', ['迁移', 'JavaScript'], 1, 'allowJs、checkJs 和 JSDoc 如何帮助渐进迁移？', 'allowJs 允许 TypeScript 项目包含 JavaScript 文件，checkJs 进一步对其执行类型检查', 'JSDoc 可以在不改为 .ts 的情况下补充参数、返回值和泛型等类型信息', '渐进迁移应先收紧边界和高风险模块，再逐步提高严格配置，避免一次开启所有规则导致大量断言', '大型 JavaScript 项目应如何安排 TypeScript 迁移顺序？'],
    ['ts-type-composition', ['高级类型', '类型运算'], 3, 'TypeScript 如何从已有类型组合出新类型？', '联合和交叉类型分别表达多种可能与同时满足多组约束', 'keyof、索引访问和映射类型可以从对象键和值关系派生新结构', '条件类型与 infer 能按类型关系选择和提取信息，但复杂类型应控制递归和分发成本', '什么时候应把复杂类型运算改为显式领域类型？'],
    ['ts-modules-namespaces', ['模块', '命名空间'], 2, 'TypeScript 中模块与 namespace 有什么区别？', '包含顶层 import 或 export 的文件是模块，依赖关系由模块加载器和工具链处理', 'namespace 主要在全局脚本中组织名称，历史上被称为内部模块', '现代应用通常优先 ES Module，namespace 更多用于特定声明文件或非模块脚本兼容', '为什么现代打包项目通常不推荐 namespace？'],
  ],
  network: [
    ['network-dns-resolution', ['DNS', '域名'], 2, 'DNS 解析通常经历哪些步骤？', '客户端会先检查浏览器、系统和本地解析器缓存，再向递归解析器查询', '递归解析器可能依次访问根、顶级域和权威 DNS 服务器获得记录', '缓存时间由 TTL 等策略影响，hosts、代理和加密 DNS 也可能改变实际查询路径', 'DNS 缓存污染或过期时如何定位？'],
    ['network-dns-records', ['DNS', '记录类型'], 1, 'A、AAAA、CNAME、MX 和 TXT 记录分别做什么？', 'A 和 AAAA 分别把名称映射到 IPv4 与 IPv6 地址', 'CNAME 为名称建立别名，MX 指定邮件服务器，TXT 保存可验证的文本信息', '记录类型的可组合规则、根域限制和服务商实现需要结合权威 DNS 配置确认', '为什么 CNAME 通常不能与同名其他记录并存？'],
    ['network-tcp-reliability', ['TCP', '可靠传输'], 3, 'TCP 如何提供可靠、有序的字节流？', 'TCP 使用序列号、确认应答和校验机制识别丢失、重复与乱序数据', '发送端根据重传超时和快速重传等信号重新发送未确认数据', '可靠性只保证连接内字节传输，不保证应用消息边界、业务幂等或对端已经持久化处理', 'TCP 确认收到是否等于应用已经处理？'],
    ['network-flow-congestion-control', ['TCP', '拥塞控制'], 3, '流量控制和拥塞控制有什么区别？', '流量控制通过接收窗口避免发送端压垮单个接收方缓冲区', '拥塞控制根据网络丢包、时延等信号调整拥塞窗口，避免压垮传输路径', '实际发送量同时受接收窗口和拥塞窗口限制，不同 TCP 算法的增长与恢复策略也不同', '带宽很高但 RTT 很大时为什么吞吐仍可能受限？'],
    ['network-certificate-validation', ['TLS', '证书'], 3, '浏览器如何验证 HTTPS 证书？', '浏览器会检查证书有效期、主机名、用途和签名链是否能连接到受信任根证书', '还会结合吊销信息、证书透明度和本地安全策略判断连接是否可信', '证书验证只确认身份绑定与链路安全，不代表网站业务内容本身可信', '中间证书缺失为什么会导致部分客户端失败？'],
    ['network-http-message', ['HTTP', '报文'], 1, 'HTTP 请求和响应报文由哪些部分组成？', 'HTTP 消息包含起始行、头字段和可选消息体，具体线格式会随协议版本变化', '请求方法与目标描述操作，响应状态码表达处理结果，头字段携带元数据', 'Content-Length、Transfer-Encoding、Content-Type 等字段决定消息边界或语义，不能混为一谈', 'HTTP/2 中为什么看不到传统文本起始行？'],
    ['network-content-negotiation', ['HTTP', '内容协商'], 2, 'HTTP 内容协商如何选择响应格式？', '客户端可以通过 Accept、Accept-Language、Accept-Encoding 等字段表达偏好', '服务端选择表示形式并通过 Content-Type、Content-Language、Content-Encoding 返回结果', '参与缓存选择的请求头应通过 Vary 声明，否则共享缓存可能复用错误变体', 'Vary: Accept-Encoding 对缓存键有什么影响？'],
    ['network-content-encoding', ['HTTP', '压缩'], 2, 'gzip、Brotli 等内容编码如何协商？', '客户端用 Accept-Encoding 声明支持的编码，服务端用 Content-Encoding 标记实际压缩方式', '文本资源通常压缩收益明显，已经压缩的图片视频再次压缩可能收益有限', '压缩会消耗 CPU，并需正确设置缓存变体和防范少数与机密数据相关的压缩侧信道', 'Brotli 为什么常用于 HTTPS 静态资源？'],
    ['network-connection-reuse', ['HTTP', '连接复用'], 2, 'HTTP 连接复用为什么能改善性能？', '复用连接可以减少 TCP 和 TLS 握手带来的往返与计算成本', 'HTTP/1.1 可在连接上顺序发送多个请求，HTTP/2 和 HTTP/3 支持更强的并发复用', '空闲超时、代理限制、域名分片和连接迁移都会影响实际复用效果', '域名分片为什么可能损害 HTTP/2 性能？'],
    ['network-http2-multiplexing', ['HTTP/2', '多路复用'], 3, 'HTTP/2 多路复用解决了什么问题？', 'HTTP/2 把消息拆成带流标识的二进制帧，让多个请求响应交错使用同一连接', '它缓解 HTTP/1.1 应用层队头阻塞和多连接开销，并支持流级优先级与控制', '多个流仍共享同一 TCP 连接，底层丢包可能阻塞后续字节到达所有流', 'HTTP/2 为什么仍可能受到 TCP 队头阻塞？'],
    ['network-http2-hpack', ['HTTP/2', '头部压缩'], 3, 'HPACK 为什么能压缩 HTTP/2 头部？', 'HPACK 使用静态表、动态表和霍夫曼编码减少重复头字段传输', '编码器和解码器维护同步状态，因此表大小和敏感字段处理会影响压缩与安全', '头部压缩降低冗余但不压缩消息体，消息体仍由 Content-Encoding 等机制处理', '为什么 Authorization 等敏感字段不应随意进入动态表？'],
    ['network-http3-quic', ['HTTP/3', 'QUIC'], 3, 'HTTP/3 和 QUIC 的核心变化是什么？', 'HTTP/3 把 HTTP 语义映射到基于 UDP 的 QUIC 传输上，并内置 TLS 1.3', 'QUIC 在用户态管理多个独立流，一个流丢包通常不会阻塞其他流的数据交付', '它还支持连接迁移和更快建连，但会受到网络设备 UDP 策略与实现成熟度影响', 'QUIC 连接 ID 如何支持网络切换？'],
    ['network-cdn', ['CDN', '缓存'], 2, 'CDN 如何加速静态资源和动态请求？', 'CDN 通过分布式边缘节点让用户从更近位置获取缓存内容', '缓存键、TTL、回源策略和主动失效决定命中率与内容新鲜度', '动态加速还可能优化路由与连接复用，但个性化响应必须避免被错误共享缓存', '带哈希静态资源为什么适合长时间 CDN 缓存？'],
    ['network-reverse-proxy', ['代理', '架构'], 2, '反向代理在 Web 架构中承担哪些职责？', '反向代理代表服务端接收客户端请求，并转发到内部应用实例', '它可以处理 TLS 终止、负载均衡、缓存、压缩、鉴权和统一日志', '代理会改变客户端地址与协议观察结果，应用需正确处理 Forwarded 或 X-Forwarded-* 且只信任受控代理', '错误信任 X-Forwarded-For 会带来什么风险？'],
    ['network-load-balancing', ['负载均衡', '可用性'], 2, '常见负载均衡策略有什么取舍？', '轮询、最少连接、哈希和基于权重的策略适合不同请求成本与状态模型', '健康检查和故障摘除决定流量是否会继续进入异常实例', '粘性会话简化有状态应用但降低弹性，通常更推荐外置会话状态或无状态服务', '一致性哈希适合解决什么分配问题？'],
    ['network-websocket', ['WebSocket', '实时通信'], 2, 'WebSocket 的握手和通信特点是什么？', 'WebSocket 通常先通过 HTTP Upgrade 握手，再在同一连接上进行全双工帧通信', '它适合双向低延迟消息，但心跳、重连、背压、鉴权续期和水平扩展需由应用设计', '浏览器 WebSocket API 不提供通用请求头自定义，跨站连接仍要在服务端校验 Origin 和身份', 'WebSocket 断线重连如何避免重复消息？'],
    ['network-sse', ['SSE', '实时通信'], 2, 'Server-Sent Events 与 WebSocket 如何选择？', 'SSE 基于 HTTP 文本事件流，主要支持服务端到浏览器的单向推送', '浏览器 EventSource 提供自动重连和事件 ID 机制，代理兼容通常较好', '需要双向高频二进制通信时 WebSocket 更合适，只需服务器推送时 SSE 往往更简单', 'SSE 如何从 Last-Event-ID 继续接收？'],
    ['network-polling', ['轮询', '实时通信'], 1, '短轮询、长轮询和流式响应有什么区别？', '短轮询按固定间隔重复请求，简单但可能产生大量空响应和延迟', '长轮询让服务端等待事件或超时后返回，客户端随后立即发起下一次请求', '流式响应保持连接并持续传输分块数据，需要考虑代理缓冲、断线恢复和背压', '什么业务量级下短轮询仍是合理选择？'],
    ['network-rest', ['API', 'REST'], 2, 'REST 风格接口的核心约束是什么？', 'REST 强调资源标识、统一接口、无状态交互和可缓存等约束', 'HTTP 方法、状态码和表示形式应表达资源操作语义，而不是只把所有请求包装成一个动作入口', '实际 API 可以借鉴 REST 约束，但不应把 URL 命名规则等同于完整 REST 架构', '无状态约束是否意味着服务端不能保存任何数据？'],
    ['network-graphql', ['API', 'GraphQL'], 2, 'GraphQL 相比 REST 有哪些优势和成本？', 'GraphQL 允许客户端按模式查询所需字段，减少多端字段组合中的过取和欠取', '单一端点并不等于单一成本，服务端需要限制查询深度、复杂度并解决 N+1 访问', 'HTTP 缓存、错误状态和文件上传等能力需要额外约定，是否采用取决于领域和团队工具链', 'DataLoader 如何缓解 GraphQL N+1 问题？'],
    ['network-rpc', ['API', 'RPC'], 2, 'RPC 与资源风格 HTTP API 有什么区别？', 'RPC 以调用远程方法为中心，接口通常明确表达动作和参数', '资源风格 API 更强调统一方法作用于资源表示，两者都可以运行在 HTTP 等传输之上', 'RPC 生成代码和强契约有利于内部服务，但版本演进、重试语义和跨语言兼容仍需设计', '为什么 RPC 超时后不能直接假设服务端未执行？'],
    ['network-cookie-security', ['Cookie', '安全'], 2, 'Cookie 的 Secure、HttpOnly、SameSite 和 Domain 如何配置？', 'Secure 限制 Cookie 通过安全连接发送，HttpOnly 阻止脚本读取但不阻止自动携带', 'SameSite 控制跨站请求携带策略，Domain 和 Path 决定作用范围但不是可靠的安全隔离边界', '会话 Cookie 应缩小作用域、设置合理过期并配合 CSRF 防御，跨站场景还要满足 Secure 等要求', 'SameSite=None 为什么通常必须配合 Secure？'],
    ['network-cors-credentials', ['CORS', '凭据'], 2, '携带凭据的 CORS 请求需要满足哪些条件？', '客户端需显式设置 credentials，服务端也要返回 Access-Control-Allow-Credentials: true', '允许凭据时 Access-Control-Allow-Origin 不能使用通配符，而应返回经过白名单验证的具体源', 'CORS 只控制浏览器脚本读取响应，不替代身份认证、CSRF 防御和服务端授权', '为什么动态回显 Origin 之前必须校验白名单？'],
    ['network-preflight-cache', ['CORS', '预检'], 2, 'CORS 预检结果可以如何缓存？', '浏览器可根据 Access-Control-Max-Age 在一段时间内复用预检许可', '预检缓存与普通 HTTP 响应缓存是不同的内部缓存，浏览器还可能限制最大缓存时间', '方法、请求头或源变化会影响许可匹配，不能依赖预检缓存绕过服务端鉴权', '为什么减少自定义请求头可能降低预检频率？'],
    ['network-sri', ['安全', '资源完整性'], 2, 'Subresource Integrity 如何防止第三方资源被篡改？', 'SRI 让页面在 link 或 script 上声明资源内容的密码学摘要', '浏览器下载后校验摘要，不匹配就拒绝执行或应用该资源', '跨源资源通常还要满足 CORS 要求，版本更新时必须同步更新摘要并保留可用回退策略', 'SRI 与 CSP 可以怎样配合？'],
    ['network-hsts', ['HTTPS', '安全'], 2, 'HSTS 解决了什么问题？', 'HSTS 响应头要求浏览器在有效期内只通过 HTTPS 访问指定站点', '它可以阻止后续 HTTP 降级和部分 SSL stripping 攻击，并可选择覆盖子域', '首次访问前仍可能没有策略，预加载列表能缩小窗口但需要满足严格申请和退出条件', 'includeSubDomains 开启前为什么要检查所有子域？'],
    ['network-mixed-content', ['HTTPS', '安全'], 1, '什么是混合内容，浏览器会如何处理？', 'HTTPS 页面加载 HTTP 子资源会破坏安全上下文，被称为混合内容', '脚本、样式等主动内容通常会被阻止，部分被动资源可能升级或按浏览器策略处理', '应从源站和构建产物消除 HTTP URL，并用 CSP 报告或升级指令辅助迁移', '为什么只把首页改成 HTTPS 仍可能不安全？'],
    ['network-fetch-abort', ['Fetch', '取消'], 2, 'Fetch 请求如何实现超时和取消？', 'Fetch 本身通过 AbortSignal 接收取消通知，可由 AbortController 或 AbortSignal.timeout 等方式触发', '取消会让读取请求或响应过程失败，但无法保证服务端没有收到或执行请求', '业务应区分超时、用户取消和网络失败，并清理重试计时器与流读取资源', '取消 POST 请求后为什么仍需考虑幂等性？'],
    ['network-retry-backoff', ['可靠性', '重试'], 3, '网络请求重试为什么需要指数退避和抖动？', '立即同步重试会在故障时放大流量并造成重试风暴', '指数退避逐步拉长间隔，随机抖动避免大量客户端在同一时刻再次请求', '只有幂等或带幂等键的操作才适合自动重试，还应设置总时限、次数和可重试错误范围', 'Retry-After 响应头应如何参与退避策略？'],
    ['network-rate-limiting', ['限流', '可靠性'], 2, '服务端限流常见算法有哪些？', '固定窗口实现简单但边界可能突发，滑动窗口能更平滑地统计请求', '令牌桶允许一定突发并控制平均速率，漏桶更强调恒定流出', '客户端收到限流响应应尊重 Retry-After 并避免并发重试，服务端还要选择用户、IP 或令牌等合理维度', '分布式限流如何避免多个节点各自超发？'],
    ['network-resumable-upload', ['文件上传', '可靠性'], 3, '大文件分片和断点续传需要设计哪些协议？', '客户端把文件切片并为文件或分片计算稳定标识，服务端记录已接收范围', '重试上传应具备幂等性，合并前要校验顺序、大小、摘要和用户权限', '并发分片能提高吞吐但会增加内存、连接和服务端合并压力，还需处理取消与过期清理', '如何避免相同分片重复写入？'],
    ['network-range-requests', ['HTTP', '范围请求'], 2, 'HTTP Range 请求如何支持断点下载？', '客户端用 Range 请求指定需要的字节范围，服务端支持时返回 206 和 Content-Range', 'Accept-Ranges 可提示能力，If-Range 能在资源未变化时继续范围下载', '多个范围、压缩表示和资源变化会增加实现复杂度，客户端必须验证总长度与响应范围', '资源 ETag 变化后为什么不应继续拼接旧分片？'],
  ],
  browser: [
    ['browser-html-parser', ['HTML', '解析'], 2, '浏览器 HTML 解析器如何构建 DOM？', 'HTML 解析器把字节解码为字符并经过分词、树构建算法生成 DOM', '解析具有错误恢复规则，非法嵌套可能被自动重排而与源码结构不同', '同步脚本、document.write 和网络等待可能影响解析进度，不能把 HTML 当作普通 XML 处理', '非法表格嵌套为什么可能导致节点位置变化？'],
    ['browser-cssom-render-tree', ['CSSOM', '渲染'], 2, 'CSSOM、DOM 和渲染树之间是什么关系？', '浏览器解析样式表形成 CSSOM，并结合 DOM 计算每个可见节点的样式', '渲染树包含参与视觉布局的盒，不会简单一一对应所有 DOM 节点', 'display:none、伪元素和匿名盒等情况说明 DOM 与渲染结构存在差异', 'visibility:hidden 的元素是否进入布局？'],
    ['browser-preload-scanner', ['资源加载', '解析'], 3, '预加载扫描器如何改善页面加载？', '主 HTML 解析器被脚本阻塞时，预加载扫描器仍可提前发现图片、样式和脚本 URL', '提前发起请求能减少关键资源排队时间，但动态拼接地址或深层 CSS 依赖可能无法被发现', 'preload 提示应与真实资源类型、跨源属性和使用时机匹配，否则会浪费带宽', '为什么动态注入的关键资源更容易被发现得太晚？'],
    ['browser-critical-rendering-path', ['渲染', '性能'], 3, '什么是关键渲染路径，优化时应关注什么？', '关键渲染路径涵盖取得 HTML、构建 DOM/CSSOM、计算样式、布局、绘制和合成等关键步骤', '关键 CSS、阻塞脚本、字体和首屏媒体会影响首次可见内容的时机', '优化应基于网络瀑布图和性能轨迹缩短依赖链，而不是机械内联所有资源', '如何识别真正阻塞首屏的 CSS？'],
    ['browser-compositor-layers', ['合成', '性能'], 3, '浏览器为什么创建合成层，层越多越好吗？', '合成层允许浏览器把部分绘制结果作为独立纹理变换并在合成阶段组合', 'transform、视频、滚动区域等因素可能触发分层，但具体启发式由浏览器决定', '过多图层会增加显存、上传和合成成本，will-change 应按需短期使用并通过工具验证', '如何在开发者工具中检查图层数量和合成原因？'],
    ['browser-domcontentloaded-load', ['生命周期', '事件'], 1, 'DOMContentLoaded 与 load 事件有什么区别？', 'DOMContentLoaded 在文档解析完成并等待延迟脚本执行后触发，不等待普通图片等所有子资源', 'load 会等待页面及大多数依赖资源完成加载后触发', '异步脚本、模块脚本、样式依赖和缓存会影响具体时序，业务初始化应选择最早满足依赖的时机', 'defer 脚本与 DOMContentLoaded 的顺序是什么？'],
    ['browser-history-navigation', ['History API', '路由'], 2, 'History API 如何支持前端路由？', 'pushState 和 replaceState 可以修改会话历史和 URL，而不触发传统整页导航', '用户前进后退会触发 popstate，应用需根据 URL 恢复界面状态', '服务端必须为可直接访问的前端路由提供回退，同时要处理滚动、标题和无障碍焦点', 'pushState 为什么不会自动触发 popstate？'],
    ['browser-indexeddb', ['存储', 'IndexedDB'], 2, 'IndexedDB 适合保存什么数据？', 'IndexedDB 是浏览器中的异步事务型对象数据库，适合较大的结构化数据和离线索引', '对象仓库、索引和事务决定读写范围，版本升级通过 onupgradeneeded 修改结构', '配额、隐私分区和清理策略因浏览器而异，关键数据仍需服务端持久化', '版本升级事务失败时如何恢复？'],
    ['browser-cache-api', ['缓存', 'Service Worker'], 2, 'Cache API 与 HTTP 缓存有什么区别？', 'Cache API 允许脚本显式保存 Request 和 Response 对，常由 Service Worker 管理离线资源', '它不会自动遵循应用期望的更新策略，也不等同于浏览器透明管理的 HTTP 缓存', '应用需要设计版本、清理、匹配键和失败回退，避免长期保留过期或敏感响应', 'Cache API 为什么不能替代业务数据库？'],
    ['browser-web-worker', ['Worker', '并发'], 2, 'Web Worker 能解决什么问题？', 'Web Worker 在独立线程环境执行脚本，可以把计算密集任务移出页面主线程', 'Worker 不能直接访问 DOM，需要通过消息和结构化克隆或可转移对象通信', '线程创建、数据复制和任务拆分有成本，短小任务不一定能从 Worker 获益', '如何把大 ArrayBuffer 高效传给 Worker？'],
    ['browser-shared-worker', ['Worker', '多页面'], 3, 'SharedWorker 与普通 Web Worker 有什么区别？', 'SharedWorker 可以被同源的多个页面或上下文连接并共享一个后台执行实例', '各连接通过 MessagePort 通信，生命周期和浏览器支持比普通 Worker 更复杂', '它适合少数跨标签共享协调场景，但常需要 BroadcastChannel、Service Worker 等替代方案评估', 'SharedWorker 何时会被浏览器终止？'],
    ['browser-intersection-observer', ['观察器', '性能'], 2, 'IntersectionObserver 适合哪些场景？', 'IntersectionObserver 异步报告目标与根视口或容器的交叉变化', '它适合懒加载、曝光统计和无限滚动触发，避免在滚动事件中频繁同步测量布局', '回调并非逐像素实时触发，阈值、rootMargin 和遮挡语义需要按业务设计', '曝光统计为什么还要结合可见时长？'],
    ['browser-resize-observer', ['观察器', '布局'], 2, 'ResizeObserver 与 window resize 有什么区别？', 'ResizeObserver 观察具体元素内容盒或边框盒尺寸变化，而不只监听视口大小', '它适合容器驱动组件和图表自适应，但回调中继续修改尺寸可能造成观察循环', '应批量处理更新并避免在回调里无条件写回导致 ResizeObserver loop 警告', '如何避免尺寸观察回调反复触发自身？'],
    ['browser-performance-observer', ['性能', '观察器'], 3, 'PerformanceObserver 可以采集哪些性能数据？', 'PerformanceObserver 订阅浏览器产生的 performance entry，例如资源、导航、长任务和 Web Vitals 相关条目', 'supportedEntryTypes 可用于判断环境支持，buffered 选项能读取观察前已产生的部分记录', '采集代码自身应轻量，并对采样、聚合和用户隐私做控制', '如何用 PerformanceObserver 观察 LCP？'],
    ['browser-page-visibility', ['生命周期', '可见性'], 1, 'Page Visibility API 有什么用途？', 'document.visibilityState 和 visibilitychange 可以判断页面是否处于可见状态', '页面隐藏时可暂停轮播、降低轮询频率或记录会话状态，减少后台资源消耗', '隐藏不等于页面即将永久卸载，保存关键数据还要结合 pagehide 等生命周期信号', '为什么不应依赖 beforeunload 作为唯一保存时机？'],
    ['browser-bfcache', ['导航', '缓存'], 3, '什么是往返缓存 bfcache？', 'bfcache 可以保存完整页面状态，使前进后退时无需重新创建文档即可快速恢复', 'pageshow 和 pagehide 的 persisted 属性可用于识别保存与恢复', '某些不可安全冻结的行为会影响可用性，应用恢复后还要刷新过期数据和连接状态', '页面从 bfcache 恢复时会重新触发 DOMContentLoaded 吗？'],
    ['browser-speculation-rules', ['导航', '预渲染'], 3, '预取、预连接和预渲染有什么区别？', 'preconnect 提前建立连接，prefetch 提前下载未来可能使用的资源或文档', 'prerender 会提前加载并渲染整个页面，命中时导航极快但资源和隐私成本更高', '提示必须基于较高置信度并考虑用户网络、登录状态和副作用，不能无差别预加载', '预渲染页面如何避免重复执行分析上报？'],
    ['browser-web-components', ['Web Components', '组件'], 2, 'Web Components 由哪些核心能力组成？', 'Custom Elements 定义自定义元素及生命周期，Shadow DOM 提供封装树', 'template 和 slot 支持可复用结构与内容分发，CSS 自定义属性常用于跨边界主题配置', '原生组件仍需设计属性反射、表单参与、可访问性和服务端渲染策略', '自定义元素升级过程会在什么时候发生？'],
    ['browser-shadow-dom', ['Shadow DOM', '封装'], 3, 'Shadow DOM 提供了哪些封装边界？', 'Shadow DOM 把内部节点树与外部文档查询和样式匹配建立边界', '事件可以根据 composed 属性穿过边界，并在传播时发生目标重定向', '封装不是安全边界，外部仍可通过公开引用、CSS 自定义属性和 part 等设计接口交互', 'composedPath 如何帮助理解事件跨边界传播？'],
    ['browser-accessibility-tree', ['可访问性', '渲染'], 2, '可访问性树与 DOM 有什么关系？', '浏览器根据 DOM、样式和 ARIA 计算可访问性树，辅助技术通过它理解角色、名称、状态和关系', '部分隐藏或纯装饰节点不会出现在树中，错误 ARIA 也可能覆盖原生语义', '应优先使用语义 HTML，并通过浏览器无障碍面板和真实辅助技术验证', 'display:none 与 aria-hidden 对可访问性树有什么影响？'],
    ['browser-clipboard-api', ['Clipboard', '权限'], 2, 'Clipboard API 使用时有哪些安全限制？', '异步 Clipboard API 通常要求安全上下文，并受用户激活和权限策略限制', '读取剪贴板比写入更敏感，不同浏览器的提示与授权行为存在差异', '应用应提供失败回退、避免静默读取敏感信息，并只写入用户明确请求的内容', '为什么复制按钮应在真实点击事件中调用 API？'],
    ['browser-permissions-api', ['权限', '隐私'], 2, 'Permissions API 能否统一管理所有浏览器权限？', 'Permissions API 可以查询部分能力的 granted、denied 或 prompt 状态', '并非所有权限都支持查询，浏览器还会结合用户手势、权限策略和站点设置决定实际调用结果', '权限状态可能变化，应用必须处理 API 调用仍然失败的情况，不能仅依赖预查询', '为什么查询结果为 granted 仍可能操作失败？'],
    ['browser-iframe-sandbox', ['iframe', '安全'], 2, 'iframe sandbox 如何限制嵌入页面？', 'sandbox 在默认情况下限制脚本、表单、导航、弹窗和源身份等多项能力', 'allow-* 令牌只应按最小权限逐项开放，组合 allow-scripts 与 allow-same-origin 对同源内容尤其危险', '还应配合 CSP、Permissions Policy、postMessage 源校验和独立域名形成完整边界', '为什么同源 iframe 同时允许脚本和 same-origin 风险较高？'],
    ['browser-task-scheduling', ['调度', '性能'], 3, 'requestIdleCallback、scheduler.postTask 和普通任务如何选择？', 'requestIdleCallback 适合可延后的低优先级工作，但触发时机不保证且支持范围有限', 'scheduler.postTask 可表达任务优先级和取消，但需要检查目标浏览器支持', '关键交互应拆分长任务并及时让出主线程，不能把业务正确性依赖于空闲回调一定执行', '后台统计任务如何设置超时兜底？'],
    ['browser-long-tasks', ['性能', '主线程'], 2, '什么是长任务，它为什么影响交互响应？', '主线程连续执行超过较长时间的任务会阻塞输入、渲染和其他任务调度', '大量脚本解析、同步计算和一次性 DOM 工作都可能形成长任务', '可通过性能轨迹定位归因，把工作拆分、延后或移到 Worker，并关注真实 INP 等用户指标', '任务拆分后如何避免总执行时间反而显著增加？'],
    ['browser-event-retargeting', ['事件', 'Shadow DOM'], 3, '事件穿过 Shadow DOM 时为什么会发生重定向？', '为保护组件内部结构，事件从 Shadow DOM 传播到外部时 target 可能被重定向为宿主元素', '是否穿过边界由事件的 composed 属性决定，传播阶段仍受 bubbles 和捕获规则影响', '需要了解原始传播路径时可检查 composedPath，但组件不应泄漏不稳定的内部实现契约', '自定义事件如何设置 bubbles 和 composed？'],
    ['browser-resource-timing', ['性能', '网络'], 2, 'Resource Timing API 可以分析哪些加载阶段？', '资源性能条目包含排队、DNS、连接、TLS、请求和响应等时间戳', '跨源资源若未通过 Timing-Allow-Origin 授权，部分详细时间会被隐藏', '结合 transferSize、encodedBodySize 和 decodedBodySize 可以判断缓存与压缩，但仍要考虑协议复用', '如何从资源时间判断可能命中了缓存？'],
    ['browser-navigation-timing', ['性能', '导航'], 2, 'Navigation Timing 如何拆解一次页面导航？', '导航性能条目描述重定向、DNS、连接、请求响应、DOM 处理和 load 等阶段', '同一连接复用时 DNS 或连接阶段可能为零，不能据此误判数据缺失', '应结合服务端时间、资源瀑布和用户性能指标定位瓶颈，而不是只看 loadEventEnd', 'TTFB 较高可能由哪些环节造成？'],
    ['browser-memory-profiling', ['内存', '调试'], 3, '如何用浏览器工具定位前端内存泄漏？', '可以比较多次堆快照、查看对象保留路径并观察执行操作后的内存趋势', '脱离 DOM、未移除监听器、定时器、闭包和无限缓存是常见泄漏来源', '垃圾回收时机不确定，测试应重复稳定操作并确认对象在强制回收后仍被意外引用', '保留路径比单纯对象数量更能说明什么问题？'],
    ['browser-storage-partitioning', ['存储', '隐私'], 3, '浏览器存储分区会怎样影响第三方内容？', '现代浏览器可能按顶级站点对第三方 Cookie、缓存和其他状态进行分区', '同一个嵌入源在不同顶级站点下可能看到不同存储空间，传统跨站跟踪和单点状态共享会失效', '应用应使用明确的身份协议和受支持的存储访问机制，并避免依赖浏览器实现细节绕过隐私策略', '第三方 iframe 如何在合规前提下请求存储访问？'],
  ],
}

const supplementalDifficultyOverrides = new Map([
  ['browser-html-parser', 1],
  ['browser-history-navigation', 1],
  ['browser-indexeddb', 1],
  ['browser-intersection-observer', 1],
])

function cleanText(value) {
  return value.replace(/^答案[:：]?\s*/, '').replace(/^[✅⚠️•·]\s*/, '').trim()
}

function buildDocumentAnswer(blocks, language, closing) {
  const parts = []
  let codeLines = []
  const flushCode = () => {
    if (codeLines.length === 0) return
    parts.push(`\`\`\`${language}\n${codeLines.join('\n')}\n\`\`\``)
    codeLines = []
  }

  for (const block of blocks) {
    const text = cleanText(block.text)
    if (!text || ['js', 'ts', 'css', 'javascript', 'typescript'].includes(text.toLowerCase())) continue
    if (block.kind === 'code') {
      codeLines.push(text)
      continue
    }
    flushCode()
    parts.push(text)
  }
  flushCode()

  let answer = parts.join('\n')
  if (answer.length < 100) answer += `\n\n${closing}`
  if (answer.length < 100) answer += '\n\n回答时应区分规范语义、常见实现和具体项目约束。'
  return answer
}

function buildKeyPoints(blocks, tags) {
  const candidates = []
  for (const block of blocks) {
    if (block.kind === 'code') continue
    const text = cleanText(block.text)
    if (text.length < 8 || /^(特点|区别|优点|缺点|常见|步骤|场景|优化|注意)[：:]?$/.test(text)) continue
    const point = text.replace(/[。；;]$/, '')
    if (!candidates.includes(point)) candidates.push(point)
    if (candidates.length === 5) break
  }
  const fallbackBuilders = [
    (tag) => `说明 ${tag} 的核心作用`,
    (tag) => `辨别 ${tag} 的适用场景`,
    (tag) => `了解 ${tag} 的风险和边界`,
  ]
  while (candidates.length < 3) {
    const tag = tags[candidates.length % tags.length]
    const fallback = fallbackBuilders[candidates.length](tag)
    if (!candidates.includes(fallback)) candidates.push(fallback)
  }
  return candidates.slice(0, 5)
}

function createDocumentQuestion(rawQuestion, config, metadata) {
  const [id, tags, difficulty, titleOverride] = config
  const sourceTitle = titleOverride ?? rawQuestion.title
  const title = /[?？]$/.test(sourceTitle) ? sourceTitle : `${sourceTitle}？`
  const question = {
    id,
    category: rawQuestion.category,
    tags,
    title,
    answer: buildDocumentAnswer(rawQuestion.blocks, metadata.language, metadata.closing),
    keyPoints: buildKeyPoints(rawQuestion.blocks, tags),
    difficulty,
    followUps: [`如果把这个结论用于真实项目，还需要检查哪些边界条件？`],
    references: [metadata.reference],
    updatedAt,
  }
  return { ...question, ...(documentOverrides[id] ?? {}) }
}

function createSupplementalQuestion(category, topic, metadata) {
  const [id, tags, difficulty, title, point1, point2, point3, followUp, reference] = topic
  let answer = `${point1}。${point2}。\n\n${point3}。`
  if (answer.length < 100) answer += metadata.closing
  return {
    id,
    category,
    tags,
    title,
    answer,
    keyPoints: [point1, point2, point3],
    difficulty: supplementalDifficultyOverrides.get(id) ?? difficulty,
    followUps: [followUp],
    references: [reference ?? metadata.reference],
    updatedAt,
  }
}

async function buildCategory(category) {
  const metadata = categoryMetadata[category]
  const rawQuestions = JSON.parse(await readFile(path.join(importsDirectory, metadata.input), 'utf8'))
  const configs = documentConfigs[category]
  if (rawQuestions.length !== configs.length) {
    throw new Error(`${category} 文档题数 ${rawQuestions.length} 与配置数 ${configs.length} 不一致`)
  }

  const documentQuestions = rawQuestions.map((question, index) => createDocumentQuestion(question, configs[index], metadata))
  const supplements = supplementalTopics[category].map((topic) => createSupplementalQuestion(category, topic, metadata))
  const questions = [...documentQuestions, ...supplements]
  if (questions.length !== 50) throw new Error(`${category} 应生成 50 题，实际为 ${questions.length} 题`)
  await writeFile(path.join(setsDirectory, metadata.output), `${JSON.stringify(questions, null, 2)}\n`, 'utf8')
  console.log(`${metadata.output}: ${questions.length} questions`)
}

for (const category of Object.keys(categoryMetadata)) {
  await buildCategory(category)
}
