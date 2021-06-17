import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import './stylesheets/index.css';
import { lightTheme, darkTheme } from './stylesheets/theme';

const App = () => {
  const themeSelected = useSelector((state) => state.theme);
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    setTheme(themeSelected === 'light' ? lightTheme : darkTheme);
  }, [themeSelected]);

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
