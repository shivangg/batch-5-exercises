import React, { Component } from 'react';

/*
* Exercise 2:
*
*  Create a `StopWatch` component that has a Start/Stop button and a Clear
*  button.
*
*  Pressing Start will start a timer and the lapsed time in
*  milliseconds should be displayed above the buttons.
*
*  Once started the Start button should change to Stop. Clicking Stop
*  will stop the timer but lapsed time will be preserved.
*
*  Clicking Start again will resume the timer from where it left off.
*
*  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
*/

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInSeconds: 0,
      isPlaying: false,
      timer_id: null,
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  startTimer() {
    if (this.state.isPlaying) {
      return;
    }
    const timer = setInterval(() => {
      this.setState((state) => {
        const newState = { ...state };
        newState.timeInSeconds += 1;
        return newState;
      });
    }, 1000);
    this.setState({ timer_id: timer, isPlaying: true });
  }

  pauseTimer() {
    clearInterval(this.state.timer_id);
    this.setState({ timer_id: null, isPlaying: false });
  }

  clearTimer() {
    this.pauseTimer();
    this.setState({ timeInSeconds: 0 });
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  render() {
    const playPause = (this.state.isPlaying) ? ['Pause', this.pauseTimer] : ['Play', this.startTimer];
    return (
      <div>
        <h1>Stop Watch</h1>
        <p>{this.state.timeInSeconds}</p>
        <button onClick={playPause[1]}>{playPause[0]}</button>
        <button onClick={this.clearTimer}>Clear Timer</button>
      </div>
    );
  }
}

export default StopWatch;
