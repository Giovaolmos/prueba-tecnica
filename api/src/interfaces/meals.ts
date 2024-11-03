import { Document } from "mongoose";

export interface IMeal extends Document {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}
