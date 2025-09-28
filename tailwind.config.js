/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Reactコンポーネント全てを対象
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // 青系ボタン用
        danger: "#EF4444",  // 削除ボタン用
        grayBg: "#F3F4F6",  // タスク背景色
      },
      spacing: {
        80: "20rem", // フォーム幅固定
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
      },
    },
  },
  plugins: [],
};
