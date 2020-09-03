export const actionTypes = {
  initialize: 'App/initialize',
  setUserName: 'App/setUserName',
}

export const initialize = () => ({
  type: actionTypes.initialize,
})

export const setUserName = payload => ({
  type: actionTypes.setUserName,
  payload,
})
