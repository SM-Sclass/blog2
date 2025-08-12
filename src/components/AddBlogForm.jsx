import React, { useState } from 'react'

function AddBlogForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image_url, setImage_Url] = useState('')
  const [apiResponse, setApiResponse] = useState('')

  const createBlog = async () => {
    const response = await fetch("http://localhost:5000/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        image_url,
        userId: "6892e12270ba8348d14ea038"
      })
    })

    const data = await response.json()
    setApiResponse(data.message)
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (title.trim() === '') {
      alert('Please enter a title')
      return
    }
    if (content.trim() === '') {
      alert('Please enter a content')
      return
    }

    await createBlog()
    setTitle('')
    setContent('')
    setImage_Url('')

  }

  return (
    <div className='bg-blue-200 rounded-md m-2 p-4'>
      <form onSubmit={handleSubmit} className='bg-white p-4 rounded-md space-y-6 flex flex-col'>
        <input type="text" placeholder='Title' className='p-3'
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
        />
        <textarea type="text" placeholder='Content' className='p-3'
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
        />
        <input type="text" placeholder='Image URL' className='p-3'
          value={image_url}
          onChange={(e) => { setImage_Url(e.target.value) }}
        />

        <button className='bg-green-400 text-white p-2'>Add Blog</button>
      </form>

      <h1>{apiResponse}</h1>
    </div>
  )
}

export default AddBlogForm