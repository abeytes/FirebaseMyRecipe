
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import './App.css'
function App() {
  return (
      <div className="App">
         
          <BrowserRouter >             
              <Nav />
              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                    <Route path= '/create'>
                        <Create />
                    </Route>

                    <Route path = '/search'>
                        <Search />
                    </Route>

                  <Route path="/recipe/:id">
                      <Recipe />
                  </Route>
              </Switch>
          </BrowserRouter>
    </div>
  );
}

export default App;
