import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-mqbz1bshhmt0vqlx.us.auth0.com"
      clientId="tzpdOPGyodZiPoS4frHVQ7HqdxFWp0x8"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>,
);
