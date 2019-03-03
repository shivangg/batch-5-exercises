import React, { Component } from 'react';

import './styles/App.css';
import ColorList from './components/ColorList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState(({ colors }) => {
      return { colors: [newColor, ...colors] };
    });
  }

  render() {
    const { colors } = this.state;
    const colorListComponent = () => (
      <ColorList handleAdd={this.handleAdd} colors={colors} />
    );

    return colorListComponent();
  }
}

export default App;
