import { Table } from 'react-bootstrap'
import adminfarm from '../assets/adminfarm.jpg'
import Footer from '../Components/Footer'
import HeaderBuyer from '../Components/HeaderBuyer'
import ProductCard from '../Components/ProductCard'
import { allConsumersAPI, allCropsAPI, allFarmersAPI, allOrdersAPI, deleteComplaintAPI, getComplaintsAPI, topFarmersAPI, topSoldCropsAPI } from '../Service/allAPI'
import { useContext, useEffect, useState } from 'react'
import { ResponseContext } from '../Context/ContextAPI'
import { toast } from 'react-toastify'

const AdminDashboard = () => {

  const [allCrops, setAllCrops] = useState([])
  const { searchKey } = useContext(ResponseContext)

  useEffect(() => {
    getAllCrops()
    getAllConsumers()
    getAllFarmers()
    getAllOrders()
    topSoldCrops()
    getTopFarmers()
    getAllComplaints()
  }, [searchKey])


  const getAllCrops = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await allCropsAPI(searchKey, reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setAllCrops(result.data)
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [allConsumers, setAllconsumers] = useState({})
  console.log(allConsumers);


  const getAllConsumers = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await allConsumersAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setAllconsumers(result.data)
        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [allFarmers, setAllFarmers] = useState({})
  console.log(allFarmers);


  const getAllFarmers = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await allFarmersAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setAllFarmers(result.data)
        }
        if (result.status == 401) {
          console.log(result.response.data);

        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [orders, setOrders] = useState([])
  console.log(orders);

  const getAllOrders = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
      try {
        const result = await allOrdersAPI(reqHeader)
        console.log(result);
        if (result.status == 200) {
          setOrders(result.data)
        }
        if (result.status == 401) {
          console.log(result.response.data);

        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [topCrops, setTopCrops] = useState({})
  console.log(topCrops);

  const topSoldCrops = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await topSoldCropsAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setTopCrops(result.data)
        }
        if (result.status == 401) {
          console.log(result.response.data);

        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [topFarmers,setTopFarmers] = useState([])
  console.log(topFarmers);
  
  const getTopFarmers = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await topFarmersAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setTopFarmers(result.data)
        }
        if (result.status == 401) {
          console.log(result.response.data);

        }
      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [requests,setRequests] = useState([])

  const getAllComplaints = async ()=>{
    const token = sessionStorage.getItem('token')

    if(token){
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try{
        const result = await getComplaintsAPI(reqHeader)
        // console.log(result);
        if(result.status == 200){
          setRequests(result.data)
        }
        if(result.status == 401){
          console.log(result.response.data);
          
        }
        
      }
      catch(err){
        console.log(err);
        
      }
    }
  }

  const deleteComplaint = async (id) =>{
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try{
        const result = await deleteComplaintAPI(id,reqHeader)
        console.log(result);
        if(result.status == 200){
          getAllComplaints()
          toast.success("User request processed successfully!")
        }
        if(result.status == 401){
          console.log(result.response.data);
          
        }
        
      }
      catch(err){
        console.log(err);
        
      }
    }
  }


  return (
    <>
      <div>
        <HeaderBuyer isadminDash />
        <div className='px-5 py-3'>
          <div className='px-5 py-2 d-flex justify-content-around align-items-center' style={{ backgroundImage: `url(${adminfarm})`, borderRadius: '40px' }}>
            <div>
              <h1 className='text-light'>Hello Asish</h1>
            </div>
            <div className='d-flex flex-column align-items-start py-2 gap-1'>
              <div className='py-2 px-3 text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '30px' }}><span>Total Consumers<span style={{ marginLeft: '140px' }}>{allConsumers?.length}</span></span></div>
              <div className='py-2 px-3 text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '30px' }}><span>Total Farmers<span style={{ marginLeft: '120px' }}>{allFarmers?.length}</span></span></div>
              <div className='py-2 px-3' style={{ backgroundColor: 'white', borderRadius: '30px' }}><span>Total Orders <span style={{ marginLeft: '60px' }}>{orders?.length}</span></span></div>
              <span className='text-light py-2 px-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '30px' }}>Total Payment</span>
              <span className='fs-4 text-light ps-2' style={{ fontWeight: '600' }}>&#8377; {orders.reduce((sum, order) => sum + order.totalPrice, 0)}</span>
            </div>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row p-5 d-flex justify-content-around align-items-start'>
            <div className='col-md-3 px-5 py-3 shadow' style={{ backgroundColor: 'white', borderRadius: '40px' }}>
              <span className='fs-2' style={{ fontWeight: '600' }}>Farmers</span>
              {allFarmers.length > 0 ?
                allFarmers.map((farmer, Index) => (
                  <div className='d-flex align-items-center justify-content-start gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                    <span className=''>{Index + 1}</span>
                    <span className=''>{farmer.username}</span>

                  </div>
                ))
                : <h4>No data found</h4>
              }


            </div>

            <div className='col-md-3 px-5 py-3 shadow text-center' style={{ backgroundColor: 'white', borderRadius: '40px' }}>
              <span className='fs-2' style={{ fontWeight: '600' }}>Buyers</span>
              {allConsumers.length > 0 ?
                allConsumers.map((consumer, Index) => (
                  <div className='d-flex align-items-center justify-content-start gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                    <span className=''>{Index + 1}</span>
                    <span className=''>{consumer.username}</span>

                  </div>
                ))
                : <h4>No data found</h4>
              }

            </div>
          </div>

          <div className='p-5'>
            <div className='d-flex justify-content-center align-items-center mb-3'>
              <h1 className='text-center me-3' style={{ fontWeight: '600' }}>Products</h1>
              <button className='text-secondary bg-transparent border-0'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
              {allCrops.length > 0 ?
                allCrops.slice(0, 5).map((crop, index) => (
                  <ProductCard key={index} crop={crop} isadminDash={true} />
                ))
                : <h1>No Crops found</h1>
              }
            </div>
          </div>

          <div className='row p-5 d-flex justify-content-around'>
            <div className='col-md-4'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>Top Products</span>
              </div>
              <div className='px-4 py-2' style={{ borderRadius: '30px', backgroundColor: "white", overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                {topCrops.length>0?
                <Table responsive="md" className='align-middle'>
                  <thead>
                    <tr>
                      <th>Sl.no</th>
                      <th>Item</th>
                      <th className='text-center'>Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCrops.slice(0, 3).map((crop,Index)=>(
                      <tr key={Index}>
                      <td className=' text-secondary'>{Index+1}</td>
                      <td className=' text-secondary'>{crop.crop}</td>
                      <td className=' text-secondary text-center'>{crop.totalOrders}</td>

                    </tr>
                    ))}
                    
                  </tbody>

                </Table>
                : <h6 className='text-secondary'>No records found at the moment !</h6>}
              </div>
            </div>
            <div className='col-md-4'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>Top Farmers</span>
              </div>
              <div className='px-4 py-2' style={{ borderRadius: '30px', backgroundColor: "white", overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <Table responsive="md" className='align-middle'>
                  <thead>
                    <tr>
                      <th>Sl.no</th>
                      <th>User</th>
                      <th>Sales</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topFarmers.slice(0,3).map((farmer,Index)=>(
                      <tr key={Index}>
                      <td className=' text-secondary'>{Index+1}</td>
                      <td className=' text-secondary'>{farmer.farmerName}</td>
                      <td className=' text-secondary'>{farmer.totalOrders}</td>
                    </tr>
                    ))}
                  </tbody>

                </Table>
              </div>
            </div>
            
          </div>
          <div className='pb-5 px-5 w-75'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>User requests</span>
              </div>
              <div className='px-4 py-2' style={{ borderRadius: '30px', backgroundColor: "white", overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
                <Table responsive="md" className='align-middle'>
                  <thead>
                    <tr>
                      <th>Sl.no</th>
                      <th>User</th>
                      <th>Role</th>
                      <th>Email</th>
                      <th>Request</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.length>0?
                    requests.map((request,Index)=>(
                      <tr key={Index}>
                      <td className=' text-secondary'>{Index+1}</td>
                      <td className=' text-secondary'>{request.username}</td>
                      <td className=' text-secondary'>{request.userRole}</td>
                      <td className=' text-secondary'>{request.email}</td>
                      <td className=' text-secondary'>{request.complaint}</td>
                      <td className=' text-secondary'><button onClick={()=>{deleteComplaint(request._id)}} className='btn bg-success text-light'>Done</button></td>
                    </tr>
                    ))
                  : <h3 className='text-secondary'>No User requests</h3> }
                    
                    
                  </tbody>

                </Table>
              </div>
            </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default AdminDashboard