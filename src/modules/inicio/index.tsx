import HeroSection from "./sections/Hero/Hero";
import { AiFillGithub } from "react-icons/ai";
import { Contribua } from "./styles";
import SobreSection from "./sections/sobre";
import SociaisSection from "./sections/sociais";

export default function Inicio() {
  return (
    <main>
        <HeroSection />
        <SobreSection />
        <SociaisSection />
        <Contribua>
          <AiFillGithub />
          <a
            href="https://github.com/PedroMarianoAlmeida/desenvolvimento-web-oficial"
            target="_blank"
            rel="noreferrer"
          >
            Clique aqui e contribua com o projeto.
          </a>
        </Contribua>
    </main>
  );
}
