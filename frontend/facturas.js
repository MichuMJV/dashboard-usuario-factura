import { updating, borrar , nuevo} from './funcionesFactu.js';



function buscador(classinput, classlista){
  document.addEventListener("keyup", e=>{
    if (e.target.matches(classinput)){
        if (e.key ==="Escape")e.target.value = ""
        document.querySelectorAll(classlista).forEach(founded =>{
          founded.value.toLowerCase().includes(e.target.value.toLowerCase())
            ?founded.parentNode.parentNode.classList.remove("filtro")
            :founded.parentNode.parentNode.classList.add("filtro")
        })
    }
  })
}

buscador("#buscador",".RUCclienteart")
buscador("#buscador2",".NumfactArt")








let url = "http://localhost:5000/invoice";

let fact = document.getElementById("actInv");

function gotofacturas(){
    window.location.href="./formulario.html"
}


function inputlistener(obj, ID, numfact, ruce, rucc,costo,costonet,fecha,formapago,itbms,factu) {
  obj.forEach(inputtext=>{
    inputtext.addEventListener("focusout", (event) => {
      let factura=numfact.value;
      let Rucemisor=ruce.value;
      let Ruccliente=rucc.value;
      let Costopagar=costo.value;
      let Costoneto=costonet.value;
      let fechaNew=fecha.value;
      let forma=formapago.value;
      let impuesto=itbms.value;
      updating(event, ID, factura,Rucemisor,Ruccliente,Costopagar,Costoneto,fechaNew,forma,impuesto,factu);
    });
  })
}



fetch(url)
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => {
    let i = 0;
    response.forEach((factu) => {
      i += 1;
      //let fechafactura=new Date(factu.Fecha).toISOString().split('T')[0];
      let fechafactura=new Date(factu.Fecha).toISOString().slice(0,16);

      let numeroFactura = `${factu._id}${factu.numeroFactura}`;
      let RUCemisor = `${factu._id}${factu.RUCemisor}`;
      let RUCcliente = `${factu._id}${factu.RUCcliente}`;
      let Costo = `${factu._id}${factu.Costo}`;
      let CostoNeto = `${factu._id}${factu.CostoNeto}`;
      let Fecha = `${factu._id}${factu.Fecha}`;
      let FormaPago = `${factu._id}${factu.FormaPago}`;
      let ITBMSneto = `${factu._id}${factu.ITBMSneto}`;

      let formasDePago=["nequi","efectivo","yappy","tarjeta"]
//<option value="nequi">nequi</option>
      let texto = document.createElement("li");
      texto.id = factu._id;
      texto.className='li'
      texto.innerHTML = `
      <li class='form'>
          <div class='horizontal2'>

            <li>
              <h1 id="titulo">${i}</h1>
            </li>

            <li>
              <input class="forminput2 nombreart NumfactArt" id='${numeroFactura}' value='${factu.numeroFactura}' placeholder='${factu.numeroFactura}'  type="text"/>
            </li>
            
            <li>
              <input class="forminput2 nombreart" id='${RUCemisor}' value='${factu.RUCemisor}' placeholder='${factu.RUCemisor}'  type="text"/>
            </li>
            
            <li>
              <input class="forminput2 nombreart RUCclienteart" id='${RUCcliente}' value='${factu.RUCcliente}' placeholder='${factu.RUCcliente}'  type="text"/>
            </li>
            
            <li>
              <input class="forminput2 nombreart" id='${Costo}' value='${factu.Costo}' placeholder='${factu.Costo}'  type="number"/>
            </li>

            <li>
              <input class="forminput2 nombreart" id='${CostoNeto}' value='${factu.CostoNeto}' placeholder='${factu.CostoNeto}'  type="number"/>
            </li>
            
            <li>
              <input class="forminput2 nombreart" id='${Fecha}' value='${fechafactura}' type="datetime-local"/>
            </li>
            
            <li>
              <select class="forminput2" name="tipopago" id='${FormaPago}' form="tipopagoinv">
                ${
                  formasDePago.map(forma => {
                    return `<option ${factu.FormaPago.toLowerCase()===forma?'selected': ''} value="${forma}">${forma}</option>`;
                  }).join('')
                }
              </select>
            </li>
            
            <li>
              <input class="forminput2 nombreart li" id='${ITBMSneto}' value='${factu.ITBMSneto}' placeholder='${factu.ITBMSneto}'  type="number"/>
            </li>

            <li>
              <button type='submit' class="buttontrash" id="factudelete${factu._id}">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </li>

          </div>
          <h2 style="color:black; display:none" id='${factu._id}error'></h2>
      </li>`;
      fact.appendChild(texto);

      let botonborrar = document.getElementById(`factudelete${factu._id}`);
      botonborrar.addEventListener("click", (event) =>
        borrar(event, factu._id)
      );

      let inputnumeroFactura=document.getElementById(numeroFactura);
      let inputRUCemisor=document.getElementById(RUCemisor);
      let inputRUCcliente=document.getElementById(RUCcliente);
      let inputCosto=document.getElementById(Costo);
      let inputCostoNeto=document.getElementById(CostoNeto);
      let inputFecha=document.getElementById(Fecha);
      let inputFormaPago=document.getElementById(FormaPago);
      let inputITBMSneto=document.getElementById(ITBMSneto);


      let objinputslisteners=[
        inputnumeroFactura,
        inputRUCemisor,
        inputRUCcliente,
        inputCosto,
        inputCostoNeto,
        inputFecha,
        inputFormaPago,
        inputITBMSneto
      ]

      inputlistener(
        objinputslisteners,
        factu._id,
        inputnumeroFactura,
        inputRUCemisor,
        inputRUCcliente,
        inputCosto,
        inputCostoNeto,
        inputFecha,
        inputFormaPago,
        inputITBMSneto,
        factu
      )}
    )
  }
)

document.getElementById("usuarios").addEventListener("click" ,gotofacturas)

document.getElementById("añadirfactu").addEventListener("click" ,nuevo)