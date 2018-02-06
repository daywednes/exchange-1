import axios from 'axios'
import jwtDecode from 'jwt-decode'
import querystring from 'querystring';
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "../constants"

export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOGIN_REQUEST })

    axios.post(
        '/api/authentication/login', 
        querystring.stringify({...credentials, grant_type: "password"})
    )
      .then(function (response) {
          const {Data, Errors, Info, Type} = response.data
          localStorage.authToken = Data.access_token
          dispatch({
            type: LOGIN_SUCCESS,
            user: jwtDecode(Data.access_token)
          })
      })
      .catch(function (error) {
          dispatch({
            type: LOGIN_FAILURE,
            errorMessage: error
          })
      });
  }
}

export function logout() {
  delete localStorage.authToken
  return { type: LOGOUT }
}