//Server side

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();

const clientPath = `${__dirname}/../client`;
app.use(express.static(clientPath));

const server = http.createServer(app);
const io = socketio(server);

const PORT = 8080 || process.env.PORT;

io.on('connection', (sock) => {
      sock.emit('message', "Hi you are connected");

      sock.on('message', (text) => {
            io.emit('message', text);
      });
});

server.on('error', (err) => {
      console.log("Error Occured ", err);
});

server.listen(PORT, () => {
      console.log(`Chat Box started on ${PORT}`);
});
