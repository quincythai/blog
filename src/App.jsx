import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/blog" render={() => <Blog />} />
        <Route path="/contact" render={() => <Contact />} />
      </Switch>
    </Router>
  );
}

export default App;
