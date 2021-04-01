import React from 'react';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import UserOnboardPage from './Pages/UserOnboardPage';
import PageNotFound from './Pages/PageNotFound';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetailsPage from './Pages/ProductDetailsPage';
import CartList from './Pages/CartList';
import Contact from './Pages/Contact';




function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/Details">
          <ProductDetailsPage/>
        </Route>
        <Route path="/cartList">
          <CartList/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <UserOnboardPage />
        </Route>
        <Route path="*">
          <PageNotFound/>
        </Route>
     </Switch>
    </Router>

  );
}

export default App;
