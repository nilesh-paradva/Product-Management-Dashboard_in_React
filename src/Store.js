import { createStore } from "redux";
import { Rootreducer } from "./services/reducer/MainReducer";

export const store = createStore(Rootreducer, __REDUX_DEVTOOLS_EXTENSION__());