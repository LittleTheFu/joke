import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from './apiReducer';
import uiReducer from './uiReducer';
import localReducer from './localReducer';
import thunkMiddleware from 'redux-thunk';


const rootReducer = combineReducers({
    apiState: apiReducer,
    uiState: uiReducer,
    localState: localReducer,
});
 
const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware),
);
 
 export default store;