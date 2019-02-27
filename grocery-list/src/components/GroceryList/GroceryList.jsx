import React from 'react';
import PropTypes from 'prop-types';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      newGrocery: { name: '' },
    };
    this.addGrocery = this.addGrocery.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addGrocery(event) {
    event.preventDefault();
    this.setState((state) => {
      const newState = {
        ...state,
      };
      newState.groceries = [...state.groceries, state.newGrocery];
      newState.newGrocery = { name: '' };
      return newState;
    });
  }

  handleChange(event) {
    const newGrocery = event.target.value;
    this.setState((state) => {
      const newState = {
        ...state,
        newGrocery: { name: newGrocery },
      };
      return newState;
    });
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      <GroceryListItem key={item.name} grocery={item.name} />
    ));
    return (
      <div>
        <ul>
          {
            groceriesComponents
          }
        </ul>
        <form onSubmit={this.addGrocery}>
          <input type="text" value={this.state.newGrocery.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

// Task 1: Fill the `return` of `GroceryList`
// render method.It should
// return
// a list of `GroceryListItem`.You need to display the groceries names
// using `this.props` in `GroceryListItem`.We already prepared the variable `groceriesComponents`
// inside `render`
// method containing a list of these items
// for you.


// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
function GroceryListItem(props) {
  // console.log(this.props.grocery);
  return (
    <li>
      {
        props.grocery
      }
    </li>
  );
}

GroceryListItem.propTypes = {
  grocery: PropTypes.string.isRequired,
};

// Do prop validation here using the package `prop-types`

export default GroceryList;
