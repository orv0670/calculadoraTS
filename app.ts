function suma(a: number, b: number): number {
    return a+b; 
}

function resta(a: number, b: number): number {
    return a-b;
}

function multi(a: number, b: number): number {
    return a*b;
}

function divide(a: number, b: number): number {
    if(b === 0){
        throw new Error("no se puede dividir por 0"); 
    }
    return a/b;
}

function calculadora(operacion : string, num1 : number, num2 : number) : number {
    switch(operacion){
        case "suma":
            return suma(num1,num2);
        case "resta":
            return resta(num1,num2);
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