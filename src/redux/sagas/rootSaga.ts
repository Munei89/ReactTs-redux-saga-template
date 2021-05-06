import { takeLatest } from "redux-saga/effects";
import { actions as todoActions } from "../../app/views/Todo/slice";
import { actions as userActions } from "../../app/views/SignUp/slice";
import { postToDo } from "../../app/views/Todo/saga";
import { signUp } from "../../app/views/SignUp/saga";

export function* watcherSaga() {
  yield takeLatest(todoActions.postToDo.type, postToDo);
  yield takeLatest(userActions.signUpUser.type, signUp);

}
