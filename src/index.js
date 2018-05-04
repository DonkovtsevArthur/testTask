import React from "react";
import { render } from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers/";
import App from "./components/";


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(
  <MuiThemeProvider>
    <App store={store} />
  </MuiThemeProvider>,
  document.getElementById("app")
);

module.hot.accept();
