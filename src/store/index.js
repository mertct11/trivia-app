import applicationReducer from "../reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export default createStore(applicationReducer, applyMiddleware(thunk));
