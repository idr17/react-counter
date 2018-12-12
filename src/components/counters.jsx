import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
        <div>
            <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            { this.props.counters.map(cnt => <Counter key={cnt.id} id={cnt.id} counter={cnt} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} />) }
        </div>);
    }
}
 
export default Counters;