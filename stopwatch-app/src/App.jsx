import './App.css'
import React, { Component } from 'react';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.interval = null;
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      clearInterval(this.interval);
    } else {
      this.interval = setInterval(() => {
        let { hours, minutes, seconds } = this.state;
        seconds++;
        if (seconds === 60) {
          seconds = 0;
          minutes++;
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
        }
        this.setState({ hours, minutes, seconds });
      }, 1000);
    }
    this.setState({ isRunning: !this.state.isRunning });
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.setState({
      isRunning: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <div className="time">
          <span className="time-section">Hours: {hours}</span>
          <span className="time-section">Minutes: {minutes}</span>
          <span className="time-section">Seconds: {seconds}</span>
        </div>
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



