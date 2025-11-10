import type Servico from "./Servico";

export default interface Categoria {
  id: number;
  nome_categoria: string;
  servico: Servico[];
}
