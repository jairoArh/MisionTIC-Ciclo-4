const Author = require('../models/Author')

module.exports = {
    findAll : async(req,res)=>{
        try{
            const result = await Author.find({})
            
            return res.status(200).json({state:true, data:result})
        }catch( err ){
            return res.status(500).json({state:false,data:err})
        }
    },

    findById : async(req,res)=>{
        const {id} = req.params
        try{
            //const result = await Author.findById(id)
            const result = await Author.findById(id).populate('books')

            return res.status(200).json({state:true, data:result})
        }catch(err){
            return res.status(500).json({state:false,data:err})
        }
    },

    save : async(req,res)=>{
        try{
            const author = new Author( req.body )
            const result = await author.save()

            return res.status(200).json({state:true, data:result})
        }catch(err){
            return res.status(500).json({state:false,data:err})
        }
    },

    erase : async(req,res)=>{
        const {id} = req.params
        try{
            //TODO revisar borrar en cascada 
            const result = await Author.findByIdAndDelete(id)

            return res.status(200).json({state:true, data:result})
        }catch(err){
            return res.status(500).json({state:false,data:err})
        }
    },

    update : async(req,res)=>{
        const {id} = req.params;
        const authorAux = req.body
        try{
            const result = await Author.findByIdAndUpdate(id,authorAux);

            return res.status(200).json({state:true, data:result})

        }catch(err){
            return res.status(500).json({state:false,data:err})
        }
    }
}