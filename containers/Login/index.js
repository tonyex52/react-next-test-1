import { Component } from 'react'
import styled from 'styled-components'
import LoginPage from 'components/LoginPage'

class Index extends Component {
  static async getInitialProps(props) {
    const { store, isServer } = props.ctx
    return { isServer }
  }

  render() {
    return <LoginPage loginUrl="login-action" />
  }
}

export default Index
