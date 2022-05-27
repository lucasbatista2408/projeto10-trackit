import styled from "styled-components"
import {BallTriangle} from 'react-loader-spinner'
import Logo from "../assets/Group 8.png"

export default function PopUp(){
  
  
  return(
    <SignIn>
        <Pop>
          <Box>
            <BallTriangle
          height="100"
          width="250"
          color='#126BA5'
          ariaLabel='loading'
          />
          </Box>
        </Pop>
        <img src={Logo} alt="Logo"/>
      <Form>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <input type="text" placeholder="nome"  />
        <input type="text" placeholder="foto"  />
        <button>Cadastrar</button>
      </Form>
      <Button>Não tem uma conta? Cadastre-se</Button>
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

const Pop = styled.div`
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba( 0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  position: relative;
`