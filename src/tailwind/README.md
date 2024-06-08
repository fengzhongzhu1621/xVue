## 文档
https://www.tailwindcss.cn/docs/box-shadow

## 安装
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D @tailwindcss/line-clamp
pnpm add -D tailwindcss-3d
nnpm add -D daisyui@latest
npx tailwindcss init -p

## 命名规则
* 属性（Property）： 表示样式属性的缩写，如 bg 表示背景颜色。
* 值（Value）： 表示样式属性的取值，如 blue-500 表示蓝色，p-4 表示内边距为 4。
* 状态（State）： 表示伪类或状态，如 hover 表示鼠标悬停状态。

## 语法规则

### 伪类
* hover hover:bg-sky-700
* focus
* focus-within 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况
* focus-visible 用来选择和样式化一个元素或者它的任何后代元素获得焦点的情况，用非指针方法获得焦点时
* active 伪类选择器是用来选择和样式化被激活的元素，比如被点击的链接或按钮
* visited 用来选择和样式化用户已经访问过的链接
* target 元素的 ID 与当前 URL 片段匹配
* first 如果元素是第一个使用修饰符的子元素
* last 如果元素是最后一个使用修饰符的子元素
* only 如果元素是唯一使用修饰符的子元素
* odd 如果元素是奇数编号的子元素
* even 如果元素是偶数编号的子元素
* first-of-type 如果元素是其类型的第一个子元素
* last-of-type 如果元素是其类型的最后一个子元素
* only-of-type 如果元素是其类型中唯一的子元素
* empty 如果元素没有内容
* disabled 在禁用输入时设置输入样式
* enabled 在元素未禁用时应用另一种样式时
* checked 选中复选框或单选按钮时
* indeterminate 不确定状态的复选框或单选按钮的样式
* default 这些选项、复选框或单选按钮是最初使用修饰符加载页面时的默认值
* required 可以选择和样式化任何带有required属性的`<input>`、`<select>`或`<textarea>`元素
* valid 输入有效时的样式
* invalid 输入无效时的样式
* in-range 当输入的值在指定的范围限制内时
* out-of-range 当输入的值超出指定范围限制时
* placeholder-shown 显示占位符时设置输入样式
* autofill 自动填充输入时，用户未编辑过
* read-only 在输入为只读时

### 伪元素
* before 创建一个元素作为当前元素的第一个子元素
* after
* placeholder
* file 代表 type="file" 的 `<input>` 的按钮 ::file-selector-button
* marker: 匹配当前标签下 列表的标记框（通常为一个符号或数字）。它作用在任何设置了 display: list-item 的元素或伪元素上，例如 `<li>` 和 `<summary>` 元素
* selection 是一个CSS伪元素选择器，它可以用来给用户选中的文本添加样式
* first-line 首行
* first-letter 首字
* backdrop ::backdrop在任何处于全屏模式的元素下的即刻渲染的盒子（并且在所有其他在堆中的层级更低的元素之上）

### 属性选择器
* aria-* 属性选择器
  - `<div aria-checked="true" class="aria-checked:bg-sky-700">`
  - `<th aria-sort="ascending" class="aria-[sort=ascending]:bg-[url('/img/down-arrow.svg')]">`
  - 和 group 和 peer 配合使用`<svg class="group-aria-[sort=ascending]:rotate-0>`
* data-* 属性选择器
  - `<div data-size="large" class="data-[size=large]:p-8">`
* open 具有 open 属性的元素
  - `<details class="open:bg-white>`
  - details 和 dialog 标签具有 open 属性

### 后代选择器
* ltr、rtl 不同文本展示方式下设置样式，html 中设置`<html dir="ltr">`才能够生效
  - `<div class="ltr:ml-3 rtl:mr-3">`
* 根据父元素状态设置元素样式时，在父元素绑定group，在子元素绑定group-*来定义
  ```
  <a href="#" class="group">
    <h3 class="group-hover:text-white">New project</h3>
  </a>
  ```
