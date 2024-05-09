import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Me from './Components/Me';
import Blog from './Components/Blog';
import User from './Components/User';

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
        <Header />
        <Me id="me"/>
        <User id="user"/>
        <Blog id="blog"/>
        <Contact id="contact"/>
    </ThemeProvider>
    </div>
  );
}

export default App;

