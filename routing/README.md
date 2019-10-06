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
- [x] MATCH

cool routing feature

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
![alt text](https://raw.githubusercontent.com/gondolin24/react-tutorial/master/routing/public/main.JPG)
top links have been routed to a component
#### About page ####
![alt text](https://raw.githubusercontent.com/gondolin24/react-tutorial/master/routing/public/about.JPG)
#### Shop Page ####
In the shop page we are adding a link to a unique ID given by the api.
```
    return (
        <div >
            {items.map(item => (
                <h1 key={item.itemid}>
                    <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                </h1>
                ))
            }
        </div>
    );
```
![alt text](https://raw.githubusercontent.com/gondolin24/react-tutorial/master/routing/public/shop.JPG)
#### Fortnight info ####
we are adding a route in app.js 
```
  <Route path="/shop/:id" component={Item}/>
```

and getting the id through smoething called MATCH => which gives us props

```
  function Item({match}) {


    const fetchItems = async () => {
        const details = apiCall.items.filter(i=>i.itemid===match.params.id)[0];
        console.log(details);
        setItem(details)
    };

```

![alt text](https://raw.githubusercontent.com/gondolin24/react-tutorial/master/routing/public/singlepage.JPG)

#### Sample API respone ####
```
{
        "itemid": "9614e95-6d27565-b685f78-aeaa9c4",
        "name": "Snakepit",
        "description": "Fearless.",
        "cost": "???",
        "item": {
            "image": "https://fortnite-public-files.theapinetwork.com/outfit/47afe930d4077d2ec7df0a951b3fd3fd.png",
            "images": {
                "transparent": "https://fortnite-public-files.theapinetwork.com/outfit/47afe930d4077d2ec7df0a951b3fd3fd.png",
                "background": "https://fortnite-public-files.theapinetwork.com/image/9614e95-6d27565-b685f78-aeaa9c4.png",
                "information": "https://fortnite-public-files.theapinetwork.com/image/9614e95-6d27565-b685f78-aeaa9c4/item.png",
                "featured": {"transparent": "https://fortnite-public-files.theapinetwork.com/featured/9614e95-6d27565-b685f78-aeaa9c4.png"}
            },
            "captial": "outfit",
            "type": "outfit",
            "rarity": "uncommon",
            "obtained": "???",
            "obtained_type": "vbucks"
        },
        "ratings": {"avgStars": 0, "totalPoints": 0, "numberVotes": 0}
    }
```    
    
