import styled from "styled-components"
import {useState} from "react"



export default function TodayHabitsCard({setCont, cont}){
  
  const [color, setColor] = useState(false)

  function HandleCont(e){
    console.log('clicou')

    if(color === false){
      setColor(true)
      setCont(cont+1) 
      e.target.style.color = '#8FC549'
    } else{
      setColor(false)
      setCont(cont-1)
      e.target.style.color = '#EBEBEB'
    } 
  }
  
  return(
    <CardBox>
      <Container>
        <Text>
          <h1>Ler 1 Capitulo de livro</h1>
          <p>Sequência atual: 3 dias <br/> Seu recorde: 5 dias</p>
        </Text>
          <ion-icon onClick={HandleCont} name="checkbox"></ion-icon>
      </Container>
    </CardBox>
  )
}

const CardBox = styled.div`
  position: relative;
  width: 100%;
  height: 94px;
  background-color: white;
  border-radius: 6px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  ion-icon{
    position: absolute;
    right: 4px;
    top: 10px;
    width: 70px;
    height: 70px;
    color: #EBEBEB;
  }
`

const Text = styled.div`
  padding: 14px;
  font-family: 'Lexend Deca';

  h1{
    font-size: 20px;
    margin-bottom: 6px;
    color: #666666;
  }
  p{
    font-size: 12px;
    line-height: 16px;
    color: #666666;
  }
`