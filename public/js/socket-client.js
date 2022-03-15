// Html
const lnOnline = document.querySelector('#lbOnline');
const lnOffline = document.querySelector('#lbOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () => {
    // console.log('Connected!');
    lnOnline.style.display = ''
    lnOffline.style.display = 'none'
});

socket.on('disconnect', () => {
    // console.log('Disconnected!');
    lnOnline.style.display = 'none'
    lnOffline.style.display = ''
});

socket.on('send-msg', payload => {
    console.log( payload );
});

btnSend.addEventListener('click', () => {
    const msg = txtMessage.value;
    const payload = {
        msg,
        id: '123ABC',
        date: new Date().getTime()
    }
    socket.emit( 'send-msg', payload, ( id) => {
        console.log( 'Server', id );
    });
});