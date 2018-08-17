import React, { Component } from 'react';

import BookList from './components/BookList';
import { Provider, Consumer } from './context';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <Consumer>
          {store => {
            const { dispatch, route } = store;
            return <BookList route={route} dispatch={dispatch} />;
          }}
        </Consumer>
      </Provider>
    );
  }
}
