import React from 'react'

function BlogCard(blog) {
  return (
    <div className="m-3 p-4 bg-green-700 text-white">
        <h1>{blog.blog.title}</h1>
        <p>{blog.blog.content}</p>
    </div>
  )
}

export default BlogCard
