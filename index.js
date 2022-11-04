const express= require("express")
const app=express();

const cors=require("cors")

const basededatos= require("./config/db.js") 

const port=5000;

const crearUsuario = require("./controllers/crearUsuario.js");
const retornoUsers = require("./controllers/retornoUsers.js");
const eliminarUsuario = require("./controllers/eliminarUsuario.js");
const updateUsuario = require("./controllers/updateUsuario.js");

const crearFactura = require("./controllers/crearFactura.js");
const retornoFactura = require("./controllers/retornoFactura.js");
const eliminarFactura = require("./controllers/eliminarFactura.js");
const updateFactura = require("./controllers/updateFactura.js");


basededatos()
app.use(express.json())
app.use(cors()) //arregla error cors de puertos para desbloquear todo
app.use(express.urlencoded({extended:true}))

app.post("/user",crearUsuario)
app.get("/user",retornoUsers)
app.delete("/user",eliminarUsuario)
app.put("/user",updateUsuario)

app.post("/invoice",crearFactura)
app.get("/invoice",retornoFactura)
app.delete("/invoice",eliminarFactura)
app.put("/invoice",updateFactura)


app.listen(port, ()=> console.log(`exampl app listening on port ${port}!`)); 