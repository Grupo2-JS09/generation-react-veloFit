import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServicos from "../cardservico/CardServico";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaServicos() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [servicos, setServicos] = useState<Servico[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarServicos();
  }, [servicos.length]);

  async function buscarServicos() {
    try {
      setIsLoading(true);

      await buscar("/servicos", setServicos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && servicos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Servico foi encontrado!
            </span>
          )}

          <div className='flex justify-end w-full max-w-6xl mb-10'>
            <Link to='/cadastrarservico'>
              <button className='px-6 py-2 rounded-lg bg-(--tomato) hover:bg-orange-600 transition font-semibold text-sm text-white shadow-md'>
                Cadastrar Novo Serviço
              </button>
            </Link>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2
                                    lg:grid-cols-3 gap-8"
          >
            {servicos.map((servicos) => (
              <CardServicos key={servicos.id} servico={servicos} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaServicos;