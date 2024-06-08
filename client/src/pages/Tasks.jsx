import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task")
      .then((response) => setTask(response.data))
      .catch((error) => console.error("error obteniendo las tareas", error));
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/task/${id}`)
      .then(() => setTask(tasks.filter((task) => task._id !== id)))
      .catch((error) => console.error("Error borrando la tarea:", error));
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Nombre
            </th>
            <th scope="col" class="px-6 py-3">
              Descripción
            </th>
            <th scope="col" class="px-6 py-3">
              Fecha Creada
            </th>
            <th scope="col" class="px-6 py-3">
              Fecha Vencimiento
            </th>
            <th scope="col" class="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {task.name}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {task.description}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {new Date(task.creationDate).toLocaleDateString()}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {new Date(task.dueDate).toLocaleDateString()}
              </td>
              <td
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Link to={`/update-tareas/${task._id}`}>
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(task._id)}
                  className="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:red:ring-red-800"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
