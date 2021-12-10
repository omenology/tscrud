import { Schema, model, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  addBy: string;
}

const productSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: String,
    addBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IProduct>("product", productSchema);
