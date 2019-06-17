import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers} from 'redux';
// import reducer from './store/reducer';
import {Provider} from 'react-redux';
import counterReducer from './reducers/counterReducer';
import storeReducer from './reducers/storeReducer';

const rootReducer =combineReducers({
    ctr: counterReducer,
    str: storeReducer
})

const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<Provider  store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
