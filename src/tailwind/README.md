## 安装
pnpm add -D tailwindcss postcss autoprefixer
pnpm add -D tailwindcss-3d
nnpm add -D daisyui@latest
npx tailwindcss init -p

## 语法规则

### 宽度
* w-20
* h-40

### 颜色

* .bg-blue-500 表示背景色为蓝色（blue），并且其颜色值为 500，类别为 bg（背景）
* bg-red-500 表示红色背景（颜色值为 #EF4444）
* bg-blue-500 bg-opacity-90 给背景添加90％的不透明度
* bg-green-200

### 隐藏
* hidden

### 字体
* font-semibold
* .text-xl 表示字体大小
* text-2xl（增加文本大小）
* text-3xl
* .text-red-500 表示字体颜色
* text-blue-600
* underline
* font-bold
* flex

### 位置
* .text-center 表示文本水平居中；
* pt-10 pb-10 pt-10（上边距为10） 和 pb-10（底边距为10）两个实用类组合在一个元素上
* z-index
* position
* top
* right
* bottom
* left
* text-center
* mt-10
* ml-4
* absolute
* relative

### 形状
* rounded 表示圆角；
* rounded-xl
* shadow 表示阴影；
* bg-gradient-to-r 表示背景渐变。

### 缩放图像
* w-和 h- 后缀来指定图像的宽高

### 链接
* underline 表示下划线；
* no-underline 表示去掉下划线；
* hover:underline 表示鼠标悬停时出现下划线；
* hover:text-red-500 表示鼠标悬停时文本变为红色；

### 响应式
* text-center sm:text-left 表示在小屏幕尺寸下文本左对齐，在大屏幕尺寸下文本居中。可以根据不同的屏幕尺寸为不同的设备定制 UI，例如：sm，md，lg等.

### @apply 来扩展样式
```
.font-bold-uppercase {
  @apply font-bold uppercase;
}
```