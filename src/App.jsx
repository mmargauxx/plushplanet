// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import plushplanetjpg from './assets/plushplanet.jpeg'
import pphero from './assets/planetplush-hero.png'
import './App.css'

function App() {
  return (
    <>
    <div className='bg-aqua text-white font-body p-8 space-x-10'>
      <a href="/" className='text-3xl font-display order-first lg:order-3'>Plush Planet</a>
      <a href="/" className='font-body hover:underline underline-offset-4'>about us</a>
      <a href="/" className='font-body hover:underline underline-offset-4'>store</a>
      <a href="/" className='font-body hover:underline underline-offset-4'>donate toys</a>
      <a href="/" className='font-body hover:underline underline-offset-4'>contact</a>
    </div>
    <img src={pphero} className='w-full' alt='pp hero' />
      <div className='flex flex-col gap-4 items-center'>
        <div className='bg-white rounded-lg mx-4'>
          <h1 className='mt-6 lg:mt-8 font-bold text-2xl lg:text-6xl text-blue font-display'>Plush Planet</h1>
          <p className='text-blue-light font-body mx-auto lg:w-1/2 py-6 lg:py-8'>
            The sustainable soft toy adoption agency. Pre-loved plushies, a greener planet.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
