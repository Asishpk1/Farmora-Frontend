import { createContext, useState } from "react";


export const ResponseContext = createContext()

import React from 'react'

const ContextAPI = ({children}) => {

    const [addcropResponse,setAddCropResponse] = useState({})
    const [addWishlistResponse,setAddWishlistResponse] = useState({})
    const [removeWishlistResponse,setRemoveWishlistResponse] = useState({})
    const [addCartResponse,setAddCartResponse] = useState({})
    const [deleteCartResponse,setDeleteCartResponse] = useState({})
    const [deleteCropResponse,setDeleteCropResponse] = useState({})
    const [searchKey,setSearchKey] = useState([])
    const [isAuthorized,setIsAuthorized] = useState(sessionStorage.getItem('token'))
    const [isRole,setIsRole] = useState(JSON.parse(sessionStorage.getItem('user')))

  return (
    <>
    <ResponseContext.Provider value={{addcropResponse,setAddCropResponse,removeWishlistResponse,setRemoveWishlistResponse,addWishlistResponse,setAddWishlistResponse,addCartResponse,setAddCartResponse,deleteCartResponse,setDeleteCartResponse,deleteCropResponse,setDeleteCropResponse,searchKey,setSearchKey,isAuthorized,setIsAuthorized,isRole,setIsRole}}>
        {children}
    </ResponseContext.Provider>
    </>
  )
}

export default ContextAPI