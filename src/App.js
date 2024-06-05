import * as React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
