module.exports = {
  purge: {
    mode: 'all',
    content: ['./**/**/*.html', './**/**/*.svelte'],

    options: {
      whitelistPatterns: [/svelte-/],
      defaultExtractor: (content) =>
        [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(([_match, group, ..._rest]) => group),
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
      screens:{
        'sm':'640px',
        // => @media (min-width: 640px) { ... }
        'my-md':'700px',
        // => @media (min-width: 700px) { ... }
        'md':'768px',
        // => @media (min-width: 768px) { ... }
        'lg':'1024px',
        // => @media (min-width: 1024px) { ... }
        'xl':'1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl':'1536px',
        // => @media (min-width: 1536px) { ... }
        'my-lg':'1131px',
        // => @media (min-width: 1131px) { ... }
        'below-md': {'max': '675px'},
        // => @media (max-width: 675px) { ... }
        'below-768': {'max':'768px'},
        // => @media (max-width: 768px) { ... }
        'below-1024': {'max':'1024px'},
        // => @media (max-width: 1024px) { ... }
        'below-lg': {'max':'1130px'},
        // => @media (max-width: 1130px) { ... }
      },
    extend: {
        gridTemplateRows:{
            'layout': 'auto 100% auto'
        },
        gridTemplateColumns:{
            'footer': '1fr 200px'
        },
        zIndex: {
            '2': 2,
            '5': 5,
            '3': 3,
        },
        height: {
            '50px': '50px',
            '75px': '75px',
            '100px': '100px'
        },
        width: {
            '72px' : '72px'
        },
        margin: {
            '76px': '76px',
            '25px': '25px',
            '150px': '150px',
            '4%': '4%'
        },
        padding: {
            '5px' : '5px',
            '10px' : '10px',
            '15px': '15px',
            '2%': '2%',
            '3%': '3%',
            '5%' : '5%',
            '8%': '8%'
        },
        fontSize: {
            '3.5xl' : '2rem',
            '6.5xl' : '4rem',
            '40px' : '40px',
            '42px' : '42px'
        },
        fontFamily: {
            'ubuntu' : ['Ubuntu', 'sans-serif'],
            'oswald': ['Oswald', 'sans-serif'],
            'goblin': ['Goblin One', 'cursive'],
            'roboto': ['Roboto', 'sans-serif']
        },
        backgroundColor: theme => ({
            'nav-dark' : '#222',
            'projects-background' : '#DCDCDC',
            'blog-background': '#1a202c'
        })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
