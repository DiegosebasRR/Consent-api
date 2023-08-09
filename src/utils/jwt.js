import pkg from "jsonwebtoken";
const { verify, sign } = pkg;

const JWT_SECRET = process.env.JWT_SECRET || "token.1212121";

const generateToken = (id) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (token) => {
  const isCorrect = verify(token, JWT_SECRET);
  return isCorrect;
};

export { generateToken, verifyToken };
