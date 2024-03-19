import { createGlobalStyle } from 'styled-components';
// constants에 들어가는 것이 더 적당할지 의논

export const palette = {
  white: '#FFFFFF',
  basic: {
    black: '#0C0D0F',
    gray: {
      100: '#20232C',
      90: '#323743',
      80: '#494F5E',
      70: '#60697B',
      60: '#8891A4',
      50: '#AEB6C6',
      40: '#C6CDDA',
      30: '#DEE2EA',
      20: '#F1F2F5',
      10: '#F7F8FA',
    },
    dark: {
      2: 'rgba(0, 0, 0, 0.02)',
      20: 'rgba(0, 0, 0, 0.2)',
      70: 'rgba(30, 31, 35, 0.7)',
    },
    white: {
      5: 'rgba(255, 255, 255, 0.05)',
      20: 'rgba(255, 255, 255, 0.2)',
      70: 'rgba(30, 31, 35, 0.7)',
    },
  },
};

export const font = {
  size: {
    40: '40px',
  },
  weight: {
    bold: 700,
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    user-select: none;
  }
  `;
