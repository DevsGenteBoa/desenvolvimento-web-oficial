import Link from "next/link";
import Wrapper from "../wrapper";
import {
  Container,
  Logo,
  Header,
  Hamburger,
  NavigationMobile,
  Navigation,
} from "./styles";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Menu = () => {
  const [isOpenMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo>
            <Link href="/">Desenvolvimento Web</Link>
          </Logo>
          <Hamburger
            onClick={() => setOpenMenuMobile(!isOpenMenuMobile)}
            style={{ color: isOpenMenuMobile ? "#fff" : "#000" }}
          >
            <GiHamburgerMenu />
          </Hamburger>
          <Navigation>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/redes-sociais">
                <a>Redes Sociais</a>
              </Link>
            </li>
            <li>
              <Link href="/desafios">
                <a>Desafios</a>
              </Link>
            </li>
          </Navigation>

          <NavigationMobile isOpen={isOpenMenuMobile}>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/sobre">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/redes-sociais">
                <a>Redes Sociais</a>
              </Link>
            </li>
            <li>
              <Link href="/desafios">
                <a>Desafios</a>
              </Link>
            </li>
          </NavigationMobile>
        </Header>
      </Wrapper>
    </Container>
  );
};

export default Menu;
