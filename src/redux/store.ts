import {
    createSlice,
    configureStore,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import rootReducer  from './reducer'
 
const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware
})

sagaMiddleware.run(rootSaga);

export default store;