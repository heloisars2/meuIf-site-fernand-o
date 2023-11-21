import { Item, BoxImg, Main, Title, Subtitle, Itens } from "./styles";
import chamada from '../../assets/logos/livroChamada.png' 
import talher from '../../assets/logos/talher.png' 
import qrCode from '../../assets/logos/QrCodeGitHubMeuIF.png' 
import abas from '../../assets/logos/NavegacaoAbas.png' 
import acesso from '../../assets/logos/acesso.png' 
import autorizacao from '../../assets/logos/autorizacao.png' 
import grafico from '../../assets/logos/grafico-de-barras.png'
import agenda from '../../assets/logos/agenda.png'
import icone_entrada_saida from '../../assets/logos/icone_entrada_saida.png'

export function Funcionalidades() {
    return (
            
        <Main>
        <Title>Funcionalidades</Title>
        <Subtitle></Subtitle>

        <Itens>
            <Item>
                <h3>Carteirinha Digital</h3>
                <BoxImg>
                <img src={qrCode} alt="qr Logo" />
                </BoxImg>
                <p>A carteirinha digital foi a forma encontrada pelos desenvolvedores, para auxiliar no combate à evasão escolar. Através de um QR-Code gerado pelo aplicativo, em que o aluno passará na entrada do campus, e que ficará registrado em um banco de dados todas as entradas, desse modo, caso o aluno tenha muitas faltas frequentes será mais fácil para a SEPAE identificar</p>
            </Item>

            <Item>
                <h3>Agenda de turma</h3>
                <BoxImg>
                    <img src={agenda} alt="qr Logo" />
                </BoxImg>
                <p>A agenda escolar de turma, dedicada às atividades e eventos extracurriculares. Em essência, trata-se de uma ferramenta projetada para simplificar a vida dos alunos no que diz respeito a datas de provas, prazos de trabalhos, eventos acadêmicos e outras atividades relevantes.</p>
            </Item>

            <Item>
                <h3>PNAE</h3>
                <BoxImg>
                <img src={talher} alt="talher Logo" />
                </BoxImg>
                <p>oferece a capacidade de acompanhar suas retiradas do programa de alimentação. Isso inclui detalhes como a data e a hora em que a retirada foi registrada, bem como a possibilidade de visualizar o cardápio das refeições que serão distribuídas no dia. Essa funcionalidade permite aos alunos manter um controle preciso de suas refeições e escolhas alimentares.</p>
            </Item>

        </Itens>

        <Itens>
        <Item>
                <h3>Chamada Diária</h3>
                <BoxImg>
                    <img src={chamada} alt="livro Logo" />
                </BoxImg>
                <p>A atual chamada de turma em papel é eficiente, mas o MeuIF busca torná-la virtual para facilitar o controle de presença dos alunos pela SEPAE. A transição para um sistema virtual permitirá monitoramento em tempo real e uma gestão mais eficaz. O objetivo é modernizar e otimizar a gestão da presença dos alunos, tornando-a mais ágil e inteligente.</p>
            </Item>
            <Item>
                <h3>Minhas Faltas</h3>
                <BoxImg>
                <img src={grafico} alt="grafico Logo" />
                </BoxImg>
                <p>Quando acessado por um login de aluno, a funcionalidade "Minhas Faltas" exibe dois gráficos informativos. O primeiro demonstra a porcentagem de faltas e presenças em dias letivos, enquanto o segundo ilustra a distribuição das faltas ao longo da semana. </p>
            </Item>

            <Item>
                <h3>Entrada e saida</h3>
                <BoxImg>
                    <img src={icone_entrada_saida} alt="acesso Logo" />
                </BoxImg>
                <p>As funcionalidades ‘Autorizar saída’ e ‘Autorizar entrada’, que tem o mesmo propósito, gerar um melhor controle dos alunos que entram atrasados ou que saem antecipadamente. Tais funcionalidades registram, o nome completo do aluno, a turma em que ele está matriculado, o horário em que houve o registro, o nome do agente SEPAE que realizou o registro, e também uma justificativa do porque o aluno está atrasado ou saindo com antecipação. </p>
            </Item>
        </Itens>
        
    </Main>
       
    );
}