import { all, fork } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import appSaga from 'containers/App/saga'
import pageViewSaga from 'containers/PageView/saga'

es6promise.polyfill()

function* rootSaga() {
  yield all([fork(appSaga), fork(pageViewSaga)])
}

export default rootSaga
