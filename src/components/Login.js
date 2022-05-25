import styled from "styled-components"
import React, {useState} from "react"
import Logo from "../assets/Group 8.png"
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function Login(){

  const[token, setToken] = useState('')
  const[form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  function HandleLogIn(e){
    e.preventDefault();
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const infoLogIn = form;
    const promise = axios.post(URL, infoLogIn)
    promise.then(res => { 
      setToken(res.data.token)
      console.log(token)
      navigate('/hoje')}
      )
    promise.catch(error => (console.log(error)))
  }

  function HandleClick(){
    navigate("/cadastro")
  }

  return(
    <LoginPage>
      <img src={Logo} alt="Logo"/>
      <Form>
        <input type="text" value={form.email} placeholder='email' onChange={e => setForm({...form, email: e.target.value})} required/>
        <input type="password" value={form.password} placeholder='senha' onChange={e => setForm({...form, password: e.target.value})} required/>
        <button onClick={HandleLogIn} type="submit" >entrar</button>
      </Form>
        <Button onClick={HandleClick}>Não tem uma conta? Cadastre-se</Button>
    </LoginPage>
  )
}

const LoginPage = styled.div`
  min-width: 375px;
  width: 100%;
  min-height: 665px;
  height: 100%;
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

  button{
    font-size: 22px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 6px;
    width: 300px;
    height: 46px;
    border: none;
    border-radius: 4px;
    background-color: #52B6FF;
    color: white;
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

