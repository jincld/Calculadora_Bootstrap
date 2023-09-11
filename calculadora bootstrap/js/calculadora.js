function sumar() { 
    // Obtiene los valores de los campos de entrada 
    let num1 = parseFloat(document.getElementById("num1").value); 
    let num2 = parseFloat(document.getElementById("num2").value); 

    // Verifica que los campos no estén vacios 
    if (isNaN(num1) || isNaN (num2)) {
         alert ("Por favor, ingresa números válidos en ambos campos.");
         return; 
        } 
        // Realiza la suma 
        let suma = num1 + num2; 
        // Muestra el resultado en la página con animacion 
        let resultadoElement = document.getElementById("resultado"); 
        resultadoElement.innerHTML = "La suma es: " + suma; 
        resultadoElement.classList.add("mostrar"); 
        // Cambia el color de la alerta según el resultado 
        if (suma > 10) { 
            resultadoElement.className = "alert alert-success mostrar";
        } else {
            resultadoElement.className= "alert alert-danger mostrar"; 
        } 
    } 
    // Agrega un evento click al botón de calcular 
    document.getElementById("sumarbtn").addEventListener("click", sumar);

    function restar() { 
        // Obtiene los valores de los campos de entrada 
        let num1 = parseFloat(document.getElementById("num1").value); 
        let num2 = parseFloat(document.getElementById("num2").value); 
    
        // Verifica que los campos no estén vacios 
        if (isNaN(num1) || isNaN (num2)) {
             alert ("Por favor, ingresa números válidos en ambos campos.");
             return; 
            } 
            // Realiza la resta 
            let resta = num1 - num2; 
            // Muestra el resultado en la página con animacion 
            let resultadoElement = document.getElementById("resultado"); 
            resultadoElement.innerHTML = "La resta es: " + resta; 
            resultadoElement.classList.add("mostrar"); 
            // Cambia el color de la alerta según el resultado 
            if (resta > 10) { 
                resultadoElement.className = "alert alert-success mostrar";
            } else {
                resultadoElement.className= "alert alert-danger mostrar"; 
            } 
        } 
        // Agrega un evento click al botón de calcular 
        document.getElementById("restarbtn").addEventListener("click", restar);

        function dividir() { 
            // Obtiene los valores de los campos de entrada 
            let num1 = parseFloat(document.getElementById("num1").value); 
            let num2 = parseFloat(document.getElementById("num2").value); 
        
            // Verifica que los campos no estén vacios 
            if (isNaN(num1) || isNaN (num2)) {
                 alert ("Por favor, ingresa números válidos en ambos campos.");
                 return; 
                } 
                // Realiza la división 
                let dividir = num1 / num2; 
                // Muestra el resultado en la página con animacion 
                let resultadoElement = document.getElementById("resultado"); 
                resultadoElement.innerHTML = "La división es: " + dividir; 
                resultadoElement.classList.add("mostrar"); 
                // Cambia el color de la alerta según el resultado 
                if (dividir > 10) { 
                    resultadoElement.className = "alert alert-success mostrar";
                } else {
                    resultadoElement.className= "alert alert-danger mostrar"; 
                } 
            } 
            // Agrega un evento click al botón de calcular 
            document.getElementById("dividirbtn").addEventListener("click", dividir);

            function multiplicar() { 
                // Obtiene los valores de los campos de entrada 
                let num1 = parseFloat(document.getElementById("num1").value); 
                let num2 = parseFloat(document.getElementById("num2").value); 
            
                // Verifica que los campos no estén vacios 
                if (isNaN(num1) || isNaN (num2)) {
                     alert ("Por favor, ingresa números válidos en ambos campos.");
                     return; 
                    } 
                    // Realiza la multiplicación 
                    let multiplicar = num1 * num2; 
                    // Muestra el resultado en la página con animacion 
                    let resultadoElement = document.getElementById("resultado"); 
                    resultadoElement.innerHTML = "La multiplicación es: " + multiplicar; 
                    resultadoElement.classList.add("mostrar"); 
                    // Cambia el color de la alerta según el resultado 
                    if (multiplicar > 10) { 
                        resultadoElement.className = "alert alert-success mostrar";
                    } else {
                        resultadoElement.className= "alert alert-danger mostrar"; 
                    } 
                } 
                // Agrega un evento click al botón de calcular 
                document.getElementById("multibtn").addEventListener("click", multiplicar);

                function limpiar(){
                    var item= document.getElementById("form1");
                    item.reset()

                    let resultadoElement = document.getElementById("resultado"); 
                    resultadoElement.innerHTML = ""; 
                    resultadoElement.classList.add("mostrar"); 
                    resultadoElement.className = "alert alert-success mostrar";

                    }
                    // Agrega un evento click al botón de limpiar 
                    document.getElementById("limpiarbtn").addEventListener("click", limpiar);