import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({});
const SECRET_KEY = process.env.SECRET_KEY;

export const genToken = async (payload, validFor) => {
  const options = {
    expiresIn: validFor || "1d",
  };

  const token = jwt.sign(payload, SECRET_KEY, options);

  return token;
};
