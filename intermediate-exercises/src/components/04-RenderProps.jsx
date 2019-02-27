/**
  Exercise:

  - Refactor App by creating a new component named `<GeoPosition>`
  - <GeoPosition> should use a child render callback that passes
    to <App> the latitude and longitude state
  - When you're done, <App> should no longer have anything but
    a render method

  Part 2:
  - Now create a <GeoAddress> component that also uses a render
    callback with the current address. You will use
    `getAddressFromCoords(latitude, longitude)` to get the
    address, it returns a promise.
  - You should be able to compose <GeoPosition> and <GeoAddress>
    beneath it to naturally compose both the UI and the state
    needed to render it
  - Make sure <GeoAddress> supports the user moving positions

  There is an image of the end result of this exercise in the root of this directory
  by the name - `render_props.png`. Good luck!

  NOTE: It is important to do this exercise using render props.
  https://reactjs.org/docs/render-props.html
 */

/* eslint-disable react/no-multi-comp */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getAddressFromCoords from './utils/getAddressFromCoords';

class GeoAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };
  }

  componentDidMount() {
    getAddressFromCoords(this.props.latitude, this.props.longitude)
      .then(addr => this.setState({ address: addr }));
  }

  render() {
    const { render } = this.props;
    return render(this.state.address);
  }
}

GeoAddress.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  render: PropTypes.instanceOf(Function).isRequired,
};

class GeoPosition extends Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
      },
      error: null,
    };
  }

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        this.setState({ error });
      },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    const { render } = this.props;
    return render(this.state);
  }
}

GeoPosition.propTypes = {
  render: PropTypes.instanceOf(Function).isRequired,
};


function App() {
  return (
    <GeoPosition render={({ error, coords }) => (
      <div>
        <h1>Geolocation</h1>
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          <dl>
            <dt>Latitude</dt>
            <dd>{coords.latitude || <p>create a loader and show here...</p>}</dd>
            <dt>Longitude</dt>
            <dd>{coords.longitude || <p>create a loader and show here...</p>}</dd>
          </dl>
          )}
        {(coords.latitude && coords.longitude) ? (<GeoAddress
          latitude={coords.latitude}
          longitude={coords.longitude}
          render={res => <p>You are @ {res}</p>}
        />) : null}
      </div>
    )}
    />);
}

export default App;
