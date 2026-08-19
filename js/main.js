console.log("hola mundo desde main.js");

const miBoton = document.getElementById("miBoton");
const primerNumero = document.getElementById("primerNumero");
const segundoNumero = document.getElementById("segundoNumero");
const miSelect = document.getElementById("miSelect");
const resultado = document.getElementById("resultado");
const total = document.getElementById("total");

//esto es para ir debugeando el codigo, con esto verificamos que 
console.log(miBoton, primerNumero, segundoNumero, miSelect);


//Manera de sumar dos numeros dentro de aqui, agregamos un escuchador, y ponemos constantes 
//a los valor capturados con el get, despues de eso transformamos y con el console log verificamos que el proceso este bien.
miBoton.addEventListener('click', function(){

    const valorMiSelect = miSelect.value;
    const valorPrimerNumero = Number(primerNumero.value);
    const valorSegundoNumero = Number(segundoNumero.value);
    
    switch (valorMiSelect){
        case 'Suma' : 
            total = valorPrimerNumero+valorSegundoNumero;
            break;
        case 'Resta' : 
            total = valorPrimerNumero-valorSegundoNumero;
            break;
        case 'Multiplicacion' : 
            total = valorPrimerNumero*valorSegundoNumero;
            break;
        case 'Division' : 
            total = valorPrimerNumero/valorSegundoNumero;
            break;                        
    }

    resultado.innerHTML = total;
});


