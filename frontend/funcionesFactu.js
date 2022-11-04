let url = "http://localhost:5000/invoice";

function nuevo() {
  let divnewuser = document.getElementById("newInv");
  document.getElementById("añadirfactu").style.display = "none";
  divnewuser.innerHTML = ` 
      <div class="horizontal">
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="text" name="Factura" id="Facturain">
                  <label for="Facturain" class="formlabel">#Factura</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="text" name="RucE" id="RUCemisorin">
                  <label for="RUCemisorin" class="formlabel">RUC emisor</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="text" name="contrasena" id="RUCclientein">
                  <label for="RUCclientein" class="formlabel">RUC Cliente</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="number" name="costo" id="Costoin">
                  <label for="Costoin" class="formlabel">Costo</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="number" name="neto" id="Neto">
                  <label for="Neto" class="formlabel">$ neto</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="date" name="fecha" id="Fechain">
              </div>
          </form>
          <form class="form">
          <div class="formgroup">
              <select class="forminput2" name="tipopago" id='Tipopagoin' form="tipopagoinv">
                  <option value="nequi">nequi</option>
                  <option value="yappy">yappy</option>
                  <option value="efectivo">efectivo</option>
                  <option value="tarjeta">tarjeta</option>
              </select>
          </div>
      </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput2" placeholder=" " type="number" name="impuesto" id="impuesto">
                  <label for="impuesto" class="formlabel">ITBMS neto</label>
              </div>
          </form>
        </div>
        <h2 style="color:black; display:none" id='inputerror'></h2>
        <br>
        <div class="centreado"><button class="botondefault2" id="submitt" type:'submit'>Agregar Factura</button></div>
      </div>`;
  let submit = document.getElementById("submitt");
  submit.addEventListener("click", post);
}

function post(event) {
  event.preventDefault();
  let Facturain = document.getElementById("Facturain").value;
  let RUCemisorin = document.getElementById("RUCemisorin").value;
  let RUCclientein = document.getElementById("RUCclientein").value;
  let Costoin = document.getElementById("Costoin").value;
  let impuestoin = document.getElementById("impuesto").value;
  let Neto = document.getElementById("Neto").value;
  let Fechain = document.getElementById("Fechain").value;
  let Tipopagoin = document.getElementById("Tipopagoin").value;

  let data = {
    numeroFactura: Facturain,
    RUCemisor: RUCemisorin,
    RUCcliente: RUCclientein,
    Costo: Costoin,
    ITBMSneto: impuestoin,
    CostoNeto: Neto,
    Fecha: Fechain,
    FormaPago: Tipopagoin,
  };
  fetch(url, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);
      location.reload();
    });
}

function updating(
  event,
  ID,
  factura,
  Rucemisor,
  Ruccliente,
  Costopagar,
  Costoneto,
  fechaNew,
  forma,
  impuesto,
  factu
) {
  event.preventDefault();

  let data2;

  let inputnumeroFactura = document.getElementById(
    `${factu._id}${factu.numeroFactura}`
  );
  let inputRUCemisor = document.getElementById(
    `${factu._id}${factu.RUCemisor}`
  );
  let inputRUCcliente = document.getElementById(
    `${factu._id}${factu.RUCcliente}`
  );
  let inputCosto = document.getElementById(`${factu._id}${factu.Costo}`);
  let inputCostoNeto = document.getElementById(
    `${factu._id}${factu.CostoNeto}`
  );
  let inputFecha = document.getElementById(`${factu._id}${factu.Fecha}`);
  let inputFormaPago = document.getElementById(
    `${factu._id}${factu.FormaPago}`
  );
  let inputITBMSneto = document.getElementById(
    `${factu._id}${factu.ITBMSneto}`
  );

  data2 = {
    id: ID,
    numeroFactura: factura,
    RUCemisor: Rucemisor,
    RUCcliente: Ruccliente,
    Costo: Costopagar,
    ITBMSneto: impuesto,
    CostoNeto: Costoneto,
    Fecha: fechaNew,
    FormaPago: forma,
  };

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data2),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);

      inputnumeroFactura.value = factura;
      inputnumeroFactura.placeholder = factura;

      inputRUCemisor.value = Rucemisor;
      inputRUCemisor.placeholder = Rucemisor;

      inputRUCcliente.value = Ruccliente;
      inputRUCcliente.placeholder = Ruccliente;

      inputCosto.value = Costopagar;
      inputCosto.placeholder = Costopagar;

      inputCostoNeto.value = Costoneto;
      inputCostoNeto.placeholder = Costoneto;

      inputFecha.value = fechaNew;
      inputFecha.placeholder = fechaNew;

      inputFormaPago.value = forma;
      inputFormaPago.placeholder = forma;

      inputITBMSneto.value = impuesto;
      inputITBMSneto.placeholder = impuesto;
    });
}

export { updating, borrar, nuevo };

function borrar(event, ID) {
  event.preventDefault();
  let data = {
    id: ID,
  };
  fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
      console.log("Success:", response);
      let factdiv = document.getElementById(ID);
      factdiv.remove();
    });
}
