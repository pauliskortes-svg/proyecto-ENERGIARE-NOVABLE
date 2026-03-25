
document.getElementById("verificarBtn").addEventListener("click", () => {
        let numero1 = parseInt(document.getElementById("fNumero1").value); //el dato del nombre que digito el usuario
        let numero2 = parseInt(document.getElementById("fNumero2").value); //el dato de la edad que digito el usuario
        let numero3 = parseInt(document.getElementById("fNumero3").value); //el dato de la edad que digito el usuario

        // Seleccionar el elemento donde mostraremos el resultado
        let result = document.getElementById("resultado");
        
        // Verificar si la edad es mayor o igual a 18
        if (numero1 >= numero2 && numero1 >= numero3) {
        result.innerHTML = ("el numero mayor es " +numero1);
        } 
        else if (numero2 >= numero1 && numero2 >= numero3) {
        result.innerHTML = ("el numero mayor es " +numero2);
        } 
        else {
        result.innerHTML = ("el numero mayor es " +numero3);
        } 
        })

