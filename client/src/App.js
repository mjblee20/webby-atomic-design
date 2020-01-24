import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      {/* This is going to be where N */}
      <MainHeader>

      </MainHeader>
      <main>
        <Switch>
          <Router exact path='/' component={Home}/>
          <Router exact path='/about' component={About} />

          
          <Router path='/pageDNE' component={PageDNE} />
          <Redirect to='/pageDNE' />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
