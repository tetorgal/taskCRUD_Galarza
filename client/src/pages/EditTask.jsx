import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTask() {
  const [tasks, setTask] = useState({ name: "", description: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/tareas");
    setTask(tasks);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/task/${id}`)
      .then((response) => setTask(response.data))
      .catch((error) => console.error("Error buscando la tarea:", error));
  }, [id]);

  const handleChange = (e) => {
    setTask({ ...tasks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/task/${id}`, tasks)
      .then(() => navigate("/tareas"))
      .catch((error) => console.error("Error actualizando la tarea:", error));
  };

  return (
    <div class="mx-auto w-full max-w-[550px] bg-white">
      <h2 className="mb-3 mt-3 block text-xl font-semibold text-[#07074D]">
        Editar Tarea
      </h2>
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
            value={tasks.name}
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
            placeholder="Descripión..."
            value={tasks.description}
            onChange={handleChange}
            required
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <button
          type="submit"
          class="hover:shadow-form w-2/6 me-5 rounded-md bg-blue-500 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Modificar
        </button>
        <button onClick={handleCancel} class="hover:shadow-form w-2/6 rounded-md bg-red-500 py-3 px-8 text-center text-base font-semibold text-white outline-none">
          Cancelar
        </button>
      </form>
    </div>
  );
}
