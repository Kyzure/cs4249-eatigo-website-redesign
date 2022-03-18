import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import OriginalHome from './pages/OriginalHome.js';
import RedesignedHome from './pages/RedesignedHome.js';

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
      main: '#333333'
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
        <HashRouter>
          <Routes>
            <Route exact path="/cs4249-eatigo-website-redesign" element={<Home />} />
            <Route exact path="/cs4249-eatigo-website-redesign/original-home" element={<OriginalHome />} />
            <Route exact path="/cs4249-eatigo-website-redesign/redesigned-home" element={<RedesignedHome />} />
          </Routes>
        </HashRouter>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
