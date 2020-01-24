// Import Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import Stylings
import './App.css';

//Import Components
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import HorizNavGrid from './Templates/HorizNavGrid';
import Blog from './Pages/Blog';
import BtnNavGrid from './Templates/BtnNavGrid';

function App() {
  return (
    <Router>
      {/* <HorizNavGrid /> */}
      <BtnNavGrid />

      <main>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>
          {/* <Route exact path='/about' component={About} /> */}

          
          {/* <Route path='/pageDNE' component={PageDNE} /> */}
          {/* <Redirect to='/pageDNE' /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
