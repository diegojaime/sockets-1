const express = require('express');
const socketIO = require('socket.io')
const path = require('path');
const http = require('http')

const app = express();
//Liga el servidor de express al http le pasa toda la configuración
let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
// Lo exportamos para poder utilizarlo en socket.js
module.exports.io = socketIO(server)
require('./sockets/socket')


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});