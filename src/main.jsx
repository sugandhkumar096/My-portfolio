import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { Routes } from 'react-router'
import { Route } from 'react-router'
import { Link } from 'react-router'
import './index.css'
import Header from './Main/Header/Header.jsx'
import About from './Main/About/About.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <>
    

    <BrowserRouter>
    <App/>
     <Routes>
        <Route path='/'  element={<Header/>}>
        </Route>
        <Route path="/Main/About/About.jsx" element={<About/>}></Route>
        <Route path='/Main/About/About' element={<About/>}></Route>
        <Route path='/Main/About/About' element={<About/>}></Route>
        <Route path='/Main/About/About' element={<About/>}></Route>
        <Route path='/Main/About/About' element={<About/>}></Route>
    
     </Routes>
    </BrowserRouter>
    </>
    
    
    
    

  
    // <App />
)
