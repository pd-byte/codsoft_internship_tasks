// script.js
let display = document.getElementById("display");

function clearDisplay() {
  display.value = "";
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function appendValue(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value); // eval is a string function
  } catch (error) {
    display.value = "Error";
  }
}
