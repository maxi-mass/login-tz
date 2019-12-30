import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import createSagaMiddleware from "redux-saga";
import { loginSaga } from "./sagas/loginSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer
});

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(loginSaga);
