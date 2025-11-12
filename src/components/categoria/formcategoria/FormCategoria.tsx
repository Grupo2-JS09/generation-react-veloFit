import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function FormCategoria() {
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
      console.error("Erro ao buscar categoria:", error);
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

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias/atualizar`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("A Categoria foi atualizada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a categoria.", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: {
            Authorization: token,
          },
        });
        ToastAlerta("Categoria criada com sucesso!", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta(`Erro ao salvar categoria: ${error}`, "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className='relative min-h-screen  text-white flex flex-col items-center py-10 px-6'>
      
      <div className='absolute inset-0 bg-[url("https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/exercicio-para-fazer-de-manha-topo.jpg")] bg-cover bg-center filter grayscale'></div>
      
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10">

        <h1 className='flex flex-col items-center py-10 px-6 text-3xl font-bold'>
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>

        <form
          onSubmit={gerarNovaCategoria}
          className='bg-(--jet)/60 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-(--jet)'
        >
          <div className='flex flex-col gap-2'>
            <label htmlFor='nome_categoria' className='block mb-2 text-sm font-semibold'>
              Nome da Categoria
            </label>
            <input
              type='text'
              name='nome_categoria'
              id='nome_categoria'
              placeholder='Digite o nome da categoria'
              className='border border-(--ferngreen) bg-(--jet) rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-(--tomato)'
              value={categoria.nome_categoria}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 rounded-lg font-semibold text-white bg-(--tomato) hover:bg-orange-600 transition flex justify-center items-center gap-2'
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={22} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>

          <button
            type='button'
            onClick={retornar}
            className='w-full py-3 rounded-lg font-semibold text-slate-300 hover:bg-white/60 hover:text-[#2c302e] border transition'
          >
            Voltar
          </button>
        </form>
      </div>

    </div>
  );
}

export default FormCategoria;
