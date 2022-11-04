import {verifypass} from './passverification.js'


let url = "http://localhost:5000/user";


function nuevo() {
  let divnewuser = document.getElementById("nweuser");
  document.getElementById("nuevousuario").style.display = "none";
  divnewuser.innerHTML = ` 
      <div class="horizontal">
          <form class="form">
              <div class="formgroup">
                  <input class="forminput" placeholder=" " type="text" name="nombre" id="ID_name">
                  <label for="ID_name" class="formlabel">ID name</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput" placeholder=" " type="number" name="edad" id="edad">
                  <label for="edad" class="formlabel">Edad</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class="forminput" placeholder=" " type="password" name="contrasena" id="contrasena">
                  <label for="contrasena" class="formlabel">Contraseña</label>
              </div>
          </form>
          <form class="form">
              <div class="formgroup">
                  <input class ="forminput" placeholder=" " type="email" name="correo" id="correo">
                  <label for="correo" class="formlabel">E-mail</label>
              </div>
          </form>
      </div>
      <h2 style="color:black; display:none" id='inputerror'></h2>
      <div class="centreado"><button class="botondefault2" id="submi" type:'submit'>Ingresar</button></div>
    </div>`;
  let submit = document.getElementById("submi");
  submit.addEventListener("click", post);
}

function post(event) {
  event.preventDefault();
  let edad = document.getElementById("edad").value;
  let contrasena = document.getElementById("contrasena").value;
  let correo = document.getElementById("correo").value;
  let nombre = document.getElementById("ID_name").value;
  if (nombre != "" && edad != "" && correo != "" && contrasena != "") {
    let texto = verifypass(contrasena);
    if (texto == "done") {
      document.getElementById("inputerror").style.display = "none";
      let data = {
        nombre: nombre,
        edad: edad,
        contrasena: contrasena,
        correo: correo,
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
          document.getElementById("nuevousuario").style.display = "block";
          location.reload();
        });
    } else {
      document.getElementById("inputerror").style.display = "block";
      document.getElementById("inputerror").innerText = texto;
    }
  } else {
    document.getElementById("inputerror").style.display = "block";
    document.getElementById("inputerror").innerText = "algo está vacío";
  }
}

function updating(event, ID, nombre2, edad2, contrasena2, correo2, usuarios) {
  event.preventDefault();

  let data2;
  let inputnombre = document.getElementById(
    `${usuarios._id}${usuarios.nombre}`
  );
  let inputedad = document.getElementById(`${usuarios._id}${usuarios.edad}`);
  let inputcontra = document.getElementById(`${usuarios._id}contrasena`);
  let inputcorr = document.getElementById(`${usuarios._id}${usuarios.correo}`);
  let error = document.getElementById(`${usuarios._id}error`);

  if (nombre2 != "" && edad2 != "" && correo2 != "") {
    error.style.display = "none";
    error.innerText = "";
    data2 = {
      id: ID,
      nombre: nombre2,
      edad: edad2,
      correo: correo2,
    };
    let texto = verifypass(contrasena2);
    if (contrasena2 != "" && texto == "done") {
      data2 = {
        id: ID,
        nombre: nombre2,
        edad: edad2,
        contrasena: contrasena2,
        correo: correo2,
      };
    }
    if (texto != "done" && contrasena2 != "") {
      error.style.display = "block";
      error.innerText = texto;
      return 0;
    }
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
        inputcorr.value = correo2;
        inputcorr.placeholder = correo2;

        inputnombre.value = nombre2;
        inputnombre.placeholder = nombre2;

        inputedad.value = edad2;
        inputedad.placeholder = edad2;

        inputcontra.value = "";
        inputcontra.placeholder = "Nueva Contraseña";
      });
  }
}

function borrar(event, ideee) {
  event.preventDefault();
  let data = {
    id: ideee,
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
      let usuariodiv = document.getElementById(ideee);
      usuariodiv.remove();
    });
}



const funcionesonline={borrar,updating,nuevo}

export {funcionesonline as default}
