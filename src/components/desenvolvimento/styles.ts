import {styled} from "styled-components";

export const Item = styled.div`
    margin: 10px;
    padding: 10px;
    padding-left: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 200px;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    margin: 0;
    align-items: center;
    justify-content: center;
    background-color: #fbf9e8;
`;

export const DivTitulo = styled.div`
    display: flex;
    flex-direction: row;
`;


export const BoxImg = styled.div`
    width: 50px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const BoxImgPC = styled.div`
    width: 50px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    margin-left: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 10px;
`;

export const LI = styled.li`
    font-size: 14px;
  font-family: Arial, sans-serif;
`;


export const Subtitle = styled.p`
    text-align: center;
    margin-bottom: 20px;
    font-size: 16px;
  font-family: Arial, sans-serif;
`;


export const Itens = styled.div`
    display: flex;
    justifyContent: center ;
`;