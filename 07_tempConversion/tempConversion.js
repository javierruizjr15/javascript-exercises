const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  console.log("c here: " + celsius)
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  console.log("f here: " + fahrenheit);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
