import { Router } from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
} from "../../controllers/user/auth.controller.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../../middleware/validators/user/authValidator.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";

const authRouter = Router();
authRouter.post("/register", validateRegisterInput, registerUser);
authRouter.post("/login", validateLoginInput, loginUser);
authRouter.get("/getprofile", verifyUserToken, getProfile);
authRouter.post("/update-profile", verifyUserToken, updateProfile);

export default authRouter;