* 根据特定父元素状态来设置元素样式，在父元素绑定group/{name}，在子元素绑定group-hover/{name}来定义
  ```
  <li class="group/item">
    <a class="group-hover/item:visible"></a>
  </li>
  ```
* 可以在 group-[] 的方括号内传入任意选择器来指定特定的父元素
  ```
  <div class="group is-published">
    <div class="group-[.is-published]:block">
      Published
    </div>
  </div>
  ```
* & 用来作为 group 的占位符，空格用 _ 代替
`group-[.is-published]:block`是`group-[&.is-published]:block`的简写
  ```
  <div class="group">
    <div class="group-[:nth-of-type(3)_&]:block">
    </div>
  </div>

  :nth-of-type(3) .group .group-\[\:nth-of-type\(3\)_\&\]\:block {
    display: block;
  }
  ```

### 颜色
* .bg-blue-500 表示背景色为蓝色（blue），并且其颜色值为 500，类别为 bg（背景）
* bg-red-500 表示红色背景（颜色值为 #EF4444）
* bg-blue-500 bg-opacity-90 给背景添加90％的不透明度
* bg-green-200
* bg-indigo-700
* bg-fuchsia-600
* bg-[#8ed1fc]
* text-white: 文本颜色白色
* border-gray-300: 边框颜色为灰色
* hover:bg-gray-200: 鼠标悬停时背景颜色变为灰色

### 显示/隐藏类
* hidden 隐藏元素，相当于 display: none;
* block 设置元素为块级元素，相当于 display: block;
* md:inline: 在中等屏幕大小以上以内联形式显示 设置元素为行内元素，相当于 display: inline;
* flex: 设置元素为弹性盒，相当于 display: flex;
* inline-flex: 设置元素为内联弹性盒，相当于 display: inline-flex;

### 字体
* text-xxs 自定义字体大小
* text-xs（字体大小：.75rem；） 最小的字体大小类
* text-sm（字体大小：.875rem；）
* text-base（字体大小：1rem;）
* text-lg（字体大小：1.125rem；）
* text-xl（字体大小：1.25rem；） 文本大小为大号
* text-2xl（字体大小：1.5rem；）
* text-3xl（字体大小：1.875rem；）
* text-4xl（字体大小：2.25rem；）
* text-5xl（字体大小：3rem；）
* text-6xl（字体大小：4rem；）
* text-7xl（字体大小：4.5rem；）
* text-8xl（字体大小：6rem；）
* text-9xl（字体大小：8rem；）
* font-thin (font-weight: 100;)
* font-extralight (font-weight: 200;)
* font-light (font-weight: 300;)
* font-normal (font-weight: 400;)
* font-medium (font-weight: 500;)
* font-semibold (font-weight: 600;)
* font-bold（font-weight：700；）
* font-extrabold（font-weight：800；）
* font-black（font-weight：900；）
* text-green-100（颜色：# f0fff4;）
* text-green-200（颜色：#c6f6d5；）
* text-green-300（颜色：#9ae6b4；）
* text-green-400（颜色：#68d391；）
* text-green-500（颜色：#48bb78；）
* text-green-600（颜色：#38a169；）
* text-green-700（颜色：#2f855a；）
* text-green-800（颜色：#276749；）
* text-green-900（颜色：#22543d；）
* text-red-500 表示字体颜色
* text-blue-600
* underline
* italic: 文本斜体

### 定位类
* absolute 绝对定位，相对于最近的非static父元素定位
* relative 相对定位，相对于元素自身正常位置定位
* static: 默认定位方式，元素按照文档流排列
* fixed 固定定位，相对于浏览器窗口定位
* sticky: 粘性定位，相对于视口或最近的滚动祖先定位，直到滚动到一定位置后变为固定定位
* top-0: 距离顶部距离为 0
* left
* left-4: 距离左侧距离为 1rem
* z-index
* position
* top
* right
* bottom
* text-left: 左对齐
* text-center: 居中对齐
* text-right: 右对齐
* text-justify: 两端对齐
* text-top: 顶部对齐
* text-middle: 垂直居中对齐
* text-bottom: 底部对齐

### 形状
* rounded 表示圆角；
* rounded-xl
* shadow 表示阴影；
* bg-gradient-to-r 表示背景渐变。
* w-full
* w-64: 宽度为 16rem
* w-76 自定义宽度
* w-[400px]
* h-40
* h-screen
* h-full
* p-4: 内边距为 1rem
* p-[19rem]
* m-2: 外边距为 0.5rem
* my-5
* px-4 左右设置了1rem padding
* py-2 上下设置了.5rem padding
* mt-10
* ml-4
* pt-10 pb-10 pt-10（上边距为10） 和 pb-10（底边距为10）两个实用类组合在一个元素上
* focus:outline-none: 获取焦点时移除默认的外边框
* focus:shadow-outline 创建一个阴影
* border 设置元素的边框
* border-t, border-r, border-b, border-l: 设置元素的上、右、下、左边框
* max-w-custom 自定义最大宽度
* border-t border-gray-200 边框

### 缩放图像
* w-和 h- 后缀来指定图像的宽高

### 链接
* underline 表示下划线；
* no-underline 表示去掉下划线；
* hover:underline 表示鼠标悬停时出现下划线；
* hover:text-red-500 表示鼠标悬停时文本变为红色；

### 群组设置
* group
* group-hover:text-red-900

### 媒体查询
* sm @media (min-width: 640px) sm:bg-sky-700
* md @media (min-width: 768px)
* lg @media (min-width: 1024px)
* xl @media (min-width: 1280px)
* 2xl @media (min-width: 1536px)
* min-[…] 自定义 @media (min-width: …)min-[320px]
* max-sm @media not all and (min-width: 640px)
* max-md @media not all and (min-width: 768px)
* max-lg @media not all and (min-width: 1024px)
* max-xl @media not all and (min-width: 1280px)
* max-2xl @media not all and (min-width: 1536px)
* max-[…] 自定义@media (max-width: …)
* portrait 竖屏，@media (orientation: portrait)
* landscape 横屏
* dark @media (prefers-color-scheme: dark)
* motion-reduce 一个CSS媒体查询，它可以用来检测用户是否在设备上启用了减少非必要动画或运动的设置
* motion-safe 当用户没有设置 prefers-reduced-motion 时才添加样式
* contrast-more 用户请求更多对比度时，@media (prefers-contrast: more)
* print 打印样式
* supports-[...] 特性查询，用来判断浏览器是否支持某些 css 特性，例如：@supports (display: grid) { ... }supports-[display:grid]:grid

### 动画
* duration-1000 颜色会在1秒内缓慢变化。持续时间的多个值从duration-75 到duration-1000 注册。
* transform
* hover:scale-110 让按钮本身变大并通过悬停更改按钮的颜色，您可以使用transform 和scaling 的Utilize Class来实现
* animate-bounce
* animate-pulse

### flex
* items-start, items-center, items-end, items-stretch: 设置交叉轴上的对齐方式
* container
* flex 使用弹性布局
* flex-row, flex-col: 设置主轴为行或列
* justify-start, justify-center, justify-end, justify-between, justify-around: 设置主轴上的对齐方式

### 响应式
* text-center sm:text-left 表示在小屏幕尺寸下文本左对齐，在大屏幕尺寸下文本居中。可以根据不同的屏幕尺寸为不同的设备定制 UI，例如：sm，md，lg等.

### @apply 来扩展样式
```
.font-bold-uppercase {
  @apply font-bold uppercase;
}
```

## 插件
### @tailwindcss/line-clamp
* line-clamp-3 只显示三行


### @tailwindcss/aspect-ratio
* aspect-video: w-[400px] aspect-video bg-blue-300
