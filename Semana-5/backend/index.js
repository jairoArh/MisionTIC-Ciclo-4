const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const app = express()

//Connect DB
require('./drivers/driver-mongoose')

//settings
app.set('port',process.env.PORT || 8080 )

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/books',require('./routes/route-books'))
app.use('/authors',require('./routes/route-authors'))

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'create.html'))
})

app.listen(app.get('port'),()=>console.log(`Server listen at port ${app.get('port')}`))