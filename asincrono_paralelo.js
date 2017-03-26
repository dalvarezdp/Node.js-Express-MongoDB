/**
 * Created by david on 24/03/17.
 */

"use strict";

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000)
}


for (var n=0; n < 4; n++) {
    escribeTras2Segundos('texto' + n, function () {
        console.log('fin');
    });
}


