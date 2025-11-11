/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState, useEffect, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  const [menuAberto, setMenuAberto] = useState(false);

  function logout() {
    handleLogout();
    ToastAlerta("Usuário deslogado com sucesso!", "sucesso");
    navigate("/");
  }

  // Fecha o menu ao clicar fora
  useEffect(() => {
    function handleClickFora(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (!target.closest(".menu-foto")) setMenuAberto(false);
    }

    document.addEventListener("click", handleClickFora);
    return () => document.removeEventListener("click", handleClickFora);
  }, []);

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <nav className="bg-[var(--jet)] py-4 px-8 fixed top-0 left-0 right-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="w-10 h-10 bg-[var(--celadon)] rounded-full flex items-center justify-center">
            <Link to="/home">
              <img
                src="https://i.imgur.com/H6qOppX.png"
                alt="VeloFit"
                className="w-8 h-8"
              />
            </Link>
          </div>

          {/* Links principais */}
          <ul className="hidden md:flex gap-10 list-none m-0 p-0">
            <li>
              <Link
                to="/categorias"
                className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group"
              >
                Categorias
                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group"
              >
                Serviços
                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group"
              >
                Sobre
                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group"
              >
                Contato
                <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>

          <div className="relative menu-foto flex flex-col items-center text-white">
            <img
              onClick={() => setMenuAberto(!menuAberto)}
              className="rounded-full size-12 cursor-pointer hover:scale-105 transition-transform duration-300"
              src={usuario.foto}
              alt={usuario.nome}
            />
            <p className="text-sm">{usuario.nome}</p>

            {menuAberto && (
              <div className="absolute top-16 right-0 bg-[var(--jet)] bg-opacity-95 border border-gray-600 rounded-xl shadow-2xl py-3 px-4 flex flex-col gap-2 w-44 animate-fadeIn">
                <Link
                  to="/perfil"
                  className="text-white hover:text-[var(--celadon)] transition"
                  onClick={() => setMenuAberto(false)}
                >
                  Meu Perfil
                </Link>
                <Link
                  to="/configuracoes"
                  className="text-white hover:text-[var(--celadon)] transition"
                  onClick={() => setMenuAberto(false)}
                >
                  Configurações
                </Link>
                <button
                  onClick={logout}
                  className="text-red-400 hover:text-red-600 transition text-left"
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }

  return <>{component}</>;
}

export default Navbar;
