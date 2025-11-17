import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Servico from "../../../models/Servico";
import { buscar } from "../../../services/Service";
import CardServicos from "../cardservico/CardServico";
import { ToastAlerta } from "../../utils/ToastAlerta";

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
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center filter grayscale"></div>

      <div className="relative z-10 flex flex-col items-center pt-10">
        {isLoading && (
          <div className="flex justify-center w-full my-8">
            <SyncLoader color="#9ae19d" size={32} />
          </div>
        )}

        {!isLoading && servicos.length === 0 && (
          <span className="text-3xl text-center my-8">
            Nenhum serviço foi encontrado!
          </span>
        )}

        

        <div className="grid justify-center w-full mb-10">
          <div className="flex justify-end min-w-screen max-w-6xl mb-10 ">
          <Link to="/cadastrarservico">
            <button className="px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-900 transition font-semibold text-sm text-white shadow-md mr-14 xl:mr-18">
              Cadastrar Novo Serviço
            </button>
          </Link>
        </div>
          <div className="grid place-items-center gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-10">
            {servicos.map((servico) => (
              <CardServicos key={servico.id} servico={servico} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListaServicos;
