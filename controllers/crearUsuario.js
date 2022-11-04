const User=require("../models/usuarioModel.js")


module.exports= async function crearUsuario(request,response){
    let body=request.body
    const userdata= {
        nombre:body.nombre,
        edad:body.edad,
        contra:body.contrasena,
        correo:body.correo
    }
    const nuevousuario = new User(userdata);
    try{    
        await nuevousuario.save()
    }
    catch(e){
        console.log({error:e.reason})
    }
    response.json({success:true})
    console.log(body)
}