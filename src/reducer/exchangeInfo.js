import {TOGGLE_ACTIVE_CRYPTO, SET_AMOUNT_CRYPTO} from "../constants"

const initialState = {
    amount_from: null,
    amount_to: null,
    selected_from: null,
    selected_to: null
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
        ['amount_' + payload.type ]: payload.amount
      }
    default:
      return state
  }
}