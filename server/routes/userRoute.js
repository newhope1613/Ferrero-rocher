import userController from "../controllers/userController.js";
import { Router } from "express";

const routes = Router();

routes.post("/registration", userController.registration);
routes.post("login", userController.login)

export default routes;
