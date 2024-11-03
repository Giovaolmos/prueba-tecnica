import { createUserDto } from "../../dtos/user/createUser.dto";
import { IUser } from "../../interfaces/user";
import { encryptPassword } from "../../middlewares/user/encryptPassword.middleware";
import { Users } from "../../models/user";

export const createUserService = async (
  userData: createUserDto,
): Promise<IUser> => {
  const userDB = await Users.findOne({ email: userData.email });
  if (userDB) {
    throw new Error("El email ya está en uso");
  }
  const encryptedPassword = encryptPassword(userData.password);
  userData.password = encryptedPassword;
  const newUser = await Users.create(userData);
  return newUser;
};
