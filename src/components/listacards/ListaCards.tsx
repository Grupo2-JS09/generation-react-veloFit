import Cards from "../cards/Cards";

function ListaCards() {
  return (
    <div className="w-full bg-white py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <Cards
          recomendado
          nome="Gold Pro Fidelidade"
          precoAntigo="R$ 159,90"
          preco="R$ 8,59"
          descricaoPreco="No 1º mês"
          beneficios={[
            { texto: "Treine em todas as unidades", disponivel: true },
            { texto: "Acesso a todas as aulas coletivas", disponivel: true },
            { texto: "Leve 5 amigos para treinar com você", disponivel: true },
            { texto: "Sem taxa de matrícula", disponivel: true },
            { texto: "Sem taxa de anuidade", disponivel: true },
            { texto: "Fidelidade de 12 meses", disponivel: true },
          ]}
        />

        <Cards
          nome="Gold Premium"
          preco="R$ 184,90"
          descricaoPreco="por mês"
          beneficios={[
            { texto: "Treine em todas as unidades", disponivel: true },
            { texto: "Acesso a todas as aulas coletivas", disponivel: true },
            { texto: "Leve 5 amigos para treinar com você", disponivel: false },
            { texto: "Sem taxa de matrícula", disponivel: true },
            { texto: "Sem taxa de anuidade", disponivel: true },
            { texto: "Sem fidelidade", disponivel: true },
          ]}
        />

        <Cards
          recomendado
          nome="Gold Pro Plus Fidelidade"
          precoAntigo="R$ 179,90"
          preco="R$ 9,90"
          descricaoPreco="No 1º mês"
          beneficios={[
            { texto: "Treine em todas as unidades", disponivel: true },
            { texto: "Acesso a todas as aulas coletivas", disponivel: true },
            { texto: "Leve 5 amigos para treinar com você", disponivel: true },
            { texto: "Sem taxa de matrícula", disponivel: true },
            { texto: "Sem taxa de anuidade", disponivel: true },
            { texto: "Fidelidade de 12 meses", disponivel: true },
            { texto: "Bioimpedância (1 avaliação por mês)", disponivel: true },
          ]}
        />

        <Cards
          nome="Gold Premium Plus"
          preco="R$ 204,90"
          descricaoPreco="por mês"
          beneficios={[
            { texto: "Treine em todas as unidades", disponivel: true },
            { texto: "Acesso a todas as aulas coletivas", disponivel: true },
            { texto: "Leve 5 amigos para treinar com você", disponivel: false },
            { texto: "Sem taxa de matrícula", disponivel: true },
            { texto: "Sem taxa de anuidade", disponivel: true },
            { texto: "Sem fidelidade", disponivel: true },
            { texto: "Bioimpedância (1 avaliação por mês)", disponivel: true },
          ]}
        />
      </div>
    </div>
  );
}

export default ListaCards;
