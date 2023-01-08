module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        display: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      extend: {
        fontSize: {
          14: '14px',
        },
        backgroundColor: {
          'main-bg': '#EAECEE',
          'main-dark-bg': '#20232A',
          'secondary-dark-bg': '#33373E',
          'light-gray': '#F7F7F7',
          'half-transparent': 'rgba(0, 0, 0, 0.5)',
        },
        borderWidth: {
          1: '1px',
        },
        borderColor: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        width: {
          400: '400px',
          760: '760px',
          780: '780px',
          800: '800px',
          1000: '1000px',
          1200: '1200px',
          1400: '1400px',
        },
        height: {
          80: '80px',
        },
        minHeight: {
          590: '590px',
        },
        backgroundImage: {
          'hero-pattern':
            "url('https://firebasestorage.googleapis.com/v0/b/ots-pocket.appspot.com/o/projectFiles%2FUntitled%20design%20(1).png?alt=media&token=d4a03a03-4ab2-4d74-b0bb-bb02e8c29969')",
            'hero-water':
            "url('https://firebasestorage.googleapis.com/v0/b/ots-pocket.appspot.com/o/projectFiles%2FCopy%20of%20Copy%20of%20PocSof%20(1).png?alt=media&token=a1dc88b7-6724-47e2-9108-9c778b8050c8')",
        },
      },
    },
    plugins: [],
  };