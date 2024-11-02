import { IsString, IsNotEmpty, IsUrl } from "class-validator";

export class CreateMealDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsUrl()
  @IsNotEmpty()
  imageUrl: string;
}
