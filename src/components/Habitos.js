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
  const [controlerD, setControlerD] = useState(false)
  const [controlerA, setControlerA] = useState(false)

  const name = newHabit;
  const days = sDay;
  
  // console.log(days)
  // console.log(sDay)
  // console.log(list)
  // console.log(newHabit)
  // console.log(name)

  const buttons = [{name: 'D'}, {name: 'S'}, {name: 'T'},{name: 'Q'}, {name: 'Q'}, {name: 'S'}, {name: 'S'}]

    // AXIOS REQUEST
    useEffect(() => {
      axiosRequest()
    }, [controlerD, controlerA])
  
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
      })
    }
    /////////////////////////////////////////

  // ABRIR E FECHAR JANELA DE HABITOS
  function HandleAdd(){
    add === false ? setAdd(true) : setAdd(false)
  }

  function HandleCancel(){
    setAdd(false)
  }
  ///////////////////////////////////////////////////

  // AXIOS POST
  function HandlePost(e){
    e.preventDefault()
    const token = info.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }
    const name = newHabit;
    const days = sDay;
    const body ={
      name: name,
      days: days
    }
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
    promise.then(res => {
      setControlerA(!controlerA)
    })
  }
  ///////////////////////////////////////////////////

  // SELECIONAR DIAS DA SEMANA PROS HABITOS
  function HandleActive(e, index){
    const array = sDay.some((day) => day === index);
    if (!array) {
      e.target.style.background = '#CFCFCF'
      e.target.style.color = 'white'
      setSDay([...sDay, index]);
    } else {
      const arrayN = sDay.filter((day) => day !== index);
      e.target.style.background = 'transparent';
      e.target.style.color ='#D4D4D4';
      setSDay(arrayN);
    }
  }
  //////////////////////////////////////////////////

  function HandleDelete(id){
    const willDelete = window.confirm("Deseja mesmo deletar?")
    console.log(id)
    const token = info.token;
    const config = {
      headers: {
        Authorization: `Bearer ${token}` //Padrão da API (Bearer Authentication)
      }
    }
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    if(willDelete === true){
      const promise = axios.delete(URL, config)
      promise.then(res => {
        setControlerD(!controlerD)
        console.log("sucesso")
      })
      promise.catch(err => {
        console.log(err)
      }) 
    }
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
                <input type="text" placeholder={"nome do hábito"} onChange={e => setNewHabbit(e.target.value)} value={newHabit} required/>
                <WeekButton>
                  {buttons.map((day, index) =><button id={index} onClick={(e) => {HandleActive(e, index)}} value={sDay}>{day.name}</button>)}
                </WeekButton>
                <SaveCancel>
                  <Cancel onClick={HandleCancel}>Cancelar</Cancel>
                  <Save onClick={HandlePost}>Salvar</Save>
                </SaveCancel>
              </AddHabit>}
            <HabitsList>
              {(list.length) === 0 ? <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1> : list.map((value, key) => {
                const {id, name, days} = value;
                const daysList = days
                return(
                <HabitCard key={key}>
                  <HabitsInfo>
                  <h1>{name}</h1>
                    <WeekButtonList>
                      {buttons.map((day, index) => <Button selected={daysList.some(item => item === index)} key={index} disabled>{day.name}</Button>)}
                    </WeekButtonList>
                  </HabitsInfo> 
                  <ion-icon onClick={() => HandleDelete(id)} name="trash-outline"></ion-icon>
                </HabitCard>
                )})}
            </HabitsList>
        </Habits>
      </Container>
      <HabitFooter />  
    </Today>
  )
} 

const Today = styled.div`
  position: relative; 
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

const HabitCard = styled.div`
  position: relative;
  padding: 14px 14px;
  display: flex;
  width: 340px;
  height: 90px;
  background-color: white;
  margin-bottom: 30px;
  border-radius: 6px;
  
  ion-icon{
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 4px;
    font-size: 14px;
    color: #666666;
  }
`

const HabitsInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    font-size: 20px;
    font-family: 'Lexend Deca';
    margin-bottom: 8px;
    color: #666666;
  }
`

const WeekButtonList = styled.div`
  display: flex;
  flex-direction: row;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Lexend Deca';
    width: 30px;
    height: 30px;
    margin-right: 6px;
    border: 1px solid #D5D5D5;
    background-color: ${props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.selected ? "#FFFFFF" : "#CFCFCF"};;
`