import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-atwj36a6.us.auth0.com"
    clientId="q2KPYCDMD8pb6mnGtLsR9UbfDLtFlIBe"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);