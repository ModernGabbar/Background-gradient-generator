let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random");
let colors = '0123456789ABCDEF';

function setGradient() {
    body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value + ")";

    css.textContent = body.style.background + ";";
}

function genRandColor() {
    let color = '#';
    for(let i=0; i<6; i++) {
        color += colors[Math.floor(Math.random() * 16)];
    }
    return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", function() {
    color1.value = genRandColor();
    color2.value = genRandColor();
    random.style.background = genRandColor();
    setGradient();
});