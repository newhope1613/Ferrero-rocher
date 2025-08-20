import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (reg, res) => {
  res.json({ message: "Hello world" });
});
const PORT = process.env.PORT || 8080;
const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server has been starting on " + PORT);
    });
  } catch (e) {
    console.error(e);
  }
};

start();