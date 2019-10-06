import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import Item from './ItemDetail'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Nav/>
              <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/shop/:id" component={Item}/>
                  <Route path="/shop" component={Shop}/>
                  <Route Path="/" component = {Home} />
              </Switch>

          </div>
      </Router>

  );
}

const Home = () => (
<div>
    <h1>Home page</h1>
</div>
);

export default App;
