import { createMuiTheme, ThemeOptions } from '@material-ui/core';

/* Make sure this values matches the 'globals.css' ones */
export const paletteColors = {
  primary: '#6886c5',
  secondary: '#ffe0ac',
  warning: '#ffff00',
  info: '#99eedd',
  success: '#99ee44',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505',
};

const options = (): ThemeOptions => {
  return {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1650,
      },
    },
    palette: {
      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
      },
      error: {
        main: paletteColors.error,
      },
      warning: {
        main: paletteColors.warning,
      },
      info: {
        main: paletteColors.info,
      },
      success: {
        main: paletteColors.success,
      },
    },
    spacing: [0, 16, 32, 48, 64],
  };
};

export const theme = createMuiTheme(options());
