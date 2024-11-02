import { Document } from "mongoose";

export interface IMeal {
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}
