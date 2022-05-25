import styled from "styled-components"
import Logo from "../assets/Group 8.png"
import {useNavigate} from "react-router-dom"
import React, {useState} from "react"
import axios from "axios"

function Cadastro(){

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    image: ''
  })

  const navigate = useNavigate();

  function SignUp(e){
    e.preventDefault();

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const signUp = form;
    const promise = axios.post(URL, signUp)
    promise
    .then( res => {
      console.log(res.data)
      navigate('/')
    })
    .catch(error => {
      console.log(error)
    })
  }


  function HandleLogIn(){
    navigate('/')
  }

  return(
    <SignIn>
      <img src={Logo} alt="Logo"/>
      <Form>
        <input type="text" placeholder="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <input type="text" placeholder="senha" value={form.password} onChange={e => setForm({...form, password: e.target.value})} required/>
        <input type="text" placeholder="nome"  value={form.name} onChange={e => setForm({...form, name: e.target.value})} required/>
        <input type="text" placeholder="foto"  value={form.image} onChange={e => setForm({...form, image: e.target.value})} required/>
        <button onClick={SignUp}>Cadastrar</button>
      </Form>
      <Button onClick={HandleLogIn}>Não tem uma conta? Cadastre-se</Button>
    </SignIn>
  )
}

const SignIn = styled.div`
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

export default Cadastro;