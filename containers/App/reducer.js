import { actionTypes } from './actions';

const initialState = {
  userId: '',
  displayName: '',
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.setUserName:
      return {
        ...state,
        displayName: payload,
      }
    default:
      return state
  }
}

export default reducer
