import React from "react";

function Login() {
  return (
    <>
      <div className="flex items-center justify-center bg-[url('https://i.pinimg.com/1200x/77/cd/98/77cd9852179cf373847b46869b3ffbd5.jpg')] bg-cover bg-center bg-no-repeat relative isolate min-h-screen ">
        <div className='absolute inset-0 bg-gradient-to-b from-[rgba(42,21,14,0.45)] to-[rgba(42,21,14,0.55)] pointer-events-none'></div>
        <div className='flex flex-col bg-black rounded-lg text-white w-96 h-120 justify-center items-center '>
          <div className="w-1/3 h-1/3">
            <img src="https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png" alt="" />
          </div>
          <form>
            <div className="flex justify-items-center p-5">
              <label htmlFor='email'>Email </label>
              <input
                type='text'
                name='usuario'
                required={true}
                placeholder='Insira seu email'
                className="border-1"
              />
            </div>
            <div className="flex justify-items-center p-5">
              <label htmlFor='password'>Senha </label>
              <input
                type='password'
                name='password'
                required={true}
                className="border-1"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
