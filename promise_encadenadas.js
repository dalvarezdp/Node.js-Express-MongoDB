/**
 * Created by david on 3/04/17.
 */
'use strict';

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise(function (resolve, reject) {
       resolve(plato + ' arroz');
       //reject('sdfs');
    });
}

function conAjo(plato) {
    return new Promise(function (resolve, reject) {
        resolve(plato + ' ajo');
    });
}

function con(plato, ingrediente) {
    return new Promise(function (resolve, reject) {
        resolve(plato + ' ' + ingrediente);
    });
}


// encadenar promesas

var paella = 'paella con';

conArroz(paella)
    .then( conAjo)
    .then( function (plato) {
       return con(plato, 'pollo');
    }).then(function (plato) {
        console.log(plato);
        return 'queso';
    }).catch(function (err) {
        console.log('Error', err);
    });
    // Podemos encadenar mas acciones, tras haber fallado
    /*.then(function (queesesto) {
        console.log('queesesto', queesesto);
    });*/