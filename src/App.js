import * as React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Auth from './Components/Auth';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Development from './Components/Development';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';  
import Policy from './Components/Policy';

function App() {
  console.log('Checking out my code? Send me an email at: hakon.su@gmail.com');

  return (
    <Router>
      <CssBaseline />
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',  
        }}
      >
        <Container component="main" sx={{ flexGrow: 1, py: 2 }}>
        <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/development" element={<Development />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Container maxWidth='lg'>
          <Footer />
        </Container>
      </Box>
    </Router>
  );
}

export default App;