import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../Components/Header'

function Home() {

    const navigate=useNavigate()
    function UserLogin(){
        navigate('/admin-login')
    }


  return (
    <>
    <Header/>
    
    <button onClick={UserLogin} >UserLogin</button>
    </>
  )
}

export default Home