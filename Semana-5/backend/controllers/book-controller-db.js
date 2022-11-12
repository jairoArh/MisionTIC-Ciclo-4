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

    findById : async(req,res)=>{
        const {id} = req.params;

        try{
            const result = await Book.findById(id)

            return res.status(200).json({state:true,data:result})
        }catch(err){
            res.status(500).json({state:false,data:err})
        }
    },

    save : async(req, res)=>{
        const {id} = req.params
        try{
            const author = await Author.findById(id)
            if( author ){
                const book = new Book(req.body )

                await book.save()

                book.author = author

                const result = await book.save()
                
                author.books.push(book)

                await author.save()

                return res.status(200).json({state:true,data:result})
            }else{
                return res.status(200).json({state:false})
            }
        }catch( err ){
            res.status(500).json({state:false,data:err})
        }
    },

    erase : async(req,res)=>{
        const {id} = req.params

        try{
            //Se busca el libro a eliminar para acceder al Autor
            const book = await Book.findById(id)

            //Se busca el Autor del Libro
            const author = await Author.findById(book.author)

            //Se filtran los libros del autor, para eliminar de su arreglo el libro
            const books = author.books.filter( book => book._id != id )

            //console.log(`Autor ${author} tiene ${books.length} libros`)
            
            //Se elimina el libro
            const result = await Book.findByIdAndDelete(id) 

            //Se actualiza el arreglo de libros del Autor

            author.books = books

            await author.save()

            return res.status(200).json({state:true,data:result})

        }catch( err ){
            res.status(500).json({state:false,data:err.toString()})
        }
    }

} 