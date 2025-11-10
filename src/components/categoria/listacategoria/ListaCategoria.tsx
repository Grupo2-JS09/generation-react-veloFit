import { useContext, useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import CardCategoria from "../cardcategoria/CardCategoria";
import { AuthContext } from "../../../contexts/AuthContext";

function ListaCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      await buscar("/categorias", setCategorias, {
        headers: {
          Authorization: token
        }
      });
      console.log(categorias);
    } catch (error: any) {
      console.error("Erro ao buscar categorias", error);
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900 text-white'>
        <div className='flex flex-col items-center min-h-screen py-10 px-6'>
          <h1 className='text-4xl font-bold mb-12 text-center tracking-tight'>
            Categorias
          </h1>

          {isLoading && <SyncLoader color='#74b9ff' size={32} />}

          {!isLoading && categorias.length === 0 && (
            <span className='text-2xl text-center my-8'>
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div className='flex justify-end w-full max-w-6xl mb-10'>
            <Link to='/cadastrarcategoria'>
              <button className='px-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 transition font-semibold text-sm text-white shadow-md'>
                Cadastrar nova categoria
              </button>
            </Link>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl'>
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategoria;
