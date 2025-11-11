import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { useContext, useEffect, useState } from "react";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
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
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao deletar a categoria.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }


  return (
    <div className='flex h-120 justify-center items-center text-white'>

      <div className='absolute inset-0 bg-[url("https://acadbrasil.com.br/wp-content/uploads/2020/03/5-motivos-para-o-seu-aluno-cancelar-a-matricula-da-academia.jpeg")] bg-cover bg-center filter grayscale'></div>
      
      <div className="absolute inset-0 bg-black/40"></div>

      <div className='relative z-10 flex flex-col w-1/3 h-1/4 justify-center align-center items-center bg-(--jet)/60 bg-opacity-70 rounded-2xl shadow-lg p-6 hover:bg-(--jet)/80 hover:scale-105 transition duration-300'>
        <div className='flex items-center gap-2 mb-3'>
          <h2 className='text-xl font-semibold text-center text-(--tomato)'>
            {categoria.nome_categoria}
          </h2>
        </div>
        <div className='flex gap-6 justify-center align-center h-fit text-center'>
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 text-center  hover:bg-white hover:text-[#2c302e] text-white rounded-xl font-semibold transition-all duration-300 '
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
          
          <button
            className='flex items-center justify-center w-auto p-3 mt-4 hover:bg-(--tomato) text-white rounded-xl font-semibold transition-all duration-300'
            onClick={retornar}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletarCategoria