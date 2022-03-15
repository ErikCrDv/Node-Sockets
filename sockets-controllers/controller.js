
const socketController = socket => {
    console.log('Client Connected', socket.id);

    socket.on('disconnect', () => {
        console.log('Client Disconnected', socket.id);
    });

    socket.on('send-msg', (payload, callback) => {
        const id = 123456;
        socket.broadcast.emit('send-msg', payload );

        callback( { id, date: new Date().getTime() } );
    });
}

module.exports = {
    socketController
}