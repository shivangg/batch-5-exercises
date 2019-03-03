import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';

import Color from './Color';
import NewColor from './NewColor';

import '../styles/ColorList.css';

const Header = () => (
  <header className="App-header">
    <h1 className="App-title">Welcome to the Colorful Router.</h1>
    <Link to="/colors/new">
      <h1>Add a color</h1>
    </Link>
  </header>
);

const ColorChangerAndHeader = (props) => {
  const colorLinks = props.colors.map((color) => (
    <Link key={`/colors/${color.name}`} to={`/colors/${color.name}`}>
      <li key={color.hex}>{color.name}</li>
    </Link>
  ));
  return (
    <div>
      <Header />
      <div className="App-intro">
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
      </div>
    </div>
  );
};

const ColorList = (props) => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/colors"
            render={() => <ColorChangerAndHeader {...props} />}
          />
          <Route
            exact
            path="/colors/new"
            render={(routeProps) => {
              const addColor = (newColor) => {
                props.handleAdd(newColor);
              };
              return (
                <NewColor
                  history={routeProps.history}
                  location={routeProps.location}
                  addColor={addColor}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/colors/:color"
            render={(routeProps) => {
              const colorToRender = [...props.colors].filter(
                ({ name }) => name === routeProps.match.params.color,
              )[0];

              if (!colorToRender) {
                return <Redirect to="/colors" />;
              }
              return <Color color={colorToRender} />;
            }}
          />
          <Redirect to="/colors" />
        </Switch>
      </div>
    </Router>
  );
};

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  handleAdd: PropTypes.instanceOf(Function).isRequired,
};

ColorChangerAndHeader.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
