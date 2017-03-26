/**
 * Created by david on 25/03/17.
 */

"use strict";

// No vamos a cambiar nunca el valor de fs por eso usamos const
const fs = require('fs');
const path = require('path');


// funcion que devuelve la version de un modulo
const versionModulo = function (nombreModulo, callback) {
    const fichero = path.join('./node_modules', nombreModulo, 'package.json');

    fs.readFile(fichero, 'utf8', function (err, data) {
        if (err) {
            callback(err);
            return;
        }

        // pasear data como un objeto
        const packageJson = JSON.parse(data);

        callback(null, packageJson.version);
    });
};





versionModulo('chance', function(err, str) {
    if (err) {
        console.error('Hubo un error: ', err);
        return;
    }
    console.log('La version del módulo es:', str);
});