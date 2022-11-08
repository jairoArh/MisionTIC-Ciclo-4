const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const path = require('path')

const app = express()

//settings
app.set('port',process.env.PORT || 3000 )

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/books',require('./routes/route-books'))

app.get('/',(req,res)=>{
    return res.sendFile(path.join(__dirname,'create.html'))
})

app.listen(app.get('port'),()=>console.log(`Server listen at port ${app.get('port')}`))