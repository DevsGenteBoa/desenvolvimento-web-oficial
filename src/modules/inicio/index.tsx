import Wrapper from "src/components/wrapper";
import HeroSection from "./sections/hero";
import SobreSection from "./sections/sobre";

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
      </Wrapper>
    </div>
  );
}
