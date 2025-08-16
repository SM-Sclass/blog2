import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard(blog) {
  return (
    <div className="m-3 p-4 bg-green-700 text-white">
        <div className='flex justify-end'>
          <Link to={`/editblog/${blog.blog._id}`}>edit</Link>
        </div>
        <h1>{blog.blog.title}</h1>
        <p>{blog.blog.content}</p>
    </div>
  )
}

export default BlogCard
