import { registerNewUser, loginUser } from "../services/auth.js";

const registerController = async ({ body }, res) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginController = async ({ body }, res) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "Password_incorrect") {
    res.status(403).send(responseUser);
  } else {
    res.send(responseUser);
  }
};

export { registerController, loginController };
