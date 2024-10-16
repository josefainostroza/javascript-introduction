function sayHello(name) {
  console.log('hola' + ' ' + name);
}

sayHello('Josefa');

function calculateSquareArea(side) {
  console.log(side * side);
}
calculateSquareArea(3);

function calculateTriangleArea(base, height) {
  console.log((base * height) / 2);
}

calculateTriangleArea(5, 6);

function calculateCircleArea(radius) {
  console.log(2 * 3.14 * radius);
}

calculateCircleArea(8);

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}
celsiusToFahrenheit(32);

function fahrenheitToCelsius(fahrenheit) {
  console.log((fahrenheit - 32) / 1.8);
}
fahrenheitToCelsius(70);

function totalPrice(price) {
  console.log(price + price * 0.21);
}
totalPrice(100);

function writeMessage(name, material, size, note) {
  console.log(
    name +
      ' ha pedido una caja de ' +
      material +
      ' de tamaño ' +
      size +
      '. ' +
      note
  );
}
writeMessage('Josefa', 'plastico', '38', '¡Gracias por su compra!');
