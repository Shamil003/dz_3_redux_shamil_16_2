import {createStore} from "redux";
import {rootReducer} from "./reducer/rootReducer";
import {resultReducer} from "./reducer/resultReducer";

export const  store = createStore(resultReducer, rootReducer);