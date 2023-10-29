/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-frame": "url(/images/bg-blur.svg)",
      },
      fontFamily: {
        Noto: "Noto Sans",
      },
      colors: {
        "figma-green": "#16FCD2",
        "figma-purple": "#6016FC",
        "figma-purple-hilight": "#221048",
        "figma-purple-hilight-content": "#3F2379",
        "figma-blue-hilight-content": "#233679",
        "figma-pink-hilight-content": "#792366",
      },
    },
  },
  plugins: [],
};
