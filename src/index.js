import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
// import Product from './components/Product';
// dev-y-nhbes3.us.auth0.com
// monWejd6z9INR7ZaFz093JiqUwu6caNL
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN_KEY}
    clientId={process.env.REACT_APP_CLIENT_ID_KEY}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);