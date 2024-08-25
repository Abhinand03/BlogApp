import React, { useEffect, useState } from 'react'
import { addcomment, deltcomment, getcomment } from '../Service/Allapi';
import './com.css'

function Comment({ items }) {

    const [comments, setcomments] = useState({
        blog_id: items._id, user_comment: "", user_id: sessionStorage.getItem('userId'), username: sessionStorage.getItem('username')
    })
    const [datas, setdatas] = useState([])
    const [status, setstatus] = useState(false)
    const userId = sessionStorage.getItem('userId')

    const handlesend = async () => {
        const result = await addcomment(comments)
        console.log(result);
        setcomments({ ...comments, user_comment: "" })
        setstatus(!status)

    }

    const getmessage = async (id) => {
        const result = await getcomment(id)
        console.log(result)
        if (result.status == 200) {
            setdatas(result.data)

        }


    }
    const handledelte=async(id)=>{
        const result=await deltcomment(id)
        setstatus(!status)

    }
    useEffect(() => {

        getmessage(items._id)
    }, [status])

    return (
        <>
            <div className='mt-5 p-2'>
                <h5 className='mb-5 ms-4'>{datas.length} ,Comments</h5>
                {
                    datas.map((comm) => (

                        <div className='com-main shadow mt-4'>
                            <h6 className='com-h6'><i class="fa-solid fa-user me-2 mt-2 "></i>@{comm.username}</h6>
                            <div className='d-flex justify-content-between'>
                                <p className='com-p'>{comm.comments}</p>
                                {
                                    userId == comm.user_id &&
                                    <div>
                                        <button onClick={()=>handledelte(comm._id)} className='btn'><i class="fa-solid fa-trash mx-4"></i></button>

                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }



                <div className='d-flex mt-4'>
                    <input type="text" value={comments.user_comment} onChange={(e) => { setcomments({ ...comments, user_comment: e.target.value }) }} className='form-control comm-inp' placeholder='Leave a Comment' name="" id="" />
                    <button className='btn btn-outline-success ms-3' onClick={handlesend}>Send</button>
                </div>

            </div>

        </>
    )
}

export default Comment