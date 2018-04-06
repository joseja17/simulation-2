import {createStore, applyMiddleware} from 'redux';
import reducer from './ducks/reducer';
import promisemiddleware from 'redux-promise-middleware';
import logger from 'redux-logger'

export default createStore(reducer, applyMiddleware( promisemiddleware(), logger ));