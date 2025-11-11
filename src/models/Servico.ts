import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Servico {
  id: number;
  valor_mensalidade: number;
  frequencia: number;
  dt_matricula: Date;
  modalidade: string;
  usuario: Usuario | null;
  categoria: Categoria;
}
