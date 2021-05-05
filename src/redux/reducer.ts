// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';
import { reducer as todoReducer } from 'app/views/Todo/slice';

export default combineReducers({
    todos: todoReducer
  // Here you can registering another reducers.
});