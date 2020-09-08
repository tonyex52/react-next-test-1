import { useCallback } from 'react'
import { connect, useSelector } from 'react-redux'
import PageViewComponent from 'components/PageView'
import { logout } from './actions'

const PageView = ({ onLogout, ...props }) => {
  const userName = useSelector((state) => state.app.displayName)
  const onClickLogout = useCallback(() => {
    onLogout()
  })
  return (
    <PageViewComponent
      onClickLogout={onClickLogout}
      userName={userName}
      {...props}
    />
  )
}

export default connect(null, { onLogout: logout })(PageView)
