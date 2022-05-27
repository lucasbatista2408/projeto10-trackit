import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Hoje from "./components/Hoje.js"
import UserContext from "./contexts/UserContext"
import Habitos from "./components/Habitos.js"
import Historico from "./components/Historico.js"


function App(){

  const [info, setInfo] = useState({});
  const contextValue = {info, setInfo}
  console.log(info)

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
            <Route path='/hoje' element={<Hoje />}/>
            <Route path='/habitos' element={<Habitos />}/>
            <Route path='/historico' element={<Historico/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;