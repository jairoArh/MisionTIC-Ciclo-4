const mongoose = require('mongoose')

const URI = "mongodb://localhost:27017/books"

mongoose.connect(URI)
    .then(()=>console.log(`Connect to mongoose Success..`))
    .catch( e => console.log(e))

module.exports = mongoose