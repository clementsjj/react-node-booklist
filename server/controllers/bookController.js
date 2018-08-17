//Methods to do things on db:
//=Retrieve=
//getAllBooks
//getSingleBook(id)

//=Create=
//addBook({book object})

//=Update=
//updateBook({book object})

//=Delete=
//deleteBook(id)

const Book = require('../models/Book.js');

module.exports = {
    getAllBooks: () => {
        return new Promise((resolve,reject) => {

            Book.find({})
                .then(books => {
                    console.log(books);
                    resolve(books)
                })
                .catch(err => reject(err));
        });
    },
    getBook: (id) => {

    },
    addBook: (book) => {
        return new Promise((resolve,reject)=>{
            const newBook = new Book({
                title: book.title, 
                description: book.description,
                author: book.author,
                price: book.price
            });
            newBook.save().then(book=>resolve(book)).catch(err=>reject(book));
        });
    },
    updateBook: (book) => {
        return new Promise((resolve, reject)=>{
            Book.findOneAndUpdate({_id:book._id},book)
                .then(book=>resolve(book))
                .catch(err=>reject(err));
        })
                
    },
    deleteBook: (id) => {
        return new Promise((resolve, reject)=>{
            Book.findOneAndDelete({_id:id})
                .then(book=>resolve(book))
                .catch(err=> reject(err));
        });
    }
}

