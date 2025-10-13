import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import HeaderFarmer from '../Components/HeaderFarmer'
import ProductCard from '../Components/ProductCard'
import AddCrop from '../assets/leafAdd.png'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCropAPI, userCropsAPI } from '../Service/allAPI';
import { toast } from 'react-toastify';
import { ResponseContext } from '../Context/ContextAPI';

const MyCrops = () => {

    const [show, setShow] = useState(false);

    const [cropDetails,setCropDetails] = useState({cropName:'',price:"",description:'',quantity:"",cropImage:""})
    console.log(cropDetails);

    const [userCrops,setUserCrops] = useState([])
    // console.log(userCrops);
    

    const [invalidFile,setInvalidFile] = useState(false)

    const [Preview,setPreview] = useState(AddCrop)

    const {setAddCropResponse,deleteCropResponse} = useContext(ResponseContext)

    const handleClose = () =>{
    setShow(false);
    setInvalidFile(false)
    setPreview(AddCrop)
    setCropDetails({cropName:'',price:"",description:'',quantity:"",cropImage:""})
    }    
    
    const handleShow = () => setShow(true);

    useEffect(() => {
      if(cropDetails.cropImage){
        if(cropDetails.cropImage.type=="image/jpg" || cropDetails.cropImage.type=="image/jpeg" || cropDetails.cropImage.type=="image/png"){
            setInvalidFile(false)
            setPreview(URL.createObjectURL(cropDetails.cropImage))

        }
        else{
            setInvalidFile(true)
            setCropDetails({...cropDetails,cropImage:""})
            setPreview(AddCrop)
        }
      }
    }, [cropDetails.cropImage])

    const handleUpload = async () => {
        const {cropName,price,description,quantity,cropImage} = cropDetails

        if(cropName && price && description && quantity && cropImage){
            //reqBody
            const reqBody = new FormData
            reqBody.append("name",cropName)
            reqBody.append("price",price)
            reqBody.append("description",description)
            reqBody.append("quantity",quantity)
            reqBody.append("cropImage",cropImage)

            //reqHeader
            const token =  sessionStorage.getItem('token')
            if(token){
                const reqHeader = {
                    "content-type":"multipart/formdata",
                    "authorization" : `Bearer ${token}`
                }
                try{
                    const result = await addCropAPI(reqBody,reqHeader)
                    console.log(result);
                    if(result.status == 200){
                        toast.success(`${result.data.name} added`)
                        handleClose()
                        getUserCrops()
                        setAddCropResponse(result)
                    }
                    if(result.status == 406){
                        toast.error(result.response.data)
                        handleClose()
                    }
                }
                catch(err){
                    console.log(err);
                    
                }
            }
        }
        else{
            toast.warning("Enter all fields")
        }
    }

    useEffect(() => {
      getUserCrops()
    }, [deleteCropResponse])
    

    const getUserCrops = async () =>{
        const token = sessionStorage.getItem('token')

        if(token){
            const reqHeader={
                "content-type":"application/json",
                "authorization":`Bearer ${token}`
            }

            try{
                const result = await userCropsAPI(reqHeader)
                console.log(result);
                if(result.status == 200){
                    setUserCrops(result.data)
                }
                
            }
            catch(err){
                console.log(err);
                
            }
        }
    }

    
    
    
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <HeaderFarmer />

                    <div className='col-10 py-5'>
                        <h1 className='text-center mb-4' style={{ fontWeight: '600', color: 'rgba(61, 179, 101, 1)' }}>Crops</h1>
                        <div className='d-flex justify-content-center'>
                            <button onClick={handleShow} className='btn px-4 py-2' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', color: 'white', borderRadius: '40px' }}>Add new crop</button>
                            <Modal show={show} onHide={handleClose} size="lg" backdrop="static">
                                <Modal.Header closeButton>
                                    <Modal.Title style={{ color: 'rgba(61, 179, 101, 1)' }} className='fs-3'>Add New Crop</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className='row p-3 d-flex align-items-center'>
                                        <div className='col-4'>
                                            <label>
                                                <img src={Preview} alt="" className='w-100' />
                                                <input onChange={(e)=>setCropDetails({...cropDetails,cropImage:e.target.files[0]})} type="file" className='d-none' />
                                            </label>
                                            {invalidFile && <span className='text-danger'>*Upload only jpg/jpeg/png files</span>}
                                        </div>
                                        <div className='col-8'>
                                            <FloatingLabel
                                                controlId="floatingInput1"
                                                label="Crop name"
                                                className="mb-3"
                                            >
                                                <Form.Control value={cropDetails.cropName} onChange={(e)=>setCropDetails({...cropDetails,cropName:e.target.value})} type="text" placeholder="Crop name" />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="floatingInput2"
                                                label="Price"
                                                className="mb-3"
                                            >
                                                <Form.Control value={cropDetails.price} onChange={(e)=>setCropDetails({...cropDetails,price:e.target.value})} type="text" placeholder="Price" />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="floatingInput3"
                                                label="Description"
                                                className="mb-3"
                                            >
                                                <Form.Control value={cropDetails.description} onChange={(e)=>setCropDetails({...cropDetails,description:e.target.value})} type="text" placeholder="Description" />
                                            </FloatingLabel>
                                            <FloatingLabel
                                                controlId="floatingInput4"
                                                label="Quantity"
                                                className="mb-3"
                                            >
                                                <Form.Control value={cropDetails.quantity} onChange={(e)=>setCropDetails({...cropDetails,quantity:e.target.value})} type="text" placeholder="Description" />
                                                
                                            </FloatingLabel>
                                            
                                            
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button className='border-0' variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button className='border-0' style={{backgroundColor:'rgba(61, 179, 101, 1)'}} onClick={handleUpload}>
                                        Add Crop
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                        <div className="d-flex justify-content-center gap-5 flex-wrap mt-5 pb-5">
                            {userCrops.length>0?
                            [...userCrops].reverse().map((crop,index)=>(
                                <ProductCard key={index} crop={crop} isMyCrops={true} />
                            ))
                        : <h1>No Crops Found</h1> }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyCrops