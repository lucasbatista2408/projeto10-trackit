import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./components/Login.js"
import Cadastro from "./components/Cadastro.js"
import Hoje from "./components/Hoje.js"



function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/hoje' element={<Hoje />}/>
        <Route path='' element={<></>}/>
        <Route path='' element={<></>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;