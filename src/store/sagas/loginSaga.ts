import { put, takeEvery, all } from "redux-saga/effects";
import { USER_LOGIN, USER_LOGOUT, SET_USER_DATA } from "../types";
import { getToken, removeToken } from "../../helpers";

export function* userLogin(action: any) {
  try {
    let token = getToken(action.payload);

    yield put({
      type: SET_USER_DATA,
      payload: { ...token, ...action.payload }
    });
  } catch (e) {}
}

export function* userLogout(action: any) {
  try {
    removeToken();
  } catch (e) {}
}

export function* loginSaga() {
  yield all([
    takeEvery(USER_LOGIN, userLogin),
    takeEvery(USER_LOGOUT, userLogout)
  ]);
}
