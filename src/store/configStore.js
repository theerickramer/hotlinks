import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import hotlinks from './reducers';

const logger = createLogger();

export default function configStore(initState){
  return createStore(
    hotlinks,
    initState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
}