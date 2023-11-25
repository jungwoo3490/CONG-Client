const colors = {
  black: '#151516',
  blackGrey: '#2B2B2B',
  darkGrey: '#4B4B50',
  mediumGrey: '#7e7e85',
  lightGrey: '#e7e7e7',
  white: '#FFFFFF',
  mainBlack: '#121212',
  green: '#def487',
  blue: '#687cff',
  pink: '#ff93c7',
};

const FONT = ({ weight, size }) => {
  return `
  font-family: "Pretendard Variable";
  line-height: 140%;
    font-weight : ${weight};
    font-size : ${size}rem;
    `;
};

const fonts = {
  head1: FONT({ weight: 700, size: 2.4 }),
  head2: FONT({ weight: 700, size: 2 }),
  title1: FONT({ weight: 700, size: 1.6 }),
  body1: FONT({ weight: 500, size: 1.6 }),
  body2: FONT({ weight: 500, size: 1.4 }),

  caption: FONT({ weight: 500, size: 1.2 }),
};

export const theme = {
  colors,
  fonts,
};
