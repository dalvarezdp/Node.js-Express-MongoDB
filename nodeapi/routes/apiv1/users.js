/**
 * Created by david on 31/03/17.
 */
'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const router = express.Router();
const localConfig = require('../../localConfig');

const Usuario = mongoose.model('Usuario');

// POST - authencation de usuarios
router.post('/authenticate', function (req, res, next) {

    // recogemos credenciales
    const userName = req.body.username;
    const password = req.body.password;

    // buscamos en la base de datos
    Usuario.findOne({email: userName}).exec(function (err, user) {
        if (err) {
            return next(err);
        }

        // si encontramos el usuario
        if (!user) {
            return res.json({success: false, error: 'Usuario no encontrado'});
        }
        //comprobamos su password
        if (password !== user.password) {
            return res.json({success: false, error: 'Password incorrecta'});
        }

        // creamos un token
        jwt.sign({ user_id: user._id}, localConfig.jwt.secret, {
            expiresIn: localConfig.jwt.expiresIn
        }, function(err, token) {
            // respondemos al usuario dándole el token
            res.json({success: true, token});
        });
    });

});


module.exports = router;