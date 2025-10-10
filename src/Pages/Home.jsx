import { Link, useNavigate } from 'react-router-dom'
import leaf from '../assets/leaf.png'
import farm from '../assets/farm.jpg'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import { homeCropsAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const Home = () => {

    const navigate = useNavigate()

    const [crops,setCrops] = useState([])
    console.log(crops);
    

    useEffect(() => {
      getHomeCrops()
    }, [])
    

    const getHomeCrops = async () =>{
        try{
            const result = await homeCropsAPI()
            console.log(result);
            if(result.status == 200){
                setCrops(result.data)
            }
            if(result.status==401){
                console.log(result.response.data);
                
            }
            
        }
        catch(err){
            console.log(err);
            
        }
    }

    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user);
    
    const handleAllCrops = async () =>{
        if(sessionStorage.getItem('token') && user.role == "Consumer" ){
            navigate('/products')
        }
        else{
            toast.warning("Please login as Consumer to see all our Crops")
            setTimeout(() => {
                navigate('/consumer-login')
            }, 2000);
        }
    }
    return (
        <>
            <div>
                <div>


                    <div className="d-flex justify-content-center">

                        <div className="px-5 gap-5 mt-4 pb-4" style={{ backgroundColor: 'white', width: '97%', borderRadius: '30px' }}>

                            {/* Navbar */}
                            <div className="d-flex align-items-center justify-content-center w-100">
                                <div className="d-flex align-items-center justify-content-between pb-2 px-5" style={{ width: '75%', backgroundColor: 'whitesmoke', borderBottomRightRadius: "25px", borderBottomLeftRadius: "25px" }}>
                                    <div>
                                        <span className="fs-4" style={{ color: 'rgba(61, 179, 101, 1)', fontWeight: '500' }}><i class="fa-solid fa-seedling"></i> Farmora </span>
                                    </div>
                                    <div className="gap-4 d-flex">
                                        <Link to={'/'} className='text-decoration-none text-dark'><span>Home</span></Link>
                                        <Link to={'/farmer-login'} className='text-decoration-none text-dark'><span>Farmer</span></Link>
                                        <Link to={'/consumer-login'} className='text-decoration-none text-dark'><span>Consumer</span></Link>
                                        <Link to={'/admin-login'} className='text-decoration-none text-dark'><span>Admin</span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-around align-items-center">
                                <div className='col-1'></div>
                                <div className="col-md-5 mt-5 pe-5">
                                    <h1 className="fw-bold" style={{ fontSize: '50px', color: 'rgba(61, 179, 101, 1)' }}>We Are <br /> Farmora <i class="fa-solid fa-seedling"></i></h1>
                                    <span className="fs-5" style={{ fontWeight: '500' }}>Shaping Agriculture, Because We Believe in the Future.</span> <br /> <br />
                                    <p style={{ textAlign: "justify" }}>At Farmora, the future of farming is digital, transparent, and farmer first. We bridge the gap between fields and tables, empowering farmers with tools, insights, and direct access to buyers. <br /> Fresh harvests, fair prices, and thriving communities. This is the future we’re growing.</p>
                                    <div className='row d-flex align-items-center w-75'>
                                        <div className='col-6 d-flex flex-column' style={{ color: 'rgba(61, 179, 101, 1)' }}>
                                            <span>Join our community</span>
                                            <span>We're waiting for you</span>
                                        </div>
                                        <div className='col-6 p-0'>
                                            <i className="fa-solid fa-people-robbery fa-2xl" style={{ color: 'rgba(61, 179, 101, 1)' }}></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-2 mt-5"> <img src={leaf} alt="" className='w-100' /></div>
                                <div className="col-md-4 mt-5">
                                    <img src="https://wallpapers.com/images/high/greenery-giant-moringa-b8653z9o7wrmyyp2.webp" alt="" className="w-75 shadow" style={{ borderTopRightRadius: '300px', borderTopLeftRadius: '300px', borderBottomLeftRadius: '300px', borderBottomRightRadius: '70px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '90px' }}>
                    <h2 className='text-center mt-5' style={{ fontWeight: '600' }}>Trusted by farmers, families, startups, and organizations worldwide.</h2>
                    <div className='d-flex justify-content-around align-items-center mt-4' style={{ color: 'grey' }}>
                        <span><i class="fa-solid fa-tractor"></i> Farmers & Growers</span>
                        <span><i class="fa-solid fa-city"></i> Urban Markets</span>
                        <span><i class="fa-solid fa-people-roof"></i> Government & Public Agencies</span>
                        <span><i class="fa-solid fa-building"></i> Private Companies & Startups</span>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center gap-4 p-5' style={{ marginTop: '100px', backgroundColor: 'white', height: '380px' }}>
                        <div className='col-3'>
                            <img src={farm} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '150px', borderBottomLeftRadius: '150px', borderBottomRightRadius: '150px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className='col-3'>
                            <h2>Our Story</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit facere, ullam commodi eligendi voluptatem tempora maiores magnam eos error animi labore molestias ratione beatae non, dolorum officia debitis blanditiis. Ex.</p>
                            <Link to={'/'}><button className='btn' style={{ backgroundColor: "rgba(61, 179, 101, 1)", borderRadius: '20px', color: 'white' }}>Learn more</button></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ marginTop: '170px' }} className='d-flex justify-content-center'>
                        <div className='text-center' style={{ width: '40%' }}>
                            <h2 style={{ fontWeight: '600' }}>Our Featured Products</h2>
                            <span style={{ fontSize: '14px', color: 'grey' }}>Discover our diverse collection of premium agricultural products, grown with care and dedication, ensuring freshness, sustainability, and unmatched quality for every customer.</span>
                        </div>
                    </div> <br />
                    <div className='d-flex justify-content-around align-items-center'>
                        {crops.length>0 ?
                        crops.map((crop,index)=>(
                            <ProductCard key={index} crop={crop} />
                        ))
                    :<div>No Crops Found</div>
                    }
                    </div>
                    <div className='text-center mt-5'>
                        <button onClick={handleAllCrops} className='border-0 bg-transparent' style={{ color: 'rgba(61, 179, 101, 1)' }}>See all products</button>
                    </div>
                </div>

                <div style={{ backgroundColor: 'white', marginTop: '80px' }} className='py-5 container-fluid '>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className="col-3">
                            <h2 style={{ fontWeight: '600' }}>A Community of Farmers</h2>
                            <span style={{ color: 'grey' }}>Join thousands of farmers who already trust us.</span> <br /> <br />
                            <Link to={'/farmer-login'}>
                            <button className='btn text-light py-1 px-4 shadow' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderTopLeftRadius: '2px', borderBottomLeftRadius: '25px', borderBottomRightRadius: '20px', borderTopRightRadius: '20px' }}>Login</button>
                            </Link>
                        </div>
                        <div className="col-2 p-0">
                            <img src={farm} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '150px', borderBottomRightRadius: '10px', borderTopRightRadius: '150px' }} />
                        </div>
                        <div className="col-2 p-0">
                            <img src={farm} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '150px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '150px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className="col-3">
                            <h2 style={{ fontWeight: '600' }}>Thousands of people trust our Agricultural products</h2>
                            <span style={{ color: 'grey' }}>Join the amazing Farming that we provide for you and just you</span> <br /> <br />
                            <Link to={'/consumer-login'}>
                            <button className='btn text-light py-1 px-4 shadow' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '25px', borderTopRightRadius: '2px' }}>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '80px' }}>
                    <h2 className='text-center' style={{ fontWeight: '600' }}>What We Offer</h2>
                    <p className='text-center' style={{ color: 'grey' }}>
                        From crops to markets, we empower farmers and buyers with smart tools, <br /> trusted insights, and seamless connections.
                    </p>
                    <div className='container-fluid py-5' style={{ backgroundColor: 'white' }}>
                        <div className='row d-flex justify-content-center align-items-center gap-5'>
                            <div className='col-4'>
                                <h5 className='m-0 fs-3'><span className='fw-bold' style={{ color: "rgba(61, 179, 101, 1)" }}>1 .</span> Farmer to Buyer Direct Deals</h5>
                                <span className='ms-4 ps-2' style={{ color: 'gray' }}>No middlemen, just fair trade.</span>
                                <h5 className='mt-4 m-0 fs-3'><span className='fw-bold' style={{ color: "rgba(61, 179, 101, 1)" }}>2 .</span> Smart Crop Care</h5>
                                <span className='ms-4 ps-3' style={{ color: 'gray' }}>Weather alerts and reminders for healthier harvests.</span>
                                <h5 className='mt-4 m-0 fs-3'><span className='fw-bold' style={{ color: "rgba(61, 179, 101, 1)" }}>3 .</span> Powerful Insights</h5>
                                <span className='ms-4 ps-3' style={{ color: 'gray' }}>Live data on weather, demand, and price trends.</span>
                                <h5 className='mt-4 m-0 fs-3'><span className='fw-bold' style={{ color: "rgba(61, 179, 101, 1)" }}>4 .</span> Seamless Buying Experience</h5>
                                <span className='ms-4 ps-3' style={{ color: 'gray' }}>Easy search, compare, and order from trusted farmers.</span>
                                <h5 className='mt-4 m-0 fs-3'><span className='fw-bold' style={{ color: "rgba(61, 179, 101, 1)" }}>5 .</span> Trusted & Transparent Network</h5>
                                <span className='ms-4 ps-3' style={{ color: 'gray' }}>Transparent platform with dispute resolution for all.</span>
                            </div>
                            <div className='col-3'>
                                <img src={farm} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '55px', borderBottomLeftRadius: '55px', borderBottomRightRadius: '55px', borderTopRightRadius: '200px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center' style={{ marginTop: '120px' }}>
                    <div style={{ width: '95%', height: '500px', backgroundImage: "url('https://c0.wallpaperflare.com/path/575/928/850/aerial-aerial-shot-aerial-view-bird-s-eye-view-4cdb5d2478a55666448bb90eae22b861.jpg')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "30px", color: 'white',gap:'300px' }} className='d-flex justify-content-around align-items-center mb-5'>
                        <div className='mb-5'>
                            <h2 className='mb-4' style={{fontWeight:'600'}}>Get information about us</h2>
                            <span>What are you Looking for</span>
                            <div className='position-relative mt-5'>
                                <input type="text" className="form-control position-absolute" placeholder="Email" id="inputDefault" fdprocessedid="v099u8" style={{ borderRadius: '30px', padding:'10px 20px', fontSize:'13px',height:'46px'  }} />
                                <button className='btn text-light position-absolute' style={{ backgroundColor: "rgba(61, 179, 101, 1)", right: '0', borderRadius: '30px', padding:'10px 20px', fontSize:'12px',height:'46px' }}>Submit</button>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center gap-3'>
                            <div style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-facebook-f"></i></div>
                            <div style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-instagram"></i></div>
                            <div style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-linkedin-in"></i></div>
                            <div style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-github"></i></div>
                            <div style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-twitter"></i></div>
                        </div>

                    </div>
                </div>
            <Footer/>
            </div>
        </>
    )
}

export default Home