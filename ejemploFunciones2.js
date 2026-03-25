function obtenerPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

function obtenerEstado(promedio) {
    if (promedio >= 4) {
        return "Promocionado";
    } else if (promedio >= 3) {
        return "Regular";
    } else {
        return "Reprobado";
    }
}

function calcularPromedio() {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);

    let promedio = obtenerPromedio(n1, n2, n3);
    let estado = obtenerEstado(promedio);

    document.getElementById("resultadoPromedio").innerText =
        "Promedio: " + promedio.toFixed(2) + " - " + estado;
}

function contarNotas() {
    let notas = [
        parseFloat(document.getElementById("n1").value),
        parseFloat(document.getElementById("n2").value),
        parseFloat(document.getElementById("n3").value)
    ];

    let mayores = 0;
    let menores = 0;

    for (let nota of notas) {
        if (nota >= 4) {
            mayores++;
        } else {
            menores++;
        }
    }

    document.getElementById("resultadoNotas").innerText =
        "Mayores o iguales a 4: " + mayores +
        " | Menores a 4: " + menores;
}

function verificarPalabra() {
    let palabra = document.getElementById("palabra").value;

    if (palabra.toLowerCase() === "salir") {
        document.getElementById("resultadoPalabras").innerText =
            "Terminó la ejecución de palabras";
    }
    else{
        document.getElementById("resultadoPalabras").innerText =
            palabra ;
        }
}

function aplicarDescuento(precio) {
    if (precio > 200) {
        return precio * 0.8;
    }
    return precio;
}

function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let total = aplicarDescuento(precio);

    document.getElementById("resultadoDescuento").innerText =
        "Total a pagar: $" + total;
}

function obtenerMayor(a, b, c) {
    return Math.max(a, b, c);
}

function mostrarMayor() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);

    if (a === b || a === c || b === c) {
        document.getElementById("resultadoMayor").innerText =
            "Los números deben ser distintos.";
        return;
    }

    let mayor = obtenerMayor(a, b, c);

    document.getElementById("resultadoMayor").innerText =
        "El número mayor es: " + mayor;
}