// This is called a default export or what we call as commonJS export
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celciusToFahrenheit,
};
