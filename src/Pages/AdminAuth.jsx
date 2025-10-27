import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { loginAPI } from '../Service/allAPI';
import { ResponseContext } from '../Context/ContextAPI';
import admin from '../assets/adminauth.jpg'

const AdminAuth = () => {

    const [userDetails, setUserDetails] = useState({ email: "", password: "", role: "Admin" })
    console.log(userDetails);
    const [loginSpinner, setloginSpinner] = useState(false)

    const {setIsAuthorized,setIsRole} = useContext(ResponseContext)

    const handleLogin = async () => {
        if (userDetails.email && userDetails.password && userDetails.role) {
            try {
                const result = await loginAPI(userDetails)
                console.log(result);
                if (result.status == 200) {
                    setloginSpinner(true)
                    sessionStorage.setItem("user", JSON.stringify(result.data.user))
                    sessionStorage.setItem("token", result.data.token)
                    setIsAuthorized(sessionStorage.getItem('token'))
                    setIsRole(JSON.parse(sessionStorage.getItem('user')))
                    toast.success(`Welcome, ${result.data.user.username}! Logged in as ${result.data.user.role}`)
                    setTimeout(() => {
                        setUserDetails({ email: "", password: "", role: "Admin" })
                        navigate('/adminDashboard')
                        setloginSpinner(false)
                    }, 2000);
                }
                if (result.status == 404) {
                    toast.error(result.response.data)
                }

            }
            catch (err) {
                console.log(err);

            }
        }
    }

    const navigate = useNavigate()
    return (
        <>
            <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
                <div
                    style={{
                        position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: "url('https://c0.wallpaperflare.com/path/575/928/850/aerial-aerial-shot-aerial-view-bird-s-eye-view-4cdb5d2478a55666448bb90eae22b861.jpg')", backgroundSize: "cover", backgroundPosition: "center", filter: "blur(4px)", WebkitFilter: "blur(10px)", transform: "scale(1.06)", zIndex: 0, pointerEvents: "none"
                    }} />

                <div style={{ position: "relative", zIndex: 1 }} className="container-fluid d-flex align-items-center justify-content-center h-100">
                    <div
                        className="row w-50 d-flex align-items-center overflow-hidden shadow authbox"
                        style={{ backgroundColor: "white", borderTopRightRadius: "280px", borderBottomLeftRadius: "280px", borderTopLeftRadius: "5px", borderBottomRightRadius: "5px", }}>
                        <div className="col-md-6 p-0 displayNone">
                            <img src={admin} alt="" className="w-100 shadow" />
                        </div>
                        <div className="col-md-6 p-5">
                            <Link to={'/'} className='text-decoration-none text-success'><h6 className="authbrand" style={{ fontSize: '14px', fontWeight: '600' }} ><i className="fa-solid fa-seedling" style={{ color: 'rgba(61, 179, 101, 1)' }}></i> Farmora</h6></Link>
                            <h6 className='text-secondary opacity-50 mb-md-4 mb-3 trusted'>Admin Gateway</h6>
                            <h4 className='authhead' style={{ fontWeight: "700" }}>Administrator Login Portal</h4>

                            <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})} type="email" className="mb-md-3 mb-2 w-100 authinput" placeholder="Email" style={{ borderRadius: "30px", padding: "10px 20px", fontSize: "13px", border: "1px solid grey", outline: "none" }} />
                            <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})} type="password" className="mb-md-3 mb-2 w-100 authinput" placeholder="Password" style={{ borderRadius: "30px", padding: "10px 20px", fontSize: "13px", border: "1px solid grey", outline: "none" }} />

                            <button
                                className="btn text-light w-100 authbutton"
                                onClick={handleLogin}
                                style={{ backgroundColor: "rgba(61, 179, 101, 1)", borderRadius: "30px", fontWeight: "500", }}>
                                Login {loginSpinner && <Spinner animation="border" variant="success" size="sm" />}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminAuth