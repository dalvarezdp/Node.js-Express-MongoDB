/**
 * Created by david on 25/03/17.
 */
'use strict';

console.log('defino las funciones e inicializo la librería');

exports.suma = function(a, b) {
    return a + b;
};

exports.resta = function (a, b) {
    return a - b;
};

exports.persona = {
    nombre: 'Neo',
    edad: '33'
};

/*
function suma(a, b) {
    return a+b;
}

function resta(a, b) {
    return a-b;
}


module.exports = {
    suma: suma,
    resta: resta
};


module.exports.suma = suma;
module.exports.resta = resta;
*/