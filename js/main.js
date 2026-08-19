// Mensaje sencillo para verificar que el archivo JS se ejecuta
console.log("hola mundo desde main.js");

// Referencias a elementos del DOM (están definidos en index.html)
const miBoton = document.getElementById("miBoton");
const primerNumero = document.getElementById("primerNumero");
const segundoNumero = document.getElementById("segundoNumero");
const miSelect = document.getElementById("miSelect");
const resultado = document.getElementById("resultado");

// Variable para almacenar el resultado numérico de la operación
let total = 0;

// Depuración: comprobar que las referencias se obtuvieron correctamente
console.log(miBoton, primerNumero, segundoNumero, miSelect, resultado);

// Añadimos un listener al botón; cuando se haga click se ejecuta la función
miBoton.addEventListener('click', function(){

    // Obtenemos los valores actuales del select y de los inputs
    const valorMiSelect = miSelect.value; // por ejemplo: 'suma', 'resta'
    const valorPrimerNumero = Number(primerNumero.value); // convierte a número
    const valorSegundoNumero = Number(segundoNumero.value);

    // Logs para depuración paso a paso
    console.log('Click en botón. Valores leídos ->', {
        valorPrimerNumero,
        valorSegundoNumero,
        operacion: valorMiSelect
    });

    // Validación básica: evitar operaciones con valores no numéricos
    if (isNaN(valorPrimerNumero) || isNaN(valorSegundoNumero)){
        resultado.innerHTML = 'Introduce números válidos';
        return; // sale de la función
    }

    // Usamos switch sobre los valores que vienen del <select>
    // En el HTML las opciones tienen valores en minúsculas ('suma', 'resta', ...)
    switch (valorMiSelect){
        case 'suma' :
            total = valorPrimerNumero + valorSegundoNumero;
            break;
        case 'resta' :
            total = valorPrimerNumero - valorSegundoNumero;
            break;
        case 'multiplicacion' :
            total = valorPrimerNumero * valorSegundoNumero;
            break;
        case 'division' :
            // Evitar división entre cero
            total = valorSegundoNumero === 0 ? 'Error: división por 0' : valorPrimerNumero / valorSegundoNumero;
            break;
        default:
            total = 'Operación no válida';
    }

    // Mostrar el resultado en la página
    resultado.innerHTML = total;

    // Log final con el resultado calculado
    console.log('Resultado mostrado:', total);
});


