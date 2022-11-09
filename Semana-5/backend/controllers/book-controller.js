const toJson = require('../utils/tools')

const books = new Map()

module.exports = {
    findAll: (req,res)=>{
        
        return res.status(200).json({state:true,data:toJson(books)})
    },

    findById: (req,res)=>{
        const {id} = req.params
        
        if( books.has( parseInt(id) ) ){
            return res.status(200).json({state:true,data:books.get(parseInt(id))})
        }else{
            return res.status(200).json({state:false})
        }
    },

    save: (req,res)=>{

        const {id,title,author,pages,release} = req.body
        
        if( !books.has(id)){
            books.set(id,{id,title,author,pages,release})
            return res.status(200).json({state:true,data:books.get(id)})
        }else{
            return res.status(200).json({state:false})
        }
        
    },

    update: (req,res)=>{
        const {idAux} = req.params
        const {id,title,author,pages,release} = req.body
        if( books.has(parseInt(idAux))){
            console.log(`id=${id} title=${title} pages=${pages}`)
            books.set(id,{id,title,author,pages,release})

            return res.status(200).json({state:true,data:books.get(parseInt(idAux))})
        }else{
            return res.status(200).json({state:false})
        }
    },

    erase: (req,res)=>{
        const {id} = req.params

        if( books.has(id)){
            const book = books.get(id)
            books.delete(id)

            return res.status(200).json({state:true,data:book})

        }else{
            return res.status(200).json({state:false})
        }
    }

}