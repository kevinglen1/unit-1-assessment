// Define variables that hold application state, cache DOM elements, etc.
// Select elements in the DOM.

let countDisplay = 0;
// let incrementor = 1

const plusButton = document.getElementById("plus");
let incrementorField = document.getElementById("incrementor").value;
const minusButton = document.getElementById("minus");
let display = document.getElementById("display").innerHTML;
// Listen for browser events, such as click, being dispatched by DOM elements.
plusButton.addEventListener("click", increaseCountDisplay);
minusButton.addEventListener("click", decreaseCountDisplay);
// Manipulate a DOM element's content and style.

// incrementorField = incrementor

function increaseCountDisplay() {
  incrementorField = document.getElementById("incrementor").value;
  incrementorField = Number(incrementorField);
  countDisplay += incrementorField;
  display = countDisplay.toString();
  document.getElementById("display").innerHTML = display;
  if (Number(document.getElementById("display").innerHTML) < 0) {
    document.getElementById("display").style.setProperty('color', 'red')

} else {
  document.getElementById("display").style.setProperty('color', 'black')
}
}

function decreaseCountDisplay() {
  incrementorField = document.getElementById("incrementor").value;
  incrementorField = Number(incrementorField);
  countDisplay -= incrementorField;
  display = countDisplay.toString();
  document.getElementById("display").innerHTML = display;
  if (Number(document.getElementById("display").innerHTML) < 0) {
      document.getElementById("display").style.setProperty('color', 'red')

  } else {
    document.getElementById("display").style.setProperty('color', 'black')
  }
}

// document.getElementById("myText").value = "Johnny Bravo";

// .setAttribute("href", link['href']);
// .innerHTML

// link.classList.add('active');
// link.classList.remove('active')
