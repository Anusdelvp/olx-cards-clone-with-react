import React from 'react'
import Card from '../components/card'
import './App.css'

const App = () => {
  return (
    <>
    <div className='flex flex-wrap  gap-[50px] justify-center'>
    <Card title="service" discription=" our quality no compromise" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/> 
    <Card title="bata" discription=" one team one goal" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/> 
    <Card title="unilever" discription=" good quality" image="https://images.olx.com.pk/thumbnails/475974069-800x600.webp"/> 
    </div>
    </>
  )
}

export default App