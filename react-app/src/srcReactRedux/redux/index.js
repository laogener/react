import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';
export * from './action_types';
export * from './actions';


export default new createStore(reducer,applyMiddleware(thunkMiddleware));