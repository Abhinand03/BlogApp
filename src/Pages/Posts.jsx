import React, { useEffect, useState } from 'react'
import './post.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Navbar from '../Components/Navbar';
import { addpost } from '../Service/Allapi';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Posts() {

  const userid = sessionStorage.getItem('userId')
  const username = sessionStorage.getItem('username')
  const navigate = useNavigate()

  const [contents, setcontents] = useState({
    heading: '', content: '', userId: userid,username:username
  })

  // blog post function

  const handlepost = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }

    console.log(contents);
    if(contents.heading && contents.content)
    {

      const result = await addpost(contents,header)
      if (result.status == 201) {
        Swal.fire({
          icon: 'success',
          title: 'New blog is posted Successfully',
          background: 'green',
          color: 'white',
          showConfirmButton: false,
          timer: 1500
        })
        setcontents({...contents,heading:'',content:''})
      }
      else{
        Swal.fire({
          title:"Please Login",
          icon:'error',
          showConfirmButton: false,
          timer: 1500
  
        })

        
      }
      console.log(result);
    }
    else{
      navigate('/')
      Swal.fire({
        title:"Fill Properly",
        icon:'warning',
        showConfirmButton: false,
        timer: 1500

      })
    }
   
    


  }

  return (
    <>
      <Navbar />
      <div className='d-flex justify-content-center align-items-center po-main'>
        <div className='shadow p-5 bg-white'>
          <h2>Create, Connect, Share Your Blogs </h2>
          <div className='mt-5'>
            <FloatingLabel controlId="floatingPassword" label="Heading">
              <Form.Control type="text" value={contents.heading} onChange={(e) => { setcontents({ ...contents, heading: e.target.value }) }} placeholder="Heading" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" className='mt-2' label="Leave your Blog Details">
              <Form.Control value={contents.content} onChange={(e) => setcontents({ ...contents, content: e.target.value })} as="textarea" placeholder="Leave your Blog Details" style={{ height: '250px' }} />
            </FloatingLabel>

          </div>
          <div className='d-grid mt-3'>
            <button className='btn btn-primary' onClick={handlepost}>Post Your Blog</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Posts