import { Item, BoxImg, Main, Title, Subtitle, Itens, LI, BoxImgPC, DivTitulo } from "./styles";
import solucao from '../../assets/logos/solucao.png' 
import quebraCabeça from '../../assets/logos/quebra-cabeca-de-quatro-pecas.png' 
import prancheta from '../../assets/logos/prancheta.png' 
import grafico from '../../assets/logos/grafico-de-barras.png' 
import pc from '../../assets/logos/definicoes.png' 

export function Desenvolvimento() {
    return (
            
        <Main>
            <DivTitulo>
                <Title>Desenvolvimento</Title> 
                <BoxImgPC><img src={pc} alt="PC" /></BoxImgPC> 
            </DivTitulo>
                <Subtitle>O Desenvolvimento do aplicativo foi dividido em etapas</Subtitle>

        <Itens>
            <Item>
                <BoxImg>
                    <img src={prancheta} alt="prancheta Logo" />
                </BoxImg>
                <h3>1) Levantamento de Requisitos</h3>
                <ul>
                    <LI>AnáLIse das políticas e estratégias pedagógicas</LI>
                    <LI>Definição das funcionaLIdades</LI>
                </ul>
            </Item>

            <Item>
                <BoxImg>
                    <img src={quebraCabeça} alt="quebraCabeça Logo" />
                </BoxImg>
                <h3>2) Engenharia de Software</h3>
                <ul>
                    <LI>Gerenciamento com Scrum e Kanban</LI>
                    <LI>Diagramas</LI>
                    <LI>Protótipo</LI>
                </ul>
            </Item>

            <Item>
            <BoxImg>
                    <img src={solucao} alt="solucao Logo" />
                </BoxImg>
                <h3>3) Desenvolvimento</h3>
                <ul>
                    <LI>Desenvolvimento das telas</LI>
                    <LI>Implementação das classes</LI>
                    <LI>Implemetação do banco de dados</LI>
                </ul>
            </Item>

            <Item>
            <BoxImg>
                    <img src={grafico} alt="grafico Logo" />
                </BoxImg>
                <h3>4) Testes</h3>
                <ul>
                    <LI>Testes funcionais</LI>
                    <LI>Testes de usabilidade</LI>
                    <LI>Testes de integração</LI>
                </ul>
            </Item>

        </Itens>

    
        
    </Main>
       
    );
}