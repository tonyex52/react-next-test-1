const responseStatus = require('../constants/responseStatus')

module.exports = (data, errorCode = '') => {
  if(errorCode) {
    return { data: {}, status: errorCode }
  }
  return { data, status: responseStatus.API_SUCCESS }
}