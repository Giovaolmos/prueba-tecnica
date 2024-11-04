import { Router } from "express";
import { postRouter } from "./postUser.routes";
import { loginRouter } from "./loginUser.routes";
export const userRouter = Router();

userRouter.use("/", postRouter);
userRouter.use("/", loginRouter);

export default userRouter;
