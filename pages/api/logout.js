import responseStatus from 'constants/responseStatus'
import responseFormatter from 'utils/responseFormatter'

export default (req, res) => {
  req.logout()
  res.json(responseFormatter(null, responseStatus.USER_NOT_LOGIN))
}