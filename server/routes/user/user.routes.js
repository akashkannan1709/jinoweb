import { Router } from "express";
import authRouter from "./auth.routes.js"

import {
  getProfile,
  updateProfile,
} from "../../controllers/user/auth.controller.js";
import verifyUserToken from "../../middleware/jwt/user.middleware.js";


const userRouter = Router();

userRouter.use("/auth", authRouter);

userRouter.get("/getprofile", verifyUserToken, getProfile);
userRouter.post("/update-profile", verifyUserToken, updateProfile);

export default userRouter;
