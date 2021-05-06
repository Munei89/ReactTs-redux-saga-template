import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { actions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUserSignUp, IUser } from "./types";

const userPost = (payload: IUser) => {
    const {
        username,
        email,
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
        },
    }).catch((error) => {
        console.log(error);
    });
};
export function* signUp(action: PayloadAction<IUserSignUp>) {

    try {
        yield put(actions.signUpUserSuccess());
        yield delay(3000)
        yield put(actions.clearMessages());
    } catch (err) {
        console.log(err);
        yield put(actions.signUpUserError(err));

    }
}

export function* signIn(action: PayloadAction<IUser>) {

    try {
        const response: IUser = yield call(userPost, action.payload);
        if (response) {
            yield put(actions.signInUser());
            yield put(actions.signInUserSuccess(response));
        }

    } catch (err) {
        console.log(err);
        yield put(actions.signInUserError(err));

    }
}


export function* userSignInSaga() {
    takeLatest(actions.signUpUser.type, signUp);
    takeLatest(actions.signInUser.type, signIn);

}
