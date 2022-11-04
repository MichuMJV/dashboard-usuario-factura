const mongoose =require("mongoose")


const facturasqueme= mongoose.Schema({
    numeroFactura: String,
    RUCemisor: String,
    DireccionEmisor: String,
    NombreCliente: String,
    RUCcliente: String,
    Costo: Number,
    ITBMSneto: Number,
    CostoNeto: Number,
    Fecha: Date,
    FormaPago: String,
    ValorPagado: Number,
    CambioDevuelto: Number
})

const factura= mongoose.model('factura', facturasqueme)

module.exports=factura