import { IsString, IsOptional, IsUrl } from "class-validator";

export class UpdateMealDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}
