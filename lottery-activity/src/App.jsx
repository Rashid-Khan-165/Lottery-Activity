import { useState } from 'react'
import './App.css'
import Lottery from './Lottery.jsx'


function App() {
  let winCondition = (ticket) => {
      return ticket[0] === 0;
  }
  return (
    <>
      <Lottery n={3} winCondition = {winCondition}/>
    </>
  )
}

export default App
