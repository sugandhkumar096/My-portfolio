import React from 'react'
import './App.css'
import Navbar from './Main/Navbar'
import Header from './Main/Header/Header'
import About from './Main/About/About'
import Resume from './Main/Resume/Resume'
import Services from './Main/services/service'
import Service1 from './Main/services/Sevice1'
import Contact from './Main/Footer/Contact'
import WorkProcess from './Main/services/WorkProcess'

function App() {
  

  return (
    <>
     <Navbar/>
    <Header/> 
    <About/>
    <Resume/>
    <Services/>
    <Service1/>
    <WorkProcess/>
    <Contact/>

        
    </>
  )
}

export default App
