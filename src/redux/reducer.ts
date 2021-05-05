// combineReducers come from redux that used for combining reducers that we just made.
import { combineReducers } from 'redux';
import { reducer as usersReducer } from 'app/views/Todo/slice';
import { RootState } from '../app/types/'

export default combineReducers({
    users: usersReducer
  // Here you can registering another reducers.
});