import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
      "./storyblok/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./composables/**/*.{js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./app.{js,ts,vue}",
        "./assets/svg/*.svg",
        "./public/svg/*.svg",
      ],
      safelist: [
        'grid-cols-1',
        'grid-cols-2',
        'grid-cols-3',
        'grid-cols-4',
        'grid-cols-5',
        'grid-cols-6',
      ],
     theme:{
      extend:{
        fontFamily: {
          sans: ["Poppins", ...defaultTheme.fontFamily.sans],
          brand: ["Prompt", ...defaultTheme.fontFamily.sans],
        },
        colors:{
          primaryColor:'#1C75BC',
          secondaryColor:'#0B334F',
          tealColor:'#2594A9',
          lightBlue:'#82C5D6',
          customGray: '#B4C3E0',
        },
        height: {
          'fill': '-webkit-fill-available',
        },
        plugins: ["~/plugins/fonts.ts"],
      }
     }
}satisfies Config