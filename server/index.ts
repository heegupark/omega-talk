require('dotenv/config');
require('./db/mongoose');
const express = require('express');
const app = express();
app.use(express.json());
// for socket communication
const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(app);
const io = socketIo(server);
app.use(function (req, res, next) {
  req.io = io;
  next();
});
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('Client disconnected');
  });
});
server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('[http] Server listening on port', process.env.PORT);
});
