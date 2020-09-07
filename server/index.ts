require('dotenv/config');
import next from 'next';
import express from 'express';
import http from 'http';
const app = express();
const nextApp = next({});
app.use(express.json());
// for socket communication
import socketIo from 'socket.io';
import Room from '../middleware/models/room';
require('../middleware/db/mongoose');
const server = http.createServer(app);
const io = socketIo(server);

nextApp.prepare().then(async () => {
  app.use(function (req: any, res: any, next) {
    req.io = io;
    next();
  });
  io.on('connection', (socket: any) => {
    console.log('Client connected:', socket.id);
    socket.on('create-room', async (data: any) => {
      const { roomname, username } = data;
      try {
        const newRoom = new Room({
          roomname,
          owner: username,
          participants: { username },
        });
        await newRoom.save();
        socket.emit('main', {
          success: true,
          data: newRoom,
        });
        return socket.broadcast.emit('main', {
          success: true,
          data: newRoom,
        });
      } catch (e) {
        return socket.emit('create-room', {
          success: false,
          message: 'failed to create a room',
        });
      }
    });
    socket.on('chat', async (data: any) => {
      const { _id, username, message } = data;
      try {
        const room = await Room.findOne({ _id });
        if (!room) {
          return socket.emit(`room-${_id}`, {
            success: false,
            message: 'unable to send a message.',
          });
        }
        await room.messages.push({ username, message });
        room.save();
        const result = room.messages[room.messages.length - 1];
        socket.emit(`room-${_id}`, {
          success: true,
          data: result,
        });
        return socket.broadcast.emit(`room-${_id}`, {
          success: true,
          data: result,
        });
      } catch (e) {
        return socket.emit(`room-${_id}`, {
          success: false,
          message: 'failed to send a message.',
        });
      }
    });
    socket.on('joinroom', async (data: any) => {
      const { _id, username } = data;
      try {
        const room = await Room.findOne({ _id });
        if (!room) {
          return socket.emit(`room-${_id}`, {
            success: false,
            message: 'unable to join a room.',
          });
        }
        const userInRoom = room.participants.findIndex(
          (participant: any) => participant.username === username
        );
        if (userInRoom < 0) {
          await room.participants.push({ username });
          await room.messages.push({ username, message: _id });
          room.save();
          const result = room.messages[room.messages.length - 1];
          socket.emit(`room-${_id}`, {
            success: true,
            data: result,
          });
          return socket.broadcast.emit(`room-${_id}`, {
            success: true,
            data: result,
          });
        } else {
          return socket.broadcast.emit(`room-${_id}`, {
            success: true,
            message: 'already in the chatting room',
          });
        }
      } catch (e) {
        return socket.emit(`room-${_id}`, {
          success: false,
          message: 'failed to join a room.',
        });
      }
    });
    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log('Client disconnected', socket.id);
    });
  });

  server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log('[http] Server listening on port', process.env.PORT);
  });
});
