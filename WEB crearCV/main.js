
function cambiar(nombre) {
    const valor_elemento = document.getElementById(`input-${nombre}`).value
    const elemento_a_cambiar = document.getElementById(nombre)
    elemento_a_cambiar.innerHTML = valor_elemento;
}
// web-3

function obtenerInput(nombre){
    const input = document.getElementById(`input-${nombre}`).value
    return input

}
function crearCV() {
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

    const data = {
        nombre: obtenerInput("nombre"),
        apellido: obtenerInput("apellido"),
        titulo: obtenerInput("titulo"),
        celular: obtenerInput("celular"),
        email: obtenerInput("email"),
        ubicacion: obtenerInput("ubicacion"),
        perfil: obtenerInput("perfil"),
        trabajo_institucion: obtenerInput("trabajo-institucion"),
        trabajo_1: obtenerInput("trabajo-1"),
        trabajo_2: obtenerInput("trabajo-2"),
        estudios_institucion: obtenerInput("estudios-institucion"),
        estudios_1: obtenerInput("estudios-1"),
        estudios_2: obtenerInput("estudios-2"),
        idioma_1: obtenerInput("idioma-1"),
        idioma_2: obtenerInput("idioma-2"),
        }
    fetch("http://127.0.0.1:8000/curriculum",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })

}


document.getElementById("boton-generar-CV").addEventListener("click", crearCV)

