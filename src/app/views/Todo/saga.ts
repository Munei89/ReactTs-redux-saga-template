import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { actions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';


export function* postToDo(action: PayloadAction<any>) {

    try {
      yield put(actions.postToDo(action.payload));
      yield put(actions.postToDoSuccess());
    } catch (err) {
      console.log(err);
    }
}
export function* deleteTodo(action: PayloadAction<any>) {

    try {
      yield put(actions.deleteTodo(action.payload));
      yield put(actions.deleteTodoSuccess());
    } catch (err) {
      console.log(err);
    }
}

export function* userSignInSaga() {
    yield takeLatest(actions.postToDo.type, postToDo);
    yield takeLatest(actions.deleteTodo.type, deleteTodo);
}
  