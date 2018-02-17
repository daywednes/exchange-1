import { TOGGLE_ACTIVE_CRYPTO, SET_AMOUNT_CRYPTO } from '../constants'

export function toggleActiveCrypto(id, type) {
    return {
        type: TOGGLE_ACTIVE_CRYPTO,
        payload: { id, type }
    }
}

export function setAmountCrypto(amount, type) {
    return {
        type: SET_AMOUNT_CRYPTO,
        payload: { amount, type }
    }
}