## 文档
https://www.tailwindcss.cn/
https://www.tailwindcss.cn/docs/box-shadow

## 安装
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D @tailwindcss/line-clamp
pnpm add -D tailwindcss-3d
nnpm add -D daisyui@latest
npx tailwindcss init -p
npx tailwindcss -i src/assets/tailwind.css -o ./src/assets/main.css --watch

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
* focus:ring-2 用于设置元素在聚焦时（例如通过键盘导航）显示一个内边框光环效果的实用类。这个效果可以帮助用户更容易地识别哪些元素当前处于聚焦状态，从而提高可访问性。设置光环宽度。
* focus:ring-indigo-200 用户通过键盘（例如使用 Tab 键）导航到这个输入框时，它将显示一个淡紫色的内边框光环，帮助用户识别当前聚焦的元素。
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
* bg-blue-500 表示背景色为蓝色（blue），并且其颜色值为 500，类别为 bg（背景）
* bg-red-500 表示红色背景（颜色值为 #EF4444）
* bg-blue-500 bg-opacity-90 给背景添加90％的不透明度
* bg-green-200
* bg-indigo-700
* bg-fuchsia-600
* bg-slate-400
* bg-white
* bg-[#8ed1fc]
* dark:bg-gray-800
* border-gray-300: 边框颜色为灰色
* hover:bg-gray-200: 鼠标悬停时背景颜色变为灰色
* text-white: 文本颜色白色
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
* text-slate-500
* text-sky-500
* dark:text-sky-300
* text-grey-dark 设置文本颜色为较深的灰色。然而，需要注意的是，Tailwind CSS 的最新版本中已经不再直接提供 text-grey-dark 这个类名。相反，它提供了一系列的灰色调，如 text-gray-800、text-gray-900 等，用于表示不同程度的灰色。
* text-indigo-500 dark:text-indigo-200
* decoration-indigo-400 设置下划线颜色为浅蓝色（indigo-400）

### 颜色渐变
* bg-gradient-to-r 创建一个从左到右的渐变背景
* bg-gradient-to-br 创建一个从左上角到右下角（从tl到br，即top left到bottom right）的渐变背景
* from-teal-300 起始颜色为teal-300
* from-10% 指定渐变的起始位置为10%
* via-sky-400 在渐变路径上添加一个颜色停止点
* via-30% 指定第二个颜色停止点的位置为30%，因为via-30%没有指定颜色。正确的用法应该是像via-purple-600 at 30%这样，指定颜色和位置。但假设这里的意图是继续使用前一个颜色（sky-400），我们将在示例中忽略这个错误。
* to-pink-300 渐变背景的结束颜色
* to-90%

### 显示/隐藏类
* hidden 隐藏元素，相当于 display: none;
* block 设置元素为块级元素，相当于 display: block;
* md:inline: 在中等屏幕大小以上以内联形式显示 设置元素为行内元素，相当于 display: inline;
* flex: 设置元素为弹性盒，相当于 display: flex;
* inline-flex: 设置元素为内联弹性盒，相当于 display: inline-flex;
* inline-block 用于设置元素的显示类型为行内块级元素（inline-block）通过将元素设置为行内块级元素，你可以使其像行内元素一样与其他行内元素在同一行显示，同时又可以像块级元素一样设置宽度和高度的属性。

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
* font-weight-normal 设置字体粗细为普通（normal），对应于 CSS 中的 400。
* font-weight-bold 设置字体粗细为粗体（bold），对应于 CSS 中的 700
* font-weight-bolder 设置字体粗细相对于父元素更粗（bolder）
* font-weight-lighter 设置字体粗细相对于父元素更细（lighter）
* font-extrabold（font-weight：800；）
* font-black（font-weight：900；）
* font-semibold antialiased 字体抗锯齿
* font-antialiased
* underline
* underline-offset-4 设置下划线的偏移量，使下划线向下偏移 4 倍的基本间距单位。基本间距单位由 Tailwind CSS 的配置文件中的 theme.spacing 部分定义，默认情况下，每个单位等于 8 像素。
* italic: 文本斜体
* tracking-wide 用于设置文本的字距（tracking）。字距指的是字符之间的水平间距。
* leading-tight 设置文本的行高（line-height）较紧。行高是指行内文本基线之间的垂直距离。leading-tight 类会使文本的行高变窄，从而使得文本行之间的空间减少，文本显得更加紧凑。
* leading-normal 设置文本的行高（line-height）为正常。行高是指行内文本基线之间的垂直距离。leading-normal 类会使文本的行高保持默认的正常值，这通常是 1.0 到 1.2 倍的字体大小，具体取决于 Tailwind CSS 的配置。

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
* top-20
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
* rounded-3xl
* shadow 表示阴影；
* shadow-2xl
* shadow-md
* w-full 使元素的宽度与其父容器相同
* w-64: 宽度为 16rem
* w-76 自定义宽度
* w-[400px]
* max-w-screen-sm 限制元素的最大宽度为小型屏幕的宽度（默认为 640px）
* h-40
* h-screen
* h-full
* lg:h-450
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
* border-purple 设置元素的边框颜色为紫色。
* border-t border-gray-200 边框
* max-w-custom 自定义最大宽度
* aspect-ratio 类用于设置元素的宽高比
* aspect-square 创建宽高比为 1:1 的元素，即正方形。
* aspect-square bg-blue-500 w-full sm:h-64 md:h-80 lg:h-96 希望正方形的大小能够响应式地调整，可以使用 Tailwind CSS 中的响应式前缀，如 sm:, md:, lg: 或 xl:，正方形的高度会根据屏幕尺寸的变化而变化，同时保持宽高比为 1:1
* shrink-0 用于控制元素的缩放行为。具体来说，shrink-0 会将元素的缩放比例设置为 0，这意味着元素不会随着父容器的尺寸变化而缩小。这在某些情况下很有用，比如当你希望保持元素的尺寸不变，即使其父容器尺寸减小。只会影响元素的缩放行为，不会影响其位置或其他样式属性。此外，如果元素设置了固定的宽度或高度，那么在某些情况下，即使使用了 shrink-0，元素仍可能根据其内容进行缩放。
* overflow-hidden w-full h-64 设置元素的溢出（overflow）属性为隐藏（hidden）。这意味着如果元素的内容超出了其边界，超出的部分将被裁剪，不会显示在屏幕上。其内容超出了 64 像素的高度，超出的部分将被隐藏。

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
* duration-1000 描述某个动作、事件或动画的持续时间为1000毫秒（ms），也就是1秒。持续时间的多个值从duration-75 到duration-1000 注册。
* transform
* transform-style-3d 具有3D效果
* transform-gpu 如果过渡在由 GPU 而不是 CPU 渲染时性能更好，则可以通过添加 transform-gpu 实用程序来强制硬件加速
* transition-transform 设置元素的 transform 属性的过渡效果。
* rotate-y-180 监听鼠标状态使卡片仅在悬停时环绕Y轴(逆时针)方向旋转180度
* hover:rotate-y-180
* hover:scale-110 当鼠标悬停在按钮上时，将按钮放大 10%
* animate-bounce 用于应用一个弹跳动画
* animate-pulse
* perspective-1000 对透视感进行感官上的放大效果，可以显得其3D效果更加真实
* perspective-origin-center 由于CSS中的坐标系原点并非数学和构造中在左下角，而是正好与之相反，其坐标系的原点（x = 0,y = 0 ） 在二维空间中是浏览器窗口的左上角，即x正值方向从该原点向右，y正值方向从该原点向下。【所以在卡片进行旋转时在二维空间实际是只需一个点即可实现旋转，但由于3D翻转效果需要在三维空间进行旋转变换，这时就需要找到两个中心点即Y轴与Z轴方向，进而需要透视原点的属性值center，有点儿相当于transform-origin: center center;】
* z-[2] 控制元素z轴堆叠顺序，数值较大的重叠元素会覆盖较小的元素，“z-[2]”此写法为没有特定意义的一次性任意值，方括号中的任意值可动态生成属性
* backface-hidden 设置反面的可见性为隐藏效果
* uppercase 文字转为大小

### 列表
* list-disc

### grid
* grid
* gap-2
* grid-cols-10

### flex
* items-start, items-center, items-end, items-stretch: 设置交叉轴上的对齐方式
* items-center：在 Flexbox 布局中垂直居中子元素。
* container
* flex 使用弹性布局
* sm:flex 在屏幕尺寸大于或等于 sm（small）断点时，将元素的显示类型设置为弹性盒子（flexbox）
* flex-row, flex-col: 设置主轴为行或列
* justify-start, justify-center, justify-end, justify-between, justify-around: 设置主轴上的对齐方式
* justify-center：在 Flexbox 布局中水平居中子元素。
* space-x-4 会应用一定的水平间距（在这个例子中是 4 倍的基本间距单位）在同级元素之间。基本间距单位由 Tailwind CSS 的配置文件中的 theme.spacing 部分定义，默认情况下，每个单位等于 8 像素。
* sm:flex-1 分配子元素在弹性盒子中的空间。

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
* aspect-video 设置元素的宽高比为 16:9


### daisyui

https://daisyui.com/components/card/

#### card
* card
* card-title
* card-body
* card-actions
* card-bordered
* image-full
* card-normal Responsive	Applies default paddings
* card-compact Responsive	Applies smaller padding
* card-side Responsive	The image in `<figure>` will be on to the side
