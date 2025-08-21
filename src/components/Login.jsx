import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    //email
    const [email, setEmail] = useState('')

    //password
    const [password, setPassword] = useState('')

    const loginUser = async(email, password)=>{
        const response = await fetch(`http://localhost:5000/auth/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email, password})
        })

        const responseData = await response.json()
        localStorage.setItem("access_token", responseData.token)
        sessionStorage.setItem("access_token", responseData.token)
        cookieStore.set("access_token", responseData.token)
        navigate("/")
    }

    const handleSubmit = (e)=>{
        e.preventDefault() // stops the default behaviour
        if(!email.trim() || !password.trim()){
            alert("Please provide email and password")
            return
        }

        loginUser(email, password)

    }
    
    return (
        <div className='m-4 p-4 space-y-4'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
                <input className='p-2' type="text" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='p-2' type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" className='p-3 bg-indigo-400 text-white'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login