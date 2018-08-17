const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{type:String, default:'', required:true},
    description:{type:String, default:''},
    author:{type:String, default:''},
    price:{type:Number, default:0}
});

module.exports = mongoose.model('book', bookSchema);
