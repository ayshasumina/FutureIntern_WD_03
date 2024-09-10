// Get references to the DOM elements
const temperatureInput = document.querySelector('#temperature');
const unitSelect = document.querySelector('#unit');
const resultDisplay = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');

// Function to convert temperature
const convertTemperature = () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = unitSelect.value;

  // Validate the input (check if it's a number)
  if (isNaN(temperature)) {
    resultDisplay.style.color = "#993300";
    resultDisplay.innerHTML = 'Please enter a valid number!';
    return;
  }

  // Convert temperature based on selected unit
  let convertedTemperature = '';
  let resultUnit = '';

  if (unit === 'Celsius') {
    const toFahrenheit = (temperature * 9/5) + 32;
    const toKelvin = temperature + 273.15;
    convertedTemperature = `${toFahrenheit.toFixed(2)} °F | ${toKelvin.toFixed(2)} K`;
  } else if (unit === 'Fahrenheit') {
    const toCelsius = (temperature - 32) * 5/9;
    const toKelvin = (temperature + 459.67) * 5/9;
    convertedTemperature = `${toCelsius.toFixed(2)} °C | ${toKelvin.toFixed(2)} K`;
  } else if (unit === 'Kelvin') {
    const toCelsius = temperature - 273.15;
    const toFahrenheit = (temperature * 9/5) - 459.67;
    convertedTemperature = `${toCelsius.toFixed(2)} °C | ${toFahrenheit.toFixed(2)} °F`;
  }

  // Display the result
  resultDisplay.style.color = "black";
  resultDisplay.innerHTML = `Converted Temperature: ${convertedTemperature}`;
};

// Event listener for the convert button
convertButton.addEventListener('click', convertTemperature);
