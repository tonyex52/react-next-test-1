import { ThemeProvider } from 'styled-components'
import InjectApp from 'containers/App'
import GlobalStyles from 'containers/App/GlobalStyles'
import * as theme from 'constants/theme'
import { wrapper } from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InjectApp />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default wrapper.withRedux(MyApp)
