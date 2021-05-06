import { call, delay, put, takeLatest, select } from "redux-saga/effects";
import { actions } from './slice';
import { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'

function requestGetUser() {
  return axios.request({
    method: "get",
    url: "https://my-json-server.typicode.com/atothey/demo/user"
  });
}


export function* postToDo(action: PayloadAction<any>) {
    try {
      // const response: any = yield call(requestGetUser);
      // if(response) {
        yield put(actions.postToDoSuccess());
      // }
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

export function* todoSaga() {
    yield takeLatest(actions.postToDo, postToDo);
    yield takeLatest(actions.deleteTodo.type, deleteTodo);
}
  