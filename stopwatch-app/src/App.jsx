import './App.css'

import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      elapsed: 0,
    };
    this.interval = null;
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        this.setState({ elapsed: this.state.elapsed + 1 });
      }, 1000);
    }
    this.setState({ isRunning: !this.state.isRunning });
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false,
      elapsed: 0,
    });
  };

  render() {
    return (
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="time">{this.state.elapsed} seconds</div>
        <div className="controls">
          <button onClick={this.handleStartStop}>
            {this.state.isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}

export default App;

