import type Servico from "./Servico";

export default interface Usuario {
  id: number;
  nome: string;
  foto: string;
  usuario: string;
  senha: string;
  servico?: Servico[] | null;
}
