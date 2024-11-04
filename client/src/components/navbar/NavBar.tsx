import { useState } from "react";

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <nav className="flex items-center justify-between p-4 bg-transparent text-white relative z-10 bg-slate-700">
          <h1>The Meal DB</h1>
          <div className="hidden lg:flex ml-auto">
            <ul className="flex gap-4 items-center cursor-pointer">
              <li>Inicio</li>
              <li>Iniciar Sesión</li>
              <li>Registrar</li>
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
        <div className="lg:hidden bg-slate-700 text-white p-4">
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
