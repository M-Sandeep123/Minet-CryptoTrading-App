import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom/client";
import "cors"
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { UserProvider } from "./store/user";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const domain = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID as string;
const callBackUrl = process.env.REACT_APP_CALLBACK_URL as string;
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: callBackUrl,
        }}
      >
        <UserProvider>
          <App />
        </UserProvider>
      </Auth0Provider>
    </BrowserRouter>
  </ThemeProvider>
);
