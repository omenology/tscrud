import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  username: string;
  password: string;
}

const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IUser>("user", userSchema);
