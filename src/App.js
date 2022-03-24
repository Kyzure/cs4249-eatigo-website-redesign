import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { HashRouter, Route, Routes } from "react-router-dom";
import About from './pages/About.js';
import Home from './pages/Home.js';
import Result from './pages/Result.js';
import OriginalFood from './pages/Food.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#EE2C30'
    },
    secondary: {
      light: '#FFFFFF',
      main: '#FAFAFA',
      dark: '#E2E2E2'
    },
    tertiary: {
      main: '#777777',
      dark: '#333333'
    },
    background: {
      default: '#F8F8F8'
    },
    text: {
      primary: '#333333'
    }
  }
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline enableColorScheme={true}>
        <HashRouter basename='/'>
          <Routes>
            <Route path="" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/food" element={<OriginalFood />} />
          </Routes>
        </HashRouter>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
