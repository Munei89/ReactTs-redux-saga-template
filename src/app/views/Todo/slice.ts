import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TodoList from './components/ToDoList';
import { ContainerState, ITodo } from './types';


export const initialState: ContainerState = {
    loading: false,
    todos: [],
}

export const toDoSlice = createSlice({
    name: 'toDo',
    initialState,
    reducers: {
        postToDo(state, action: PayloadAction<any>) {
            state.loading = true;
            state.todos = [...state.todos, action.payload]
        },
        postToDoSuccess(state){
            state.loading = false;    
        },
        deleteTodo(state, action: PayloadAction<number | string>) {
            state.loading = true;
            state.todos = state.todos.filter((_, index) => index !== action.payload);
        },
        deleteTodoSuccess(state){
            state.loading = false;
        }    

    }
});

export const { actions, reducer, name: sliceKey } = toDoSlice;
