import { createStore, applyMiddleware, compose } from "redux";
import { Rootreducer } from "./services/reducer/MainReducer";
import { thunk } from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Rootreducer, composeEnhancers(applyMiddleware(thunk)));