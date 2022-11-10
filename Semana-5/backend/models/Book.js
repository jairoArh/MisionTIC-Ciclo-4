const mongoose = require('mongoose')

const {Schema} = mongoose

const BookSchema = new Schema({
    id : {
        type: Number,
        required: true,
        unique : true
    },
    title :{
        type:String,
        required: true
    },
    pages:{
        type: Number,
        required:true
    },
    release:{
        type: Date,
        required: false
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:'author'
    }
})

module.exports = mongoose.model('book',BookSchema)