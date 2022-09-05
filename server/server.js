const http = require('http');
const express = require('express');
const socketio = require('socket.io');


const app = express();

app.use(express.static(`${__dirname}/../client`));

const server =  http.createServer(app);

const io = socketio(server);

io.on('connection' , (sock) => {
    console.log("new client");
    sock.emit('message', 'You are connected');

    sock.on('message' , (text) => io.emit("message" , text)); //sending message recieved from one client to all the clients
})

server.on('error', (err) =>{
    console.log(err);
})

server.listen(8080, () => {
    console.log("seerver running");
});

