import img1 from "../assets/imagenscaroussel/esteira.jpg";
import img2 from "../assets/imagenscaroussel/pilates.jpg";
import img3 from "../assets/imagenscaroussel/tenis.jpg";
import MyCaroussel from "../components/mycaroussel/MyCaroussel";
export default function Home() {
  const images = [img1, img2, img3];

  return (
    <>
      <div className=" w-full  min-h-screen grid lg:grid-cols-2 md:grid-cols-2 bg-linear-to-r from-[#2b302e] via-[#3d5041] to-[#527859] ">
        <div className="border-2 flex flex-col w-full justify-center items-center  ">
          <div className="w-1/2 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl text-white font-bold ">
                Torne Seu Corpo Com a{" "}
                <span className="text-(--tomato)">VeloFIT</span>
              </h1>
              <p className="text-white">
                Sistema completo de gestão para academias. Cadastre serviços,
                gerencie membros e impulsione seu negócio fitness
              </p>
            </div>
            <div className="flex gap-4">
              <button className="cad-button px-6 py-2 bg-(--tomato) text-white border-2 border-[#f06543] rounded font-semibold hover:bg-[#e05738] hover:border-[#e05738] hover:scale-105 transition-all duration-300">
                Começar Agora
              </button>
              <button className="l-button px-6 py-2 bg-transparent text-white border-2 border-white rounded font-semibold hover:bg-white hover:text-[#2c302e] transition-all duration-300">
                Login
              </button>
            </div>
          </div>
        </div>
        <div className=" flex border-2 w-full h-full items-center ">
          <MyCaroussel items={images} />
        </div>
      </div>
    </>
  );
}
