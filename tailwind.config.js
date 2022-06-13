module.exports = {
  content: ['index.html', 'sign.html', 'about.html', 'faq.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        sansPro: ['Source Sans Pro'],
      },
      colors: {
        primary: '#FE8C3A',
        secondary: '#FFE86D',
        third: '#622DF8',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
