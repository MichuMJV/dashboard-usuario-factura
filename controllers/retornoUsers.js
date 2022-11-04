const User=require("../models/usuarioModel.js")


module.exports= async function retornoUsers(request,response){
    let body=request.body
    const userdata=await User.find(/*{
        "nombre" : body.nombre
    }*/).select({
        _id:1,
        nombre:1,
        edad:1,
        correo:1
    });
    response.json(userdata)
    console.log(body)
}