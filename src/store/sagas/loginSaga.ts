import { put, takeEvery, call, all } from "redux-saga/effects";

function* fetchUser(action: any) {
  console.log(action);
  try {
    console.log(action);
    //const user = yield call(Api.fetchUser, action.payload.userId);
    yield put({ type: "REDUCER_TEST", payload: { jwt: Date.now() } });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}
export function* loginSaga() {
  yield all([
    takeEvery("USER_FETCH_REQUESTED", fetchUser),
    takeEvery("USER_FETCH_REQUESTED1", fetchUser)
  ]);
}
