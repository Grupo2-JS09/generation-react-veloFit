import React, { useContext, useState, type FormEvent } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerta } from "../utils/ToastAlerta";
import type Usuario from "../models/Usuario";
import { atualizar } from "../services/Service";

function Perfil() {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [nome, setNome] = useState(usuario.nome);
  const [foto, setFoto] = useState(usuario.foto);
  const [email, setEmail] = useState(usuario.usuario);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // validação de senha
  function checagemSenha(): boolean {
    if (senha === "" && confirmarSenha === "") {
      // não quer alterar senha
      return true;
    }

    if (senha !== confirmarSenha) {
      ToastAlerta(
        "As senhas não são iguais. O campo senha e confirmar senha precisam ser iguais.",
        "info"
      );
      return false;
    }

    return true;
  }

  async function atualizarPerfil(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!checagemSenha()) return;

    // se o campo de senha estiver vazio, mantém a senha atual
    const senhaFinal = senha === "" ? usuario.senha : senha;

    const usuarioAtualizado: Usuario = {
      ...usuario,
      nome,
      foto,
      usuario: email,
      senha: senhaFinal,
    };

    try {
      setIsLoading(true);

      await atualizar(`/usuarios/atualizar`, usuarioAtualizado, setIsLoading, {
        headers: {
          Authorization: token,
        },
      });

      ToastAlerta("Perfil atualizado com sucesso!", "sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("Sessão expirada, faça login novamente.", "info");
        handleLogout();
      } else {
        ToastAlerta("Erro ao atualizar o perfil.", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[100vh] bg-[url('https://i.pinimg.com/1200x/77/cd/98/77cd9852179cf373847b46869b3ffbd5.jpg')] bg-cover bg-center">
      <div className="vf-container bg-[rgba(0,0,0,0.65)] backdrop-blur-md shadow-2xl rounded-3xl p-10 w-[90%] md:w-[500px] text-white flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold text-[var(--celadon)] mb-2">
          Meu Perfil
        </h2>

        {/* preview da foto */}
        <div className="relative">
          <img
            src={foto}
            alt={nome}
            className="w-28 h-28 rounded-full object-cover border-4 border-[var(--celadon)] shadow-lg"
          />
        </div>

        {/* formulário */}
        <form
          onSubmit={atualizarPerfil}
          className="w-full flex flex-col gap-5 text-left"
        >
          <div>
            <label className="block mb-1 text-sm text-[var(--mistyrose)]">
              Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full p-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[var(--celadon)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--celadon)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[var(--mistyrose)]">
              URL da foto
            </label>
            <input
              type="text"
              value={foto}
              onChange={(e) => setFoto(e.target.value)}
              className="w-full p-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[var(--celadon)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--celadon)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[var(--mistyrose)]">
              Usuário (email)
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[var(--celadon)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--celadon)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[var(--mistyrose)]">
              Nova Senha (opcional)
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Deixe em branco para manter a atual"
              className="w-full p-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[var(--celadon)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--celadon)]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-[var(--mistyrose)]">
              Confirme sua Senha
            </label>
            <input
              type="password"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              placeholder="Deixe em branco para manter a atual"
              className="w-full p-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[var(--celadon)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--celadon)]"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full py-3 rounded-xl font-semibold text-lg bg-[var(--celadon)] text-[var(--jet)] hover:bg-[var(--ferngreen)] transition-colors duration-300 disabled:opacity-50"
          >
            {isLoading ? "Salvando..." : "Salvar alterações"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Perfil;
