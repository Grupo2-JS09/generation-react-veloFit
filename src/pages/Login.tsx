import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import type UsuarioLogin from "../models/UsuarioLogin";
import { ToastAlerta } from "../utils/ToastAlerta";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");      
      ToastAlerta(`Seja bem-vindo ${usuario.nome}`, 'sucess')
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="flex items-center justify-center bg-[url('https://i.pinimg.com/originals/be/f6/13/bef61312df4494ac0d893c04ddd9d93f.gif')] bg-cover bg-center bg-no-repeat relative isolate min-h-screen ">
        <div className='flex flex-col bg-transparent shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-3xl text-white w-96 h-120 justify-center items-center backdrop-blur-sm'>
          <div className="w-1/3 h-1/3">
            <img src="https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png" alt="" />
          </div>
          <form className="flex flex-col" onSubmit={login}>
            <div className="flex justify-items-center p-5 gap-5">
              <input
                type='text'
                id='usuario'
                name='usuario'
                required={true}
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)}
                placeholder='Insira seu email'
                className="border-b w-60 rounded-md pl-2"
              />
            </div>
            <div className="flex justify-items-center p-5 gap-5">
              <input
                type='password'
                id='senha'
                name='senha'
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
                className="border-b w-60 rounded-md pl-2"
                placeholder='Insira sua senha'
              />
            </div>
            <button type="submit" className="w-full bg-[var(--tomato)] hover:bg-orange-600 text-white font-semibold text-xl py-4 rounded-xl transition duration-200 shadow-lg shadow-orange-500/20">
              Entrar
            </button>
            <div className="py-4">
              
                <p>Ainda não tem conta? cadastre - se</p>
                <Link to='/cadastro'>
                  <span className="flex justify-center text-(--tomato) font-semibold text-md hover:text-2xl hover:scale-50 hover:underline cursor-pointer transition-all duration-300 hover:scale-105 transition-all duration-300">Aqui</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
