import * as actionTypes from './actionsTypes';

export const deleteResults = id => {
    
    return { type: actionTypes.DELETE_RESULTS, resultID: id };
};

const saveResults = res => {
    
    return { type: actionTypes.SHOW_RESULTS, results: res };
};

//ActionCreator returning a fn (asyn fn) that has asyn code
export const showResults = result => {
    
    return (dispatch) => {
        setTimeout(
            () => dispatch(saveResults(result)), 
            3000
        );
    };
};



 