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
          //localStorage.authToken = res.data.token
          debugger;
          dispatch({
            type: LOGIN_SUCCESS,
            user: jwtDecode(response.data.token)
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