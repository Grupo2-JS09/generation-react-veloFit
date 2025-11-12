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

  // Estados principais
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [servico, setServico] = useState<Servico>({} as Servico);

  // Novo: usuários disponíveis no sistema
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario | null>(null);

  // 🔹 Buscar todas as categorias
  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  // 🔹 Buscar todos os usuários (apenas se o logado for admin)
  async function buscarUsuarios() {
    try {
      await buscar("/usuarios/all", setUsuarios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  // 🔹 Buscar serviço por ID (para edição)
  async function buscarServicoPorId(id: string) {
    try {
      await buscar(`/servicos/${id}`, setServico, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  // 🔹 Buscar categoria específica
  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) handleLogout();
    }
  }

  // Proteção de rota
  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado", "info");
      navigate("/");
    }
  }, [token]);

  // Carregar dados iniciais
  useEffect(() => {
    buscarCategorias();
    buscarUsuarios(); // 👈 novo

    if (id !== undefined) {
      buscarServicoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setServico({
      ...servico,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setServico({
      ...servico,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuarioSelecionado, 
    });
  }

  function retornar() {
    navigate("/servicos");
  }

  // 🔹 Cadastrar ou atualizar serviço
  async function gerarNovoServico(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    // Se o admin não escolheu o usuário, bloqueia
    if (!usuarioSelecionado) {
      ToastAlerta("Selecione o usuário contratante", "info");
      setIsLoading(false);
      return;
    }

    const payload: Servico = {
      ...servico,
      categoria: categoria,
      usuario: usuarioSelecionado, 
    };

    try {
      if (id !== undefined) {
        await atualizar(`/servicos`, payload, setServico, {
          headers: { Authorization: token },
        });
        ToastAlerta("Serviço atualizado com sucesso", "sucesso");
      } else {
        await cadastrar(`/servicos`, payload, setServico, {
          headers: { Authorization: token },
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
    console.log(servico)
    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome_categoria === "";

  return (
      <div className="flex flex-col text-white items-center py-20 px-6 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center filter grayscale">
      <h1 className="text-4xl font-bold mb-6 text-black">
        {id !== undefined ? "Editar Serviço" : "Cadastrar Serviço"}
      </h1>

      <form
        className="bg-slate-800/60 rounded-2xl mb-15 shadow-lg p-8 w-full max-w-md flex flex-col mt-5 gap-6 border border-slate-700"
        onSubmit={gerarNovoServico}
      >
        {/* Usuário contratante */}
        <div className="flex flex-col gap-2">
          <label className="block mb-2 text-sm font-semibold">
            Usuário contratante
          </label>
          <select
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => {
              const usuarioSelecionado = usuarios.find(
                (u) => u.id === Number(e.target.value)
              );
              setUsuarioSelecionado(usuarioSelecionado || null);
            }}
          >
            <option  value="">Selecione o usuário...</option>
            {usuarios.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nome} ({u.usuario})
              </option>
            ))}
          </select>
        </div>

        {/* Modalidade */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Modalidade</label>
          <input
            type="text"
            name="modalidade"
            required
            placeholder="Ex: Jiu-Jitsu, Crossfit..."
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.modalidade || ""}
            onChange={atualizarEstado}
          />
        </div>

        {/* Frequência */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Frequência</label>
          <input
            type="number"
            placeholder="Frequência por semana..."
            name="frequencia"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.frequencia || ""}
            onChange={atualizarEstado}
          />
        </div>

        {/* Valor do serviço */}

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Valor</label>
          <input
            type="number"
            placeholder="Valor do serviço"
            name="valor_mensalidade"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={servico.valor_mensalidade || ""}
            onChange={atualizarEstado}
          />
        </div>

        {/* Data de matrícula */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Data da Matrícula</label>
          <input
            type="date"
            name="dt_matricula"
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={
              servico.dt_matricula
                ? new Date(servico.dt_matricula).toISOString().split("T")[0]
                : ""
            }
            onChange={atualizarEstado}
          />
        </div>

        

        {/* Categoria */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Categoria</label>
          <select
            name="categoria"
            className="border p-3 border-slate-800 rounded bg-slate-900 focus:ring-2 focus:ring-orange-400"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="mt-4 w-full px-6 py-3 rounded-lg bg-[var(--celadon)] hover:bg-[var(--ferngreen)] transition font-semibold text-black text-lg shadow-md"
          disabled={carregandoCategoria || isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
      </div>
  );
}

export default FormServico;
