var socket = io()
socket.on('connect', function() {
    console.log('Conectado al servidor')
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor')
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Diego',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp)
})

//Escuchar al servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje)
})