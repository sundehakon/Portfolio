import * as React from 'react';
import { CssBaseline, Container, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Development from './Components/Development';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';  

function App() {
  console.log('If you see this, send me an email at: hakon.su@gmail.com');

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
        <Header />
        <Container component="main" sx={{ flexGrow: 1, py: 2 }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/development" element={<Development />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;