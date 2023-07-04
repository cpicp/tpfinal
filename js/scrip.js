var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');
var mensaje = document.getElementById('mensaje');
var obligatorio = document.getElementsByClassName('obligatorio');

function enviarFormulario(){
    console.log('Enviando Formulario');

    var mensajeError = [];

    if (nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresar Nombre');
    }
    if (email.value === null || email.value === ''){
        mensajeError.push('Ingresa Email');
    }
    if (telefono.value === null || telefono.value === ''){
        mensajeError.push('Ingresar Telefono');
    }
    if (mensaje.value === null || mensaje.value === ''){
        mensajeError.push('Ingresar Mensaje');
    }
    obligatorio.innerHTML = mensajeError.join(',');
    return false;
}