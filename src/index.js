import React from "react";
import ReactDOM from "react-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./app";
import {Provider} from "react-redux";
import{createStore,applyMiddleware,compose} from"redux";
import reducers from "./store/index";
import thunk from "redux-thunk";
let composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
let store=createStore(reducers,
composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
<App/>
    </Provider>,document.getElementById("root"));