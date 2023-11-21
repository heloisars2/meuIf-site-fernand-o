import { Container, LiPrimeiro, ALink, LiPadrao, UlPadrao, Logo, CDireitosReservados } from "./styles";
import logoInstagram from '../../assets/logos/instagram.png' 
import logoLinkedin from '../../assets/logos/linkedin.png' 
import logoGithub from '../../assets/logos/github.png' 

export function Footer() {
    return (
        <Container>
            <footer>
                <UlPadrao>
                    <LiPrimeiro>
                        <h6>Dev. Gabriel Costa</h6>
                    </LiPrimeiro>
                    <LiPadrao>
                        <Logo src={logoInstagram} alt="Github Logo" />
                        <ALink href="https://www.instagram.com/gcmoraes__/#">Instagram</ALink>
                    </LiPadrao>
                    <LiPadrao>
                    <Logo src={logoLinkedin} alt="Github Logo" />
                        <ALink href="https://www.linkedin.com/in/gabriel-costa-946984292/">Linkedin</ALink>
                    </LiPadrao>
                    <LiPadrao>
                    <Logo src={logoGithub} alt="Github Logo" />
                        <ALink href="https://github.com/GabrielCM16">Github</ALink>
                    </LiPadrao>
                </UlPadrao>
                <UlPadrao>
                    <LiPrimeiro>
                        <h6>Dev. Heloísa Raquel</h6>
                    </LiPrimeiro>
                    <LiPadrao>
                        <Logo src={logoInstagram} alt="Github Logo" />
                        <ALink href="https://www.instagram.com/heloisa_rs_/">Instagram</ALink>
                    </LiPadrao>
                    <LiPadrao>
                    <Logo src={logoLinkedin} alt="Github Logo" />
                        <ALink href="#">Linkedin</ALink>
                    </LiPadrao>
                    <LiPadrao>
                    <Logo src={logoGithub} alt="Github Logo" />
                        <ALink href="https://github.com/heloisars2">Github</ALink>
                    </LiPadrao>
                </UlPadrao>
                <CDireitosReservados>
                    M. Gabriel && S. Heloísa ©IFPR 2023.
                </CDireitosReservados>
            </footer>
        </Container>
    );
}