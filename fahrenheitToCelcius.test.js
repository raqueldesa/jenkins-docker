const converterFahrenheitParaCelsius = require("./fahrenheitToCelcius.js");

describe("converterFahrenheitParaCelsius", () => {
  test("deve converter 32°F para 0°C (ponto de congelamento)", () => {
    expect(converterFahrenheitParaCelsius(32)).toBe(0);
  });

  test("deve converter 212°F para 100°C (ponto de ebulição)", () => {
    expect(converterFahrenheitParaCelsius(212)).toBe(100);
  });

  test("deve converter 14°F para -10°C", () => {
    expect(converterFahrenheitParaCelsius(14)).toBe(-10);
  });

  test("deve lidar com resultados com casas decimais (50°F para 10°C)", () => {
    expect(converterFahrenheitParaCelsius(50)).toBe(10);
  });

  test("deve converter uma temperatura que resulta em decimal (-4°F para -20°C)", () => {
    // A conversão de -4F é exatamente -20C
    expect(converterFahrenheitParaCelsius(-4)).toBe(-20);
  });

  test("deve converter 77.9°F para aproximadamente 25.5°C", () => {
    // Usamos toBeCloseTo para evitar problemas com arredondamento de ponto flutuante
    expect(converterFahrenheitParaCelsius(77.9)).toBeCloseTo(25.5);
  });

  test("deve lançar um erro se a entrada não for um número", () => {
    expect(() => {
      converterFahrenheitParaCelsius(false);
    }).toThrow("A entrada deve ser um número.");
  });
});
