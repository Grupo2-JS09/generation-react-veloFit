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

      ToastAlerta("Servico deletado com sucesso", "success");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o servico.", "error");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/servicos");
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="container flex flex-col w-1/3">
        <h1 className="text-4xl text-center my-4">Deletar Servico</h1>

        <p className="text-center font-semibold mb-4">
          Você tem certeza de que deseja apagar o servico a seguir?
        </p>

        <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
          <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
            Servico
          </header>
          <div className="p-4">
            <p className="text-xl h-full">{servico.categoria.nome_categoria}</p>
            <p>{servico.modalidade}</p>
          </div>
          <div className="flex">
            <button
              className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 m-2"
              onClick={retornar}
            >
              Não
            </button>
            <button
              className="w-full text-slate-100 bg-indigo-400
                        hover:bg-indigo-600 flex items-center justify-center m-2"
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
