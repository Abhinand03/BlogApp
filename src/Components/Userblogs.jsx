import React, { useContext } from 'react'
import Edit from './Edit'
import { useState } from 'react'
import { deleteblog } from '../Service/Allapi'
import { statusupdate } from '../Context/Context'
import { Link } from 'react-router-dom'
import './user.css'

function Userblogs({ items }) {



    const [cont, setcont] = useState(items.content)

    const{status,setstatus}=useContext(statusupdate)

    // content split 
    const splitcont = cont.split(' ')
    const newcont = splitcont.splice(0, 4).join(' ')

    // date splite 
    const times = new Date(items.time)
    const posttdate = times.toDateString()
    const posttime = times.toTimeString()
    const time3 = posttime.split(' ')

    const handledelt=async(id)=>{
        const result = await deleteblog(id)
        setstatus(!status)


    }


    return (
        <>
            <div className='d-flex justify-content-between bg-warning p-2 mt-4 text-whit shadow align-items-center rounded' style={{height:"100px"}}>
                <div className='mt-5'>

                    <p className='user-p2'>{posttdate}</p>
                    <p className='mb-5 user-p' >{time3[0]}</p>
                </div>
                <div>

                <h5>{items.heading}</h5>
                <p>{newcont}</p>
                </div>
                <div className='blog-modi'>
                    <Link className='btn' to={'/blogs'} state={{items}}><i class="fa-regular fa-eye"></i></Link>
                
                    <Edit items={items} />
                    <button className='btn' onClick={()=>{handledelt(items._id)}}><i class="fa-solid fa-trash text-danger"></i></button>
                </div>
            </div>

        </>
    )
}

export default Userblogs