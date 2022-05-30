import styled from "styled-components"
import React, {useState} from "react"
import Logo from "../assets/Group 8.png"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import PopUpLogin from "./PopUpLogin.js"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login(){

  const { info, setInfo } = useContext(UserContext);

  const[form, setForm] = useState({
    email: '',
    password: ''
  })
  const [popup, setPopup] = useState(false)

  const navigate = useNavigate();

  function HandleLogIn(e){
    e.preventDefault();
    setPopup(true)
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const infoLogIn = form;
    const promise = axios.post(URL, infoLogIn)
    promise.then(res => { 
      const dados = res.data;
      setInfo(dados)
      navigate('/hoje')}
      )

    promise.catch(error => (
      alert("As informações digitadas estão incorretas"),
      setPopup(false),
      window.location.reload(true)
      ))
  }

  function HandleClick(){
    navigate("/cadastro")
  }

  return( 
    <LoginPage>
      <img src={Logo} alt="Logo"/>
      {popup === false ?
      <Form>
        <input type="text" value={form.email} placeholder='email' onChange={e => setForm({...form, email: e.target.value})} required/>
        <input type="password" value={form.password} placeholder='senha' onChange={e => setForm({...form, password: e.target.value})} required/>
        <button onClick={HandleLogIn} type="submit" >entrar</button>
      </Form> : 
      <Form>
        <input type="text" loading={popup === true} value={form.email} placeholder='email' onChange={e => setForm({...form, email: e.target.value})} disabled required/>
        <input type="password" loading={popup === true} value={form.password} placeholder='senha' onChange={e => setForm({...form, password: e.target.value})} disabled required/>
        <PopUpLogin />
      </Form>
      }
        <Button onClick={HandleClick}>Não tem uma conta? Cadastre-se</Button>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 665px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 32px;
  }
`

const Form = styled.form`
  font-family: 'Lexend Deca', sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  input{
    outline: none;
    transition: 0.5s;
    padding-left: 10px;
    border-radius: 4px;
    font-family: 'Lexend Deca', sans-serif;
    width: 300px;
    height: 46px;
    row-gap: 6px;
    margin-bottom: 6px;
    border: 1px solid #D4D4D4;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: #DBDBDB;
  }
}
  input:focus {
    border: 2px solid #52B6FF;
  }

  button{
    font-size: 22px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 6px;
    width: 300px;
    height: 46px;
    border: none;
    border-radius: 4px;
    background-color: #52B6FF;
    color: ${props => props.loading ? "#F2F2F2F" : "#FFFFFF"};
  }
`

const Button = styled.button`
    font-size: 14px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 36px;
    border: none;
    background-color: transparent;
    text-decoration: underline;
    color: #52B6FF;
`

