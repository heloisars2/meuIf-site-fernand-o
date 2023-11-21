import { Item, BoxImg, Main, Title, Subtitle, Itens } from "./style";
import chamada from '../../assets/logos/livroChamada.png' 
import talher from '../../assets/logos/talher.png' 
import qrCode from '../../assets/logos/QrCodeGitHubMeuIF.png' 
import abas from '../../assets/logos/NavegacaoAbas.png' 
import acesso from '../../assets/logos/acesso.png' 
import autorizacao from '../../assets/logos/autorizacao.png' 

export function Avaliacoes() {
    return (
            
        <Main>
        <Title>Teste de Usabilidade</Title>
        <Subtitle>Um teste de usabilidade foi aplicado a alguns estudantes do campus. Nesse formulário, continham perguntas para avaliar o uso de funcionalidades do aplicativo.</Subtitle>

        <Itens>
            <Item>
                <h3>Navegação de Telas</h3>
                <BoxImg>
                    <img src={abas} alt="abas Logo" />
                </BoxImg>
                <p>Em relação à navegação entre telas e suas funcionalidades, no formulário de usabilidade, <strong>77,8%</strong> dos usuários consideram a navegação dentro do aplicativo como <strong>muito prática</strong>, enquanto <strong>14,8%</strong> a classificam como <strong>prática</strong>.</p>
            </Item>

            <Item>
                <h3>Carteirinha Digital</h3>
                <BoxImg>
                    <img src={qrCode} alt="qr Logo" />
                </BoxImg>
                <p>Ao realizar o teste de usabilidade envolvendo a carteirinha digital, <strong>55,6%</strong> acharam a forma de gerar e utilizar a identificação virtual como <strong>muito prática</strong>, enquanto <strong>33,4%</strong> a consideraram como <strong>prática</strong>. Esses resultados combinados indicam que, no total, <strong>90%</strong> dos usuários percebem a <strong>melhoria</strong> em torno da carteirinha digital.</p>
            </Item>

            <Item>
                <h3>PNAE</h3>
                <BoxImg>
                <img src={talher} alt="talher Logo" />
                </BoxImg>
                <p>Foi perguntado aos discentes o que eles achavam da utilização prática da carteirinha digital para a retirada e registro do Programa Nacional de Alimentação Escolar (PNAE). Nele, <strong>70%</strong> responderam que acham <strong>muito prática</strong>, enquanto <strong>22%</strong> consideram a forma de retirada do programa <strong>prática</strong>. </p>
            </Item>

        </Itens>

        <Itens>
        <Item>
                <h3>Chamada Diária</h3>
                <BoxImg>
                    <img src={chamada} alt="livro Logo" />
                </BoxImg>
                <p>Com a substituição da chamada física, realizada diariamente por todos os líderes de sala, pela chamada digital feita através do aplicativo acelerando o processo, <strong>81%</strong> dos líderes consideraram a realização da chamada via app como <strong>muito prática</strong>, enquanto <strong>18%</strong> a classificaram como <strong>prática</strong>.</p>
            </Item>
            <Item>
                <h3>Acesso ao campus</h3>
                <BoxImg>
                    <img src={acesso} alt="acesso Logo" />
                </BoxImg>
                <p>Em relação à satisfação no uso da carteirinha digital como método de identificação para entrada e saída do campus, <strong>55,6%</strong> das pessoas que responderam estavam <strong>muito satisfeitas</strong> com o método de identificação para acesso, enquanto <strong>29,6%</strong> consideram a maneira de controle e identificação como <strong>satisfatória</strong>.</p>
            </Item>

            <Item>
                <h3>Autorizações</h3>
                <BoxImg>
                    <img src={autorizacao} alt="acesso Logo" />
                </BoxImg>
                <p>Como parte das solicitações digitais para substituição do formato físico, foi indagado sobre a praticidade da requisição para autorização de saída antecipada e entrada atrasada. Um expressivo <strong>70,4%</strong> considerou a prática como <strong>muito eficiente</strong>, enquanto <strong>25%</strong> a avaliaram como <strong>eficiente</strong> para a solicitação e utilização de uma autorização, quando necessário. </p>
            </Item>
        </Itens>
        
    </Main>
       
    );
}