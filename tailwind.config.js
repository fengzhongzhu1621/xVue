/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: 'class', // 暗黑模式
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx,html}'],
  // 可以使用 theme 属性自定义颜色，这个属性包含一个颜色对象，您可以并据此为您的项目定义新的颜色。
  theme: {
    extend: {
      height: {
        'screen/2': '50vh',
      },
    },
  },
  plugins: [],
}

