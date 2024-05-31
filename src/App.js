import * as React from 'react';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
