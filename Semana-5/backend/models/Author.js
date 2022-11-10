const mongoose = require('mongoose')

const {Schema} = mongoose

const AuthorSchema = new Schema({
    id : {
        type: Number,
        required: true,
        unique : true
    },
    name:{
        type:String,
        required: true
    },
    books : [
        {
            type : Schema.Types.ObjectId,
            ref : 'book'
        }
    ]
})

module.exports = mongoose.model('author',AuthorSchema)