import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const {usuario} = useContext(AuthContext);

  let component: ReactNode;

  if(usuario.token !== "") {
    component = (
      <nav className='bg-(--jet) py-4 px-8 fixed top-0 left-0 right-0 z-50'>
        <div className='container mx-auto flex justify-between items-center'>
        <div className="w-10 h-10 bg-(--celadon) rounded-full flex items-center justify-center">
            <Link to='/home'><img src="https://i.imgur.com/H6qOppX.png" alt="VeloFit" className="w-8 h-8"/></Link>
          </div>

          <ul className='navbar-links flex gap-10 list-none m-0 p-0'>
            <li>
              <Link
                to='/categorias'
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Categorias
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link to='/servicos'
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Serviços
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link
                to='/sobre'
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Sobre
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
            <li>
              <Link
                to='/contato'
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Contato
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </Link>
            </li>
          </ul>

          <div className='navbar-actions flex gap-4 items-center'>
            <button className='l-button px-6 py-2 bg-transparent text-white border-2 border-white rounded font-semibold hover:bg-white hover:text-[#2c302e] transition-all duration-300'>
              <Link to='/login'>Login</Link> 
            </button>
            <button className='cad-button px-6 py-2 bg-[#f06543] text-white border-2 border-[#f06543] rounded font-semibold hover:bg-[#e05738] hover:border-[#e05738] hover:scale-105 transition-all duration-300'>
              <Link to='/cadastro'>Cadastrar</Link>
            </button>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {component}
    </>
  );
}

export default Navbar;
