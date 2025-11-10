import React from "react";

function Login() {
  return (
    <>
      <div className="flex items-center justify-center bg-[url('https://64.media.tumblr.com/tumblr_m1me4nvOwe1rsbhe4o1_500.gif')] bg-cover bg-center bg-no-repeat relative isolate min-h-screen ">
        <div className='flex flex-col bg-transparent shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-3xl text-white w-96 h-120 justify-center items-center'>
          <div className="w-1/3 h-1/3">
            <img src="https://images.icon-icons.com/1378/PNG/512/avatardefault_92824.png" alt="" />
          </div>
          <form className="flex flex-col">
            <div className="flex justify-items-center p-5 gap-5">
              <input
                type='text'
                name='usuario'
                required={true}
                placeholder='Insira seu email'
                className="border-b w-60 rounded-md pl-2"
              />
            </div>
            <div className="flex justify-items-center p-5 gap-5">
              <input
                type='password'
                name='password'
                required={true}
                className="border-b w-60 rounded-md pl-2"
                placeholder='Insira sua senha'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
