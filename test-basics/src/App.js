import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    choice: 'No!',
  };

  toggleChoice = () => {
    this.setState((state) => {
      if (state.choice === 'No!') {
        return {
          choice: 'Yes!',
        };
      }
      return {
        choice: 'No!',
      };
    });
  };

  handleStrings = (string) => {
    if (string === 'Hello World') {
      return true;
    }
    return false;
  };

  handleChange = (event) => {
    const e = event.currentTarget.value;
    this.setState({ input: e });
  };

  render() {
    const { mainColor, input, choice } = this.state;
    return (
      <div className={mainColor}>
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <button
          type="submit"
          className="button-state"
          onClick={this.toggleChoice}
        >
          {choice}
        </button>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    if (hide) {
      return null;
    }

    return <a href={address}>Text</a>;
  }
}

Link.propTypes = {
  hide: PropTypes.bool,
  address: PropTypes.string,
};

Link.defaultProps = {
  hide: undefined,
  address: '',
};

export default App;
