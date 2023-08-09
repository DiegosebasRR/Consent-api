import UserModel from "../models/auth.js";
import { encrypted, verified } from "../utils/bcrypt.js";

import { generateToken } from "../utils/jwt.js";
const registerNewUser = async ({ firstname, lastname, email, password }) => {
  const userExists = await UserModel.findOne({ email });
  if (userExists) return "User_exists";
  const passHash = await encrypted(password);
  const registerNewUser = await UserModel.create({
    firstname,
    lastname,
    email,
    password: passHash,
  });
  return registerNewUser;
};

const loginUser = async ({ email, password }) => {
  const userExists = await UserModel.findOne({ email });
  if (!userExists) return "User_not_exist ";
  const passwordHash = userExists.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "Password_incorrect";
  const token = generateToken(userExists.email);
  const data = {
    token,
    user: userExists,
  };
  return data;
};

export { registerNewUser, loginUser };
