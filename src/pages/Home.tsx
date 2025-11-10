import Button from "../components/button/Button";

export default function Home() {
  return (
    <>
      <div className=" w-full  min-h-screen flex bg-linear-to-r from-[#2b302e] via-[#3d5041] to-[#527859] ">
        <div>
          <div>
            <h1>Torne Seu Corpo Com a VeloFIT</h1>
            <p>
              Sistema completo de gestão para academias. Cadastre serviços,
              gerencie membros e impulsione seu negócio fitness
            </p>
          </div>
          <div>
            <Button
              width="w-1"
              color="bg-[#527859]"
              textColor="white"
              textValue="Teste 2"
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
