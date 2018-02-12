import {combineReducers} from "redux"
import auth from './auth'
import paymentSystems from './paymentSystems'

export default combineReducers({
	system: auth,
	paymentSystems
})