const Factu=require("../models/facturaModel.js")


module.exports= async function eliminarFactura(request, response){
    let body=request.body
    console.log(body)
    try{
        const Factudel=await Factu.findByIdAndDelete({ _id: body.id });
        response.json(Factudel)
    }catch(err){
        console.log(err)
        response.status(500).json({err})
    }
}
