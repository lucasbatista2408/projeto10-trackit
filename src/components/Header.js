import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import {useNavigate} from "react-router-dom"

export default function Header(){
  const { info, setInfo } = useContext(UserContext);
  console.log(info.image)
  const navigate = useNavigate();

  function HandleLoginPage(){
    navigate('/')
  }

  return(
    <Head>
      <h1 onClick={HandleLoginPage}>TrackIt</h1>
      {info.image === undefined ? <ion-icon name="person-circle-outline"></ion-icon> : <img src={info.image} alt="Profile_Picture"/>}
    </Head>
  )
}

const Head = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #126BA5;
  padding: 0 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  h1{
    font-family: 'Playball', cursive;
    font-size: 38px;
    color: white;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  ion-icon{
    font-size: 50px;
    color: #E5E5E5;
  }
`