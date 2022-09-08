import Wrapper from "src/components/wrapper";
import HeroSection from "./sections/hero";
import { AiFillGithub } from "react-icons/ai";
import { Contribua } from "./styles";
import SobreSection from "./sections/sobre";
import SociaisSection from "./sections/sociais";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Wrapper>
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
            Clique aqui e contribua com o projeto :D
          </a>
        </Contribua>
      </Wrapper>
    </div>
  );
}
