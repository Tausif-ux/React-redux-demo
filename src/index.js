import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultsReducer from './store/reducers/results';

const rootReducer = combineReducers({
    ctr: counterReducer,
    rels: resultsReducer
});

//Middleware for logging action and updated sate due to taht action
const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware index.js]', action);
            const result = next(action);
            console.log('[Middleware index.js]', store.getState());
            return result; 
        };
    };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //Function that combines enhancers

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunkMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
    );

registerServiceWorker();