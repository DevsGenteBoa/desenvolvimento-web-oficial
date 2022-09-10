import Link from 'next/link';
import { Logo } from './styles';
import Container from '../container';

const Header = () => {
  return (
    <header>
      <Container>
        <Logo>
          <Link href="/">DevWeb</Link>
        </Logo>
      </Container>
    </header>
  );
};

export default Header;
