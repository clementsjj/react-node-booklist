import React from 'react';
import Book from './Book';
import { Consumer } from '../context';

export default props => {
  const divStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '5px',
    padding: '10px'
  }; // Alternate way to do styling in JS
  return (
    <Consumer>
      {store => {
        const { dispatch } = store;

        return (
          <div className="grid-container" style={divStyle}>
            {store.bookArray.map((book, index) => (
              <Book key={`book-${index}`} book={book} dispatch={dispatch} />
            ))}
          </div>
        );
      }}
    </Consumer>
  );
};
