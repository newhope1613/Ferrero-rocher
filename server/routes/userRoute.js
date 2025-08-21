import userController from "../controllers/userController.js";
import { Router } from "express";

const routes = Router();

routes.post("/user", userController.registration)

export default routes