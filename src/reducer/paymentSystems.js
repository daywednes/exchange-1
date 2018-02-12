import {LOAD_ALL_PAYMENT_SYSTEMS, START, FAIL, SUCCESS} from "../constants"

const initialState = {
    loading: false,
    loaded: false,
    entities: []
}

export default function(state = initialState, action = {}) {
  const {errorMessage, payload} = action

  switch (action.type) {
    case LOAD_ALL_PAYMENT_SYSTEMS + START:
      return {
       	...state,
        loading: true
      }
    case LOAD_ALL_PAYMENT_SYSTEMS + FAIL:
      return {
       	...state
      }
    case LOAD_ALL_PAYMENT_SYSTEMS + SUCCESS:
      return {
        loaded: true,
        loading: false,
        entities: payload
      }
    default:
      return state
  }
}