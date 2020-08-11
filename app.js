// Requireds
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// La forma de importar en ES6 sería la siguiente línea:
// import { crearArchivo } from './multiplicar/multiplicar';
const argv = require('./config/yargs').argv;
const colors = require('colors');



// Comienzo del código de la app

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            // .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .then(archivo => console.log(`Archivo creado: `, `${archivo}`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// console.log(argv);

// let parametro = argv[2];
// let base = parametro.split('=')[1];