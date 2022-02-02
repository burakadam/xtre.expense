module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      spacing: {
        '4x': '4px',
        '8x': '8px',
        '12x': '12px',
        '10x': '10px',
        '16x': '16px',
        '19x': '19px',
        '20x': '20px',
        '24x': '24px',
        '29x': '29px',
        '40x': '40px',
        '48x': '48px',
        '64x': '64px',
        '111x': '111px',
        '90p': '90%',
      },
    },
    colors: {
      white: '#ffff',
      purple: {
        500: '#EBECFE',
      },
      gray: {
        0: 'rgba(32,32,32,.3)',
        10: '#FAFAFA',
        30: '#E6E5E9',
        50: '#ABAAB3',
        100: '#F2F2F2',
        400: '#2C2B32',
      },
      blue: {
        500: '#0037FF',
      },
      yellow: {
        300: '#FFEFB7',
      },
      green: {
        50: '#EDF9F3',
        100: '#E0FFDE',
        300: '#39D52D',
      },
      red: {
        100: '#FFDDD2',
        500: '#F9432B',
      },
    },
    borderRadius: {
      sx: '4px',
      ss: '8px',
      smb: '12px',
      md: '24px',
    },
    boxShadow: {
      sm: '0px 2px 8px rgba(0, 0, 0, 0.08)',
    },
    fontFamily: {
      medium: ['Avenir-Medium', 'Helvetica'],
      roman: ['Avenir-Roman', 'Helvetica'],
      heavy: ['Avenir-Heavy', 'Helvetica'],
      black: ['Avenir-Black', 'Helvetica'],
    },
    fontSize: {
      sm: ['12px', '16px'],
      md: ['14px', '20px'],
      lm: ['16px', '24px'],
      lx: ['20px', '27px'],
      lxm: ['22px'],
      lxx: ['24px', '32px'],
    },
  },
  plugins: [],
};
