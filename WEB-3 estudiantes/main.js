// WEB-3

function generarChiste() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(data => document.getElementById('chiste').innerHTML = data.value)
        .catch(error => console.log(error));
}
function crearCV() {}

function obtenerPrimerCV() { }
function obtenerTodosLosCV() {
    fetch('http://127.0.0.1:8000/nombres')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

document.getElementById("boton-generar-CV").addEventListener("click", obtenerCV)
document.getElementById("boton-generar-chiste").addEventListener("click", generarChiste)
document.getElementById("boton-obtener-nombres").addEventListener("click", obtenerTodosLosCV)
document.getElementById("boton-primer-cv").addEventListener("click", obtenerPrimerCV)
document.getElementById("boton-obtener-cv").addEventListener("click", obtenerCV)

/*Aqui esta lo que tengo. Hice una funcion en python que te entrega una lista de lista con todos los curriculums
E iba a implementar la funcion que la fer creo para web 2 para modificar la web*/
function obtenerCV() {
    let input_obtener_CV = document.getElementById("input-nombre-a-buscar")
    cambiar("nombre", input_obtener_CV.value)
    fetch('http://127.0.0.1:8000/CVs/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
/*function generarCV() {
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
}*/