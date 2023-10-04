let pantalla = document.getElementById("pantalla");
let ecuacion = "";

function agregarNumero(numero) {
  ecuacion += numero;
  pantalla.textContent = ecuacion;
}

function agregarOperador(operador) {
  ecuacion += operador;
  pantalla.textContent = ecuacion;
}

function calcularResultado() {
  try {
    ecuacion = eval(ecuacion);
    pantalla.textContent = ecuacion;
  } catch (error) {
    alert("Error en la operación");
    borrarPantalla();
  }
}

function borrarPantalla() {
  ecuacion = "";
  pantalla.textContent = "0";
}

