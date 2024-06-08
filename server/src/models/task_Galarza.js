import mongoose, { Schema } from "mongoose";

const task_Galarza = new Schema({
  name: String,
  description: String,
  creationDate: Date,
  dueDate: Date,
});

const taskSchema = mongoose.model("task_Galarza", task_Galarza);
export default taskSchema;
