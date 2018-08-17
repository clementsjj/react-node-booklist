import React from 'react';

import Books from './Books';
import AddBookForm from './AddBookForm';
import Navbar from './Navbar';
import EditBookForm from './EditBookForm';
import { Consumer } from '../context';

class BookList extends React.Component {
  render() {
    let element;
    switch (this.props.route) {
      case 'viewBooks': {
        element = <Books />;
        break;
      }
      case 'addBook': {
        element = <AddBookForm />;
        break;
      }
      case 'editBook': {
        element = (
          <Consumer>
            {store => {
              const { dispatch, currentBook } = store;
              return <EditBookForm book={currentBook} dispatch={dispatch} />;
            }}
          </Consumer>
        );
        break;
      }
    }
    /*
      Add a way for the AddBook element to re-route back to 
      the BookList view after a book has been added.
    */
    return (
      <div>
        <Navbar />
        {element}
      </div>
    );
  }
}

export default BookList;
