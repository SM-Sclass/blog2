import React from 'react'

function Header() {
  return (
    <div className='bg-blue-400 p-4 text-white flex justify-center'>
        <div className='text-lg'>
            <a href="/" className='mr-4'>Home</a>
            <a href="/myblog">My Blog</a>
        </div>
    </div>
  )
}

export default Header