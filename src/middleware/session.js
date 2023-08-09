import { verifyToken } from "../utils/jwt.js";

const checkJwt = (req, res, next) => {
  try {
    const jwtbyUser = req.headers.authorization || "";
    const jwt = jwtbyUser.split(" ").pop();

    const isUser = verifyToken(`${jwt}`);
    if (!isUser) {
      res.status(401);
      res.send("JWT_token_not_valid");
    } else {
      req.user = isUser;
      console.log({ jwtbyUser });
      next();
    }
  } catch (e) {
    console.log({ e });
    res.status(400);
    res.send("Session_no_validad");
  }
};

export { checkJwt };
