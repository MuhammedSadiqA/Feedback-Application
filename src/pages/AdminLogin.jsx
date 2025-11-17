import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom'

function AdminLogin() {

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const id = "user"
    const password = "user123"
    const navigate = useNavigate()
    const AdminLogin = () => {
        if (user === id && pass === password) {
            alert("login successful")
            navigate('/admin-dashboard')
        }else{
            alert("invalid credentials")
            setUser("")
            setPass("")
        }
    }

    return (
        <div>
            <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid&w=740&q=80" />
            <input value={user} onChange={e => setUser(e.target.value)} type="text" placeholder='Enter your Name' />
            <input value={pass} onChange={e => setPass(e.target.value)} type="text" placeholder='Enter your Name' />

            <button onClick={AdminLogin}>Go to dash board</button>
        </div>
    )
}

export default AdminLogin