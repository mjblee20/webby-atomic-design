// Import Dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

// Import Stylings
import './App.css';

//Import Components
import Welcome from '../../frontend/src/Pages/Welcome';

function App() {
  return (
    <Router>
      {/* This is going to be where Navbar is at */}
      
      <main>
        <Switch>
          <Router exact path='/' component={Welcome}/>
          {/* <Router exact path='/about' component={About} /> */}

          
          {/* <Router path='/pageDNE' component={PageDNE} /> */}
          {/* <Redirect to='/pageDNE' /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
