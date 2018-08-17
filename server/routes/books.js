const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController');
const cors = require('cors');

/* GET users listing. */

router.get('/', cors(), function(req, res, next) {
    
    bookController.getAllBooks()
                .then(books=> {
                    res.json({message: 'Success', data: books});
                    return;
                })
                .catch(err=>{
                    res.status(400).json({message: 'Failed', error: err});
                    return;
                })
})

router.post('/', function(req, res, next) {
    bookController.addBook(req.body.book)
                .then(book=>{
                    res.json({message: 'Success', data: book});
                    return;
                })
                .catch(err=>{
                    res.status(400).json({message: 'Failed', error: err});
                    return;
                })
})




module.exports = router
