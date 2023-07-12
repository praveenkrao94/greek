import React from 'react'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './Company';
import Home from './Home';
import Userinfo from './Userinfo';
import Update from './Update';


function Dashboard() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/companyinfo' element={<Company />} />
          <Route path='/userInfo' element={<Userinfo />} />
          <Route path='/edituser/:id' element={<Update />} />
        </Routes>

      </BrowserRouter>




    </>

  )
}

export default Dashboard