import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { actions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserSignUp } from "./types";

const userPost = (payload: IUserSignUp) => {
    const {
       username,
       email,
       password, 
    } = payload;
    const url = `https://mock-user-auth-server.herokuapp.com/api/v1/users`;

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    return axios.request({
        method: "post",
        url,
        headers,
        data: {
            username,
            email,
            password,
        },
    }).catch((error) => {
        console.log(error);    
    });
};
export function* signUp(action: PayloadAction<IUserSignUp>) {
    
    try {
      const response: IUserSignUp  = yield call(userPost, action.payload);
      console.log('here');
      if(response) {
        yield put(actions.signUpUser(action.payload));
        yield put(actions.signUpUserSuccess());
      }  

    } catch (err) {
      console.log(err);
      yield put(actions.signUpUserError(err));

    }
}


export function* userSignInSaga() {
    takeLatest(actions.signUpUser.type, signUp);
}
  