const User=require("../models/usuarioModel.js")

module.exports= async function updateUsuario(request,response){
    let body=request.body
    let userdata
    console.log(body)
    if(body.contrasena){
        userdata= {
            nombre:body.nombre,
            edad:body.edad,
            contra:body.contrasena,
            correo:body.correo
        }
    }
    else{
        userdata= {
            nombre:body.nombre,
            edad:body.edad,
            correo:body.correo
        }
    }
    const userdel=await User.updateOne({
        _id: body.id
    },userdata);
    console.log(userdel)
    response.json({success:true})
}