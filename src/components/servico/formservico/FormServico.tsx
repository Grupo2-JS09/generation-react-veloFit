/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import type Servico from "../../../models/Servico";
import type Usuario from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../utils/ToastAlerta";

function FormServico() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [servico, setServico] = useState<Servico>({} as Servico);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(
    null
  );

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token }
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarUsuarios() {
    try {
      await buscar("/usuarios/all", setUsuarios, {
        headers: { Authorization: token }
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: { Authorization: token }
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token }
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    buscarUsuarios();
    if (id !== undefined) {
      buscarServicoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuarioSelecionado
    });
  }

  function retornar() {
    navigate("/servicos");
  }

  async function gerarNovoServico(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!usuarioSelecionado) {
      ToastAlerta("Selecione o usuário contratante", "info");
      setIsLoading(false);
      return;
    }

    const payload: Servico = {
      ...servico,
      categoria: categoria,
      usuario: usuarioSelecionado
    };

    try {
      if (id !== undefined) {
        await atualizar(`/servicos`, payload, setServico, {
          headers: { Authorization: token }
        });
        ToastAlerta("Serviço atualizado com sucesso", "sucesso");
      } else {
        await cadastrar(`/servicos`, payload, setServico, {
          headers: { Authorization: token }
        });
        ToastAlerta("Serviço cadastrado com sucesso", "sucesso");
      }
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
        ToastAlerta("Faça login para continuar!", "info");
      } else {
        ToastAlerta("Erro ao salvar o serviço", "erro");
      }
    }
    console.log(servico);
    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome_categoria === "";

  return (
    <>
      <div className="bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center fixed inset-0 filter grayscale -z-10"></div>

      <div className='relative flex flex-col min-h-screen text-white items-center mt-5'>
        <h1 className='text-4xl font-bold mb-5 text-(--tomato)'>
          {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
        </h1>

        <form
          className='bg-(--jet) rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 shadow-[0_0_20px_rgba(0,0,0,0.8)]'
          onSubmit={gerarNovoServico}
        >
          <div className='flex flex-col gap-2'>
            <label className='block mb-2 text-sm font-semibold'>
              Usuário contratante
            </label>
            <select
              required
              className='w-full p-3 rounded-lg bg-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400'
              onChange={(e) => {
                const usuarioSelecionado = usuarios.find(
                  (u) => u.id === Number(e.target.value)
                );
                setUsuarioSelecionado(usuarioSelecionado || null);
              }}
            >
              <option value=''>Selecione o usuário...</option>
              {usuarios.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.nome} ({u.usuario})
                </option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Modalidade</label>
            <input
              type='text'
              name='modalidade'
              required
              placeholder='Ex: Jiu-Jitsu, Crossfit...'
              className='w-full p-3 rounded-lg bg-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={servico.modalidade || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Frequência</label>
            <input
              type='number'
              placeholder='Frequência por semana...'
              name='frequencia'
              required
              className='w-full p-3 rounded-lg bg-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={servico.frequencia || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Valor</label>
            <input
              type='number'
              placeholder='Valor do serviço'
              name='valor_mensalidade'
              required
              className='w-full p-3 rounded-lg bg-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={servico.valor_mensalidade || ""}
              onChange={atualizarEstado}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Data da Matrícula</label>
            <input
              type='date'
              name='dt_matricula'
              className='w-full p-3 rounded-lg bg-black border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={
                servico.dt_matricula
                  ? new Date(servico.dt_matricula).toISOString().split("T")[0]
                  : ""
              }
              onChange={atualizarEstado}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-sm font-semibold'>Categoria</label>
            <select
              name='categoria'
              className='border p-3 border-slate-800 rounded bg-black focus:ring-2 focus:ring-orange-400'
              onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
            >
              <option value='' selected disabled>
                Selecione uma Categoria
              </option>
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nome_categoria}
                </option>
              ))}
            </select>
          </div>

          <button
            type='submit'
            className='w-full py-3 rounded-lg font-semibold text-white bg-(--tomato) hover:bg-orange-600 transition flex justify-center items-center gap-2'
            disabled={carregandoCategoria || isLoading}
          >
            {isLoading ? (
              <ClipLoader color='#ffffff' size={24} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormServico;
