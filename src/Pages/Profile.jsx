import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Row, Col } from 'react-bootstrap'
import './profile.css'
import Userblogs from '../Components/Userblogs'
import { userblog } from '../Service/Allapi'
import { statusupdate } from '../Context/Context'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Footer from '../Components/Footer'

function Profile() {
  const userid = sessionStorage.getItem('userId')
  const [userId, setuserid] = useState(userid)
  const [userblogs2, setuserblogs] = useState([])

  const { status, setstatus } = useContext(statusupdate)
  const navigate = useNavigate()

  const username = sessionStorage.getItem('username')
  const email = sessionStorage.getItem('email')

  const handlelogout = () => {
    sessionStorage.clear()
    navigate('/')


  }


  const blogs = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    if (sessionStorage.getItem('token')) {

      const result = await userblog(userId, header)

      if (result.status == 200) {
        setuserblogs(result.data)


      }
    }
    else {
      navigate('/')
      Swal.fire({
        icon: 'error',
        title: 'Please login'
      })
    }
  }
  useEffect(() => {
    blogs()



  }, [status])
  return (
    <>
      <Navbar />
      <div>
        <Row className='g-0'>
          <Col md={4} className='d-flex justify-content-center mt-5'>
            <div className='w-100  user-det  bg-white'>
              <h3 className='text-center' > <i class="fa-solid fa-circle-info me-3 "></i>User Details</h3>
              <hr />
              <h5 className='mt-5 ur-h'><i class="fa-solid fa-user me-2 "></i>Username:{username}</h5>
              <h5 className='ur-h'><i class="fa-solid fa-envelope me-2"></i>Email:{email}</h5>
              <h6><i class="fa-solid fa-newspaper me-2"></i>Total blogs:{userblogs2.length}</h6>
              <div className='d-grid mt-5'>

                <button onClick={handlelogout} className='btn btn-outline-danger'>Log Out <i class="fa-solid fa-right-from-bracket"></i></button>
              </div>
            </div>

          </Col>

          <Col md={8}>
            <div className='user-blog mt-5'>
              <div className='ur-blog3 bg-white pb-5'>
                <h2 className='mt-4 mb-5 text-center'>Your Blogs</h2>

                <div className='d-flex justify-content-center'>
                  <div style={{ width: '98%' }}>

                    {

                      userblogs2.length<=0?
                      <h2 className='text-center mt-5 text-danger'> No Blog Is Posted ,Make an Intersting Blog </h2>:
                      userblogs2.map((items) => (

                    <Userblogs items={items} />
                    ))


                    }

                  </div>



                </div>
              </div>

            </div>
          </Col>
        </Row>

      </div>
      <Footer/>

    </>
  )
}

export default Profile