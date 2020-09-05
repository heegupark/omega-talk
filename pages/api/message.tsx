import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../../middleware/models/room';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id, username, message } = request.body;
  try {
    const room = await Room.findOne({ _id });
    if (!room) {
      return response
        .status(404)
        .json({ success: false, message: 'failed to find a room' });
    }
    await room.messages.push({ username, message });
    room.save();
    const result = room.messages[room.messages.length - 1];
    return response.status(201).json({ success: true, data: result });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to send a message' });
  }
};
