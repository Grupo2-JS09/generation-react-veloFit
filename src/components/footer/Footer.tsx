import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <footer className="flex justify-end bg-(--jet) text-white border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-(--celadon) rounded-full flex items-center justify-center">
            <img src="https://i.imgur.com/H6qOppX.png" alt="VeloFit" className="w-8 h-8"/>
          </div>
          <span className="text-2xl font-bold">VeloFit</span>
        </div>

        <div className="flex items-center gap-4 text-white/80">
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-(--celadon) transition"
          >
            <LinkedinLogoIcon size={28} weight="fill" />
          </a>
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-(--celadon) transition"
          >
            <GithubLogoIcon size={28} weight="fill" />
          </a>
          <a
            href="https://github.com/Grupo2-JS09"
            target="_blank"
            className="hover:text-(--celadon) transition"
          >
            <InstagramLogoIcon size={28} weight="fill" />
          </a>
        </div>

        <div className="text-sm text-white/70 text-center md:text-right">
          <p> &copy; {data} VeloFit — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;