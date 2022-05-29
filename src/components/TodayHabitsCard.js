import styled from "styled-components"
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios"

export default function TodayHabitsCard({setCont, cont}){

  const { info, setInfo } = useContext(UserContext);
  
  const [color, setColor] = useState(false)
  const [list, setList] = useState([])

  console.log(list)

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
    <CardBox>
      {list.map((habit,key) => 
        <Container>
          <Text>
            <h1>{habit.name}</h1>
            <p>Sequência atual: {habit.currentSequence} dias <br/> Seu recorde: {habit.highestSequence} dias</p>
          </Text>
            <ion-icon onClick={(e) => {HandleCont(e)}} name="checkbox"></ion-icon>
        </Container>
      )}
    </CardBox>
  )
}

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