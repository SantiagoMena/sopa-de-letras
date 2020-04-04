const express = require('express');
const path = require('path');
const app = express();

app.use(require('./routes/sopa'))

const publicPath = path.resolve(__dirname, '../public');
const port = 3000;

app.use(express.static(publicPath));

app.listen(port, error => {

    if (error) throw new Error(error);

    console.log(`Servidor corriendo en puerto ${ port }`);

});