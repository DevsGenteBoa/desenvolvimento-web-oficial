import DiscordIcon from "src/components/ui/svgs/DiscordIcon";
import LinkedinIcon from "src/components/ui/svgs/Linkedin";
import WhatsappIcon from "src/components/ui/svgs/WhatsappIcon";
import { Container, Title, SociaisUL } from "./styles";
const SociaisSection = () => {
  return (
    <Container>
      <Title>Redes Sociais</Title>
      <p>
        Venha fazer parte da comunidade, participe das nossas redes sociais.
      </p>
      <SociaisUL>
        <li>
          <a
            href="https://chat.whatsapp.com/HTt7FwitQ9v6GnJ0VywgQw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
        </li>
        <li>
          <a
            href="https://discord.gg/PjpYsPhtpx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/groups/12670203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </li>
      </SociaisUL>
    </Container>
  );
};

export default SociaisSection;
