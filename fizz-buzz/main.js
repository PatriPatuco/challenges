// Traemos la sección del HTML
const numbers = document.querySelector(".js-numbers");

function printNumbers() {
    // Creamos un bucle FOR para pintar del 1 al 100
    for (let i = 0; i < 101; i++) 
        // Este condicional, al ser más restrictivo, va primero para que pueda leer los siguientes.
        if (i % 3 === 0 && i % 5 === 0) {
            numbers.innerHTML += "<p>fizzbuzz</p>"
        }
        else if (i % 3 === 0) {
            numbers.innerHTML += "<p>fizz</p>";
        } else if (i % 5 === 0) {
            numbers.innerHTML += "<p>buzz</p>";
        } 
        else {
            // Pinta los numeros que no cumplan la condición de los múltiplos
            numbers.innerHTML += "<p>"+ i +"</p>";
        }
      }

printNumbers();
