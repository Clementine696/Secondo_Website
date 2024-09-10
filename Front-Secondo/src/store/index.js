// import { applyMiddleware, createStore } from "redux";
import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux'
// import { configureStore, Tuple } from 'react-redux'
import { thunk } from 'redux-thunk';
import rootReducer from "../reducers";
import { composeWithDevTools } from '@redux-devtools/extension';

// const store = createStore(() => {});
// const store = createStore(rootReducer);
// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


// const configureStore = require('react-redux').configureStore
// const store = configureStore({
    // rootReducer, applyMiddleware(thunk)
    // });

export default store;