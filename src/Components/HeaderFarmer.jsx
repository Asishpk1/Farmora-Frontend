import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const HeaderFarmer = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const user = JSON.parse(sessionStorage.getItem('user'))
    const handleLogout = async () => {
        sessionStorage.clear()
        toast.info(`Logged out successfully. See you soon, ${user.username} !`)
        setTimeout(() => {
            navigate('/')
        }, 1000);
    }

    return (
        <>
            <div className='col-1 mt-4'>

                <Button className='bg-transparent border-0' style={{ color: 'rgba(61, 179, 101, 1)' }} onClick={handleShow}>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='fs-4' style={{ fontWeight: '600', color: 'rgba(61, 179, 101, 1)' }}><i className="fa-solid fa-seedling"></i> Farmora</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column gap-4 justify-content-between py-5 px-4'>
                        <div className='d-flex flex-column gap-4'>
                            <div>
                                <Link to={'/dashboard'} className='text-decoration-none text-dark'><span style={{color:'rgba(61, 179, 101, 1)'}}> <i class="fa-solid fa-gauge"></i> Dashboard</span></Link>
                            </div>
                            <div>
                                <Link to={'/mycrops'} className='text-decoration-none text-dark'><span style={{color:'rgba(61, 179, 101, 1)'}}> <i class="fa-solid fa-plant-wilt"></i> My Crops</span></Link>
                            </div>
                            <div>
                                <Link to={'/myOrders'} className='text-decoration-none text-dark'><span style={{color:'rgba(61, 179, 101, 1)'}}> <i class="fa-solid fa-truck-fast"></i> My Orders</span></Link>
                            </div>
                            <div>
                                <Link to={'/weather'} className='text-decoration-none text-dark'><span style={{color:'rgba(61, 179, 101, 1)'}}> <i class="fa-solid fa-temperature-three-quarters"></i> Weather</span></Link>
                            </div>

                            <div>
                                <Link to={'/'} className='text-decoration-none text-dark'><span style={{color:'rgba(61, 179, 101, 1)'}}> <i class="fa-solid fa-house"></i> Home</span></Link>
                            </div>
                        </div>
                        <div>
                            <button onClick={handleLogout} className='btn' style={{color:'rgba(61, 179, 101, 1)'}}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>


        </>

    )
}

export default HeaderFarmer