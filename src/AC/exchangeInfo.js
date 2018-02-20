import axios from 'axios'
import { TOGGLE_ACTIVE_CRYPTO, SET_AMOUNT_CRYPTO, LOAD_CRYPTO_PAIR, START, SUCCESS, FAIL } from '../constants'
import querystring from 'querystring';

export function toggleActiveCrypto(id, type) {
    return {
        type: TOGGLE_ACTIVE_CRYPTO,
        payload: { id, type }
    }
}

export function setAmountCrypto(amount, type, calculating) {
    return {
        type: SET_AMOUNT_CRYPTO,
        payload: { amount, type, calculating }
    }
}
export function loadCryptoPair(ratePair) {
  return dispatch => {
    dispatch({ type: LOAD_CRYPTO_PAIR + START })

    axios.post(
        '/api/CryptoCurrencies/rate',
        querystring.stringify({ratePair})
    )
    .then(function (response) {
      const {Data, Errors, Info, Type} = response.data
        if (Errors.length == 0) {
            dispatch({
                type: LOAD_CRYPTO_PAIR + SUCCESS,
                payload: Data
            })
        } else {
            dispatch({
                type: LOAD_CRYPTO_PAIR + FAIL,
                errorMessage: Errors
            })
        }
    })
    .catch(function (error) {
      dispatch({
        type: LOAD_CRYPTO_PAIR + FAIL,
        errorMessage: error
      })
    });
  }
}