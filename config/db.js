const mongoose = require("mongoose")
const conectarDB= ()=>{
    try{
        mongoose.connect('mongodb://localhost',{useNewUrlParser:true, useUnifiedTopology:true})
    }
    catch(error){
        console.log("mal ahí",error)
    }
}

module.exports=conectarDB