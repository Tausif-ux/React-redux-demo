import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const reducer = (state=initialState, action) => {
    
    switch (action.type) {

        case actionTypes.SHOW_RESULTS:

            return updateObject(state, { results: state.results.concat({id: new Date(), value: action.results *3}) });
        
        case actionTypes.DELETE_RESULTS:
            // const newResults = [...state.results];
            // newResults.splice(action.index, 1);
            return updateObject(state, { results: state.results.filter(res => res.id !== action.resultID) });                

    }
    
    return state;
};

export default reducer;