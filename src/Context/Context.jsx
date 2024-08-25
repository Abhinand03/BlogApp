import React, {  createContext, useState } from 'react'

export const statusupdate=createContext()


function Context({children}) {
    const [status,setstatus]=useState(false)
  return (
   <>
   <statusupdate.Provider value={{status,setstatus}}>
    {
        children
    }
   </statusupdate.Provider>

   
   </>
  )
}

export default Context