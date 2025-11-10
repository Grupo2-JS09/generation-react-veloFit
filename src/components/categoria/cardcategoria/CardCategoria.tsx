import type Categoria from "../../../models/Categoria"
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      key={categoria.id}
      className='flex flex-col items-center bg-(--jet) bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-(--tomato) hover:scale-105 transition duration-300'
    >
      <div className='flex items-center gap-2 mb-3'>
        
        <h2 className='text-xl font-semibold text-center text-white'>
          {categoria.nome_categoria}
        </h2>
      </div>

      <div className='flex gap-6 justify-center align-center h-fit text-center'>
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 text-center bg-[var(--darkblue)] hover:bg-[#2c302e] text-white rounded-xl font-semibold transition-all duration-300 '
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 bg-[var(--orange)] hover:bg-orange-900 text-white rounded-xl font-semibold transition-all duration-300'
        >
          Deletar
        </Link>
        
      </div>
    </div>
  )
}

export default CardCategoria