import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from './apiReducer';
import uiReducer from './uiReducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    apiState: apiReducer,
    uiState: uiReducer,
});
 
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);
 
 export default store;