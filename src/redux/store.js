import { createStore } from 'redux'
import cakeReducer from './cakes/cakeReducer'
import {combineReducers} from 'redux'
import todoReducer from '../redux/todo/todoReducer'

const rootReducer = combineReducers({cakeReducer: cakeReducer, todoReducer: todoReducer})
const store = createStore(rootReducer)

export default store
