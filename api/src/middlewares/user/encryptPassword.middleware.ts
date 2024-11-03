import CryptoJS from "crypto-js";

export const encryptPassword = (password: string): string => {
  const secretKey = process.env.SECRET_KEY;
  return CryptoJS.AES.encrypt(password, secretKey).toString();
};
