import { all, call, put, takeLatest } from 'redux-saga/effects'
import fetchApi from 'utils/fetchApi'
import { actionTypes, setUserName } from './actions'

export function* initializeFlow() {
  try {
    const response = yield call(fetchApi, {
      method: 'post',
      url: '/api/login-info',
    })
    yield put(setUserName(response.displayName))
  } catch (errorCode) {
    yield call(console.log, errorCode)
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.initialize, initializeFlow)])
}
