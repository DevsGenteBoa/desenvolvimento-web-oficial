import Container from 'src/components/container';
import { FaWhatsapp, FaDiscord, FaLinkedin } from 'react-icons/fa';
import { SocialWrapper, SocialTitle, SocialIcons } from './styles';
const SociaisSection = () => {
  return (
    <section id="social">
      <Container>
        <SocialWrapper>
          <SocialTitle>
            <h2>Redes Sociais</h2>
            <p>
              Venha fazer parte da comunidade, participe das nossas redes
              sociais.
            </p>
          </SocialTitle>
          <SocialIcons>
            <div>
              <a
                href="https://chat.whatsapp.com/HTt7FwitQ9v6GnJ0VywgQw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={34} />
              </a>
            </div>
            <div>
              <a
                href="https://discord.gg/PjpYsPhtpx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={34} />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/groups/12670203/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={34} />
              </a>
            </div>
          </SocialIcons>
        </SocialWrapper>
      </Container>
    </section>
  );
};

export default SociaisSection;
