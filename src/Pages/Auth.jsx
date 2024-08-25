import React from 'react'
import './auth.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, register } from '../Service/Allapi'
import Swal from 'sweetalert2'

function Auth() {
    const [status, setstatus] = useState(false)
    const [userdata, setuserdata] = useState({
        username: "", password: "", email: ''
    })

    const navigate = useNavigate()


    //   register functiom
    const handleregister = async () => {
        if (userdata.email && userdata.password && userdata.email) {
            const result = await register(userdata)
            console.log(result);
            
            if (result.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "User Registration Completed",
                    showConfirmButton: false,
                    timer: 1500
                })
                setstatus(!status)
            }
            else if (result.response.status == 401) {
                Swal.fire({
                    icon: 'error',
                    title: result.response.data,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
        else {
            Swal.fire({
                title: "Fill All feild Properly",
                icon: "warning",
                background: "black",
                showConfirmButton: false,
                timer: 2000

            })
        }
    }



    // userlogin
    const handlelogin = async() => {
        if(userdata.email && userdata.password){
            const result= await login(userdata)
            console.log(result);
            
            if(result.status==200)
            {
                sessionStorage.setItem('token',result.data.token)
                sessionStorage.setItem('userId',result.data.userId)
                sessionStorage.setItem('username',result.data.username)
                sessionStorage.setItem('email',result.data.email)
                navigate('/home')

              
            }
            else if(result.response.status==406)
            {
                Swal.fire({
                    icon:'error',
                    title:result.response.data,
                    showConfirmButton: false,
                    timer: 2000
                })
            }

            console.log(result);
            
        }
        
    }
    // control log/reg view
    const handlestatus = () => {
        setstatus(!status)
    }
    return (
        <>
            <div className='auth-main'>
                <div className='auth-main2 '>
                    {
                        status ?
                            <h1 className='text-center  lo-p'>Register</h1>
                            :
                            <h1 className='text-center lo-p'>Login</h1>
                    }
                    <div className='inp-auth mt-5'>
                        <div>

                            <input placeholder="Enter Your Email" onChange={(e) => { setuserdata({ ...userdata, email: e.target.value }) }} type="email" name="text" className="auth-input mb-2"></input>

                        </div>
                        <input placeholder="Enter Your Password" onChange={(e) => { setuserdata({ ...userdata, password: e.target.value }) }} type="password" name="text" className="auth-input mb-3"></input>
                        {
                            status &&
                            <input placeholder="Enter Your Username" onChange={(e) => { setuserdata({ ...userdata, username: e.target.value }) }} type="text" name="text" className="auth-input mb-3"></input>

                        }
                    </div>
                    <div className='btn-div'>
                        {
                            status ?
                                <button className=' auth-btn' onClick={handleregister} >Register</button>
                                :
                                <button className=' auth-btn' onClick={handlelogin} >login</button>
                        }

                        <p onClick={handlestatus} className='text-center mt-2 text-secondary'>{status ? <span className='text-primary'>Already Have Account</span> : <span className='text-white'> Not Registered ? <span className='text-primary'>Create An Account</span></span>}</p>
                    </div>



                </div>


            </div>


        </>
    )
}

export default Auth