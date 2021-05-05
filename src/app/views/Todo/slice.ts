import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContainerState, ISignInForm } from './types';


export const initialState: ContainerState = {
    loading: false,
    signIn: {
        username: '',
        email: ''
    }
}

export const signInSlice = createSlice({
    name: 'signin',
    initialState,
    reducers: {
        postSignIn(state, action: PayloadAction<ISignInForm>) {
            const { email, username } = action.payload
            state.loading = true;
            state.signIn.email = email;
            state.signIn.username = username;
        },
        postSignInSuccess(state){
            state.loading = false;    
        }    
    }
});

export const { actions, reducer, name: sliceKey } = signInSlice;
