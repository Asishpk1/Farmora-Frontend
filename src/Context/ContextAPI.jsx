import { createContext, useState } from "react";


export const ResponseContext = createContext()

import React from 'react'

const ContextAPI = ({children}) => {

    const [addcropResponse,setAddCropResponse] = useState({})
    const [addWishlistResponse,setAddWishlistResponse] = useState({})
    const [removeWishlistResponse,setRemoveWishlistResponse] = useState({})
  return (
    <>
    <ResponseContext.Provider value={{addcropResponse,setAddCropResponse,removeWishlistResponse,setRemoveWishlistResponse,addWishlistResponse,setAddWishlistResponse}}>
        {children}
    </ResponseContext.Provider>
    </>
  )
}

export default ContextAPI