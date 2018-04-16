import React from "react";
import {render} from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/";
import reducer from "./reducers/";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

render(<App store={store} />, document.getElementById("app"));

module.hot.accept();
