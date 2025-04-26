import { generateToken } from "../jwtToken.js";
import generateRefreshToken from "../refreshToken.js";
import User from "../Models/UserModel.js";
import asyncHandler from "express-async-handler";
import validateMongodbId from "../utils/validateMongodbId.js";
import jwt from "jsonwebtoken";
import sendEmail from "./emailCtrl.js";
import crypto from "crypto";

const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } else {
    throw new Error("User Already Exist");
  }
});

const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?.id);
    const UpdateUser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Password");
  }
});

// handle Refresh token
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  console.log(cookie);

  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");

  const refreshToken = cookie.refreshToken;
  console.log(refreshToken);

  const user = await User.findOne({ refreshToken });

  if (!user) {
    throw new Error("No Refresh Token Present in DB or Not Matched");
  }

  jwt.verify(refreshToken, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }

    const accessToken = generateToken(user?._id);
    res.json({ accessToken });
  });
});

// Logout function
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");

  const refreshToken = cookie.refreshToken;

  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }

  await User.findOneAndUpdate(
    { refreshToken: refreshToken },
    { refreshToken: "" },
    { new: true }
  );

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

const getSingleUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongodbId(id);

    const getUser = await User.findById(id);
    res.json(getUser);
  } catch (error) {
    throw new Error(error);
  }
});

const DeleteSingleUser = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    validateMongodbId(id);
    const deleteUser = await User.findByIdAndDelete(id);
    res.json(deleteUser);
  } catch (error) {
    throw new Error(error);
  }
});

const UpdateSingleUser = asyncHandler(async (req, res) => {
  try {
    console.log(req.user);
    const { _id } = req.user;
    validateMongodbId(_id);
    const UpdateUser = await User.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(UpdateUser);
  } catch (error) {
    throw new Error(error);
  }
});

const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const block = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User Blocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

const UpdatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id);
  try {
    const user = await User.findById(_id);

    if (password) {
      user.password = password;
      const updatedPassword = await user.save();
      res.json(updatedPassword);
    } else {
      res.json(user);
    }
  } catch (error) {
    throw new Error(error);
  }
});

const forgetPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("user not found with this email");

    const token = await user.createPasswordResetToken();
    await user.save();

    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now <a href="http://localhost:8080/api/user/reset-password/${token}">Click here</a>`;

    const data = {
      to: email,
      text: "Hey User",
      subject: "Forget Password Link",
      html: resetURL,
    };
    sendEmail(data);

    res.status(200).json({ token });
  } catch (error) {
    throw new Error(error);
  }
});
// Not Done
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  if (!user) throw new Error("Token expired,, please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  await user.save();
  res.json(user);
});

export {
  createUser,
  loginUserCtrl,
  getAllUser,
  getSingleUser,
  DeleteSingleUser,
  UpdateSingleUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  UpdatePassword,
  forgetPasswordToken,
  resetPassword,
};
