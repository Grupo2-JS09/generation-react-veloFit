import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import type Servico from "../../models/Servico";
import { buscar } from "../../services/Service";
import Cards from "../cards/Cards";
import { ToastAlerta } from "../utils/ToastAlerta";

function ListaCards() {

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [servicos, setServicos] = useState<Servico[]>([]);

  async function buscarServicos() {
    try {
      await buscar("/servicos", setServicos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
        ToastAlerta("Sessão expirada. Faça login novamente!", "info");
      }
    }
  }

  useEffect(() => {
    buscarServicos();
  }, []);


  return (
    <div className="w-full bg-gray-400 py-10 px-6">
      <h2 className="text-white text-4xl font-bold text-center mb-10">Promoções</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {servicos.map((servico, index) => (
          <Cards
            key={servico.id}
            recomendado={index % 2 === 0}
            servico={servico}
            descricaoPreco="por mês"
            beneficios={[
              { texto: "Treine em todas as unidades", disponivel: true },
              { texto: "Acesso a todas as aulas coletivas", disponivel: true },
              { texto: "Sem taxa de matrícula", disponivel: true },
              { texto: "Sem taxa de anuidade", disponivel: true },
            ]}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCards;
