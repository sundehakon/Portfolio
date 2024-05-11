import { ThemeProvider } from '@mui/material';
import theme from './theme';
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Me from './Components/Me';
import Blog from './Components/Blog';
import User from './Components/User';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Particle from './Components/Particle';

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <div className='app-container'>
        <Particle />
        <div className='header-container'>
          <Header />
        </div>
        <div className='content-container'>
          <Me id="me"/>
          <Projects id="projects" />
          <User id="user"/>
          <Blog id="blog"/>
          <Contact id="contact"/>
        </div>
      </div>
    </ThemeProvider>
    </div>
  );
}

export default App;

