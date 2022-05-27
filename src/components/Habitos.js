import styled from "styled-components"
import Header from "./Header.js"
import HabitFooter from "./HabitFooter.js"
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios"
import TodayHabitsCard from "./TodayHabitsCard.js";

export default function Habitos(){
  
  const { info, setInfo } = useContext(UserContext);

  const [list, setList] = useState([])
  const [newHabit, setNewHabbit] = useState('') // CRIAR HABITO NOVO
  const [add, setAdd] = useState(false); // ABRIR TELA DE CRIAÇÃO DE HABITO NOVO
  const [sDay, setSDay] = useState([])
  const [status, setStatus] = useState(true)

  const buttons = [{name: 'D'}, {name: 'S'}, {name: 'T'},{name: 'Q'}, {name: 'Q'}, {name: 'S'}, {name: 'S'}]

  function HandleAdd(){
    add === false ? setAdd(true) : setAdd(false)
  }

  function HandleCancel(){
    setAdd(false)
  }

  function HandleActive(index){
    const array = [...sDay, index ]
    setSDay(array)
    console.log(sDay)
  }

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
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)
    promise.then(res => {
      setList(res.data)
      console.log(list)
    })
  }


  return(
    <Today>
      <Header />
      <Container>
        <Habits>
          <HabitsHeader>
            <h1>Meus hábitos</h1>
            <ion-icon onClick={HandleAdd} name="add-outline" />
          </HabitsHeader>
          {add === false? null : 
              <AddHabit>
                <input type="text" placeholder={"nome do hábito"} onChange={e => setNewHabbit(e.target.value)} required/>
                <WeekButton>
                    {buttons.map((day, index) => <button id={index} onClick={() => {HandleActive(index)}}>{day.name}</button>)}
                </WeekButton>
                <SaveCancel>
                  <Cancel onClick={HandleCancel}>Cancelar</Cancel>
                  <Save>Salvar</Save>
                </SaveCancel>
              </AddHabit>}
            <HabitsList>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </HabitsList>
        </Habits>
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

const Habits = styled.div`
  font-family: 'Lexend Deca';
  color: #666666;

`

const HabitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 28px;

  h1{
    font-family: 'Lexend Deca';
    color: #126BA5;
    font-size: 22px;
  }

  ion-icon{
    border-radius: 4px;
    font-size: 30px;
    background-color: #52B6FF;
    color: white;
  }

`

const AddHabit = styled.div`
  position: relative;
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 4px;

  input{
    font-family: 'Lexend Deca';
    border: 1px solid #DBDBDB;
    padding: 10px 10px;
    font-size: 20px;
    width: 302px;
    height: 46px;
    margin-bottom: 10px;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #DBDBDB;
    }
  }
`

const WeekButton = styled.div`
  button{
    font-family: 'Lexend Deca';
    width: 30px;
    height: 30px;
    margin-right: 6px;
    border: 1px solid #D5D5D5;
    background-color: transparent;
    color: #D4D4D4;
  }
`

const SaveCancel = styled.div`
  position: absolute;
  bottom: 18px;
  right: 20px;
`

const Cancel = styled.button`
  font-family: 'Lexend Deca';
  border: none;
  background-color: transparent;
  text-decoration: underline;
  font-size: 16px;
  color: #52B6FF;
`

const Save = styled.button`
  font-family: 'Lexend Deca';
  font-size: 16px;
  border:none;
  border-radius: 4px;
  width: 84px;
  height: 36px;
  margin-left: 24px;
  background-color: #52B6FF;
  color: white;
`

const HabitsList = styled.div`

`