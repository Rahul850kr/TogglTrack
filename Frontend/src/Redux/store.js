import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";

import {reducer as AppReducer} from "./AppReducer/reducer";
// import {reducer as AuthReducer} from "./AuthReducer/reducer";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const rootReducer = combineReducers({AppReducer});

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));