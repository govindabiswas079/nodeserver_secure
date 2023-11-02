import express from "express";
import { Register, Login } from "../controllers/auth.js";

const AuthRouter = express.Router();

AuthRouter.post('/register', Register);
AuthRouter.post('/login', Login);

export {
    AuthRouter
}