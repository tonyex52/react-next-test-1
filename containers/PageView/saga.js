import { all, call, takeLatest } from 'redux-saga/effects'
import fetchApi from 'utils/fetchApi'
import { actionTypes } from './actions'

export function* logoutFlow() {
  try {
    yield call(fetchApi, {
      method: 'post',
      url: '/api/logout',
    })
  } catch (errorCode) {
    yield call(console.log, errorCode)
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.logout, logoutFlow)])
}
