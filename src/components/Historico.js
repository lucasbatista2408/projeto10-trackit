import Header from "./Header";
import HabitFooter from "./HabitFooter";
import styled from "styled-components"

export default function Historico(){
  return(
    <History>
      <Header />
        <Text>
          <h1>EM <br/> CONSTRUÇÃO</h1>
        </Text>
      <HabitFooter/>
    </History>
  )
}

const History = styled.div`
padding: 28px 16px;
background-color: #E5E5E5;
width: 100%;
height: 100vh;
overflow: auto;

display: flex;
align-items: center;
justify-content: center;
`

const Text = styled.div`

  h1{
    line-height: 20px;
    text-align: center;
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #52B6FF;
  }
`