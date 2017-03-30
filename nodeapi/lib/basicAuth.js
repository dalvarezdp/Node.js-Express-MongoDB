/**
 * Created by david on 30/03/17.
 */
'use strict';

const basicAuth = require('basic-auth');

module.exports = function (req, res, next) {

    // Intentamos extraer un usuario de la petición (header)
    const user = basicAuth(req);

    // si tenemos el usuario y las credenciales son correctas dejamos pasar,
    // sino, respondemos pidiendo credenciales
    if (!user || user.name !== 'admin2' || user.pass !== '1234' ){
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.send(401);
        return;
    }
    next();
};