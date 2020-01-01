import { createStore, combineReducers, applyMiddleware } from 'redux';
import apiReducer from './reducers/apiReducer';
import uiReducer from './reducers/uiReducer';
import localReducer from './reducers/localReducer';
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