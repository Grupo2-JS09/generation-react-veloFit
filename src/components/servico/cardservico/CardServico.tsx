import { Link } from "react-router-dom";
import type Servico from "../../../models/Servico";

interface CardServicosProps {
  servico: Servico;
}

function CardServicos({ servico }: CardServicosProps) {
  return (
    <div
      className="border-slate-900 border
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-gray-800 py-2 px-4 items-center gap-4">
          <img
            src={servico.usuario?.foto}
            className="h-12 rounded-full"
            alt={servico.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {servico.usuario?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">
            {servico.categoria.nome_categoria}
          </h4>
          <p>{servico.modalidade}</p>
          <p>Categoria: {servico.categoria?.nome_categoria}</p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarservico/${servico.id}`}
          className="w-full text-white bg-indigo-400
                    hover:bg-indigo-800 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarservico/${servico.id}`}
          className="text-white bg-red-400
                    hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServicos;
