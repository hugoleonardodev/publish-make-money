import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const monetus = createTheme({
  palette: {
    primary: {
      light: '#5972ee',
      main: '#0047bb',
      dark: '#00218a',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff953d',
      main: '#f06400',
      dark: '#b63300',
      contrastText: '#000000',
    },
    error: {
      light: '#ff7d71',
      main: '#d64b45',
      dark: '#9e111d',
      contrastText: '#000000',
    },
    success: {
      light: '#adf64b',
      main: '#79c300',
      dark: '#449200',
      contrastText: '#000000',
    },
    info: {
      light: '#F5F8FA',
      main: '#657786',
      dark: '#14171A',
      contrastText: '#000000',
    },
  },
});

export const MonetusTheme = responsiveFontSizes(monetus);
