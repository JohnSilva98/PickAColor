const colorButton = document.getElementById("btn");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "gray",
  "black",
  "orange",
];
const colorName = document.querySelector(".color");
const click = document.getElementById("click");
btn.addEventListener("click", function () {
  const randomColor = GetRandomColor();
  document.body.style.background = colors[randomColor];
  colorName.innerHTML = colors[randomColor];

  click.classList.toggle(
    "click",
    colorName.innerHTML === "purple" || colorName.innerHTML === "black"
  );
});

function GetRandomColor() {
  return Math.floor(Math.random() * colors.length);
}
