import { Link } from "react-router-dom";
import type Servico from "../../../models/Servico";

interface CardServicosProps {
  servico: Servico;
}

function CardServicos({ servico }: CardServicosProps) {
  return (
    <div className="flex flex-col items-center bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300">
      <div>

        <div className="flex w-full bg-gray-800 py-2 px-4 items-center gap-4">
          <img
            src={servico.usuario?.foto || " https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png"}
            className="h-12 rounded-full"
            alt={servico.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase text-(--celadon) font-semibold">
            {servico.usuario?.nome || "Anônimo"}
          </h3>
        </div>

        <div className="p-4 ">
          {/* <h4 className="text-xl font-semibold text-center text-(--tomato)">
            {servico.categoria.nome_categoria}
          </h4> */}
          <p className='font-medium text-white'>Modalidades: {servico.modalidade}</p>
          <p className='font-medium text-white'>Frequência: {servico.frequencia}</p>
          <p className='font-medium text-white'>Data da matrícula: {servico.dt_matricula ? new Date(servico.dt_matricula).toLocaleDateString() : 'N/A'}</p>
          <p className='font-medium text-white'>Mensalidade: R${servico.valor_mensalidade}</p>
          <p className='font-medium text-white'>Desconto: R${servico.valor_mensalidade || "Sem desconto"}</p>
          <p className="text-(--celadon)"> <span className='font-semibold text-white'>Categoria:  </span> {servico.categoria?.nome_categoria}</p>

        </div>
      </div>
      <div className="flex gap-6 justify-center align-center h-fit text-center">
        <Link
          to={`/editarservico/${servico.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 text-center bg-(--celadon) hover:bg-(--ferngreen) text-white rounded-xl font-semibold transition-all duration-300 '
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarservico/${servico.id}`}
          className='flex items-center justify-center w-auto p-3 mt-4 bg-(--tomato) hover:bg-(var(--mistyrose)) text-white rounded-xl font-semibold transition-all duration-300'
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardServicos;