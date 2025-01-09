// app.js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Definir las dimensiones del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Coordenadas y dimensiones de las áreas clickeables
const areas = [
  { x: 50, y: 100, width: 300, height: 100, title: "Fight Care Rooster", info: "Información sobre aves en cuidado." },
  { x: 50, y: 250, width: 300, height: 100, title: "Fighting Rooster", info: "Información sobre aves en mantenimiento." },
  { x: 50, y: 400, width: 300, height: 100, title: "Rooster Grower 1", info: "Información sobre aves en crecimiento 1." },
  { x: 50, y: 550, width: 300, height: 100, title: "Rooster Grower 2", info: "Información sobre aves en crecimiento 2." }
];

// Dibujar las áreas y el título
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  areas.forEach(area => {
    ctx.fillStyle = "#f5f5f5";
    ctx.fillRect(area.x, area.y, area.width, area.height);
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(area.title, area.x + 10, area.y + 30);
  });
}

// Detectar clics en las áreas
canvas.addEventListener("click", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  areas.forEach(area => {
    if (mouseX > area.x && mouseX < area.x + area.width && mouseY > area.y && mouseY < area.y + area.height) {
      showInfo(area.info, mouseX, mouseY);
    }
  });
});

// Mostrar la información
function showInfo(info, x, y) {
  const infoBox = document.getElementById("infoBox");
  infoBox.style.left = `${x + 10}px`;
  infoBox.style.top = `${y + 10}px`;
  infoBox.style.display = "block";
  infoBox.textContent = info;
}

// Llamar a la función para dibujar el gráfico
draw();
