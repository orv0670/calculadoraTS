"use strict";
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function multi(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("no se puede dividir por 0");
    }
    return a / b;
}
function calculadora(operacion, num1, num2) {
    switch (operacion) {
        case "suma":
            return suma(num1, num2);
        case "resta":
            return resta(num1, num2);
        case "multiplicacion":
            return multi(num1, num2);
        case "division":
            return divide(num1, num2);
        default:
            throw new Error("operacion no valida");
    }
}
console.log("Suma: " + calculadora("suma", 5, 3));
console.log("Resta: " + calculadora("resta", 5, 3));
console.log("Multiplicacion: " + calculadora("multiplicacion", 5, 3));
console.log("Division: " + calculadora("division", 5, 3));
