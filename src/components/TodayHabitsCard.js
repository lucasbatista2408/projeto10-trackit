import styled from "styled-components"
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';

export default function TodayHabitsCard(){

  const { info, setInfo } = useContext(UserContext);

  const weekday = dayjs().locale('pt-br').format('dddd');
  const day = dayjs().format('D')
  
  const [color, setColor] = useState(false)
  const [list, setList] = useState([])
  const [fin, setFin] = useState([])

  console.log(list)

  function HandleActive(e, index){
    const array = fin.some((day) => day === index);
    if (!array) {
      e.target.style.color = '#8FC549'
      setFin([...fin, index]);
    } else {
      const arrayN = fin.filter((day) => day !== index);
      e.target.style.color = '#EBEBEB'
      setFin(arrayN);
    }
  }


    // AXIOS REQUEST
    useEffect(() => {
      axiosRequest()
    }, [])
  
    function axiosRequest(){
      const token = info.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
        }
      }
      const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
      promise.then(res => {
        setList(res.data)
        console.log(res.data)
      })
      promise.catch(err => {
        console.log(err)
      })
    }
    /////////////////////////////////////////
  

  return(
    <>
      <TodayHeader>
        <h1>{weekday}, {day}</h1>
        {(fin.length) === 0 ? <p>Nenhum Habito concluido ainda</p> : <h2> {fin.length} habitos concluidos </h2>}
       </TodayHeader>
      {list.map((habit,key) =>
        <CardBox>
            <Container>
              <Text>
                <h1>{habit.name}</h1>
                <p>Sequência atual: {habit.currentSequence} dias <br/> Seu recorde: {habit.highestSequence} dias</p>
              </Text>
                <ion-icon onClick={(e) => {HandleActive(e, habit.name)}} name="checkbox"></ion-icon>
            </Container>
        </CardBox>)}
    </>
  )
}

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

const CardBox = styled.div`
  position: relative;
  width: 100%;
  height: 94px;
  background-color: white;
  border-radius: 6px;
  margin-bottom: 10px;
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