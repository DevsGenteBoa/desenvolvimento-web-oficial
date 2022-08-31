import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <ul>
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
