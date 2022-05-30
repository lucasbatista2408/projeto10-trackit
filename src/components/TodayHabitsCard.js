import styled from "styled-components"
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br';

export default function TodayHabitsCard(){

  const { info, per, setPer } = useContext(UserContext);

  const weekday = dayjs().locale('pt-br').format('dddd');
  const day = dayjs().format('D')
  
  const [list, setList] = useState([])
  const [fin, setFin] = useState([])
  const [selec, setSelec] = useState([])
  const [controlerD, setControlerD] = useState(false)


  console.log(list)
  console.log(selec)

  function HandleActive(e, index, id){
    const array = fin.some((day) => day === index);
    const URL_CHECK = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
    const URL_UNCHECK = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
    const token = info.token;
    console.log(token)
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }

    if (!array) {
      e.target.style.color = '#8FC549'
      setFin([...fin, index]);
      const promise = axios.post(URL_CHECK, null, config)
      promise.then(res => {
        console.log("deu bom") //APAGAR DEPOIS
        setControlerD(!controlerD)
      })
    } else {
      const arrayN = fin.filter((day) => day !== index);
      e.target.style.color = '#EBEBEB'
      setFin(arrayN);
      const promise = axios.post(URL_UNCHECK, null, config)
      promise.then(res => {
        console.log("deu bom desmarcar")
        setControlerD(!controlerD) //APAGAR DEPOIS
      })
    }
  }


    // AXIOS REQUEST
    useEffect(() => {
      axiosRequest()
      }, [controlerD])
  
    function axiosRequest(){
      const token = info.token;
      const config = {
        headers: {
          Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
        }
      }
      const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config)
      promise.then(res => {
        let cont = 0;
        setList(res.data)
        console.log(res.data)
        res.data.map( habit => {
          const { done } = habit;
          console.log(done)
          if(done){
            cont++
          }
        })
        if(cont !== 0) {
          setPer(cont*100/res.data.length);
         }else{
          setPer(0)
         }
         return(true) 
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
        {(per === 0) ? <p>Nenhum Habito concluido ainda</p> : <h2> {per}% habitos concluidos </h2>}
       </TodayHeader>
      {list.map((habit,key) =>
        <CardBox>
            <Container>
              <Text>
                <h1>{habit.name}</h1>
                <p>Sequência atual: {habit.currentSequence} dias <br/> Seu recorde: {habit.highestSequence} dias</p>
              </Text>
              <Button selected={habit.done} setSelec={habit.done}>
                <ion-icon  onClick={(e) => {HandleActive(e, habit.name, habit.id)}} name="checkbox"></ion-icon>
              </Button>
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
    color:#666666;
  }
`

const Button = styled.div`
    ion-icon{
    position: absolute;
    right: 4px;
    top: 10px;
    width: 70px;
    height: 70px;
    fill: ${props => props.selected ? "#8FC549": "#EBEBEB"}; 
  }
`