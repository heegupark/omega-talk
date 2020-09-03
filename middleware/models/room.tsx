import mongoose, { Schema, Document } from 'mongoose';

export interface IRoom extends Document {
  roomname: string;
}

const roomSchema: Schema = new mongoose.Schema(
  {
    roomname: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model<IRoom>('Room', roomSchema);

export default Room;
