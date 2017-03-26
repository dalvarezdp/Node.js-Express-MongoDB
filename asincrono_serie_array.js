/**
 * Created by david on 25/03/17.
 */
"use strict";

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000)
}

// llamar a una funcion n veves en serie
// y al terminar llamar a un callback final
function serieArray(arr, funcionALlamar, callbackFin) {
    if (arr.length == 0){
        return callbackFin();
    }
    var elemento = arr.shift();
    funcionALlamar('texto' + elemento, function () {
        serieArray(arr, funcionALlamar, callbackFin);
    });
}



serieArray([1,2,3,4], escribeTras2Segundos, function () {
    console.log('fin');
})