import express from "express";
import routes from "../routes";
import {
  editProfile,
  userDetail,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
export default userRouter;
