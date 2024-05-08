import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Me from './Components/Me';
import Blog from './Components/Blog';

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
        <Header />
        <Me />
        <Blog />
    </ThemeProvider>
    </div>
  );
}

export default App;

