import eventReducer from "./eventReducer"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
    eventReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store