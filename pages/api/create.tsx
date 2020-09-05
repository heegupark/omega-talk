import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../../middleware/models/room';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const { roomname, username } = request.body;
  try {
    const newRoom = new Room({
      roomname,
      owner: username,
      participants: { username },
    });
    await newRoom.save();
    return response.status(201).json({ success: true, room: newRoom });
  } catch (e) {
    return response
      .status(500)
      .json({ success: false, message: 'failed to create a room' });
  }
};
