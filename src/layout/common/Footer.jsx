import styled from 'styled-components';
import { VscGithubInverted } from 'react-icons/vsc';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { Container, SocialLink } from 'components/ui';


export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterBox>
          <nav>
            <SocialLink target="_blank" href="https://github.com/FS-JesusC" rel="JesusC">
              <VscGithubInverted />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.facebook.com/jesusenrique.corderodelacruz.5" rel="JesusC">
              <BsFacebook />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.instagram.com/jesu_cordero/" rel="JesusC">
              <BsInstagram />
            </SocialLink>
            <SocialLink target="_blank" href="https://www.linkedin.com/in/jesus-cordero-73275130/" rel="JesusC">
              <BsLinkedin />
            </SocialLink>
          </nav>
        </FooterBox>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
margin: 0 auto;
box-shadow: inset -10px -10px 15px rgba(255, 255, 255, 0.5), 
           inset 10px 10px 15px rgba(70, 70, 70, 0.12);
width: 100%;
`;
const FooterBox = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`;