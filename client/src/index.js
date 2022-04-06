import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

//--------init queryclient and queryclientptofider
import { QueryClient, QueryClientProvider } from "react-query";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css"
import { UserContextProvider } from "./context/userContext";

//favicon
// import Favicon from "./asset/sicon.png";
// const favicon = document.getElementById("idFavicon")
// favicon.setAttribute("href", Favicon)

// ----------Init Client from QueryClient() here ...
const client = new QueryClient()

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
      <UserContextProvider>
          <Router>
            <App />
          </Router>
      </UserContextProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
