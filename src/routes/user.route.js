import express from 'express'
import { loginUser, registerUser } from "../controller/user.controller.js";

export const userRouter = express.Router()
userRouter.post('/signup',registerUser)
userRouter.post('/login',loginUser)
