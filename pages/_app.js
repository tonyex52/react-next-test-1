import App from 'next/app'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { initialize } from 'containers/App/actions'
import GlobalStyles from 'containers/App/GlobalStyles'

import createStore from '../store'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  componentDidMount() {
    if(this.props.router.pathname !== '/login') {
      this.props.store.dispatch(initialize())
    }
  }

  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <>
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </Provider>
    )
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp))
