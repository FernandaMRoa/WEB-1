function generarCV() {
    cambiar("nombre");
    cambiar("apellido");
    cambiar("titulo");
    cambiar("celular");
    cambiar("email");
    cambiar("ubicacion");
    cambiar("perfil");
    cambiar("trabajo-institucion");
    cambiar("trabajo-1");
    cambiar("trabajo-2");
    cambiar("estudios-institucion");
    cambiar("estudios-1");
    cambiar("estudios-2");
    cambiar("idioma-1");
    cambiar("idioma-2");
}

function cambiar(nombre) {
    const valor_elemento = document.getElementById(`input-${nombre}`).value
    const elemento_a_cambiar = document.getElementById(nombre)
    console.log(elemento_a_cambiar);
    elemento_a_cambiar.innerHTML = valor_elemento;
}
document.getElementById("boton-generar-CV").addEventListener("click", generarCV)
