require('dotenv/config');
require('./db/mongoose');
import express from 'express';
const app = express();
import Room from './models/room';
app.use(express.json());
// for socket communication
import http from 'http';
import socketIo from 'socket.io';
const server = http.createServer(app);
const io = socketIo(server);
app.use(function (req: any, res: any, next: any) {
  req.io = io;
  next();
});
io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('Client disconnected');
  });
});

app.post('/api/create', async (req: any, res: any) => {
  const { roomname } = req.body;
  try {
    const newRoom = new Room({ roomname });
    newRoom.save();
    return res.status(201).json({ success: true, data: { roomname } });
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: 'failed to create a room' });
  }
});
server.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('[http] Server listening on port', process.env.PORT);
});
