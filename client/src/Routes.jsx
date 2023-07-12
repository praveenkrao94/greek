import React, { useContext } from 'react'
import Register from './register/Register'
import { UserContext } from './UserContext'
import Dashboard from './Dashboard/Dashboard'


function Routes() {
    const{username,id} = useContext(UserContext)

    if(username){
        return <Dashboard/>
    }


  return (
    <div><Register/></div>
  )
}

export default Routes