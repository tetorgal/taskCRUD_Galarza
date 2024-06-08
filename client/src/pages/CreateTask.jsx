import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default function CreateTask() {
  const [task, setTasks] = useState({
    name: "",
    description: "",
    dueDate: new Date(),
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTasks({ ...task, [e.target.name]: e.target.value });
  };

  const handleChangeDate = (date) => {
    setTask({ ...task, dueDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/task", task)
      .then(() => navigate("/tareas"))
      .catch((error) => console.error("Error al crear la nueva tarea", error));
  };

  return (
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <form onSubmit={handleSubmit}>
        <div className="mb-5 mt-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Nombre Tarea
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nueva tarea"
            value={task.name}
            onChange={handleChange}
            required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div className="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Descripción tarea
          </label>
          <textarea
            type="text-area"
            name="description"
            id="description"
            placeholder="Descripción..."
            value={task.description}
            onChange={handleChange}
            required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Fecha de vencimiento
          </label>
          <DatePicker
            selected={task.dueDate}
            onChange={handleChangeDate}
            dateFormat="MM/dd/yyyy"
            required
          />
        </div>

        <button
          type="submit"
          class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
