import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
} from "react-router-dom"
import store from "./redux/Store"
import { Provider } from "react-redux"
//instantiate store

const appStore = store();

ReactDOM.render(
    <Provider store={appStore}>
        <Router>
            <App />
        </Router>,
    </Provider>,
    document.getElementById("app"));