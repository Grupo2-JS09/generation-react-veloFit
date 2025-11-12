import {
  Bike,
  Calendar,
  TrendingUp,
  Users,
  Award,
  Clock,
  Shield,
  DollarSign,
  Percent,
} from "lucide-react";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { ToastAlerta } from "../components/utils/ToastAlerta";

function About() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token, navigate]);

  const recursos = [
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Gestão de Usuários",
      descricao:
        "Cadastre, autentique e atualize seus dados com segurança. Sistema completo de gerenciamento de perfis.",
      cor: "bg-[#537A5A]",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      titulo: "Planos Personalizados",
      descricao:
        "Frango (econômico) ou Maromba (premium): escolha o plano ideal e tenha acesso a academias conforme sua necessidade.",
      cor: "bg-[#F06543]",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      titulo: "Controle de Frequência",
      descricao:
        "Defina quantos dias deseja treinar por semana e pague de forma justa pelo seu uso real.",
      cor: "bg-[#9AE19D]",
    },
    {
      icon: <Percent className="w-8 h-8" />,
      titulo: "Descontos Inteligentes",
      descricao:
        "Ganhe 2% de desconto por cada dia da semana que não usar. Treina 3x? Economize 8% na mensalidade!",
      cor: "bg-[#537A5A]",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      titulo: "Segurança Total",
      descricao:
        "BCrypt para criptografia de senhas, JWT para sessões seguras e conformidade com LGPD.",
      cor: "bg-[#F06543]",
    },
    {
      icon: <Award className="w-8 h-8" />,
      titulo: "Sistema por Categoria",
      descricao:
        "Mensalidades calculadas automaticamente com base na categoria e frequência escolhida.",
      cor: "bg-[#9AE19D]",
    },
  ];

  const diferenciais = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      texto:
        "Pague apenas pelos dias que você realmente vai usar - chega de pagar e não ir!",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      texto:
        "Flexibilidade total para ajustar sua frequência e plano conforme sua rotina",
    },
    {
      icon: <Percent className="w-6 h-6" />,
      texto:
        "Até 8% de desconto na mensalidade com o sistema de frequência inteligente",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#2C302E] via-[#3d5041] to-[#527859] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-r from-[#F06543]/10 to-[#9AE19D]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-[#F06543] p-4 rounded-2xl shadow-lg">
                <Bike className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-[#F06543]">VeloFit</span> - Mais que um
              aplicativo
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-[#9AE19D] mb-4">
              Aplicação Fitness
            </p>
            <p className="text-xl md:text-2xl text-[#F9E0D9] max-w-3xl mx-auto leading-relaxed">
              Uma solução VeloGroup
            </p>
          </div>
        </div>
      </div>

      {/* Problema e Solução */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#2C302E]/70 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#537A5A]/30 shadow-lg mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#F06543]">
            O Problema
          </h2>
          <p className="text-2xl text-[#F9E0D9] text-center max-w-4xl mx-auto leading-relaxed mb-4">
            Já pagou um mês inteiro de academia...
          </p>
          <p className="text-3xl font-bold text-center text-[#9AE19D]">
            ... e treinou 3 dias?
          </p>
        </div>

        <div className="bg-linear-to-r from-[#537A5A]/20 to-[#9AE19D]/20 rounded-2xl p-8 md:p-12 border border-[#9AE19D]/30 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#9AE19D]">
            Nossa Solução
          </h2>
          <p className="text-lg text-[#F9E0D9] text-center max-w-4xl mx-auto leading-relaxed">
            É possível virar esse jogo e{" "}
            <span className="text-[#F06543] font-bold">
              pagar de forma justa
            </span>{" "}
            pelo seu uso real! A VeloFit nasceu para resolver esse problema e
            trazer equilíbrio financeiro para a sua rotina de treinos.
          </p>
        </div>
      </div>

      {/* Como Funciona o Desconto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#F06543]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#F06543]/30 shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center text-[#F06543]">
            ONDE SUA PRESENÇA VALE MAIS
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[#2C302E]/50 rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4 text-[#9AE19D]">
                CHEGA DE PAGAR E NÃO IR!
              </h3>
              <p className="text-lg text-[#F9E0D9] leading-relaxed mb-4">
                Você recebe{" "}
                <span className="text-[#F06543] font-bold">2% de desconto</span>{" "}
                no valor mensal por dia da semana que{" "}
                <span className="font-bold">não planeja</span> usar o plano.
              </p>
            </div>

            <div className="bg-[#2C302E]/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-[#9AE19D]">
                Exemplo Prático:
              </h3>
              <p className="text-lg text-[#F9E0D9] leading-relaxed">
                Se você escolhe um plano de{" "}
                <span className="text-[#F06543] font-bold">3 dias/semana</span>{" "}
                (vai 3, não vai 4), recebe{" "}
                <span className="text-[#9AE19D] font-bold">8% de desconto</span>{" "}
                na mensalidade (4 dias sem ir × 2%)
              </p>
              <div className="mt-4 p-4 bg-[#9AE19D]/20 rounded-lg border border-[#9AE19D]/30">
                <p className="text-xl text-white">
                  💰 Frequentando{" "}
                  <span className="font-bold">3 dias na semana</span> na
                  categoria frango, sua mensalidade sai de{" "}
                  <span className="line-through">R$ 100,00</span> por
                  <span className="text-[#9AE19D] font-bold text-2xl">
                    {" "}
                    R$ 92,00
                  </span>
                  !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">
          O que o VeloFit oferece
        </h2>
        <p className="text-[#F9E0D9] text-center mb-12 text-lg">
          Funcionalidades completas para transformar sua experiência fitness
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recursos.map((recurso, index) => (
            <div
              key={index}
              className="bg-[#2C302E]/70 backdrop-blur-sm rounded-xl p-6 border border-[#537A5A]/30 hover:border-[#9AE19D]/50 transition-all hover:transform hover:scale-105 duration-300 shadow-lg"
            >
              <div
                className={`${recurso.cor} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white`}
              >
                {recurso.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#9AE19D]">
                {recurso.titulo}
              </h3>
              <p className="text-[#F9E0D9] leading-relaxed">
                {recurso.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-linear-to-r from-[#537A5A]/20 to-[#9AE19D]/20 rounded-2xl p-8 md:p-12 border border-[#9AE19D]/30 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#9AE19D]">
            Por que escolher o VeloFit?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-[#F06543]/20 p-3 rounded-lg shrink-0 border border-[#F06543]/30">
                  <div className="text-[#F06543]">{diferencial.icon}</div>
                </div>
                <p className="text-[#F9E0D9] leading-relaxed">
                  {diferencial.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para pagar apenas pelo que você usa?
          </h2>
          <p className="text-xl text-[#F9E0D9] mb-8">
            Junte-se ao VeloFit e transforme sua experiência fitness
          </p>
          <Link to='/servicos'>
            <button className="bg-[#F06543] hover:bg-[#e05738] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg">
              Começar Agora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
