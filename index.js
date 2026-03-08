const image = document.getElementById("spinImage");

let rotation = 0;
let dragging = false;
let startX = 0;

document.addEventListener("mousedown", (e) => {
  dragging = true;
  startX = e.clientX;
});

document.addEventListener("mouseup", () => {
  dragging = false;
});

document.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  let move = e.clientX - startX;
  rotation += move;

  image.style.transform = `rotate(${rotation}deg)`;

  startX = e.clientX;
});