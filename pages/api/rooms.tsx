import { NextApiRequest, NextApiResponse } from 'next';
import Room from '../../middleware/models/room';
require('../../middleware/db/mongoose');

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const limit = request.query.limit;
  const skip = request.query.skip;
  try {
    const rooms = await Room.find()
      .sort({ updatedAt: -1 })
      .limit(Number(limit))
      .skip(Number(skip))
      .exec();
    if (!rooms) {
      return response
        .status(404)
        .json({ success: false, message: 'failed to find rooms' });
    }
    return response.json({ success: true, rooms: rooms });
  } catch (e) {
    return response.status(500).json({ success: false, message: e.message });
  }
};
