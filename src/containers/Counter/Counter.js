import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions/actions'

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.cntr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCount} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCount}  />
                <CounterControl label="Add 8" clicked={this.props.onAddCount}  />
                <CounterControl label="Subtract 12" clicked={this.props.onSubtractCount} />
                <hr />
                <button onClick={() => this.props.onShowResults(this.props.cntr)} >Results</button>
                <ul>
                    {this.props.results.map((res, index) => {
                        return <li key={res.id} onClick={() => this.props.onDelete(res.id)} >{res.value}</li>
                    } )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        cntr: state.ctr.counter,
        results: state.rels.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCount: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCount: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddCount: () => dispatch({ type: actionTypes.ADD, val: 8 }),
        onSubtractCount: () => dispatch({ type: actionTypes.SUBTRACT, val: 12 }),
        onShowResults: (results) => dispatch({ type: actionTypes.SHOW_RESULTS, results: results}),
        onDelete: (id) => dispatch ({type: actionTypes.DELETE_RESULTS, resultID: id})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);