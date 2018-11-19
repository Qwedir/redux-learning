import {applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // позволяет нам отправлять функции
    loggerMiddleware // аккуратно логируем действия
  )
);

export default store;