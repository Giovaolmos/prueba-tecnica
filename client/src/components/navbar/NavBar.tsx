import { useState } from "react";

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between p-4 bg-transparent text-white relative z-10 bg-gray-700">
          <h1>The Meal DB</h1>
          <div className="hidden lg:flex ml-auto">
            <ul className="flex gap-4 items-center cursor-pointer">
              <li>Inicio</li>
              <li>Historial</li>
              <li>Nuevo Turno</li>
              <li>Home</li>
              <li className="rounded-md bg-[#b37d44] py-1 px-2 hover:bg-[#dc9c57]">
                Iniciar Sesión
              </li>
              <li className="rounded-md bg-[#de8730] py-1 px-2 hover:bg-[#f29435]">
                Registrar
              </li>
            </ul>
          </div>
          <button
            className="lg:hidden ml-auto focus:outline-none text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "Cerrar" : "Menú"}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="lg:hidden bg-gray-700 text-white p-4">
          <ul className="flex flex-col gap-2">
            <li>Inicio</li>
            <li>Iniciar Sesión</li>
            <li>Registrar</li>
          </ul>
        </div>
      )}
    </div>
  );
};
