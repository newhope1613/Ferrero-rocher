import express from "express";
import cors from "cors";
import sequelize from "./db.js";
import routes from "./routes/routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", routes)
app.get("/", (_, res) => {
    res.json({ message: "Hello world" });
});
const PORT = process.env.PORT || 8080;
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ alter: true })
        app.listen(PORT, () => {
            console.log("Server has been starting on " + PORT);
        });
    } catch (e) {
        console.error(e);
    }
};

start();