import {styled} from "styled-components";

export const Item = styled.div`
    margin: 10px;
    padding: 10px;
    border: 1px solid #ede5a3;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 450px;
`;

export const Main = styled.div`
    border: 1px solid #ede5a3;
    display: flex;
    flex-direction: column;
    font-family: Arial, sans-serif;
    margin: 0;
    align-items: center;
    justify-content: center;
    height: 600px;
    background-color: #fbf9e8;
`;

export const BoxImg = styled.div`
    width: 250px; 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Title = styled.h2`
  text-align: left;
  margin-bottom: 10px;
  border-bottom: 2px solid #333;
  padding-bottom: 5px;
`;

export const TitleFinal = styled.p`
  text-align: left;
  font-size: 16px;
  font-family: Arial, sans-serif;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 500px;
  margin-right: 50px;
`;

export const Itens = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;