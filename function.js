//Ejemplo 1: Declaración de función
function saludar() {
    document.getElementById("saludo").innerHTML = "¡Hola, bienvenido!";
}
// Llamada a la función para que se muestre en la página
saludar()
// Ejemplo 2: Función con Parámetros
function saludarConNombre(nombre) {
    document.getElementById("saludoConParametro").innerHTML += "¡Hola, " + nombre + "! <br>";
}
// Llamada a la función con un argumento
saludarConNombre("Cesar");
saludarConNombre("Carolina");
saludarConNombre("Carlos");

// Ejemplo 3: Función con Retorno de Valores
function sumar(a, b) {
    return a + b;
}
// Llamada a la función y muestra el resultado en la página
let resultado = sumar(5, 3);
document.getElementById("resultadoSuma").innerHTML = "El resultado de la suma es: " + resultado;
// Ejemplo 4: Ámbito de Variables
let mensaje = "Mensaje global";
function mostrarMensaje() {
    let mensaje = "Mensaje local";
    document.getElementById("ambitoVariable").innerHTML = "Dentro de la función: " + mensaje;
}
// Llamada a la función para mostrar el mensaje local
mostrarMensaje();
// Muestra el mensaje global en la página
document.getElementById("ambitoVariable").innerHTML += "<br>Fuera de la función: " + mensaje;
