import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Blogs from '../Components/Blogs'
import { allblog } from '../Service/Allapi'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Footer from '../Components/Footer'

export default function Home() {
  const[blogs,setblog]=useState([])

  const navigate= useNavigate()

  const getblogs=async()=>{
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }


    const result= await allblog(header)
    if(result.status==200)
    {

      setblog(result.data)
    }
    else{
      navigate('/')
      Swal.fire({
        title:"Please Login First",
        icon:'error',
        showConfirmButton: false,
        timer: 1500,
        background:"red",
        color:'white'

      })

    }
    console.log(result);
    
  }
  useEffect(()=>{
    getblogs()


  },[])
  return (
    <>
      <Navbar />
      <h1 className='mt-4 ms-5 text-primary text-center'>Explore all Blogs</h1>
      <div className='d-flex flex-wrap justify-content-center mt-5'>
        {
          blogs.map((items)=>(
           <Blogs items={items}/>

          ))

        }

      </div>
      
      <Footer/>

    </>
  )
}
