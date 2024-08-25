import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { blogedit } from '../Service/Allapi';
import {statusupdate } from '../Context/Context';

function Edit({items}) {
    const [show, setShow] = useState(false);

    const [upblog,setupblog]=useState({
      heading:items.heading,content:items.content,blog_id:items._id
    })
     const {status,setstatus}=useContext(statusupdate)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleedit=async()=>{

      const result=await blogedit(upblog)
      console.log(result);
      setstatus(!status)
      setShow(false)
    }
    
  return (
    <>
    <button className='btn' onClick={handleShow}>
    <i class="fa-solid fa-pen-to-square text-primary"></i>
       
     </button>

     <Modal
       show={show}
       onHide={handleClose}
       backdrop="static"
       keyboard={false}
     >
       <Modal.Header closeButton>
         <Modal.Title>Edit Your Blog</Modal.Title>
       </Modal.Header>
       <Modal.Body>
       <div className=''>
            <FloatingLabel controlId="floatingPassword" label="Heading">
              <Form.Control value={upblog.heading} type="text" onChange={(e)=>{setupblog({...upblog,heading:e.target.value})}} placeholder="Heading" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" className='mt-2' label="Edit your Blog Details">
              <Form.Control as="textarea"  style={{ height: '250px' }} value={upblog.content} onChange={(e)=>{setupblog({...upblog,content:e.target.value})}} />
            </FloatingLabel>

          </div>
          
       </Modal.Body>
       <Modal.Footer>
         <button className='btn btn-danger' onClick={handleClose}>
           Close
         </button>
         <button className='btn btn-primary' onClick={handleedit}>Update</button>
       </Modal.Footer>
     </Modal>
   </>
  )
}

export default Edit