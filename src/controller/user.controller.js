import { User } from "../model/userModel.js";
import { hashpass } from "../utils/bcrypt.js";
import { errorResponse, successResponse } from "../utils/response.js";
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username) {
      return errorResponse(res, "Please enter a username");
    }
    if (!email) {
      return errorResponse(res, "Please enter a email");
    }

    const findmail = await User.findOne({ email });
    if (findmail) {
      return errorResponse(res, "user with same email already exists");
    }

    if (!password) {
      return errorResponse(res, "Please enter a password");
    }
    const hashedpassword = await hashpass(password);
    console.log(hashedpassword);
    await User.create({
      username: username,
      email: email,
      password: hashedpassword,
    });
    return successResponse(res, "User Created Successfully");
  } catch (error) {
    console.log("error at register controller");
    errorResponse(res, "error at reigsterUser", error);
  }
};


export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, "Email and password are required", 400);
    }

    const user = await User.findOne({ email });

    if (!user) {
      return errorResponse(res, "Invalid email or password", 401);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return errorResponse(res, "Invalid email or password", 401);
    }

    return successResponse(res, "Login successful", {
      id: user._id,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return errorResponse(res, "Internal server error", 500);
  }
};