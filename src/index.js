import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";
import reducer1 from "./store/reducers/reducer1";
import reducer2 from "./store/reducers/reducer2";
import "./index.css";
import App from "./App";


const rootReducer = combineReducers({
    example: reducer1,
    example2: reducer2
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // reducer1,
    composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
