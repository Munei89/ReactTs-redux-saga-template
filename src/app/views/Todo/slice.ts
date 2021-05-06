import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoList from './components/ToDoList';
import { ContainerState } from './types';


export const initialState: ContainerState = {
    loading: false,
    data: [],
}

export const toDoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        postToDo(state, action: PayloadAction<any>) {
            state.loading = true;
            state.data = [...state.data, action.payload]
        },
        postToDoSuccess(state){
            state.loading = false;    
        },
        deleteTodo(state, action: PayloadAction<number | string>) {
            state.loading = true;
            state.data = state.data.filter((_, index) => index !== action.payload);
        },
        deleteTodoSuccess(state){
            state.loading = false;
        }    

    }
});

export const { actions, reducer, name: sliceKey } = toDoSlice;
export default toDoSlice.reducer
