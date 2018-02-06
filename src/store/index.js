import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, logger)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store