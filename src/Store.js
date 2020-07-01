import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootreducer from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const Store = createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(thunk))
)


export default Store; 