import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import taskRouter from "./src/routes/taskRoute.js";

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
app.use("/api", taskRouter);
