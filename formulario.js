
document.getElementById("verificarBtn").addEventListener("click", () => {
        let nombre = document.getElementById("fNombre").value; //el dato del nombre que digito el usuario
        let edad = parseInt(document.getElementById("fEdad").value); //el dato de la edad que digito el usuario
        // Seleccionar el elemento donde mostraremos el resultado
        let result = document.getElementById("resultado");
        
        // Verificar si la edad es mayor o igual a 18
        if (edad >= 18) {
            //result.textContent = `${nombre}, eres mayor de edad.`;
        result.innerHTML = nombre+" eres mayor de edad <br> Tienes "+edad+" años";
        } else {
            //result.textContent = `${nombre}, eres menor de edad.`;
        result.innerHTML = nombre+" eres menor de edad <br> Tienes "+edad+" años";
        }
});