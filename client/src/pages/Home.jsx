import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Home() {
  const [tasks, setTask] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/task")
      .then((response) => setTask(response.data))
      .catch((error) => console.error("error obteniendo las tareas", error));
  }, []);
  return (
    <div className="mt-3">
      <h1 className="text-center font-bold text-slate-700 tracking-wide">
        Lista de Tareas
      </h1>

      <div className="flex flex-wrap justify-center">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 hover:bg-slate-700 cursor-pointer"
          >
           
            <h5 className="mb-2 text-xl text-start font-bold tracking-tight text-gray-900 dark:text-white">
              {task.name}
            </h5>
            <p className="mb-3 font-normal text-start text-gray-700 dark:text-gray-400">
              {task.description}
            </p>
            <span class="bg-blue-100 text-blue-800 text-start text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
