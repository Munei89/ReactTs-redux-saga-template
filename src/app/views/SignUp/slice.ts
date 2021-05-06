import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, IUserSignUp } from './types';



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
            state.isFetching = true;
        },
        signUpUserSuccess(state) {
            state.isFetching = false;
        },
        signUpUserError(state, action: PayloadAction<string>) {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = action.payload;
        }
    }
});

export const { actions, reducer, name: sliceKey } = userSlice;
export default userSlice.reducer
