const Factu=require("../models/facturaModel.js")

module.exports= async function crearFactura(request,response){
    let body=request.body
    const facturadata= {
        numeroFactura: body.numeroFactura,
        RUCemisor: body.RUCemisor,
        DireccionEmisor: body.DireccionEmisor,
        NombreCliente: body.NombreCliente,
        RUCcliente: body.RUCcliente,
        Costo: body.Costo,
        ITBMSneto: body.ITBMSneto,
        CostoNeto: body.CostoNeto,
        Fecha: body.Fecha,
        FormaPago: body.FormaPago,
        ValorPagado: body.ValorPagado,
        CambioDevuelto: body.CambioDevuelto
    }
    const nuevafactura = new Factu(facturadata);
    try{    
        await nuevafactura.save()
    }
    catch(e){
        console.log({error:e.reason})
    }
    response.json({success:true})
    console.log(body)
}