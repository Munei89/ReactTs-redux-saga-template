import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { actions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';


export function* postSignIn(action: PayloadAction<any>) {

    const { username, email } = action.payload
    try {
      yield put(actions.postSignIn({
          username,
          email
      }));
      console.log('here');
    } catch (err) {
      console.log(err);
    }
  }

export function* userSignInSaga() {
    yield takeLatest(actions.postSignIn.type, postSignIn);
}
  