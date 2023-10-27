const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  const celsiusRound = Math.round(celsius * 10) / 10;
  console.log("c here: " + celsiusRound)
  return celsiusRound;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  const fahrenheitRound = Math.round(fahrenheit * 10) / 10;
  console.log("f here: " + fahrenheitRound);
  return fahrenheitRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
