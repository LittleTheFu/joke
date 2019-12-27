import { createStore, combineReducers } from 'redux';
import apiReducer from './apiReducer';

const rootReducer = combineReducers({
    apiState: apiReducer,
});
 
const store = createStore(
    rootReducer,
);
 
 export default store;