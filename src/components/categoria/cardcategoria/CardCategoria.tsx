import type Categoria from "../../../models/Categoria"
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      key={categoria.id}
      className='flex flex-col items-center justify-center bg-(--jet)/80 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-(--celadon)/80 hover:scale-105 transition duration-300 h-50'
    >
      <div className='flex items-center gap-2 mb-3'>
        
        <h2 className='text-3xl font-semibold text-center text-white'>
          {categoria.nome_categoria}
        </h2>
      </div>

      <div className='flex gap-6 justify-center align-center h-fit text-center'>
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 text-center hover:bg-white hover:text-[#2c302e] text-white rounded-xl font-semibold transition-all duration-300 border bg-(--tomato)'
        >
          Editar
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 bg-(--orange) hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 border'
        >
          Deletar
        </Link>
        
      </div>
    </div>
  )
}

export default CardCategoria