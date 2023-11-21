import { Item, BoxImg, Main, Title, Subtitle, Itens, LI, BoxImgPC, DivTitulo } from "./styles";
import solucao from '../../assets/logos/solucao.png' 
import quebraCabeça from '../../assets/logos/quebra-cabeca-de-quatro-pecas.png' 
import prancheta from '../../assets/logos/prancheta.png' 
import grafico from '../../assets/logos/grafico-de-barras.png' 
import pc from '../../assets/logos/definicoes.png' 

export function Introducao() {
    return (
            
        <Main>
            <DivTitulo>
                <Title>Introdução</Title> 
                <BoxImgPC><img src={prancheta} alt="PC" /></BoxImgPC> 
            </DivTitulo>
                <Subtitle>No âmbito do Instituto Federal do Paraná, Campus Cascavel, surgiu a necessidade de desenvolver um software capaz de otimizar tarefas diárias dos alunos e da Seção Pedagógica e de Assuntos Educacionais (SEPAE).</Subtitle>

    
        
    </Main>
       
    );
}