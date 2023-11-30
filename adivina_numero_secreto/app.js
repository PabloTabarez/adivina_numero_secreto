const readlineSync = require('readline-sync');
const {generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumero = () => {
    return readlineSync.question('ingresa algun numero: ')
};

const juegoAdivinanza = () => {
    const numeroSecreto = generarNumeroAleatorio();
    let numeroAdivinado = 0;
    console.log('Intenta adivinar un numero del 1 al 100.\n');
    while (numeroAdivinado !== numeroSecreto) {
    numeroAdivinado = obtenerNumero();
    verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }

}

juegoAdivinanza();