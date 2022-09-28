const { devToolsEnhancer } = require('@redux-devtools/extension');
const { createStore, combineReducers } = require('redux');
const { contactReducer } = require('./contacts/contactsReducer');

const enhancer = devToolsEnhancer();
const rootReducer = combineReducers({ contacts: contactReducer });

export const store = createStore(rootReducer, enhancer);
