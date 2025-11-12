import { CheckCircle, XCircle } from "lucide-react";
import type Servico from "../../models/Servico";
import { Link } from "react-router-dom";

interface CardsProps {
  recomendado?: boolean;
  precoAntigo?: string;
  descricaoPreco?: string;
  beneficios: { texto: string; disponivel: boolean }[];
  destaque?: boolean;
  servico: Servico;
}

function Cards({
  recomendado = false,
  precoAntigo,
  descricaoPreco,
  beneficios,
  servico
}: CardsProps) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl p-6 w-full max-w-sm transition-all duration-300 border border-transparent 
      bg-(--jet) text-white hover:bg-(--celadon) hover:scale-105`}
    >
      {recomendado && (
        <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-(--tomato) text-xs font-semibold text-white px-3 py-1 rounded-full">
          RECOMENDADO
        </span>
      )}

      <div>
        <h2 className="text-sm font-bold uppercase opacity-80">PLANO</h2>
        <h1 className="text-2xl font-bold mb-2">{servico.modalidade}</h1>

        {precoAntigo && (
          <p className="line-through text-sm opacity-70">
            de {precoAntigo} por
          </p>
        )}
        <p className="text-4xl font-extrabold mt-1">
          {servico.valor_mensalidade?.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        {descricaoPreco && (
          <p className="text-sm opacity-90 mt-1">{descricaoPreco}</p>
        )}
      </div>

      <ul className="mt-6 space-y-2">
        {beneficios.map((b, i) => (
          <li
            key={i}
            className={`flex items-center gap-2 ${
              b.disponivel ? "text-white" : "text-gray-400 line-through"
            }`}
          >
            {b.disponivel ? (
              <CheckCircle className="text-white" size={18} />
            ) : (
              <XCircle className="text-gray-400" size={18} />
            )}
            <span>{b.texto}</span>
          </li>
        ))}
      </ul>

      <Link to="/servicos">
        <button
          className={`mt-6 w-full py-2 rounded-xl font-semibold  bg-(--tomato) text-white hover:bg-(--jet)`}
        >
          Matricule-se
        </button>
      </Link>
    </div>
  );
}

export default Cards;
