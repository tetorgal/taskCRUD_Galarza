import mongoose from "mongoose";
import taskSchema from "../models/task_Galarza.js";

export const getTask = async (req, res) => {
  try {
    const task = await taskSchema.find();
    if (!task) {
      res.status(404).json({ error: "No se han encontrado tareas" });
    }
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Error en la conexión con el servidor" });
  }
};

export const createTask = async (req, res) => {
  const { name, description, creationDate, dueDate } = req.body;

  try {
    const task = new taskSchema({
      name,
      description,
      creationDate: Date.now(),
      dueDate,
    });
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: "Hubo un error al registrar la tarea" });
    console.log(error);
  }
};

export const getTaskByID = async (req, res) => {
  const task_id = req.params.id;
  try {
    const task = await taskSchema.findById(task_id);
    if (!task) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(task);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocurrio un error al encontrar la tarea en el servidor" });
    console.log(error);
  }
};

export const updateTask = async (req, res) => {
  const { name, description, creationDate, dueDate } = req.body;
  const task_id = req.params.id;
  try {
    const updatedTask = await taskSchema.findByIdAndUpdate(
      task_id,
      { name, description, creationDate, dueDate },
      { new: true }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Ocurrio un error al actualizar la tarea" });
    console.log(error);
  }
};
export const deleteTask = async (req, res) => {
  const task_id = req.params.id;
  try {
    const deletedTask = await taskSchema.findByIdAndDelete(task_id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Tarea eliminada con exito", deletedTask });
  } catch (error) {
    res.status(500).json({ error: "Ocurrio un error al eliminar la tarea" });
    console.log(error);
  }
};
