const Book = require('../models/Book')
const Author = require('../models/Author')

module.exports = {
    findAll: async(req,res)=>{
        try{
            const result = await Book.find({})

            return res.status(200).json({state:true,data:result})
        }catch( err ){
            res.status(500).json({state:false,data:err})
        }
    },

    save : async(req, res)=>{
        const {id} = req.params
        try{
            const author = await Author.findById(id)
            console.log( author )
            if( author ){
                const book = new Book(req.body )
                author.books.push(book)
                
                await author.save()

                book.author = author

                const result = await book.save()

                return res.status(200).json({state:true,data:result})
            }else{
                return res.status(200).json({state:false})
            }
        }catch( err ){
            res.status(500).json({state:false,data:err})
        }
    }

} 