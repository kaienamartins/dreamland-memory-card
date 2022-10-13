import styled from "styled-components";
import Cards from "./Components/Cards";
import "./css/reset.css";
import "./css/style.css";

export default function App() {  
  return (
      <>
        <Title>Dreamland memory card</Title>
        <Cards/>
      </>
  );
}

const Title = styled.h1 `
  font-size:60px; 
  color: #fafafa;
  text-align: center;
  font-weight: 700;
  margin: auto;
  padding-top: 30px;
  width: 100%;
  @media only screen and (max-width: 480px)  {
    font-size: 50px;
    line-height: 50px;
    text-align: center;
    position: relative;
    margin: 0 auto;
    width: 100%;
    }
`
