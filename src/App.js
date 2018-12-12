import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        { id: 1, value: 3, selected: false },
        { id: 2, value: 0, selected: false },
        { id: 3, value: 0, selected: false },
        { id: 4, value: 2, selected: false },
        { id: 5, value: 0, selected: false }
    ]
 }

 handleDelete = counterId => {
     let counters = (this.state.counters.filter(cnt => cnt.id !== counterId))
     this.setState({ counters })
 }

 doReset = () => {
     const counters = this.state.counters.map(cnt => {
         cnt.value = 0;
         return cnt;
     })
     this.setState({ counters });
 }

 handleIncrement = counter => {
     const counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index] = { ...counter };
     counters[index].value++;
    this.setState({ counters });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounter={this.state.counters.length} />
        <main className="container">
          <Counters counters={this.state.counters} onReset={this.doReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
