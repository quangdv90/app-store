import { fork, all } from "redux-saga/effects";

// sagas import here
import AuthSaga from '../auth/Auth.saga';

const sagas = [
  ...AuthSaga
];

export default function* rootSaga() {
  const globalSagasForks = sagas.map(saga => fork(saga));

  yield all([...globalSagasForks]);
}