import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { ToastAlerta } from "../../utils/ToastAlerta";

function ListaCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token, navigate]);

  const buscarCategorias = useCallback(async () => {
    if (token === "") return;

    try {
      setIsLoading(true);

      await buscar("/categorias", setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      console.error("Erro ao buscar categorias", error);
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }, [token, handleLogout]);

  useEffect(() => {
    if (token !== "") {
      buscarCategorias();
    }
  }, [token, buscarCategorias]);

  return (
    <>
      <div className="relative min-h-screen  text-white">
        <div className='absolute inset-0 bg-[url("https://s2-g1.glbimg.com/MTcUSm8am3UgA3nlYocWoYYTnWE=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/i/9/gzuvUhRjqAN0sT8sb5Zg/250312-montagem-exercicios.jpg")] bg-cover bg-center filter grayscale'></div>

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center min-h-screen py-10 px-6">
          <h1 className="text-4xl font-bold mb-12 text-center tracking-tight">
            Categorias
          </h1>

          {isLoading && <SyncLoader color="#9ae19d" size={32} />}

          {!isLoading && categorias.length === 0 && (
            <span className="text-2xl text-center my-8">
              Nenhuma Categoria foi encontrada!
            </span>
          )}

          <div className="flex justify-end w-full max-w-6xl mb-10">
            <Link to="/cadastrarcategoria">
              <button className="px-6 py-2 rounded-lg bg-(--tomato) hover:bg-(--jet) transition font-semibold text-sm text-white shadow-md">
                Cadastrar nova categoria
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-6xl">
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
