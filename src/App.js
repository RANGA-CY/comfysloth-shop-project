import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import Product from './components/Product';
import {
  Home,
  About,
  Products,
  SingleProduct,
  Cart,
  Error,
  Checkout,
  PrivateRoute,
  AuthWrapper,
} from './pages';
function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route path='/' exact>
            <Home></Home>
          </Route>
          <Route path='/about' exact>
            <About></About>
          </Route>
          <Route path='/cart' exact>
            <Cart></Cart>
          </Route>
          <Route path='/products' exact>
            <Products></Products>
          </Route>
          <Route path='/products/:id' exact>
            <SingleProduct />
          </Route>
          <PrivateRoute path='/checkout' exact>
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;
