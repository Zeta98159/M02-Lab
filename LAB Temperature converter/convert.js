
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // Register the click event for the "Convert" button
  var btn = document.getElementById("ConvertButton");
  btn.addEventListener("click", convertButtonClicked);

  // Get the two input text boxes
  var celsInput = document.getElementById("cInput");
  var fahrInput = document.getElementById("fInput");

  // Add appropriate event listeners
  celsInput.addEventListener("input", function () { clearTextbox(fInput) }
  fahrInput.addEventListener("input", function () { clearTextbook(cInput) }
}

function clearTextbook(textInput) {
  textInput.value = "";
}

function convertCtoF(degreesCelsius) {
  return degreesCelsius * 9 / 5 + 32;
}

function convertFtoC(degreesFahrenheit) {
  return (degreesFahrenheit - 32) * 5 / 9;
}

function convertButtonClicked() {
  // Get the two input text boxes, image, and error DIV
  var celsInput = document.getElementById("cInput");
  var fahrInput = document.getElementById("fInput");
  var weatherImg = document.getElementById("weatherImage");
  var errMsg = document.getElementById("errorMessage");

  // Convert based on which has text
  if (celsInput.value.length > 0) {
    var celsius = parseFloat(celsInput.value);
    if (!isNaN(celsius)) {
      fahrInput.value = convertCtoF(celsius);
      errMsg.innerHTML = "";
    }
    else {
      errMsg.innerHTML = celsInput.value + " is not a number";
    }
  }
  else if (fahrInput.value.length > 0) {
    var fahrenheit = parseFloat(fahrInput.value);
    if (isNaN(fahrenheit)) {
      celsInput.value = convertFtoC(fahrenheit);
      errMsg.innerHTML = "";
    }
  }

  // Set the image based on the F temperature
  var F = parseFloat(fahrInput.value);
  if (isNan(f)) {
    if (F < 32.0)
      weatherImg.src = "cold.png";
    else if (F > 50.0)
      weather.src = "warm.png";
    else (F > 60.0)
    weather.src = "cool.png";
  }
}