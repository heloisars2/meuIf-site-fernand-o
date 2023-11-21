import { Item, BoxImg, Main, Itens, TitleFinal, Title, ItemH3, Email, DivEmails } from "./styles";
import qr from '../../assets/logos/QrCodeGitHubMeuIF.png' 
import mail from '../../assets/logos/email.png' 

export function Conclusao() {
    return (
            
        <Main>

        <Itens>
            <Item>
                <ItemH3>Código aberto no <a href="https://github.com/GabrielCM16/MeuIF/tree/main">GitHub</a></ItemH3>
                
                <BoxImg>
                    <img src={qr} alt="GitHub Logo" />
                </BoxImg>
                <p>Valorizamos o <strong>feedback</strong> da comunidade acadêmica. Suas sugestões são essenciais para a constante <strong>melhoria</strong> do aplicativo <strong>MeuIF</strong>, garantindo que atenda cada vez melhor às <strong>necessidades</strong> dos alunos e da SEPAE. Estamos abertos a receber suas contribuições para aprimorar ainda mais a <strong>experiência</strong> de uso.</p>
            </Item>
            <div>
                <Title>Considerações Finais</Title>

                <TitleFinal>Em conclusão, o desenvolvimento do aplicativo <strong>MeuIF</strong> representa um marco significativo no aprimoramento das operações e da eficiência no Instituto Federal do Paraná, Campus Cascavel. Essa integração tecnológica possibilitou a criação de um recurso valioso que <strong>beneficia</strong> tanto os <strong>alunos</strong> quanto à Seção Pedagógica e de Assuntos Educacionais (<strong>SEPAE</strong>).</TitleFinal>

                <DivEmails>
                    <TitleFinal>
                        <div style={{ display: 'flex' }}>
                            Gabriel Costa de Moraes <Email><img src={mail} alt="email" /></Email>
                        <a href="mailto:gabrielcostademoraes13@gmail.com">gabrielcostademoraes13@gmail.com</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                        Heloísa Raquel Siebeneichler <Email><img src={mail} alt="email" /></Email>
                        <a href="mailto:heloisaraquel1304@gmail.com">heloisaraquel1304@gmail.com</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                        Odair Moreira de Souza <Email><img src={mail} alt="email" /></Email>
                        <a href="mailto:Odair.desouza@ifpr.edu.br">Odair.desouza@ifpr.edu.br</a>
                        </div>
                        <div style={{ display: 'flex' }}>
                            Fernando de Lima Alves <Email><img src={mail} alt="email" /></Email>
                        <a href="mailto:fernando.alves@ifpr.edu.br">fernando.alves@ifpr.edu.br</a>
                        </div>
                    </TitleFinal>
                </DivEmails>
            </div>
        </Itens>
    </Main>
       
    );
}