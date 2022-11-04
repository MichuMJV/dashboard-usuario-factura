const mongoose =require("mongoose")

const usuariosqueme= mongoose.Schema({
    nombre: String,
    edad: Number,
    contra: String,
    correo: String})

const Usuario= mongoose.model('Usuario', usuariosqueme)

module.exports=Usuario