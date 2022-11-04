const Factu=require("../models/facturaModel.js")

module.exports= async function updatefactura(request,response){
    let body=request.body
    let Factudata= {
        numeroFactura: body.numeroFactura,
        RUCemisor: body.RUCemisor,
        RUCcliente: body.RUCcliente,
        Costo: body.Costo,
        ITBMSneto: body.ITBMSneto,
        CostoNeto: body.CostoNeto,
        Fecha: body.Fecha,
        FormaPago: body.FormaPago
    }
    const Factudel=await Factu.updateOne({
        _id: body.id
    },Factudata);
    console.log(Factudel)
    response.json({success:true})
}