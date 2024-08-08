import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECERET_KEY;

export const genToken = async (payload, validFor) => {
  const options = {
    expiresIn: validFor || "1d",
  };

  const token = await jwt.sign(payload, SECRET_KEY, options);

  return token;
};
