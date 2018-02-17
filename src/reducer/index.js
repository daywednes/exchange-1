import {combineReducers} from "redux"
import auth from './auth'
import paymentSystems from './paymentSystems'
import exchangeInfo from './exchangeInfo'

export default combineReducers({
	system: auth,
	paymentSystems,
	exchangeInfo
})