import styled from "styled-components"
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Header(){
  const { info, setInfo } = useContext(UserContext);
  console.log(info.image)
  return(
    <Head>
      <h1>TrackIt</h1>
      <img src={info.image} alt="Profile_Picture"/>
    </Head>
  )
}

const Head = styled.div`
  position: absolute;
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
`