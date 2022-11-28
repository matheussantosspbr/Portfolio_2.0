/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        gray:{
          '900' : '#0B0F13'
        },
        cyan:{
          '500': '#00B8EB '
        },
        linguagens:{
          'html': '#ef652a',
          'css' : '#33A9DC',
          'js': '#F7DF1E',
          'php': '#6e81b6',
          'postgreSQl': '#336791'
        },
        ferramentas:{
          'photoshop': '#00C8FF',
          'vsCode': '#007ACC',
          'github': '#fff',
          'git' : '#F05133'
        }
      },
      boxShadow: {
        'lg-top': '  0 -10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'center': '  0 0px 10px 7px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'lg-inner': ' inset 0 10px 30px 0 rgb(0 0 0 / 0.05), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
        'left': '  -5px 0 30px 20px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      backgroundImage:{
        galaxy: "url('./fundo_cabecalho.png')",
      },
      backgroundSize: {
        'size-25': '25rem',
      },
      height:{
        '108': '28rem'
      },
      strokeWidth: {
        '5': '5px',
      },
      screens: {
        'xl': {'max': '1300px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '950px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '550px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
      
    },
  },
  plugins: [],
}
