import { Router } from "express";
import userRoute from "./userRoute.js"

const routes = Router()

routes.use("/users", userRoute)

export default routes