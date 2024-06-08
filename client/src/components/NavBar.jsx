import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link to="/">Home</Link>
            </a>
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link to="/tareas">Gestionar tareas</Link>
            </a>
            <a class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              <Link to="/crear-tareas">Crear tarea</Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
