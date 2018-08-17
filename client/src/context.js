// context.js
import React from 'react';
import uuid from 'uuid';
import { ADD_BOOK, DELETE_BOOK, CHANGE_ROUTE, UPDATE_BOOK } from './types';
import { getBooks } from './actions';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        bookArray: [action.payload, ...state.bookArray]
      };
    // [action.payload, ...state.bookArray]
    /*
        Creates a new array using the []
        The first item will be our payload
        The rest of the items will be the rest of the bookArray, using the spread operator to get them all individually
      */

    case DELETE_BOOK: {
      return {
        ...state,
        bookArray: state.bookArray.filter(book => book.id !== action.payload.id)
      };
    }
    case CHANGE_ROUTE: {
      return {
        ...state,
        route: action.payload.route,
        currentBook: action.payload.book ? action.payload.book : null
      };
    }
    case "GET_BOOKS":{
      return {
        ...state, bookArray: action.payload, route: "viewBooks"
      }
    }
    case UPDATE_BOOK: {
      return {
        ...state,
        bookArray: state.bookArray.map(
          book =>
            book.id === action.payload.book.id ? action.payload.book : book
        ),
        route: action.payload.route,
        currentBook: null
      };
    }
    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    bookArray: [],
    currentBook: null,
    route: 'viewBooks',

    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount(){
    getBooks();
  }

  render() {
    // On Context.Provider, value is what is made available to all of the children of this component. We use this.state, so everything in this components state will be available to use by the children.
    // Then we place the children within the Provider so that everything will render properly.
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
