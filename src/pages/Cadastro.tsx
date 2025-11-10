import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Definição de cores customizadas para Tailwind CSS (simuladas aqui, mas o usuário deve ter no seu setup)
// --jet: #1e293b (slate-800)
// --tomato: #ff6347 (orange-500)

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [foto, setFoto] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erros, setErros] = useState<Record<string, string>>({});
  const [sucesso, setSucesso] = useState<string | null>(null);

  // Impede scroll da página (mantido conforme solicitado)
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const novosErros: Record<string, string> = {};
    setSucesso(null);

    if (!nome.trim()) novosErros.nome = "⚠️ Campo obrigatório.";
    else if (nome.trim().length < 3)
      novosErros.nome = "❌ O nome deve ter pelo menos 3 letras.";

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|yahoo|icloud|live)\.(com|com\.br)$/;
    if (!email.trim()) novosErros.email = "⚠️ Campo obrigatório.";
    else if (!emailRegex.test(email))
      novosErros.email = "❌ Insira um e-mail válido (ex: usuario@gmail.com).";

    if (!foto.trim()) novosErros.foto = "⚠️ Campo obrigatório.";
    else if (!/^https?:\/\/.+/i.test(foto))
      novosErros.foto = "❌ Insira uma URL válida (deve começar com http ou https).";

    if (!senha.trim()) novosErros.senha = "⚠️ Campo obrigatório.";
    else {
      const senhaValida = validarSenhaForte(senha);
      if (!senhaValida.ok) novosErros.senha = "❌ " + senhaValida.mensagem;
    }

    if (!confirmarSenha.trim())
      novosErros.confirmarSenha = "⚠️ Campo obrigatório.";
    else if (senha !== confirmarSenha)
      novosErros.confirmarSenha = "❌ As senhas não conferem.";

    setErros(novosErros);

    if (Object.keys(novosErros).length === 0)
      setSucesso("✅ Cadastro realizado com sucesso!");
  };

  function validarSenhaForte(senha: string) {
    if (senha.length < 8)
      return { ok: false, mensagem: "A senha deve ter pelo menos 8 caracteres." };
    if (!/[A-Z]/.test(senha))
      return { ok: false, mensagem: "Deve conter ao menos uma letra maiúscula." };
    if (!/[0-9]/.test(senha))
      return { ok: false, mensagem: "Deve conter pelo menos um número." };
    if (!/[@$!%*?&]/.test(senha))
      return {
        ok: false,
        mensagem: "Deve conter ao menos um caractere especial (@$!%*?&).",
      };
    return { ok: true, mensagem: "" };
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col bg-gradient-to-br from-gray-900 via-emerald-900/40 to-gray-900 relative overflow-hidden"
      style={{ backgroundColor: "#0f172a" }}
    >
      {/* Fundos visuais */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,140,0,0.15),_transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(16,185,129,0.15),_transparent_60%)]"></div>

      {/* Container principal com ajuste para garantir que o conteúdo não ultrapasse a tela */}
      <div className="relative flex flex-col lg:flex-row w-full backdrop-blur-[2px] flex-grow">
        {/* LADO ESQUERDO - Informações */}
        {/* Adicionado 'py-10' para padding vertical e 'flex-shrink-0' para evitar que encolha */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-8 md:px-12 lg:px-16 py-10 text-white text-center lg:text-left flex-shrink-0">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
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

            <span className="text-3xl font-bold">VeloFit</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Transforme seu corpo com{" "}
<span style={{ color: "var(--tomato)" }}>VeloFit</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Sistema completo de gestão para academias. Cadastre serviços,
            gerencie membros e impulsione seu negócio fitness.
          </p>

          <div className="space-y-6 sm:space-y-8">
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

        {/* LADO DIREITO - Formulário */}
        {/* Adicionado 'flex-grow' para ocupar o espaço restante e 'py-10' para padding vertical */}
        <div className="flex w-full lg:w-1/2 items-center justify-center py-10 px-6 sm:px-8 md:px-10 lg:px-12 flex-grow">
          <div className="w-full max-w-md bg-[var(--jet)] backdrop-blur-md border border-gray-700/40 p-6 sm:p-8 rounded-3xl shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Criar Conta
            </h2>
            <p className="text-gray-400 mb-6 text-base sm:text-lg">
              Junte-se à comunidade VeloFit
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <Input
                label="Nome Completo"
                value={nome}
                onChange={setNome}
                placeholder="Digite seu nome completo"
                erro={erros.nome}
              />
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="seu.email@gmail.com"
                erro={erros.email}
              />
              <Input
                label="Foto de Perfil"
                value={foto}
                onChange={setFoto}
                placeholder="URL da sua foto (deve começar com http)"
                erro={erros.foto}
              />
              <Input
                label="Senha"
                type="password"
                value={senha}
                onChange={setSenha}
                placeholder="Crie uma senha forte"
                erro={erros.senha}
              />
              <Input
                label="Confirmar Senha"
                type="password"
                value={confirmarSenha}
                onChange={setConfirmarSenha}
                placeholder="Confirme sua senha"
                erro={erros.confirmarSenha}
              />

              {sucesso && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3">
                  <p className="text-green-400 text-base">{sucesso}</p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[var(--tomato)] hover:bg-orange-600 text-white font-semibold text-lg py-3 rounded-xl transition duration-200 shadow-lg shadow-orange-100/20"
              >
                Cadastrar
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
                className="w-full border border-gray-600 hover:bg-gray-700/50 text-gray-300 font-medium text-base py-3 rounded-xl transition duration-200"
              >
                Limpar Formulário
              </button>

              <p className="text-center text-gray-400 text-sm sm:text-base mt-4">
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
      
      {/* Footer (Simulado) */}
      {/* Adicionado 'flex-shrink-0' e 'py-4' para um pequeno espaçamento no final */}
      <footer className="w-full text-center text-gray-500 text-xs py-4 flex-shrink-0">
        © {new Date().getFullYear()} VeloFit. Todos os direitos reservados.
      </footer>
    </div>
  );
}

function Input({ label, value, onChange, placeholder, type = "text", erro }: any) {
  return (
    <div>
      <label className="text-gray-300 text-sm sm:text-base font-medium mb-2 block">
        {label}
      </label>
      <input
        type={type}
       className={`w-full bg-[var(--jet)/50] border ${
  erro ? "border-red-500" : "border-[var(--ferngreen)]"
        } rounded-xl p-3 text-white text-sm sm:text-base placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="min-h-[20px] mt-1">
        {erro && <p className="text-red-400 text-xs">{erro}</p>}
      </div>
    </div>
  );
}

function Feature({ icon, title, text }: any) {
  return (
    <div className="flex items-start gap-6"> {/* gap maior entre ícone e texto */}
      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mt-1">
        <span style={{ color: "var(--tomato)" }} className="text-4xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-xl sm:text-2xl mb-3">{title}</h3>
        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}

