import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Servico from "../../../models/Servico";
import { buscar, deletar } from "../../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function DeletarServico() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [servico, setServico] = useState<Servico>({} as Servico);
  const [showModal, setShowModal] = useState<boolean>(false);

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
      retornar();
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o servico.", "erro");
      }
    }

    setIsLoading(false);
    setShowModal(false);
  }

  function retornar() {
    navigate("/servicos");
  }

  return (
    <div className='flex h-screen justify-center items-center text-white bg-[url("https://acadbrasil.com.br/wp-content/uploads/2020/03/5-motivos-para-o-seu-aluno-cancelar-a-matricula-da-academia.jpeg")] bg-cover bg-center '>
      {/* Conteúdo principal */}
      <div className='relative z-10 flex flex-col w-96 lg:w-1/3 md:w-1/2 h-1/4 justify-center items-center bg-(--jet)/60 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-(--jet)/80 hover:scale-105 transition duration-300'>
      
        
        <h2 className='text-4xl font-semibold text-center text-white mb-4'>
          {servico.usuario?.nome}
        </h2>
        <p className="mb-3 text-lg">Deseja deletar?</p>
        <div className="flex flex-col items-start justify-start">
          <p>Modalidade: {servico.modalidade}</p>
          <p>Frequência: {servico.frequencia}</p>
          <p>Valor da mensalidade: R$ {servico.valor_mensalidade}</p>
        </div>

        <div className='flex gap-6 justify-center text-center'>
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 hover:bg-white hover:text-[#2c302e] text-white rounded-xl font-semibold transition-all duration-300'
            onClick={() => setShowModal(true)}
          >
            Deletar
          </button>

          <button
            className='flex items-center justify-center w-auto p-3 mt-4 bg-(--tomato) hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300'
            onClick={retornar}
          >
            Cancelar
          </button>
        </div>
      </div>

      {/* Modal de confirmação */}
      {showModal && (
        <div className='absolute top-30 bg-opacity-60 flex justify-center items-start '>
          <div className='bg-(--jet) text-white rounded-2xl shadow-lg p-8 w-96 flex flex-col justify-center items-center gap-6 animate-fadeIn '>
            <h3 className='text-2xl font-semibold text-center justify-center items-center'>
              Confirmar exclusão
            </h3>
            <p className='text-center text-gray-300'>
              Tem certeza que deseja deletar o serviço de {" "}
              <span className='font-bold text-(--tomato)'>
                {servico.usuario?.nome}
              </span>
              ?
            </p>

            <div className='flex gap-4'>
              <button
                onClick={deletarServico}
                className='px-6 py-2 bg-(--tomato) rounded-lg hover:bg-red-600 transition-all font-semibold text-white'
              >
                {isLoading ? (
                  <ClipLoader color='#fff' size={20} />
                ) : (
                  "Sim, deletar"
                )}
              </button>

              <button
                onClick={() => setShowModal(false)}
                className='px-6 py-2 bg-gray-500 rounded-lg hover:bg-gray-600 transition-all font-semibold text-white'
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletarServico;
