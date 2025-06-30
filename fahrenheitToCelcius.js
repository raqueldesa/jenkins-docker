/**
 * Converte uma temperatura de Fahrenheit para Celsius.
 * @param {number} fahrenheit A temperatura em graus Fahrenheit.
 * @returns {number} A temperatura em graus Celsius.
 */
function converterFahrenheitParaCelsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    throw new Error("A entrada deve ser um número.");
  }
  return ((fahrenheit - 32) * 5) / 9;
}

module.exports = converterFahrenheitParaCelsius;
