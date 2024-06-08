/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import tailwindCss3d from "tailwindcss-3d";
import lineClamp from "@tailwindcss/line-clamp";
import aspectRatio from "@tailwindcss/aspect-ratio";

export default {
  // darkMode: 'class', // 暗黑模式
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  // 可以使用 theme 属性自定义颜色，这个属性包含一个颜色对象，您可以并据此为您的项目定义新的颜色。
  theme: {
    extend: {
      height: {
        'screen/2': "50vh",
        450: "450px",
      },
      colors: {
        primary: "#3490dc",
        secondary: "#ffed4a",
        cyan: "#9cdbff",
      },
      maxWidth: {
        custom: "60rem",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      spacing: {
        '72': "18rem",
        '84': "21rem",
        76: "19rem",
      },
      fontSize: {
        xxs: ["0.625em", { lineHeight: "1rem" }],
      },
    },
  },
  plugins: [
    // 添加Tailwind CSS 的 3D 插件 到您的 tailwind.config.js 文件中
    tailwindCss3d,
    // 添加Tailwind CSS 的 daisyUI组件库 作为插件 到您的 tailwind.config.js 文件中
    daisyui,
    // 行截断插件
    lineClamp,
    // 屏幕纵横比插件
    aspectRatio,
  ],
  daisyui: {
    themes: ["emerald"],
  },
  variants: {
    extend: {
      backgroupdColor: ['active']
    }
  },
}

