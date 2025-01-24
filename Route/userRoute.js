import express from "express";

import { createUser } from "../controler/controlerUser.js";

const userRouter = express.Router();

userRouter.post("/create",createUser);

export default userRouter;