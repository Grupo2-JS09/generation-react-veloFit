import {
  EnvelopeIcon,
  GithubLogoIcon,
  HandshakeIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

interface Integrante {
  nome: string;
  github: string;
  linkedin: string;
  foto: string;
  email: string;
}
function Contato() {
  const integrantes: Integrante[] = [
    {
      nome: "Anna Clara",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/andradeannac",
      foto: "https://avatars.githubusercontent.com/u/109049321?v=4",
      email: "mailto: andradeannac@gmail.com",
    },
    {
      nome: "Benner Dias",
      github: "https://github.com/BennerDias",
      linkedin: "https://linkedin.com/in/BennerDias",
      foto: "https://avatars.githubusercontent.com/u/183029242?v=4",
      email: "mailto:",
    },
    {
      nome: "Elzilane Barreto",
      github: "https://github.com/elzilanebarreto",
      linkedin: "https://linkedin.com/in/elzilanebarreto",
      foto: "https://avatars.githubusercontent.com/u/170752422?v=4",
      email: "mailto: elzilanebarreto@gmail.com",
    },
    {
      nome: "Maristela Rocha",
      github: "https://github.com/maristelarochas",
      linkedin: "https://www.linkedin.com/in/maristela-rocha/",
      foto: "https://avatars.githubusercontent.com/u/147320021?v=4",
      email: "mailto: maristela.rocha.silva@gmail.com",
    },
    {
      nome: "Mateus Heloi",
      github: "https://github.com/MateusHeloi",
      linkedin: "https://linkedin.com/in/mateus-heloi",
      foto: "https://avatars.githubusercontent.com/u/110264142?v=4",
      email: "mailto: ",
    },
    {
      nome: "Paulo Henrique",
      github: "https://github.com/Phcode007",
      linkedin: "https://linkedin.com/in/paulo-henrique-belarmino-ads",
      foto: "https://avatars.githubusercontent.com/u/149791777?v=4",
      email: "mailto: phcv2002@gmail.com",
    },
    {
      nome: "Vinícius Valverde",
      github: "https://github.com/Valverde08",
      linkedin: "https://linkedin.com/in/vinicius-valverde",
      foto: "https://avatars.githubusercontent.com/u/120853222?v=4",
      email: "mailto: valverde88@outlook.com",
    },
  ];
  return (
    <div className="min-h-screen bg-[url('https://img.wattpad.com/c0a7a1c1767fb4085a02d30b3c07f996f89671ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f307244724276586936614c344f773d3d2d3531353434333836382e313530353633303935616662376362393234323934363438383234312e676966')] bg-cover bg-center bg-no-repeat text-white">
      <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6">
        <h1 className="text-5xl lg:text-6xl font-bold text-orange-400 mb-6 tracking-tight">
          Integrantes do Projeto
        </h1>

        <div className="flex flex-wrap py-5 justify-center gap-10 mb-10">
          {integrantes.slice(0, 4).map((i) => (
            <div
              key={i.nome}
              className="group flex flex-col items-center bg-transparent shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-2xl p-6 w-56 hover:bg-[#bd4e32] hover:scale-105 transition duration-300 "
            >
              <img
                src={i.foto}
                alt={i.nome}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-orange-400 group-hover:border-[#283a2b] shadow-md hover:border-orange-300 transition"
              />
              <span className="text-lg text-orange-400 group-hover:text-[#283a2b] hover:text-orange-300 font-semibold mb-2 text-center">
                {i.nome}
              </span>
              <div className="flex space-x-5 mt-2">
                <a
                  href={i.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <GithubLogoIcon size={26} weight="fill" />
                </a>
                <a
                  href={i.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <LinkedinLogoIcon size={26} weight="fill" />
                </a>
                <a
                  href={i.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <EnvelopeIcon size={28} weight="regular" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {integrantes.slice(4).map((i) => (
            <div
              key={i.nome}
              className="group flex flex-col items-center bg-transparent shadow-[0_0_40px_rgba(0,0,0,0.8)] rounded-2xl p-6 w-56 hover:bg-[#bd4e32] hover:scale-105 transition duration-300 "
            >
              <img
                src={i.foto}
                alt={i.nome}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-orange-400 group-hover:border-[#283a2b] shadow-md hover:border-orange-300 transition"
              />
              <span className="text-lg text-orange-400 group-hover:text-[#283a2b] hover:text-orange-300 font-semibold mb-2 text-center">
                {i.nome}
              </span>
              <div className="flex space-x-5 mt-2">
                <a
                  href={i.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <GithubLogoIcon size={26} weight="fill" />
                </a>
                <a
                  href={i.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <LinkedinLogoIcon size={26} weight="fill" />
                </a>
                <a
                  href={i.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 group-hover:text-[#283a2b] hover:text-orange-300 transition"
                >
                  <EnvelopeIcon size={28} weight="regular" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mx-auto text-orange-400 text-center pb-15 mt-10 animate-fade-in"
          style={{ animationDelay: "700ms" }}
        >
          <div className="bg-card/30 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-primary/20 shadow-2xl">
            <HandshakeIcon className="w-16 h-16 mx-auto mb-6 text-accent animate-float" />

            <h2 className="text-3xl text-[#283a2b] lg:text-4xl font-bold mb-4">
              Vamos Trabalhar Juntos?
            </h2>

            <p className="text-lg text-[#283a2b] mb-8">
              Estamos abertos a colaborações, projetos e novas oportunidades.
              Entre em contato com os membros da equipe através das redes
              sociais!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contato;
