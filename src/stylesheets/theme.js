import { createMuiTheme } from '@material-ui/core/styles';

const primary = '#DC4D40';
const secondary = '#FFFFF';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: primary },
    secondary: { main: secondary },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: { main: primary },
    secondary: { main: secondary },
  },
});

export { darkTheme, lightTheme };
