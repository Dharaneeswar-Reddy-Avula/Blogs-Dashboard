import React from 'react'
import Navbar from './Components/Navbar';
import Create from './Components/Create';
import Contact from './Components/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
export const App = () => {
  return (
   <Router>
    <Navbar/>
    <div className="mt-[60px]">
    <Routes>
    
      <Route path="/Create" element={<Create/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      
    </Routes>
    </div>
   </Router>
  )
}
