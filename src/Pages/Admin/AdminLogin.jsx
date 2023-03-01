import './AdminStyle.css'
import React, { createElement, useState } from 'react'
import { useNavigate } from 'react-router'

export const AdminLogin = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const Navigate = useNavigate()

    const HandleClick = () => {
        if(user.target.value === 'ibragim' && password.target.value === '12345'){
            Navigate('/admin')
        }
    }
    
  return (
    <div className='loginContainer'>
        <input type="text" placeholder='User' onChange={setUser} className='userInput'/>
        <input type="text" placeholder='Password' onChange={setPassword} className='passwordInput'/>
        <button onClick={HandleClick} className='enterBtn'>Enter</button>
    </div>
  )
}
