const assert = require("assert");
const { calcularFinanzas } = require("../script.js");
const p1 = calcularFinanzas(10000, 0, 10, 16);

assert.strictEqual(p1.mensualidad, 1000);
console.log("Prueba 1: el calculo de intereses fue exitoso ^_^");

const p2 = calcularFinanzas(50000, 18, 24, 16);
assert.ok(p2.mensualidad > 0);
assert.ok(p2.interes > 0);
assert.ok(p2.total > 50000);

console.log("Prueba 2: calculo con intereses y la IVA fue correcto '__' ");