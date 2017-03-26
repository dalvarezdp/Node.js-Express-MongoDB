/**
 * Created by david on 25/03/17.
 */

function escribeTras2Segundos(texto, callback) {
    setTimeout(function () {
        console.log(texto);
        callback();
    }, 2000)
}

// llamar a una funcion n veves en serie
// y al terminar llamar a un callback final
function serie(veces, funcionALlamar, callbackFin) {
    if (veces == 0){
        return callbackFin();
    }
    veces--;
    funcionALlamar('texto' + veces, function () {
        serie(veces, funcionALlamar, callbackFin);
    });
}



serie(5, escribeTras2Segundos, function () {
    console.log('fin');
})