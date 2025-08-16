import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import AddBlogForm from './components/AddBlogForm'
import ListBlog from './components/ListBlog'
import EditBlogForm from './components/EditBlogForm'

function App() {

  return (
    <>

      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<ListBlog />} />
          <Route path="/myblog" element={<h1>My blog</h1>} />
          <Route path="/addblog" element={<AddBlogForm />} />
          <Route path="/editblog/:id" element={<EditBlogForm />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
