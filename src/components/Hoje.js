import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';
import styled from "styled-components"
import {useState} from "react"

import Header from "./Header"
import HabitFooter from './HabitFooter'
import TodayHabitsCard from "./TodayHabitsCard"

export default function Hoje(){

  const [cont, setCont] = useState([])

const weekday = dayjs().locale('pt-br').format('dddd');
const day = dayjs().format('D')

console.log(day)
console.log(dayjs.locale())

  return(
    <Today>
      <Header />
      <Container>
        <TodayHabits>
          <TodayHabitsCard weekday={weekday} day={day} />
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
  overflow: auto;
`

const Container = styled.div`
  margin-top: 70px;
  margin-bottom: 72px;
`

const TodayHabits = styled.div`

`