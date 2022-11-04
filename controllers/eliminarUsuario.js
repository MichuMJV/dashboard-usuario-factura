const User=require("../models/usuarioModel.js")


module.exports= async function eliminarUsuario(request, response){
    let body=request.body
    console.log(body)
    try{
        const userdel=await User.findByIdAndDelete({ _id: body.id });
        response.json(userdel)
    }catch(err){
        console.log(err)
        response.status(500).json({err})
    }
}
