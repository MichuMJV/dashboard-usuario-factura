const Factu=require("../models/facturaModel.js")



module.exports= async function retornoFactura(request,response){
    let body=request.body
    const facturadata=await Factu.find(/*{
        "nombre" : body.nombre
    }*/);
    response.json(facturadata)
    console.log(body)
}