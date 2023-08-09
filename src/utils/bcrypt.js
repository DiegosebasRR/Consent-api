import pkg from "bcryptjs";
const { hash, compare } = pkg;

const encrypted = async (pass) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

const verified = async (pass, passwordHash) => {
  const isCorrect = await compare(pass, passwordHash);
  return isCorrect;
};

export { encrypted, verified };
