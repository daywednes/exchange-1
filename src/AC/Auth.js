import axios from 'axios'
import jwtDecode from 'jwt-decode'
import querystring from 'querystring';
import {LOGIN, LOGOUT, START, FAIL, SUCCESS} from "../constants"

export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOGIN + START })

    axios.post(
        '/api/authentication/login', 
        querystring.stringify({...credentials, grant_type: "password"})
    )
      .then(function (response) {
          const {Data, Errors, Info, Type} = response.data
          localStorage.authToken = Data.access_token
          if (!Errors) {
            dispatch({
              type: LOGIN + SUCCESS,
              user: jwtDecode(Data.access_token)
            })
          } else {
            dispatch({
              type: LOGIN + FAIL,
              errorMessage: Errors
            })
          }
      })
      .catch(function (error) {
          dispatch({
            type: LOGIN + FAIL,
            errorMessage: error
          })
      });
  }
}

export function logout() {
  delete localStorage.authToken
  return { type: LOGOUT }
}