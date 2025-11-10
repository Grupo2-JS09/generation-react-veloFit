import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='bg-(--jet) py-4 px-8'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='logo-veloFit flex items-center gap-2'>
            <span className='text-white text-2xl font-bold'>VeloFit</span>
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
              <a
                href=''
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Serviços
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
            <li>
              <a
                href='#sobre'
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Sobre
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
            <li>
              <a
                href=''
                className='text-white text-base font-medium hover:text-(--celadon) transition-colors duration-300 relative group'
              >
                Contato
                <span className='absolute left-0 bottom-[-5px] w-0 h-0.5 bg-(--celadon) group-hover:w-full transition-all duration-300'></span>
              </a>
            </li>
          </ul>

          <div className='navbar-actions flex gap-4 items-center'>
            <button className='l-button px-6 py-2 bg-transparent text-white border-2 border-white rounded font-semibold hover:bg-white hover:text-[#2c302e] transition-all duration-300'>
              Login
            </button>
            <button className='cad-button px-6 py-2 bg-[#f06543] text-white border-2 border-[#f06543] rounded font-semibold hover:bg-[#e05738] hover:border-[#e05738] hover:scale-105 transition-all duration-300'>
              Cadastrar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
