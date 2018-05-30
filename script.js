let css = document.querySelector("#css"); // selects the element that show the css.
let color1 = document.querySelector("#color1"); // selects color1
let color2 = document.querySelector("#color2"); // selects color2
const body = document.querySelector("body"); // selects body


// The below function changed the gradient color
function colorChange(){
  body.style.background = "linear-gradient(to right, "
    +color1.value
    +", "
    +color2.value +")";
  css.textContent = "CSS: " + body.style.background + ";";
}

// the lines below act as the event listeners
color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);

colorChange();
