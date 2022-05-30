import styled from "styled-components"
import {ThreeDots} from 'react-loader-spinner'
import Logo from "../assets/Group 8.png"

export default function PopUpLogin(){
  return(
    <Button>
      <ThreeDots
          height="30"
          width="100"
          color='#FFFFFF'
          ariaLabel='loading'
          />
    </Button>
  )
}

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 6px;
    width: 300px;
    height: 46px;
    border: none;
    border-radius: 4px;
    background-color: #52B6FF;
    color: white;
`