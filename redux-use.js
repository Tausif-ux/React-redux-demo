const redux = require('redux');

// Store

const initialState = {
    counter: 0
};

const reducer = (state=initialState, action) => {
    
    if(action.type === 'INC_COUNT') {
        return { ...state, counter: state.counter + 1 };
    }

    if(action.type === 'ADD_COUNT') {
        return { ...state, counter: state.counter + action.action };
    }
    
    return state;
};

const store = redux.createStore(reducer);
console.log(store.getState());

// Subscriptions

store.subscribe(() => console.log('After Subscrption: ', store.getState()));

// Dispatch - Actions

const op1 = store.dispatch({type: 'INC_COUNT'});
const op2 = store.dispatch({type: 'ADD_COUNT', action: 7});
console.log(store.getState());
console.log(op1, op2);
