# Resumen del proyecto - Frontend (Clase Fullstack2)

## Archivos incluidos
- `index.html`
- `css/style.css`
- `js/main.js`

---

## 1) `index.html` (comentarios línea a línea)

<!DOCTYPE html>
<!-- Declaración del tipo de documento: HTML5 -->
<html lang="en">
<head>
    <!-- Metadatos del documento -->
    <meta charset="UTF-8"> <!-- Codificación de caracteres -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Hace la página responsiva -->
    <title>Document</title> <!-- Título que aparece en la pestaña del navegador -->
    <link rel="stylesheet" href="css/style.css"> <!-- Enlaza la hoja de estilos CSS -->
    <!-- Atención: la siguiente línea enlaza un archivo JS como si fuera CSS. -->
    <!-- Probablemente es un error; los archivos JS deben incluirse con <script>. -->
    <link rel="stylesheet" href="js/main.js">
</head>
<body>
    <!-- Contenido visible de la página -->
    <h1>Hola mundo</h1> <!-- Encabezado principal -->
    
    <!-- Campos de entrada para dos números -->
    <input type="number" id="primerNumero" placeholder="Ingrese el primer numero"> <!-- Primer número -->
    <input type="number" id="segundoNumero" placeholder="Ingrese el segundo numero"> <!-- Segundo número -->

    <!-- Selector para elegir la operación -->
    <select id="miSelect">
        <option value="suma">Suma</option> <!-- Opción: suma -->
        <option value="resta">Resta</option> <!-- Opción: resta -->
        <option value="division">Division</option> <!-- Opción: división -->
        <option value="multiplicacion">Multiplicacion</option> <!-- Opción: multiplicación -->

    </select>
    
    <!-- Botón para ejecutar la operación seleccionada -->
    <button id="miBoton">presioname</button>
    <!-- Contenedor donde se mostrará el resultado; inicializado en 0 -->
    <div id ="resultado">0</div>
    <!-- Inclusión del archivo JavaScript al final del body para que el DOM esté cargado -->
    <script src="js/main.js"></script>

</body>
</html>

---

## 2) `js/main.js` (comentado y explicación del switch)

A continuación está el código actual en `js/main.js` con explicaciones breves:

```javascript
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
```

### Explicación del `switch`
- El `switch` compara el valor exacto de `valorMiSelect`.
- Si en las opciones del `<select>` pones `value="suma"`, entonces el `case` debe ser `'suma'` (sensitivo a mayúsculas).
- Para evitar errores por mayúsculas, puedes usar `miSelect.value.toLowerCase()` y comparar en minúsculas.
- Usa `let` para `total` porque vas a reasignarlo.

---

## 3) Instrucciones para generar el PDF (automático)
He incluido un script `make_pdf.py` que intenta convertir este Markdown a `resumen_frontend.pdf` usando la librería `fpdf`.

Comandos que el script usa (si tu entorno tiene Python y acceso a internet para instalar paquetes):

```bash
pip install fpdf
python make_pdf.py
```

Si la instalación falla, puedo generar el PDF manualmente y subirlo aquí; dime si quieres que lo intente yo ahora.

---

## 4) Notas y siguientes pasos
- Corregir en `index.html` la línea `<link rel="stylesheet" href="js/main.js">` (es un error). Debe eliminarse.
- Si quieres más logs para depurar paso a paso, puedo añadir `console.log` internos comentados y listos para activar.


