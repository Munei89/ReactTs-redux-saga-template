import { all } from "redux-saga/effects";
import {
    todoSaga
} from '../app/views/Todo/saga';
// import {
//     userSignInSaga
// } from '../views/SignUp/saga'


export default function* rootSaga() {
    yield all([
        todoSaga
    ]);
}
