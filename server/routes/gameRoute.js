import { Router } from "express";
import gameController from "../controllers/gameController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const game = Router();

game.post("/play", authMiddleware, gameController.playGame);
game.post("/status", authMiddleware, gameController.checkStatus);
game.post("/digital", authMiddleware, gameController.sendEmail);
game.post("/physical", authMiddleware, gameController.savePhysicalAddress);

export default game;
