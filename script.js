const boton = document.getElementById("boton");
const hora = document.getElementById("hora");
let veces = 0;

boton.addEventListener("click", () => {
  veces++;
  boton.textContent = "Me han tocado " + veces + (veces === 1 ? " vez" : " veces");
});

function actualizarHora() {
  hora.textContent = "Hora en tu navegador: " + new Date().toLocaleTimeString("es-CO");
}

actualizarHora();
setInterval(actualizarHora, 1000);
