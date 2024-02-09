// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import plushplanetjpg from './assets/plushplanet.jpeg'
import './App.css'

function App() {
  return (
    <>
      <div className='flex justify-center items-center'>
        <img src={plushplanetjpg} className="w-1/3 h-1/2 rounded-md border border-white" alt="Plush Planet logo" />
      </div>
      <h1 className='mt-8 font-bold text-6xl'>Plush Planet</h1>
    </>
  )
}

export default App
