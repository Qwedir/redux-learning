import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
let store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;