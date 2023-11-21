import {styled} from "styled-components";

export const Container = styled.header`
    background-color: #f4e6c6;
    text-align: center;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-around; /* Alinha as uls lado a lado */
    
`;

export const LiPrimeiro = styled.li`
    color: black;
    font: 2.3vw "Oswald", sans-serif;
    list-style-type: none; /* Remover bolinhas */
    margin-top: -20px;
    margin-bottom: -20px;
`;

export const ALink = styled.a`
    color: #8DB9ED;
`;

export const LiPadrao = styled.li`
    list-style-type: none; /* Remover bolinhas */
    margin: 0; /* Remover margem padrão do <ul> */
    margin-top: 5px;
`;

export const UlPadrao = styled.ul`
    display: inline-block;
`;

export const Logo = styled.img`
    width: 20px; 
    height: auto; 
    margin-right: 5px;
    margin-bottom: -5px;
`;


export const CDireitosReservados = styled.ul`
    display: block
    color: #fff;
    font: 2.3vw "Oswald", sans-serif;
    font-size: 15px;
`;