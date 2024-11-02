import { Document } from "mongoose";

export interface IMeal extends Document {
  name: string;
  instructions: string;
  imageUrl: string;
  category: string;
}
