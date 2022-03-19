import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import OriginalHome from './pages/OriginalHome.js';
import RedesignedHome from './pages/RedesignedHome.js';
import OriginalResult from './pages/OriginalResult.js';
import RedesignedResult from './pages/RedesignedResult.js';
import OriginalFoodPage from './pages/OriginalFoodPage';

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
            <Route path="" element={<Home />} />
            <Route path="/original-home" element={<OriginalHome />} />
            <Route path="/redesigned-home" element={<RedesignedHome />} />
            <Route path="/original-result" element={<OriginalResult />} />
            <Route path="/redesigned-result" element={<RedesignedResult />} />
            <Route path="/original-food-page" element={<OriginalFoodPage />} />
          </Routes>
        </HashRouter>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}

export default App;
