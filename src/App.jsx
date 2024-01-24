import { useState } from 'react'
import './App.css'
import Head from './Components/Head';
import Footer from './components/Footer';
// import Footer from './components/Footer';\

import Home from './pages/Home'
import RestView from './pages/RestView'
import {Route,Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
     <Head />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/restview' element={<RestView />} />
     </Routes>
     <Footer />

    </>
  )
}

export default App
