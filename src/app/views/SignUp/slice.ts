import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, IUserSignUp, IUser } from './types';



export const initialState: ContainerState = {
    user: {
        username: '',
        email: '',
    },
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signUpUser(state, action: PayloadAction<IUserSignUp>) {
            state.isSuccess = false;
            state.isFetching = true;
        },
        signUpUserSuccess(state) {
            state.isFetching = false;
            state.isSuccess = true;
        },
        signUpUserError(state, action: PayloadAction<string>) {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        },
        signInUser(state) {
            state.isFetching = true;
        },
        signInUserSuccess(state,  action: PayloadAction<IUser>) {
            state.isFetching = false;
            state.user = action.payload
        },
        signInUserError(state, action: PayloadAction<string>) {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        },
        clearMessages(state) {
            state.isFetching = false;
            state.isSuccess = false;
            state.isError = false;
            state.errorMessage = null;
        },

    }
});

export const { actions, name: sliceKey } = userSlice;
export default userSlice.reducer
