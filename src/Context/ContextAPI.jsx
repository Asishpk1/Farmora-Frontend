import { createContext, useState } from "react";


export const ResponseContext = createContext()

import React from 'react'

const ContextAPI = ({children}) => {

    const [addcropResponse,setAddCropResponse] = useState({})
    const [addWishlistResponse,setAddWishlistResponse] = useState({})
    const [removeWishlistResponse,setRemoveWishlistResponse] = useState({})
    const [addCartResponse,setAddCartResponse] = useState({})
    const [deleteCartResponse,setDeleteCartResponse] = useState({})
  return (
    <>
    <ResponseContext.Provider value={{addcropResponse,setAddCropResponse,removeWishlistResponse,setRemoveWishlistResponse,addWishlistResponse,setAddWishlistResponse,addCartResponse,setAddCartResponse,deleteCartResponse,setDeleteCartResponse}}>
        {children}
    </ResponseContext.Provider>
    </>
  )
}

export default ContextAPI