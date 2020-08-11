// requireds
const colors = require('colors');

// integrados con node:
const fs = require('fs');
// externos -> const xp = require('express');
// locales -> const we= require('./whatever');

const crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        let nombreArchivo = `tablas/tabla-${base}.txt`;
        fs.writeFile(nombreArchivo, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(nombreArchivo);
            // console.log(`El archivo ${nombreArchivo} ha sido creado`);
        });
    })
};

// metemos por defecto límite 10 aunque por lo que metimos en yargs ya nos iba a venir algún valor seguro
const listarTabla = (base, limite = 10) => {
    // console.log('verde'.green);
    // console.log('rojo'.red);
    // console.log('otrocolor'.bgBlue.yellow);

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor base introducido no es un número');
        } else {
            let tabla = ''
            for (let i = 1; i <= limite; i++) {
                // tabla += `${base*i}\n`;
                tabla += `${base} * ${i} = ${base*i}\n`;
            }
            resolve(tabla);
        }
    })
};

module.exports = {
    crearArchivo,
    listarTabla
}