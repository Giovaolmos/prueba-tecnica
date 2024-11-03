import { createUserDto } from "../../dtos/user/createUser.dto";
import { IUser } from "../../interfaces/user";
import { Users } from "../../models/user";

export const createUserService = async (
  userData: createUserDto,
): Promise<IUser> => {
  const newUser = await Users.create(userData);
  return newUser;
};
