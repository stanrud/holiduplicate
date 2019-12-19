import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import indexSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const middleware = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
  reducer,
  middleware
);

sagaMiddleware.run(indexSaga);

export default store;
