import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import createSagaMiddleware from "redux-saga";
import { loginSaga } from "./sagas/loginSaga";
import { reducer as formReducer } from "redux-form";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(loginSaga);
