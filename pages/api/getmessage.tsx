import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../../middleware/models/room';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { _id } = request.body;
  try {
    const room = await Room.findOne({ _id });
    if (!room) {
      return response
        .status(404)
        .json({ success: false, message: 'failed to find a room' });
    }
    return response.status(201).json({ success: true, data: room.messages });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to send a message' });
  }
};
