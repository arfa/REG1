/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",'./node_modules/tw-elements/dist/js/**/*.js',
    
  ],
  theme: {
    fontSize:{
      xsm: '1.3rem',
      xtl:'1.45rem',
      xxl: '1.553rem',
      xxxl: '2rem',
              
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    dropboxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    extend: {
      backgroundImage: {
        'acceuil': "url('images/acceuil.jpg')",
        'opportunity':"url('images/bgopportunity.jpg')"
      },
      height: {
        '128': '32rem',
      },
      top:{
        '128':'7rem',
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        greenlight:'#4fa166',
        green01:'#152e1c',
        red01:'#a6030b',
        red02:'#666',
        darkCyan: '#4fa166',
				lightGrayishCyanBg: 'hsl(180, 52%, 96%)',
				lightGrayishCyanFilter: 'hsl(180, 31%, 95%)',
				darkGrayishCyan: 'hsl(180, 8%, 52%)',
				veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    
  ],
}
