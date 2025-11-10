import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import type Categoria from "../../../models/Categoria";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";

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
        await atualizar(`/categorias`, categoria, setCategoria, {
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
    <div className='min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white flex flex-col items-center py-10 px-6'>
      <h1 className='flex flex-col items-center py-10 px-6 text-3xl font-bold'>
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        onSubmit={gerarNovaCategoria}
        className='bg-slate-800/60 rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-6 border border-slate-700'
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
            className='border border-slate-600 bg-slate-900 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500'
            value={categoria.nome_categoria}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          type='submit'
          className='w-full py-3 rounded-lg font-semibold text-white bg-orange-500 hover:bg-orange-600 transition flex justify-center items-center gap-2'
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
          className='w-full py-3 rounded-lg font-semibold text-slate-300 hover:text-white hover:bg-slate-700 transition'
        >
          Voltar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
