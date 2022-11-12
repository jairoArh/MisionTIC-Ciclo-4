const mongoose = require('mongoose')

//const URI = "mongodb://localhost:27017/books"
const URI = "mongodb+srv://UserDB_MinTIC:faeThjefWFV41IA2@cluster0.ylr66ui.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(URI)
    .then(()=>console.log(`Connect to mongoose Success..`))
    .catch( e => console.log(e))

module.exports = mongoose