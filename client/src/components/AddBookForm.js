import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import { Consumer } from '../context';
import { CHANGE_ROUTE, ADD_BOOK } from '../types';

class AddBookForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: '',
      description: '',
      price: ''
    };
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  addBookHandler = (dispatch, route, e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page.

    const { title, author, description, price } = this.state;

    const newBook = {
      id: uuid(),
      title,
      author,
      description,
      price
    };

    // const action = {type: 'ADD_BOOK', payload: newBook};
    // dispatch(action);

    dispatch({
      type: ADD_BOOK,
      payload: newBook
    });

    dispatch({
      type: CHANGE_ROUTE,
      payload: { route: route }
    });
  };

  render() {
    return (
      <Consumer>
        {store => {
          const { dispatch } = store;
          return (
            <div className="container mx-auto w-50">
              <form
                onSubmit={this.addBookHandler.bind(this, dispatch, 'viewBooks')}
              >
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    className="form-control"
                    name="author"
                    value={this.state.author}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label />
                  <textarea
                    type="text"
                    className="form-control"
                    name="description"
                    value={this.state.description}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={this.state.price}
                    onChange={this.onChange.bind(this)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Book
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//At the top import proptypes:
// import PropTypes from 'prop-types';

// Before the export
AddBookForm.propTypes = {
  style: PropTypes.object
};

AddBookForm.defaultProps = {
  style: { borderRadius: '5px', marginTop: '10px' }
};

export default AddBookForm;
