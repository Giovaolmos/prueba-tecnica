import { userLoginDto } from "../../dtos/user/loginUser.dto";
import { Users } from "../../models/user";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";

export const loginUserService = async (loginData: userLoginDto) => {
  const { email, password } = loginData;

  const userDB = await Users.findOne({ email });
  if (!userDB) {
    throw new Error("Credenciales incorrectas.");
  }
  const bytes = CryptoJS.AES.decrypt(
    userDB.password,
    process.env.SECRET_KEY as string,
  );
  const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  if (decryptedPassword !== password) {
    throw new Error("Credenciales incorrectas.");
  }

  const token = jwt.sign(
    { userId: userDB._id, isAdmin: userDB.isAdmin },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" },
  );

  return {
    message: "Login exitoso",
    token,
  };
};
