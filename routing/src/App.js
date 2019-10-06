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
    <img src="https://www.imglicensing.com/media/1991/fortnite.jpg?center=0.031746031746031744,0.50267379679144386&mode=crop&width=1920&height=800&rnd=131666993100000000&quality=70" alt="" />
</div>
);

export default App;
