const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce la operación (suma, resta, multiplicacion, division): ', (operacion) => {
    rl.question('Introduce el primer número: ', (num1) => {
        rl.question('Introduce el segundo número: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            
            let resultado;
            switch (operacion.toLowerCase()) {
                case 'suma':
                    resultado = num1 + num2;
                    break;
                case 'resta':
                    resultado = num1 - num2;
                    break;
                case 'multiplicacion':
                    resultado = num1 * num2;
                    break;
                case 'division':
                    resultado = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
                    break;
                default:
                    resultado = 'Operación no válida';
            }

            console.log(`Resultado: ${resultado}`);
            rl.close();
        });
    });
});