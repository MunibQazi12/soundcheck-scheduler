/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs' : '480px',
      // => @media (min-width: 480px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'banner-layers': "url('../assets/images/banner-bg-layers.svg')",
        'soundwave-layer': "url('../assets/images/banner-bg-cleaned.gif')",
        'login-layers': "url('../assets/images/loginsignuplayers.png')",
        'section-gradient': "linear-gradient(0deg, rgba(242, 234, 255, 0.5) 61.58%, rgba(255, 255, 255, 0.5) 90.51%)",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        // nunito: ['var(--font-nunito)'],
        manrope: ['var(--font-manrope)']
      },
      colors: {
        primary: {
          50: '#6A4B89',
          100: '#412161',
        },
        'pale-purple': '#BFA4F233',
        'light-purple': '#BFA4F2',
        'pastel-purple': '#F2EDFC',
        'dark-gray': '#666680',
        'heading-text': "#323232",
        'lightLavender': "#F2EAFF80",
        'lightLavender-gray': "#DCD7E8",
        'lightGray': "#7B7A7A",
        'hover-color': '#CBC3E3',
        'dark-primary-50': "#2f3349",
        'dark-primary-100': '#25293c',
        // 'darkheading': "#DCDCDC",
        // 'darkText': '#cfcde4',
        // 'dark-primary-200': "#3c4054"
      },
      boxShadow: {
        'customShadow': "0px 10px 20px 0px #41216126",
        // 'darkShadow': '0 .125rem .5rem 0 rgba(19,17,32,.18)'
      },
      borderRadius: {
        'large': "10px",
        '2.5xl': "20px",
      },
      lineHeight: {
        '1.2': '1.2',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

