import dayjs from 'dayjs'
import styled from "styled-components"
import {useState} from "react"

import Header from "./Header"
import HabitFooter from './HabitFooter'
import TodayHabitsCard from "./TodayHabitsCard"

export default function Hoje(){

  const [cont, setCont] = useState(0)

const weekday = dayjs().locale('pt-br').format('dddd');
const day = dayjs().format('D')

console.log(day)
console.log(dayjs.locale())

  return(
    <Today>
      <Header />
      <Container>
        <TodayHeader>
          <h1>{weekday}, {day}</h1>
          {cont === 0 ? <p>Nenhum Habito concluido ainda</p> : <h2> {cont} habitos concluidos </h2>}
        </TodayHeader>
        <TodayHabits>
          <TodayHabitsCard cont={cont} setCont={setCont}/>
        </TodayHabits>
      </Container>
      <HabitFooter />  
    </Today>
  )
}

const Today = styled.div`
  padding: 28px 16px;
  background-color: #E5E5E5;
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  margin-top: 70px;
`

const TodayHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 28px;

  h1{
    font-family: 'Lexend Deca';
    color: #126BA5;
    font-size: 22px;
    margin-bottom: 4px;
  }
  h2{
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #8FC549;
  }
  p{
    font-family: 'Lexend Deca';
    font-size: 18px;
    color: #BABABA;
  }
`

const TodayHabits = styled.div`

`