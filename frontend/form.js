import x from './funciones.js';
const {borrar,updating,nuevo}=x

let div = document.getElementById("Usuariosact");
let newuser = document.getElementById("nuevousuario");

let url = "http://localhost:5000/user";

function gotousuarios(){
  window.location.href="./facturas.html"
}

document.getElementById("facturas").addEventListener("click" ,gotousuarios)


function inputlistener(inputt, ID, nombre, edad, contrasena, correo, usuarios) {
  inputt.addEventListener("focusout", (event) => {
    let nombre3 = nombre.value;
    let edad3 = edad.value;
    let contrasena3 = contrasena.value;
    let correo3 = correo.value;
    updating(event, ID, nombre3, edad3, contrasena3, correo3, usuarios);
  });
}


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



buscador("#buscador",".nombreart")
buscador("#buscador2",".edadart")
buscador("#buscador3",".emailart")



fetch(url)
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => {
    let i = 0;
    response.forEach((usuarios) => {
      i += 1;

      let idnombre = `${usuarios._id}${usuarios.nombre}`;
      let idedad = `${usuarios._id}${usuarios.edad}`;
      let idcontra = `${usuarios._id}contrasena`;
      let idcorr = `${usuarios._id}${usuarios.correo}`;

      let texto = document.createElement("ul");
      texto.id = usuarios._id;
      texto.className='li'
      texto.innerHTML = `
      <div class='formul'>
          <div class='horizontal'>
            <li>
              <h1 id="titulo">${i}</h1>
            </li>
            <li>
              <input class="forminput nombreart" id='${idnombre}' value='${usuarios.nombre}' placeholder='${usuarios.nombre}'  type="text"/>
            </li>
            <li>
              <input class="forminput edadart" id='${idedad}' value='${usuarios.edad}'   placeholder='${usuarios.edad}'  type="number"/>
            </li>
            <li>
              <input class="forminput" id='${idcontra}' placeholder='Nueva Contraseña' type="text"/>
            </li>
            <li>
              <input class="forminput emailart" id='${idcorr}' value='${usuarios.correo}' placeholder='${usuarios.correo}'  type="email"/>
            </li>
            <li>
              <button type='submit' class="buttontrash" id="userdelete${usuarios._id}">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </li>
          </div>
          <h2 style="color:black; display:none" id='${usuarios._id}error'></h2>
      </div>`;
      div.appendChild(texto);

      let botonborrado = document.getElementById(`userdelete${usuarios._id}`);
      botonborrado.addEventListener("click", (event) =>
        borrar(event, usuarios._id)
      );

      let inputnombre = document.getElementById(idnombre);
      let inputedad = document.getElementById(idedad);
      let inputcontra = document.getElementById(idcontra);
      let inputcorreo = document.getElementById(idcorr);

      inputlistener(
        inputnombre,
        usuarios._id,
        inputnombre,
        inputedad,
        inputcontra,
        inputcorreo,
        usuarios
      );
      inputlistener(
        inputedad,
        usuarios._id,
        inputnombre,
        inputedad,
        inputcontra,
        inputcorreo,
        usuarios
      );
      inputlistener(
        inputcontra,
        usuarios._id,
        inputnombre,
        inputedad,
        inputcontra,
        inputcorreo,
        usuarios
      );
      inputlistener(
        inputcorreo,
        usuarios._id,
        inputnombre,
        inputedad,
        inputcontra,
        inputcorreo,
        usuarios
      );
    });
  });

newuser.addEventListener("click", nuevo);
