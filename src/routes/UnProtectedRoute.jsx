import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function UnProtectedRoute() {
    const navigate = useNavigate()

    // logic to protect the route
    const token = localStorage.getItem("access_token")

    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [])

    return (
        <Outlet />
    )
}

export default UnProtectedRoute