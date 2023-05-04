const numbers = document.querySelector(".js-numbers");

function printNumbers() {
    for (let i = 0; i < 101; i++) {
        numbers.innerHTML += "<p>"+ i +"</p>";
      }
}

printNumbers();
