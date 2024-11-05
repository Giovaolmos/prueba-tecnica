import { Users } from "../../models/user";
import { encryptPassword } from "../../middlewares/user/encryptPassword.middleware";

export const preLoadUserTest = async (): Promise<void> => {
  try {
    const userDB = await Users.find();
    if (userDB.length > 0) {
      console.log("No se requiere precarga de Usuario Tester");
      return;
    }

    const userTest = {
      name: "User Test",
      email: "userTest@gmail.com",
      password: "password123",
      isAdmin: true,
    };

    userTest.password = encryptPassword(userTest.password);

    await Users.create(userTest);
    console.log("Usuario Test precargado correctamente.");
  } catch (error) {
    throw new Error(`Error al precargar usuario tester: ${error.message}`);
  }
};
