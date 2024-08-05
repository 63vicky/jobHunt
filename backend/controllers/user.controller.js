import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { genToken } from "../utils/jwtUtils.js";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, mobile } = req.body;

    if (!fullName || !email || !password || !mobile) {
      return res
        .status(401)
        .json({ message: "Something is missing", success: false });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already registered with this email",
        success: false,
      });
    }
    const hashPass = await bcrypt.hash(password, 10);
    await User.create({
      fullName,
      email,
      password: hashPass,
      mobile,
    });

    return res
      .status(201)
      .json({ message: "User registered Successfully", success: true });
  } catch (err) {
    console.log(err);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(401)
      .json({ message: "Something is missing", success: false });
  }

  let user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found with this email.", success: false });
  }

  const isMatchPass = await bcrypt.compare(password, user.password);
  if (!isMatchPass) {
    return res
      .status(401)
      .json({ message: "wrong email or password", success: false });
  }

  user = {
    fullName: user.fullName,
    email: user.email,
    mobile: user.mobile,
  };

  const userData = {
    id: user.id,
  };

  const userToken = genToken(userData, "2m");

  return res
    .cookie("userToken", userToken, { maxAge: 2 * 60 * 1000, httpOnly: true })
    .status(200)
    .json({ message: `Welcome Back, ${user.fullName}`, success: true, user });
};
