/**
 * Created by david on 25/03/17.
 */
'use strict';

const calculadora = require('./calculadora');
calculadora.persona.nombre ='Pepe';
const calculadora1 = require('./calculadora');
console.log(calculadora1.persona);
const calculadora2 = require('./calculadora');
const calculadora3 = require('./calculadora');
const calculadora4 = require('./calculadora');

console.log(calculadora.suma(2,5));