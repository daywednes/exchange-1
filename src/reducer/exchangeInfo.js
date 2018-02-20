import {TOGGLE_ACTIVE_CRYPTO, SET_AMOUNT_CRYPTO, LOAD_CRYPTO_PAIR, START, FAIL, SUCCESS} from "../constants"

const initialState = {
    amount_from: null,
    amount_to: null,
    selected_from: null,
    selected_to: null,
    loading_pair: false,
    loaded_pair: false,
    calculatingType: null,
    rate: {}
}

export default function(state = initialState, action = {}) {
  const {errorMessage, payload} = action

  switch (action.type) {
    case TOGGLE_ACTIVE_CRYPTO:
      return {
        ...state, 
        ['selected_' + payload.type ]: payload.id
      }
    case SET_AMOUNT_CRYPTO:
      return {
        ...state, 
        ['amount_' + payload.type ]: payload.amount,
        calculatingType: (payload.calculating ? payload.type : null)
      }
    case LOAD_CRYPTO_PAIR + START:
      return {
       	...state,
        loading_pair: true,
        calculatingType: null
      }
    case LOAD_CRYPTO_PAIR + FAIL:
      return {
       	...state,
        calculatingType: null
      }
    case LOAD_CRYPTO_PAIR + SUCCESS:
      return {
        ...state,
        loaded_pair: true,
        loading_pair: false,
        amount_from: "1",
        calculatingType: "from",
        rate: payload
      }
    default:
      return state
  }
}