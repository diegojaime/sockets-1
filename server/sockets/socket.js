const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    //Enviamos mensaje del servidor al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    //Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data)

        client.broadcast.emit('enviarMensaje', data)

        /*
            //Recibimos el callback como parametro y lo ejecutamos si todo salió bien
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salio bien'
            })
        } else {
            callback({
                resp: 'Todo salio mal!'
            })
        }
        */

    })
})