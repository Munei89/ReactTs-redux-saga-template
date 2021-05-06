// import {
//     configureStore,
//     getDefaultMiddleware
//   } from "@reduxjs/toolkit";
//   import createSagaMiddleware from "redux-saga";
// import rootSaga from "./saga";
// import rootReducer  from './reducer'
 
// const sagaMiddleware = createSagaMiddleware();

// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

// const store = configureStore({
//     reducer: rootReducer,
//     middleware
// })

// sagaMiddleware.run(rootSaga);

// export default store;
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";
import todoSlicer from "../app/views/Todo/slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  todos: todoSlicer
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
});
sagaMiddleware.run(rootSaga);

export default store;