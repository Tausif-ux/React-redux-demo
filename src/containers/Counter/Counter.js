import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/actions/index';

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
        onIncrementCount: () => dispatch(actionCreator.increment()),
        onDecrementCount: () => dispatch(actionCreator.decrement()),
        onAddCount: () => dispatch(actionCreator.add(8)),
        onSubtractCount: () => dispatch(actionCreator.subtract(12)),
        onShowResults: (results) => dispatch(actionCreator.showResults(results)),
        onDelete: (id) => dispatch (actionCreator.deleteResults(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);