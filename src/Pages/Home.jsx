import { Link, useNavigate } from 'react-router-dom'
import leaf from '../assets/leaf.png'
import farm from '../assets/farm.jpg'
import farm1 from '../assets/field.jpg'
import farmers from '../assets/Farmers.jpg'
import farmProd from '../assets/farmprod.jpg'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import { useEffect, useState } from 'react'
import { homeCropsAPI, RegisterComplaintAPI } from '../Service/allAPI'
import { toast } from 'react-toastify'

const Home = () => {

    const navigate = useNavigate()

    const [crops, setCrops] = useState([])
    console.log(crops);


    useEffect(() => {
        getHomeCrops()
    }, [])


    const getHomeCrops = async () => {
        try {
            const result = await homeCropsAPI()
            console.log(result);
            if (result.status == 200) {
                setCrops(result.data)
            }
            if (result.status == 401) {
                console.log(result.response.data);

            }

        }
        catch (err) {
            console.log(err);

        }
    }

    const user = JSON.parse(sessionStorage.getItem('user'))
    console.log(user);

    const handleAllCrops = async () => {
        if (sessionStorage.getItem('token') && user.role == "Consumer") {
            navigate('/products')
        }
        else {
            toast.warning("Please login as Consumer to see all our Crops")
            setTimeout(() => {
                navigate('/consumer-login')
            }, 2000);
        }
    }

    const [issueInput, setIssueInput] = useState("")
    console.log(issueInput);

    const handleComplaint = async () => {
        const token = sessionStorage.getItem('token')
        const user = JSON.parse(sessionStorage.getItem('user'))

        if (token) {
            const reqHeader = {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            }

            try {
                const result = await RegisterComplaintAPI({ user, issueInput }, reqHeader)
                console.log(result);
                if (result.status == 200) {
                    setIssueInput("")
                    toast.success("Your issue has been recorded successfully")
                }
                if (result.status == 401) {
                    console.log(result.response.data);

                }

            }
            catch (err) {
                console.log(err);

            }
        }
        else {
            toast.warning("Sign in to register a complaint")
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
                                <div className="d-flex align-items-center justify-content-between pb-2 px-5 nav-bar" style={{ width: '75%', backgroundColor: 'whitesmoke', borderBottomRightRadius: "25px", borderBottomLeftRadius: "25px" }}>
                                    <div>
                                        <span className="nav-brand" style={{ color: 'rgba(61, 179, 101, 1)', fontWeight: '500',fontSize:'21px' }}><i class="fa-solid fa-seedling"></i> Farmora </span>
                                    </div>
                                    <div className="gap-4 d-flex flex-wrap">
                                        <Link to={'/farmer-login'} className='text-decoration-none text-secondary displayNone'><span>Farmer</span></Link>
                                        <Link to={'/consumer-login'} className='text-decoration-none text-secondary displayNone'><span>Consumer</span></Link>
                                        <Link to={'/admin-login'} className='text-decoration-none text-secondary nav-links'><span>Admin</span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-around align-items-center">
                                <div className='col-1'></div>
                                <div className="col-md-5 mt-5">
                                    <h1 className="fw-bold home-head" style={{ fontSize: '50px', color: 'rgba(61, 179, 101, 1)' }}>We Are Farmora <i class="fa-solid fa-seedling"></i></h1>
                                    <h6 className="home-head2 p-0 m-0 text-secondary" style={{ fontWeight: '500',fontSize:'20px' }}>Shaping Agriculture, Because We Believe in the Future.</h6> <br /> <br />
                                    <p className='home-description' style={{ textAlign: "justify",marginTop:'-18px' }}>At Farmora, the future of farming is digital, transparent, and farmer first. We bridge the gap between fields and tables, empowering farmers with tools, insights, and direct access to buyers. <br /> Fresh harvests, fair prices, and thriving communities. This is the future we’re growing.</p>
                                    <div className='row d-flex align-items-center  home-community'>
                                        <div className='col-md-4 col-5 d-flex flex-column' style={{ color: 'rgba(61, 179, 101, 1)' }}>
                                            <span className='home-description2'>Join our community</span>
                                            <span className='home-description2'>We're waiting for you</span>
                                        </div>
                                        <div className='col-md-1 col-2 p-0'>
                                            <i className="fa-solid fa-people-robbery fa-2xl" style={{ color: 'rgba(61, 179, 101, 1)' }}></i>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-2 mt-5 displayNone"> <img src={leaf} alt="" className='w-100' /></div>
                                <div className="col-md-4 mt-5 displayNone">
                                    <img src="https://wallpapers.com/images/high/greenery-giant-moringa-b8653z9o7wrmyyp2.webp" alt="" className="w-75 shadow" style={{ borderTopRightRadius: '300px', borderTopLeftRadius: '300px', borderBottomLeftRadius: '300px', borderBottomRightRadius: '70px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='orgs' style={{ marginTop: '90px' }}>
                    <h2 className='text-center mt-md-5 mt-4 trusted' style={{ color: "rgba(61, 179, 101, 1)",fontWeight:'600' }}>Trusted by farmers, families, startups, and organizations worldwide.</h2>
                    <div className='d-flex justify-content-around align-items-center mt-4' style={{ color: 'grey' }}>
                        <span className='orgs-list ms-3 ms-md-0'><i class="fa-solid fa-tractor"></i> Farmers & Growers</span>
                        <span className='orgs-list'><i class="fa-solid fa-city"></i> Urban Markets</span>
                        <span className='orgs-list'><i class="fa-solid fa-people-roof"></i> Government & Public Agencies</span>
                        <span className='orgs-list'><i class="fa-solid fa-building"></i> Private Companies & Startups</span>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row d-flex justify-content-md-center justify-content-between gap-md-4 p-md-5 p-3 story-section' style={{ marginTop: '100px', backgroundColor: 'white', height: '400px' }}>
                        <div className='col-md-3 col-6'>
                            <img src={farm} alt="" className='shadow' style={{ width: '95%', borderTopLeftRadius: '150px', borderBottomLeftRadius: '150px', borderBottomRightRadius: '150px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className='col-md-3 col-6'>
                            <h2 className='trusted' style={{ color: "rgba(61, 179, 101, 1)",fontWeight:'600' }}>Our Story</h2>
                            <p className='text-secondary story-description'>Farmora began with a simple realization, while markets were getting smarter, farmers were still left disconnected. They cultivated with dedication but faced unfair prices and no digital presence.
                                To change this, Farmora was created as a smart bridge, bringing farmers and buyers together in a transparent, fair, and tech-driven marketplace.</p>
                            <Link className='displayNone' to={'/'}><button className='btn' style={{ backgroundColor: "rgba(61, 179, 101, 1)", borderRadius: '20px', color: 'white' }}>Learn more</button></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div style={{ marginTop: '170px' }} className='d-flex justify-content-center featured'>
                        <div className='text-center home-products-div' style={{ width: '50%' }}>
                            <h2 className='trusted' style={{ color: "rgba(61, 179, 101, 1)",fontWeight:'600' }}>Our Featured Products</h2>
                            <span className='home-products' style={{ fontSize: '14px', color: 'grey' }}>Discover our diverse collection of premium agricultural products, grown with care and dedication, ensuring freshness, sustainability, and unmatched quality for every customer.</span>
                        </div>
                    </div> <br />
                    <div className='d-flex flex-wrap justify-content-around align-items-center gap-2'>
                        {crops.length > 0 ?
                            crops.map((crop, index) => (
                                <ProductCard key={index} crop={crop} />
                            ))
                            : <div>No Crops Found</div>
                        }
                    </div>
                    <div className='text-center mt-md-5 mt-3'>
                        <button onClick={handleAllCrops} className='border-0 bg-transparent home-products' style={{ color: 'rgba(61, 179, 101, 1)' }}>See all products</button>
                    </div>
                </div>

                <div style={{ backgroundColor: 'white', marginTop: '80px' }} className='py-md-5 py-3 container-fluid featured'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
                            <h2 className='trusted' style={{ fontWeight: '600' }}>A Community of Farmers</h2>
                            <span className='home-products mb-2' style={{ color: 'grey' }}>Join thousands of farmers who already trust us.</span>
                            <Link to={'/farmer-login'}>
                                <button className='btn text-light px-md-4 px-3 py-md-1 py-0 shadow mb-3 mb-md-0 enlarge' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderTopLeftRadius: '2px', borderBottomLeftRadius: '25px', borderBottomRightRadius: '20px', borderTopRightRadius: '20px' }}>Login</button>
                            </Link>
                        </div>
                        <div className="col-2 p-0">
                            <img src={farmers} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '150px', borderBottomRightRadius: '10px', borderTopRightRadius: '150px' }} />
                        </div>
                        <div className="col-2 p-0">
                            <img src={farmProd} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '150px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '150px', borderTopRightRadius: '15px' }} />
                        </div>
                        <div className="col-md-3 d-flex flex-column align-items-center align-items-md-start">
                            <h2 className='trusted mt-3 mt-md-0 text-center text-md-start' style={{ fontWeight: '600' }}>Thousands of people trust our Agricultural products</h2>
                            <span className='home-products mb-2' style={{ color: 'grey' }}>Join the amazing Farming that we provide for you and just you</span>
                            <Link to={'/consumer-login'}>
                                <button className='btn text-light px-md-4 px-3 py-md-1 py-0 shadow enlarge' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderTopLeftRadius: '20px', borderBottomLeftRadius: '20px', borderBottomRightRadius: '25px', borderTopRightRadius: '2px' }}>Login</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='featured' style={{ marginTop: '80px' }}>
                    <h2 className='text-center trusted' style={{ color: "rgba(61, 179, 101, 1)",fontWeight:'600' }}>What We Offer</h2>
                    <p className='text-center home-products' style={{ color: 'grey' }}>
                        From crops to markets, we empower farmers and buyers with smart tools, <br /> trusted insights, and seamless connections.
                    </p>
                    <div className='container-fluid py-md-5 py-3' style={{ backgroundColor: 'white' }}>
                        <div className='row d-flex justify-content-center align-items-center gap-md-5'>
                            <div className='col-md-4 d-flex flex-column align-items-center align-items-md-start'>
                                <h5 className='m-0 fs-3 trusted' style={{ color: "rgba(61, 179, 101, 1)" }}>1 . Farmer to Buyer Direct Deals</h5>
                                <span className='ms-md-4 ms-2 ps-2 home-products' style={{ color: 'gray' }}>No middlemen, just fair trade.</span>
                                <h5 className='mt-4 m-0 fs-3 trusted' style={{ color: "rgba(61, 179, 101, 1)" }}>2 . Smart Crop Care</h5>
                                <span className='ms-md-4 ms-2 ps-3 home-products' style={{ color: 'gray' }}>Weather alerts and reminders for healthier harvests.</span>
                                <h5 className='mt-4 m-0 fs-3 trusted' style={{ color: "rgba(61, 179, 101, 1)" }}>3 . Powerful Insights</h5>
                                <span className='ms-md-4 ms-2 ps-3 home-products' style={{ color: 'gray' }}>Live data on weather, demand, and price trends.</span>
                                <h5 className='mt-4 m-0 fs-3 trusted' style={{ color: "rgba(61, 179, 101, 1)" }}>4 . Seamless Buying Experience</h5>
                                <span className='ms-md-4 ms-2 ps-3 home-products' style={{ color: 'gray' }}>Easy search, compare, and order from trusted farmers.</span>
                                <h5 className='mt-4 m-0 fs-3 trusted' style={{ color: "rgba(61, 179, 101, 1)" }}>5 . Trusted & Transparent Network</h5>
                                <span className='ms-md-4 ms-2 ps-3 home-products' style={{ color: 'gray' }}>Transparent platform with dispute resolution for all.</span>
                            </div>
                            <div className='col-3 displayNone'>
                                <img src={farm1} alt="" className='shadow' style={{ width: '90%', borderTopLeftRadius: '55px', borderBottomLeftRadius: '55px', borderBottomRightRadius: '55px', borderTopRightRadius: '200px' }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-wrap justify-content-center complaint-div' style={{ marginTop: '120px' }}>
                    <div style={{ width: '95%', height: '500px', backgroundImage: "url('https://c0.wallpaperflare.com/path/575/928/850/aerial-aerial-shot-aerial-view-bird-s-eye-view-4cdb5d2478a55666448bb90eae22b861.jpg')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: "30px", color: 'white' }} className='d-flex justify-content-around align-items-center mb-5 row complaint-section p-4 p-md-0'>
                        <div className='mb-5 col-md-4'>
                            <h2 className='mb-4 trusted' style={{ fontWeight: '600' }}>Something wrong, Let us know</h2>
                            <span className='trusted'>Raise a Complaint</span>
                            <div className='position-relative mt-5'>
                                <input value={issueInput} onChange={(e) => { setIssueInput(e.target.value) }} type="text" className="form-control position-absolute complaint-input" placeholder="Type your concern here" id="inputDefault" fdprocessedid="v099u8" style={{ borderRadius: '30px', padding: '10px 20px', fontSize: '13px', height: '46px' }} />
                                <button onClick={handleComplaint} className='btn text-light position-absolute complaint-input enlarge' style={{ backgroundColor: "rgba(61, 179, 101, 1)", right: '0', borderRadius: '30px', padding: '10px 20px', fontSize: '12px', height: '46px' }}>Submit</button>
                            </div>
                        </div>
                        <div className='d-flex flex-wrap justify-content-center align-items-center gap-3 col-md-5'>
                            <Link to={'https://www.instagram.com/asish.p_/'}><div className='brand-logos brand-enlarge' style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-facebook-f"></i></div></Link>
                            <Link to={'https://www.instagram.com/asish.p_/'}><div className='brand-logos brand-enlarge' style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-instagram"></i></div></Link>
                            <Link to={'https://www.linkedin.com/in/asish-krishna-p/'}><div className='brand-logos brand-enlarge' style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-linkedin-in"></i></div></Link>
                            <Link to={'https://github.com/Asishpk1'}><div className='brand-logos brand-enlarge' style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-github"></i></div></Link>
                            <Link to={'https://www.instagram.com/asish.p_/'}><div className='brand-logos brand-enlarge' style={{ backgroundColor: 'white', borderRadius: '50%', color: 'black', padding: '3px 6px' }}><i class="fa-brands fa-twitter"></i></div></Link>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home