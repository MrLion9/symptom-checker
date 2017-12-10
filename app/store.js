import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import personalData from './reducers/PersonalDataReducer';
import symptomsData from './reducers/SymptomsReducer';

export default () => createStore(
  combineReducers({
    personalData,
    symptomsData
  })
);