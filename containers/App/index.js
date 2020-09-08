// @flow strict
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import { initialize } from './actions'

const InjectApp = ({ appInitialize }: { appInitialize: Function }) => {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname !== '/login') {
      appInitialize()
    }
  })
  return null
}

export default connect(null, { appInitialize: initialize })(InjectApp)
