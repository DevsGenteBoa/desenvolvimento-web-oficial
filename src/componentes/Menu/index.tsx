import Link from "next/link";
import styled from "styled-components";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav>
      <ul id={styles.menu}>
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
      </ul>
    </nav>
  );
};

export default Menu;
