import React from 'react'
import { useNavigate } from 'react-router-dom'
import  {useWriteBlogData} from '../context/blogdata-context'

function BlogCard(blog) {
  const navigate = useNavigate()
  const directSetBlogDataAccess = useWriteBlogData()

  const handleSetBlogData = () => {
    directSetBlogDataAccess(blog.blog)
    navigate(`/editblog/${blog.blog._id}`)
  }

  return (
    <div className="m-3 p-4 bg-green-700 text-white">
      <div className='flex justify-end'>
        <button onClick={handleSetBlogData}>edit</button>
      </div>
      <h1>{blog.blog.title}</h1>
      <p>{blog.blog.content}</p>
    </div>
  )
}

export default BlogCard
