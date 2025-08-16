import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-blue-400 p-4 text-white flex justify-center'>
        <div className='text-lg'>
            <Link to="/" className='mr-4'>Home</Link>
            <Link to="/myblog">My Blog</Link>
        </div>
    </div>
  )
}

export default Header