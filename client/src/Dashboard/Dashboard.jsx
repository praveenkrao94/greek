import React from 'react'
import Header from './Header'
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Company from './Company';
import Home from './Home';

function Dashboard() {
  return (
<>

    <BrowserRouter>
    <Header/>
        <Routes>
      
        <Route path='/companyinfo' element={<Company/>}/>
        <Route path='/' element={<Home/>}/>
        </Routes>

    </BrowserRouter>


   

    </>

  )
}

export default Dashboard