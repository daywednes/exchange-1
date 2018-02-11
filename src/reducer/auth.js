import jwtDecode from 'jwt-decode'
import {LOGIN, LOGOUT, START, FAIL, SUCCESS} from "../constants"

const initialState = (token => ({
  isAuthenticating: false,
  currentUser: token ? jwtDecode(token) : null,
  errorMessage: null
}))(localStorage.authToken)

export default function(state = initialState, action = {}) {
  const {errorMessage, user} = action

  switch (action.type) {
    case LOGIN + START:
      return {
       	...state,
        isAuthenticating: true
      }
    case LOGIN + FAIL:
      return {
       	...state,
        isAuthenticating: false,
        errorMessage: errorMessage
      }
    case LOGIN + SUCCESS:
      return {
        isAuthenticating: false,
        currentUser: user,
        errorMessage: null
      }
    case LOGOUT:
      return {
        isAuthenticating: false,
        currentUser: null,
        errorMessage: null
      }
    default:
      return state
  }
}