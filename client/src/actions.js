//Holds methods for interacting with the server
//same methods as the backend
//getBooks(dispatch)  |  getBook(id, dispatch)  |  addBook(book,dispatch)

import axios from 'axios';

export const getBooks = dispatch => {
    axios.get('localhost:3000/api/books')
        .then(result=>{
            console.log(result);
            dispatch({
                type: "GET_BOOKS", 
                payload: result.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
}