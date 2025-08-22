import userController from "../controllers/userController.js";
import { Router } from "express";

const user = Router();

user.post("/registration", userController.registration);
user.post("/login", userController.login);

export default user;
