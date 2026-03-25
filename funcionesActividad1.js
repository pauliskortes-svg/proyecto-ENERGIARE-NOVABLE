//ejercicio 1 
function promedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

document.getElementById("verificarBtn").addEventListener("click", function() {

    let nota1 = parseInt(document.getElementById("nota1").value);
    let nota2 = parseInt(document.getElementById("nota2").value);
    let nota3 = parseInt(document.getElementById("nota3").value);

    let resultado = promedio(nota1, nota2, nota3);

    let mensaje = "";

    if (resultado >= 4) {
        mensaje = "Promocionado";
        
    } 
    else if (resultado >= 3) {
        mensaje = "Regular";
        
    } 
    else {
        mensaje = "Reprobado";
       
    }

    document.getElementById("resultadoPromedio").innerHTML =
        "El promedio es: " + resultado + " " +mensaje;

});