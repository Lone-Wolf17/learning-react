import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 } from 'react-router-dom'
 
import Header from './component/Header'
import Footer from './component/Footer'
import Home from './views/Home'
import About from './views/About'
import Product from './views/Product'


function App() {
  return (
    <div>

        <Router> 

          <Header/>

          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/products/:id">
                <Product/>
              </Route>
            </Switch>
          </div>
        </Router>


      <Footer/>
        
    </div>
  );
}

export default App;
