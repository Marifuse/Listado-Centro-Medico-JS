function reservar(event) {
  event.preventDefault(); //Evento que ayuda a que los eventos dentro del formulario ocurran
  // Expresiones Regulares
  var soloNum = /^[0-9]+$/;
  var soloLetter = /^[A-Za-z\s]+$/;
  var rutNumberLetter = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
  var mailNumberLetter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;
  var dateNum = /^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/;

  // Variables del input con document.getElementById
  var rut, nombres, apellidos, edad, mail, telefono, fecha;

   rut = document.getElementById('rut').value;
   nombres = document.getElementById('names').value;
   apellidos = document.getElementById('surnames').value;
   edad = document.getElementById('age').value;
   mail = document.getElementById('mail').value;
   telefono = document.getElementById('phone').value;
   especialidad = document.getElementById('specialty').value;
   fecha = document.getElementById('date').value;
   hora = document.getElementById('hour').value;

   // Variables de validación
   var r = validarRut(rutNumberLetter, rut);
   var n = validarNombres(soloLetter, nombres);
   var a = validarApellidos(soloLetter, apellidos);
   var e = validarEdad(soloNum, edad);
   var m = validarMail(mailNumberLetter, mail);
   var f = validarFecha(dateNum, fecha);

   if ((r !== false) && (n !== false) && (a !== false) && (e !== false) && (m !== false) && (f !== false)) {
     desplegarMensaje(nombres, apellidos, especialidad, fecha, hora, mail, telefono);
   }
}

// Función para validar el Rut
function validarRut(rutNumberLetter, rut) {
    if (rut === "") {
      alert('Debes colocar tu Rut');
      return false;
    } else if (!rutNumberLetter.test(rut)) {  //Probar la función .test y siempre se niega con ! al principio de la función
      alert('El Rut ingresado no es Válido');
      return false;
    }
    return true;
}

// Función para validar los nombres
function validarNombres(soloLetter, nombres) {
  if (nombres === "") {
    alert('Debes colocar tu Nombre');
    return false;
  } else if (!soloLetter.test(nombres)) {
    alert('Sólo puede contener Texto');
    return false;
  }
  return true;
}

// Función para validar los apellidos
function validarApellidos(soloLetter, apellidos) {
  if (apellidos === "") {
    alert('Debes colocar tu Apellido');
    return false;
  } else if (!soloLetter.test(apellidos)) {
    alert('Sólo puede contener Texto');
    return false;
  }
  return true;
}

// Función para validar la edad
function validarEdad(soloNum, edad) {
  if (edad === "") {
    alert('Debes colocar tu Edad');
    return false;
  } else if (!soloNum.test(edad)) {
    alert('Sólo debe contener Números');
    return false;
  }
  return true;
}

// Función para validar el Correo Electrónico
function validarMail(mailNumberLetter, mail) {
  if (mail === "") {
    alert('Debes ingresar un Correo Electrónico');
    return false;
  } else if (!mailNumberLetter.test(mail)) {
    alert('Correo Electrónico Incorrecto');
    return false;
  }
  return true;
}

// Función para validar fecha
function validarFecha(dateNum, fecha) {
  if (fecha === "") {
    alert('Debes ingresar una Fecha');
    return false;
  } else if (!dateNum.test(fecha)) {
    alert('Debes ingresar sólo Números');
    return false;
  }
  return true;
}

function desplegarMensaje(nombres, apellidos, especialidad, fecha, hora, mail, telefono) {
  document.write('Estimado(a) ' + nombres + ' ' + apellidos + ', ' + 'su hora para ' + especialidad
+ ' ' + 'ha sido reservada para el día ' + fecha + ' a las ' + hora + '.' + ' En su correo electrónico '
+ mail + ' se le envío el detalle de su cita médica, e igualmente, lo llamaremos al número '
+ telefono + ' para confirmar.' + '<br>' + '<br>' + ' Gracias por preferirnos ⚕✙.');
}
