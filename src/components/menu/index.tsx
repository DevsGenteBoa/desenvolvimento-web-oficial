import Link from "next/link";
import Wrapper from "../wrapper";
import {
  Container,
  Logo,
  Header
} from "./styles";


const Menu = () => {

  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>
            <Link href="/">Desenvolvimento Web</Link>
          </Logo>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Menu;
