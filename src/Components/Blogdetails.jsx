import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'
import './blog.css'
import Comment from './Comment'

function Blogdetails() {

  const location=useLocation()

  const [blogs,setblogs]=useState(location.state.items)

  const times = new Date(blogs.time)
  const posttdate = times.toDateString()
  const posttime = times.toTimeString()
  const time3 = posttime.split(' ')

  
  
  return (

    <>
      <Navbar />
      <div className='d-flex justify-content-center'>
        <div className='mt-4 bg-white main-blog-div  rounded'>
          <div className='p-5'>
            <h5><i class="fa-solid fa-user me-2"></i>{blogs.username}</h5>
            <p style={{fontSize:'12px'}}>{posttdate}</p>
            <p className='blogs-time'>{time3[0]}</p>
          </div>
          <div className='px-4'>
            <h1 className='text-center blog-head1 '>{blogs.heading}</h1>
            <p className='mt-5 det-cont'>{blogs.content}</p>
          </div>
          <hr />
          <Comment items={blogs}/>
          

        </div>
      </div>
    </>
  )
}

export default Blogdetails