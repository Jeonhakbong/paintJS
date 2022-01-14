// variables
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d"); // context variable
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

let painting = false;
let filling = false;

//default setting
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 2.5;

// function list
function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor; // get color
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick(event) {
  if (filling) {
    filling = false; // paint mode
    mode.innerText = "Paint";
  } else {
    filling = true; // fill mode
    mode.innerText = "Fill";
  }
}

// main
// 1. create cod how to operate mouse
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

// 2. change color
Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

// 3. set the range of line
if (range) {
  range.addEventListener("input", handleRangeChange);
}

// 4. set the paint mode
if (mode) {
  mode.addEventListener("click", handleModeClick);
}
