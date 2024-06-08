import Router from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTaskByID,
  updateTask,
} from "../controllers/taskControl.js";

const taskRouter = Router();

taskRouter.get("/task", getTask);
taskRouter.post("/task", createTask);
taskRouter.get("/task/:id", getTaskByID);
taskRouter.put("/task/:id", updateTask);
taskRouter.delete("/task/:id", deleteTask);
export default taskRouter;
