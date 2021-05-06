// // combineReducers come from redux that used for combining reducers that we just made.
// import { combineReducers } from 'redux';
// import { reducer as todoReducer } from '../views/Todo/slice';
// import { userSlice } from '../views/SignUp/slice';

// export default combineReducers({
//     todos: todoReducer,
//     user: userSlice.reducer,
//   // Here you can registering another reducers.
// });
import { combineReducers } from '@reduxjs/toolkit';
import  todo  from '../app/views/Todo/slice';

const clicks = { todos: todo }

export let rootReducer = combineReducers({	 
  ...clicks,
});
export default function createReducer(injectedReducers = {}) {	
    rootReducer = combineReducers({	
      ...clicks,
      ...injectedReducers,
    });
return rootReducer;   
}

export type RootState = ReturnType<typeof rootReducer>