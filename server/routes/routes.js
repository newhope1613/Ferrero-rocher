import { Router } from "express";
import user from "./userRoute.js";
import game from "./gameRoute.js";

const routes = Router();

routes.use("/users", user);
routes.use("/game", game);

export default routes;
