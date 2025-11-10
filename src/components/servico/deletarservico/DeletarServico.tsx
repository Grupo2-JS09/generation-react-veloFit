import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Servico from "../../../models/Servico";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarServico() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [servico, setServico] = useState<Servico>({} as Servico);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarServico() {
    setIsLoading(true);

    try {
      await deletar(`/servicos/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Serviço deletado com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o servico.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/servicos");
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white'>
      <div className=' bg-slate-800 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-slate-700 hover:scale-105 transition duration-300'>
        <h1 className="text-4xl text-center my-4">Deletar Serviço</h1>

        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar o servico a seguir?
        </p>

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          {/* <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
            Servico
          </header> */}
          <div className="p-4">
            <p className="text-xl h-full text-white">{servico.modalidade}</p>
            <p className="text-xl  text-white">{servico.categoria?.nome_categoria}</p>
          </div>

          <div className='flex gap-6 justify-center align-center h-fit text-center'>
            <button
              className='flex items-center justify-center w-auto p-3 mt-4 bg-(--tomato) hover:bg-orange-900 text-white rounded-xl font-semibold transition-all duration-300'
              onClick={retornar}
            >
              Não
            </button>
            <button
              className='flex items-center justify-center w-auto p-3 mt-4 text-center bg-(--celadon) hover:bg-(--ferngreen) text-white rounded-xl font-semibold transition-all duration-300 '
              onClick={deletarServico}
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Sim</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletarServico;
