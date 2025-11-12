import { useState } from "react";
import { cadastrarUsuario } from "../services/Service";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erros, setErros] = useState<Record<string, string>>({});
  const [sucesso, setSucesso] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const novosErros: Record<string, string> = {};
    setSucesso(null);

    if (!nome.trim()) {
      novosErros.nome = "⚠️ Campo obrigatório.";
    } else if (nome.trim().length < 3) {
      novosErros.nome = "❌ O nome deve ter pelo menos 3 letras.";
    }

    if (!email.trim()) {
      novosErros.email = "⚠️ Campo obrigatório.";
    } else {
      const emailRegex = /^[^@\s]+@[^@\s]+\.[cC][oO][mM]$/;
      if (!emailRegex.test(email)) {
        novosErros.email = "❌ Insira um e-mail válido (ex: usuario@gmail.com).";
      }
    }

    if (!foto.trim()) {
      novosErros.foto = "⚠️ Campo obrigatório.";
    } else if (!/^https?:\/\/.+/i.test(foto)) {
      novosErros.foto =
        "❌ Insira uma URL válida (deve começar com http ou https).";
    }

    if (!senha.trim()) {
      novosErros.senha = "⚠️ Campo obrigatório.";
    } else {
      const senhaValida = validarSenhaForte(senha);
      if (!senhaValida.ok) novosErros.senha = "❌ " + senhaValida.mensagem;
    }

    if (!confirmarSenha.trim()) {
      novosErros.confirmarSenha = "⚠️ Campo obrigatório.";
    } else if (senha !== confirmarSenha) {
      novosErros.confirmarSenha = "❌ As senhas não conferem.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0) {
      setCarregando(true);
      try {
        const dadosUsuario = { nome, usuario: email, foto, senha };
        await cadastrarUsuario("/usuarios/cadastrar", dadosUsuario, () => {
          setSucesso("✅ Cadastro realizado com sucesso!");
          setNome("");
          setEmail("");
          setFoto("");
          setSenha("");
          setConfirmarSenha("");
          setTimeout(() => {
      navigate("/login");
    }, 2000);

        });
      } catch {
        setErros({ geral: "❌ Erro ao cadastrar usuário. Tente novamente." });
      } finally {
        setCarregando(false);
      }
    }
  };

  // 🔹 Função de validação de senha forte
  function validarSenhaForte(senha: string) {
    if (senha.length < 8)
      return { ok: false, mensagem: "A senha deve ter pelo menos 8 caracteres." };
    if (!/[A-Z]/.test(senha))
      return { ok: false, mensagem: "Deve conter ao menos uma letra maiúscula." };
    if (!/[0-9]/.test(senha))
      return { ok: false, mensagem: "Deve conter pelo menos um número." };
    if (!/[@$!%*?&]/.test(senha))
      return { ok: false, mensagem: "Deve conter ao menos um caractere especial (@$!%*?&)." };
    return { ok: true, mensagem: "" };
  }

  return (
    <div
      className="h-screen w-full flex bg-gradient-to-br from-gray-900 via-emerald-900/30 to-gray-900 relative overflow-x-hidden overflow-y-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Fundos decorativos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,140,0,0.12),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(16,185,129,0.12),_transparent_60%)]"></div>

      <div className="relative flex flex-col lg:flex-row w-full backdrop-blur-[2px]">
        {/* LADO ESQUERDO */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 lg:px-12 py-6 text-white">
         <div
  className="w-24 h-24 rounded-xl flex items-center justify-center shadow-lg shadow-[var(--tomato)/20]"
  style={{ backgroundColor: "var(--tomato)" }}
>
  <img
    src="https://i.imgur.com/H6qOppX.png"
    alt="VeloFit Logo"
    className="w-16 h-16 object-contain"
  />
</div>


          <h1 className="text-4xl font-extrabold mb-4 leading-tight tracking-tight">
            Transforme seu corpo com{" "}
            <span className="text-orange-500">VeloFit</span>
          </h1>

          <p className="text-gray-300 text-base mb-6 max-w-md leading-relaxed">
            Sistema completo de gestão para academias. Cadastre serviços,
            gerencie membros e impulsione seu negócio fitness.
          </p>

          <div className="space-y-4">
            <Feature
              icon="📊"
              title="Acompanhe Seu Progresso"
              text="Monitore suas atividades e evolução com ferramentas personalizadas."
            />
            <Feature
              icon="🏋️"
              title="Coaching Especializado"
              text="Acesso a profissionais qualificados para orientar sua jornada."
            />
            <Feature
              icon="⭐"
              title="Experiência Premium"
              text="Ambiente moderno e equipamentos de última geração."
            />
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
          <div className="w-full max-w-sm bg-[var(--jet)] backdrop-blur-md border border-gray-700/40 p-6 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-3">Criar Conta</h2>
            <p className="text-gray-400 mb-6 text-base">
              Junte-se à comunidade VeloFit
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <Input label="Nome Completo" value={nome} onChange={setNome} placeholder="Digite seu nome completo" erro={erros.nome} />
              <Input label="Email" type="email" value={email} onChange={setEmail} placeholder="seu.email@gmail.com" erro={erros.email} />
              <Input label="Foto de Perfil" value={foto} onChange={setFoto} placeholder="URL da sua foto" erro={erros.foto} />
              <Input label="Senha" type="password" value={senha} onChange={setSenha} placeholder="Crie uma senha forte" erro={erros.senha} />
              <Input label="Confirmar Senha" type="password" value={confirmarSenha} onChange={setConfirmarSenha} placeholder="Confirme sua senha" erro={erros.confirmarSenha} />

              {erros.geral && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{erros.geral}</p>
                </div>
              )}
              {sucesso && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3">
                  <p className="text-green-400 text-sm">{sucesso}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={carregando}
                className="w-full bg-[var(--tomato)] hover:bg-orange-600 text-white font-semibold text-base py-2.5 rounded-xl transition duration-200 shadow-lg shadow-orange-100/20 disabled:opacity-50"
              >
                {carregando ? "Cadastrando..." : "Cadastrar"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setNome("");
                  setEmail("");
                  setFoto("");
                  setSenha("");
                  setConfirmarSenha("");
                  setErros({});
                  setSucesso(null);
                }}
                className="w-full border border-gray-600 hover:bg-gray-700/50 text-gray-300 font-medium text-sm py-2.5 rounded-xl transition duration-200"
              >
                Limpar Formulário
              </button>

              <p className="text-center text-gray-400 text-sm mt-3">
                Já tem uma conta?{" "}
                <Link to="/login">
                  <span className="text-orange-500 hover:text-orange-400 font-semibold cursor-pointer">
                    Fazer Login
                  </span>
                </Link>
             
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, placeholder, type = "text", erro }: any) {
  return (
    <div>
      <label className="text-gray-300 text-sm font-medium mb-1 block">{label}</label>
      <input
        type={type}
        className={`w-full bg-gray-900/50 border ${
          erro ? "border-red-500" : "border-gray-600"
        } rounded-xl p-2.5 text-white text-sm placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {erro && <p className="text-red-400 text-xs mt-1">{erro}</p>}
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mt-1">
        <span className="text-orange-500 text-4xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-2xl mb-2">{title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          {text}
        </p>
      </div>
    </div>
  );
}
