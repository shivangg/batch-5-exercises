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
    const { groceries, newGrocery: { name } } = this.state;

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
          <input type="text" value={name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
function GroceryListItem({ grocery }) {
  return (
    <li>
      {
        grocery
      }
    </li>
  );
}

GroceryListItem.propTypes = {
  grocery: PropTypes.string.isRequired,
};

export default GroceryList;
