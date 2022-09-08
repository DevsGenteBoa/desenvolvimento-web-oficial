import Wrapper from "src/components/wrapper";
import HeroSection from "./sections/hero";
import SobreSection from "./sections/sobre";

import { AiFillGithub } from "react-icons/ai";
import { Contribua } from "./styles";

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
        {/* <SobreSection /> */}
        <Contribua>
          <AiFillGithub />
          <a
            href="https://github.com/PedroMarianoAlmeida/desenvolvimento-web-oficial"
            target="_blank"
          >
            Clique aqui e contribua com o projeto :D
          </a>
        </Contribua>
      </Wrapper>
    </div>
  );
}
