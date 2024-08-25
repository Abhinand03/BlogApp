import React, { useState } from 'react'
import './blog.css'
import { Link } from 'react-router-dom'

function Blogs({ items }) {


    const [cont, setcont] = useState(items.content)
    const splitcont = cont.split(' ')
    const newcont = splitcont.splice(0, 6).join(' ')

    // Date and time spliting
    const times = new Date(items.time)
    const posttdate = times.toDateString()
    const posttime = times.toTimeString()
    const time3 = posttime.split(' ')

    return (
        <>

            <div className='mt-4'>
                <div className='blog-cont ms-2'>
                    <div >
                        <p className='username'><i className="fa-solid fa-user me-2"></i>{items.username}</p>
                        <div className='datediv'>

                            <p className='postdate'>{posttdate}</p>
                            <p className='posttime'>{time3[0]}</p>
                        </div>
                    </div>
                    <div className='cont-div'>
                        <h2>{items.heading}</h2>
                        <p>{newcont}.... <Link to={'/blogs'} state={{items}}>See more</Link></p>
                        <hr className='mt-5'/>
                        <Link to={'/blogs'} state={{items}} className='p-1 '><i class="fa-regular fa-comment me-2"></i></Link>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Blogs