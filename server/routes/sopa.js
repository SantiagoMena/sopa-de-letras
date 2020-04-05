const express = require('express');
const app = express();
const { Sopa } = require('../classes/sopa');

app.post('/sopa', (req, res) => {
    let { sopa, palabra } = req.body;
    
    let sopaDeLetras = new Sopa(sopa, palabra);
    let resultado = sopaDeLetras.descifrar();

    return res.json({
        ok: true,
        ... resultado
    });
});

module.exports = app;