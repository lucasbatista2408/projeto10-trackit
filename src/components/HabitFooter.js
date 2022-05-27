import React from "react"
import {useNavigate} from "react-router-dom"
import styled from "styled-components"
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "react-animated-progress-bar";

export default function HabitFooter(){

  const navigate = useNavigate()

  function HandleHabit(){
    navigate('/habitos')
  }

  function HandleToday(){
    navigate('/hoje')
  }

  return(
    <Footer>
      <h1 onClick={HandleHabit}>Hábitos</h1>
      <ProgressBar onClick={HandleToday} >
            <CircularProgressbar
              value={50}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
      </ProgressBar>
      <h1>Histórico</h1>
    </Footer>
  )
}

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 70px;
  background-color: white;

  h1{
    font-family: 'Lexend Deca';
  }
`

const ProgressBar = styled.div`
  font-family: 'Lexend Deca';
  display: flex;
  align-items: center;
  width: 90px;
  height: 90px;
  margin-bottom: 50px;
`