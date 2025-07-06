const converterCelsiusParaFahrenheit = require("./celciusToFahrenheit.js");

describe("converterCelsiusParaFahrenheit", () => {
  test("deve converter 0°C para 32°F", () => {
    expect(converterCelsiusParaFahrenheit(0)).toBe(32);
  });

  test("deve converter 100°C para 212°F", () => {
    expect(converterCelsiusParaFahrenheit(100)).toBe(212);
  });

  test("deve converter uma temperatura negativa (-10°C para 14°F)", () => {
    expect(converterCelsiusParaFahrenheit(-10)).toBe(14);
  });

  test("deve converter uma temperatura com casas decimais (25.5°C para 77.9°F)", () => {
    expect(converterCelsiusParaFahrenheit(25.5)).toBeCloseTo(77.9);
  });

  test("deve lançar um erro se a entrada não for um número", () => {
    expect(() => {
      converterCelsiusParaFahrenheit("texto");
    }).toThrow("A entrada deve ser um número.");
  });
});
