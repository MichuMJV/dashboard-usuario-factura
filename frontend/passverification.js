
function validation(obj) {//array es objeto cmabiar nombre estandar
  let bool = false;
  for (let i = 0; i < obj.texto.length; i++) {
    if (obj.validation.indexOf(obj.texto.charAt(i), 0) != -1) {
      bool = true;
    }
  }
  if (!bool) {
    return obj.error;
  }
  return 1;
}

function verifypass(contrasena) {
  let validador = [];
  let mensaje = "la contraseña debe ser mayor a 8 caracteres";
  if (contrasena.length > 8) {
    let lower = contrasena.toLowerCase();
    validador = {
        texto: lower,
        validation: "abcdefghyjklmnñopqrstuvwxyz",
        error: "la contraseña debe tener almenos una letra",
      } //regex(regular expresions)
    mensaje = validation(validador);
    if (mensaje == 1) {
      validador = {
          texto: `${contrasena}`,
          validation: "0123456789",
          error: "la contraseña debe tener almenos un numero",
        }
      mensaje = validation(validador);
      if (mensaje == 1) {
        validador={
            texto: `${contrasena}`,
            validation: "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ",
            error: "la contraseña debe tener almenos una Mayuscula",
          }
        mensaje = validation(validador);
        if (mensaje == 1) {
          validador = {
              texto: `${contrasena}`,
              validation: "-_#&@¡",
              error: "la contraseña debe tener almenos un caracter especial",
            }
          mensaje = validation(validador);
          if (mensaje == 1) {
            return "done";
          }
        }
      }
    }
  }
  return mensaje;
}


export {verifypass}