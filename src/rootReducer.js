import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from './apiReducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    apiState: apiReducer,
});
 
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);
 
 export default store;