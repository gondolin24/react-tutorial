# react routing 
routing introduction course

Link to Video : https://www.youtube.com/watch?v=Law7wfdg_ls
#### Milestones ####
- [x] Tutorial complete
- [x] justify-content css attribute
- [x] BrowserRouter
- [x] Switch
- [x] Route / paths
- [x] Links
- [x] useState / use effect
  
#### app ####  
```
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
```
