import React from 'react'
import Background from './Components/Background'

function App() {
  return (

    <div className='relative w-full h-screen bg-zinc-800'>
    <Background/>
    <div className='fixed top-0 left-0 z-[3] w-full h-full bg-orange-400/50 '></div>
    </div>
  )
}

export default App 