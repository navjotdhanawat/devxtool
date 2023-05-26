import { all, call, put, takeEvery } from 'redux-saga/effects';

// Define your saga worker functions here
function* exampleSaga() {
  try {
    // Saga logic
    yield put({ type: 'EXAMPLE_SUCCESS' });
  } catch (error) {
    yield put({ type: 'EXAMPLE_FAILURE', error });
  }
}

// Define your saga watcher function
function* watchExampleSaga() {
  yield takeEvery('EXAMPLE_REQUEST', exampleSaga);
}

// Combine all sagas
export default function* rootSaga() {
  yield all([
    // Add your sagas here
    watchExampleSaga(),
  ]);
}
