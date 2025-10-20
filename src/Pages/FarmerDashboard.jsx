import { Table } from 'react-bootstrap'
import pots from '../assets/pots.png'
import cloudy from '../assets/cloudy.png'
import weatherdemo from '../assets/weather1.png'
import ProductCard from '../Components/ProductCard'
import HeaderFarmer from '../Components/HeaderFarmer'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { addReminderAPI, deleteReminderAPI, farmerOrdersAPI, getReminderAPI, topSoldCropsAPI, userCropsAPI } from '../Service/allAPI'
import { ResponseContext } from '../Context/ContextAPI'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify'

const FarmerDashboard = () => {

  const user = JSON.parse(sessionStorage.getItem('user'))
  // console.log(user);

  const [userCrops, setUserCrops] = useState([])
  // console.log(userCrops);

  const { addcropResponse } = useContext(ResponseContext)

  useEffect(() => {
    getUserCrops()
  }, [addcropResponse])


  const getUserCrops = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await userCropsAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setUserCrops(result.data)
        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const [weather, setWeather] = useState(null);
  // console.log(weather);

  const [dailyForecast, setDailyForecast] = useState([]);
  // console.log(dailyForecast);


  useEffect(() => {
    fetchWeather()
  }, [])


  const fetchWeather = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'))
      const city = user.place

      // Current weather
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5b4bee0ba241d092159faf007e166080`
      );
      const data = await res.json();
      setWeather(data);

      // 5-day forecast (3-hour intervals)
      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=5b4bee0ba241d092159faf007e166080`
      );
      const forecastData = await resForecast.json();

      // Grouping by date → pick 12:00:00 entry
      const dailyMap = {};
      forecastData.list.forEach(slot => {
        const [date, time] = slot.dt_txt.split(" ");
        if (time === "12:00:00" && !dailyMap[date]) {
          dailyMap[date] = slot;
        }
      });

      //Converting to array & limit to 5 days
      const dailyArray = Object.values(dailyMap).slice(0, 4);
      setDailyForecast(dailyArray);

    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  }

  const [show, setShow] = useState(false);
  const [reminderDetails, setReminderDetails] = useState({ note: "", date: "" })
  // console.log(reminderDetails);

  const [userReminders, setUserReminders] = useState([])
  // console.log(userReminders);


  const handleClose = () => {
    setShow(false)
    setReminderDetails({ note: "", date: "" })
  }
  const handleShow = () => setShow(true);

  const addReminder = async () => {
    const { note, date } = reminderDetails

    if (note && date) {
      //reqHeader
      const token = sessionStorage.getItem('token')
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        }
        try {
          const result = await addReminderAPI(reminderDetails, reqHeader)
          // console.log(result);
          if (result.status == 200) {
            toast.success("Reminder added")
            handleClose()
            getReminders()

          }
          if (result.status == 401) {
            toast.error(result.response.data)
            handleClose
          }

        }
        catch (err) {
          console.log(err);

        }
      }
    }
    else {
      toast.error("Enter all fields")
    }
  }

  useEffect(() => {
    getReminders()
  }, [])


  const getReminders = async () => {
    const token = sessionStorage.getItem('token')

    if (token) {
      //reqHeader
      const reqHeader = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await getReminderAPI(reqHeader)
        // console.log(result);
        if (result.status == 200) {
          setUserReminders(result.data)
        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  const deleteReminder = async (id) => {

    const token = sessionStorage.getItem('token')

    if (token) {
      //reqHeader
      const reqHeader = {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`
      }

      try {
        const result = await deleteReminderAPI(id, reqHeader)
        // console.log(result);
        if (result.status == 200) {
          toast.success("Reminder marked as Done")
          getReminders()
        }
        if (result.status == 401) {
          toast.error(result.response.data)
        }

      }
      catch (err) {
        console.log(err);

      }
    }

  }

  const [orders, setOrders] = useState([])
  useEffect(() => {
    getFarmerOrders()
  }, [])


  const getFarmerOrders = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
      try {
        const result = await farmerOrdersAPI(reqHeader)
        // console.log(result);
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

  const [topCrops,setTopCrops] = useState({})
  console.log(topCrops);
  

  useEffect(() => {
    topSoldCrops()
  }, [])
  

  const topSoldCrops = async () =>{
    const token = sessionStorage.getItem('token')

    if(token){
      const reqHeader ={
        "content-type" : "application/json",
        "authorization" : `Bearer ${token}`
      }

      try{
        const result = await topSoldCropsAPI(reqHeader)
        // console.log(result);
        if(result.status == 200){
          setTopCrops(result.data)
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
      <div className='container-fluid'>
        <div className='row'>
          <HeaderFarmer />
          <div className='col-md-7 col-11 pt-4'>
            <h2 style={{color:'rgba(61, 179, 101, 1)'}}>Welcome {user?.username.split(" ")[0]} </h2>
            <div className='d-flex flex-wrap justify-content-between align-items-center row my-4' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', color: 'white', borderRadius: '80px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',padding:'35px 30px'}}>
              <div className='col-12 d-flex justify-content-between align-items-center' >
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>My Stats</span>
                <div>
                  <span>Total Orders : <span>{orders.length}</span> </span> <br />
                  <Link to={'/myOrders'}><button className='bg-transparent border-0 text-start p-0 text-light'>Go to my orders <i class="fa-solid fa-arrow-right-long"></i></button></Link>
                </div>
                <div>
                  <span>Crops : </span>
                {userCrops.length>0 &&
                  userCrops.map((crop,Index)=>(
                    <span key={Index}>{crop.name}, </span>
                  ))}
                </div>
              </div>

            </div>

            <div className='mb-4'>
              <div className='d-flex justify-content-between align-items-center mb-3 pt-4'>
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>My Listings</span>
                <Link to={'/mycrops'} className='text-decoration-none'><span className='text-secondary'>View all <i class="fa-solid fa-arrow-right"></i></span></Link>
              </div>
              <div className='d-flex justify-content-around align-items-center'
              >
                {userCrops.length > 0 ?
                  [...userCrops].reverse().slice(0, 3).map((crop, index) => (
                    <ProductCard key={index} crop={crop} isFarmerDashboard={true} />
                  ))
                  : <h1 style={{ color: 'rgba(61, 179, 101, 1)' }}>No Crops Found</h1>}
              </div>
            </div>
            <div className='mb-5'>
              <div className='d-flex justify-content-between align-items-center mb-4 pt-4'>
                <div>
                  <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>Reminders</span>
                  <button onClick={handleShow} className='btn rounded-pill btn-sm ms-2 ' style={{backgroundColor:'rgba(61, 179, 101, 1)'}}><i className="fa-solid fa-plus text-light"></i></button>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Add Reminder</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input value={reminderDetails.note} onChange={(e) => setReminderDetails({ ...reminderDetails, note: e.target.value })} type="text" className='form-control mb-3' placeholder='Reminder note' />
                      <input value={reminderDetails.date} onChange={(e) => setReminderDetails({ ...reminderDetails, date: e.target.value })} type="date" className='form-control' />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button className='border-0' variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button onClick={addReminder} className='border-0' style={{ backgroundColor: 'rgba(61, 179, 101, 1)' }}>Add</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className='px-4 py-2' style={{ backgroundColor: 'white', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',border:'4px solid rgba(61, 179, 101, 1)' }}>
                {userReminders.length > 0 ?
                <Table responsive="md" className='text-center'>
                  <thead>
                    <tr>
                      <th>Sl.no</th>
                      <th>Note</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                      {userReminders.map((reminder, index) => (
                        <tr key={index}>
                          <td className=' text-secondary'>{index + 1}</td>
                          <td className=' text-secondary'>{reminder.note}</td>
                          <td className=' text-secondary'>{reminder.date.split("-").reverse().join("-")}</td>
                          <td className=' text-secondary'><button onClick={() => deleteReminder(reminder._id)} className='btn btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)' }}>Done</button></td>
                        </tr>
                      ))}
                      
                    

                  </tbody>
                </Table>
                : <h3>No Reminders Found</h3>}
              </div>

            </div>
          </div>

          <div className='col-4 px-5 py-4 mt-2'>
            <div className=' d-flex align-items-center justify-content-between mb-3'>
              <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>Weather Forecast</span>
              <Link to={'/weather'} className='text-decoration-none'><span className='text-secondary'>Open Weather <i class="fa-solid fa-arrow-right"></i></span></Link>
            </div>

            <div className='row px-4 py-3 mt-1 shadow' style={{  borderRadius: '70px', color: 'rgba(61, 179, 101, 1)',border:'4px solid rgba(61, 179, 101, 1)',backgroundColor:'rgba(219, 239, 226, 1)' }}>
              <div className='col-9 d-flex gap-3 align-items-center'>
                <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" className='w-25' />
                <div className='d-flex flex-column justify-content-around align-items-center'>
                  <span>Today</span>
                  <span className='fs-4'>{weather && `${Math.round(weather.main.temp)}`}&deg;</span>
                  <span>{weather?.weather[0].main}</span>
                </div>
              </div>
              <div className='col-3'>
                <img src={weatherdemo} alt="" className='w-100' />
              </div>
            </div>

            <div className='mt-4 mb-4 d-flex flex-wrap gap-3 justify-content-between'>
              {dailyForecast.map((day, index) => (
                <div key={index} className='d-flex flex-column' style={{ backgroundColor: 'rgba(219, 239, 226, 1)', borderRadius: '40px', padding: '8px 52px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',border:'4px solid rgba(61, 179, 101, 1)' }}>
                  <span className='text-secondary' style={{ fontSize: '13px' }}>{new Date(day.dt_txt ? day.dt_txt : day.dt * 1000).toLocaleDateString([], { day: 'numeric', month: 'short' })}</span>
                  <span className='fs-3'>{Math.round(day.main.temp)}°C </span>
                  <span className='text-secondary' style={{ fontSize: '13px' }}>{weather?.weather[0].main}</span>
                </div>
              ))}

            </div>

            <div className='pt-3'>
              <div className='d-flex justify-content-between align-items-center mb-3'>
                <span style={{ fontWeight: '600', fontSize: '23px', letterSpacing: '1px' }}>Top Sellers</span>
              </div>
              <div className='px-4 py-2' style={{ borderRadius: '30px', backgroundColor: "white", overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',border:'4px solid rgba(61, 179, 101, 1)' }}>
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

          </div>
        </div>
      </div>
    </>
  )
}

export default FarmerDashboard