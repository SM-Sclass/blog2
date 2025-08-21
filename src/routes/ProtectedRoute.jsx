import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

// "/""
function ProtectedRoute() {
    const navigate = useNavigate()

    // logic to protect the route
    const token = localStorage.getItem("access_token")

    useEffect(() => {
        if (!token) {
            navigate("/auth/login")
        }
    }, [])

    return (
            <Outlet />
    )
}

export default ProtectedRoute