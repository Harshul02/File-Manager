import { createStore, applyMiddleware, combineReducers } from 'redux'
import { thunk } from "redux-thunk";
import authReducer from './reducers/authReducer';

const store = createStore(
    combineReducers({authReducer}),
    applyMiddleware(thunk)
)

export default store;

