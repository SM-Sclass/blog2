import React, { useState } from 'react'
import BlogCard from './BlogCard'

function ListBlog() {
    const [blogData, setBlogData] = useState(null)

    const fetchBlogData = async()=>{
        const response = await fetch("http://localhost:5000/blogs")
        const data= await response.json()
        setBlogData(data)
    }

    !blogData && fetchBlogData()

    return (
        <div>
            {blogData && blogData.map((blogData, index )=>{
                return <BlogCard blog={blogData}/>
            })}
        </div>
    )
}

export default ListBlog