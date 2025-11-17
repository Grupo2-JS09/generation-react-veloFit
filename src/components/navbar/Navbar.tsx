import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../utils/ToastAlerta";

export default function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [menuAberto, setMenuAberto] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  function logout() {
    handleLogout();
    ToastAlerta("Usuário deslogado com sucesso!", "sucesso");
    navigate("/");
  }

  useEffect(() => {
    function handleClickFora(event: any) {
      const target = event.target;
      if (!target.closest(".menu-foto") && !target.closest(".mobile-menu") && !target.closest(".hamburger-btn")) {
        setMenuAberto(false);
        setMenuMobileOpen(false);
      }
    }

    document.addEventListener("click", handleClickFora);
    return () => document.removeEventListener("click", handleClickFora);
  }, []);

  if (usuario.token === "") return null;

  return (
    <nav className="bg-[var(--jet)] py-4 px-6 sticky top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[var(--celadon)] rounded-full flex items-center justify-center flex-shrink-0">
            <Link to="/home">
              <img src="https://i.imgur.com/H6qOppX.png" alt="VeloFit" className="w-8 h-8" />
            </Link>
          </div>
          <div className="hidden md:block ">
            <ul className="flex gap-10 list-none m-0 p-0">
              <li>
                <Link to="/categorias" className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group">
                  Categorias
                  <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group">
                  Serviços
                  <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group">
                  Sobre
                  <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-300 relative group">
                  Contato
                  <span className="absolute left-0 bottom-[-5px] w-0 h-0.5 bg-[var(--celadon)] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="hamburger-btn md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Alternar menu"
            aria-expanded={menuMobileOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMenuMobileOpen((s) => !s);
            }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuMobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <div className="relative menu-foto flex flex-col items-center text-white">
            <img
              onClick={(e) => {
                e.stopPropagation();
                setMenuAberto((s) => !s);
              }}
              className="rounded-full w-12 h-12 cursor-pointer hover:scale-105 transition-transform duration-300"
              src={usuario.foto || "https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"}
              alt={usuario.nome}
            />
            <p className="text-sm hidden md:block">{usuario.nome}</p>

            {menuAberto && (
              <div className="absolute top-16 right-0 bg-[var(--jet)] bg-opacity-95 border border-gray-600 rounded-xl shadow-2xl py-3 px-4 flex flex-col gap-2 w-44 animate-fadeIn">
                <Link to="/perfil" className="text-white hover:text-[var(--celadon)] transition" onClick={() => setMenuAberto(false)}>
                  Meu Perfil
                </Link>
                <button onClick={logout} className="text-red-400 hover:text-red-600 transition text-left">
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`mobile-menu md:hidden ${menuMobileOpen ? "block" : "hidden"}`}>
        <div className="px-6 pb-4 pt-2 border-t border-gray-700">
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            <li>
              <Link to="/categorias" onClick={() => setMenuMobileOpen(false)} className="block text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-200">
                Categorias
              </Link>
            </li>
            <li>
              <Link to="/servicos" onClick={() => setMenuMobileOpen(false)} className="block text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-200">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={() => setMenuMobileOpen(false)} className="block text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-200">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={() => setMenuMobileOpen(false)} className="block text-white text-base font-medium hover:text-[var(--celadon)] transition-colors duration-200">
                Contato
              </Link>
            </li>
            <li className="pt-2 border-t border-gray-700">
              <Link to="/perfil" onClick={() => setMenuMobileOpen(false)} className="block text-white font-medium hover:text-[var(--celadon)]">
                Meu Perfil
              </Link>
            </li>
            <li>
              <button onClick={logout} className="w-full text-left text-red-400 hover:text-red-600 transition py-2">Sair</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
