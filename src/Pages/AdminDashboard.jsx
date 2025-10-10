import { Table } from 'react-bootstrap'
import adminfarm from '../assets/adminfarm.jpg'
import Footer from '../Components/Footer'
import HeaderBuyer from '../Components/HeaderBuyer'
import ProductCard from '../Components/ProductCard'

const AdminDashboard = () => {
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
                            <div className='py-2 px-3 text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '30px' }}><span>Total Buyers<span style={{ marginLeft: '140px' }}>1523</span></span></div>
                            <div className='py-2 px-3' style={{ backgroundColor: 'white', borderRadius: '30px' }}><span>Total Orders <span style={{ marginLeft: '60px' }}>565</span></span></div>
                            <span className='text-light py-2 px-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: '30px' }}>Total Payment</span>
                            <span className='fs-4 text-light ps-2' style={{fontWeight:'600'}}>$ 500</span>
                        </div>
                    </div>
                </div>

                <div className='container-fluid'>
                    <div className='row p-5 d-flex justify-content-around'>
                        <div className='col-5 px-5 py-3 shadow' style={{ backgroundColor: 'white', borderRadius: '40px', height: '320px', overflowY: 'auto' }}>
                            <span className='fs-2' style={{ fontWeight: '600' }}>Farmers</span>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>1</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Sales</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>2</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Sales</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>3</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Sales</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>4</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Sales</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                        </div>

                        <div className='col-5 px-5 py-3 shadow' style={{ backgroundColor: 'white', borderRadius: '40px', height: '320px', overflowY: 'auto' }}>
                            <span className='fs-2' style={{ fontWeight: '600' }}>Buyers</span>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>1</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Orders</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>2</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Orders</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>3</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Orders</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                            <div className='d-flex align-items-center justify-content-between gap-4 mb-2 px-3 py-2' style={{ border: 'solid 1px rgba(61, 179, 101, 1)', borderRadius: '30px' }}>
                                <div className='d-flex gap-4'>
                                    <span className=''>4</span>
                                    <span className=''>Asish Krishna P</span>
                                </div>
                                <span className=''>456 Orders</span>
                                <button className='btn px-4 btn-sm text-light' style={{ backgroundColor: 'rgba(61, 179, 101, 1)', borderRadius: '20px' }}>Delete</button>
                            </div>
                        </div>
                    </div>

                    <div className='p-5'>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <h1 className='text-center me-3' style={{ fontWeight: '600' }}>Products</h1>
                            <button className='text-secondary bg-transparent border-0'><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                    </div>

                    <div className='row p-5'>
                        <div className='col-4'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                        <span style={{fontWeight:'600', fontSize:'23px', letterSpacing:'1px'}}>Top Products</span>
                    </div>
                    <div className='px-4 py-2' style={{borderRadius:'30px', backgroundColor:"white", overflow:'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'}}>
                        <Table responsive="md" className='align-middle'>
                    <thead>
                      <tr>
                        <th>Sl.no</th>
                        <th>Item</th>
                        <th>Orders</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=' text-secondary'>1</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>
                        <td className=' text-secondary'>$ 10</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>2</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>
                        <td className=' text-secondary'>$ 10</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>3</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>
                        <td className=' text-secondary'>$ 10</td>
                      </tr>
                    </tbody>
                
                  </Table>
                    </div>
                        </div>
                        <div className='col-3'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                        <span style={{fontWeight:'600', fontSize:'23px', letterSpacing:'1px'}}>Top Farmers</span>
                    </div>
                    <div className='px-4 py-2' style={{borderRadius:'30px', backgroundColor:"white", overflow:'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'}}>
                        <Table responsive="md" className='align-middle'>
                    <thead>
                      <tr>
                        <th>Sl.no</th>
                        <th>User</th>
                        <th>Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=' text-secondary'>1</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>2</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>3</td>
                        <td className=' text-secondary'>Rice</td>
                        <td className=' text-secondary'>101</td>

                      </tr>
                    </tbody>
                
                  </Table>
                    </div>
                        </div>
                        <div className='col-5'>
                            <div className='d-flex justify-content-between align-items-center mb-3'>
                        <span style={{fontWeight:'600', fontSize:'23px', letterSpacing:'1px'}}>Contact requests</span>
                    </div>
                    <div className='px-4 py-2' style={{borderRadius:'30px', backgroundColor:"white", overflow:'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'}}>
                        <Table responsive="md" className='align-middle'>
                    <thead>
                      <tr>
                        <th>Sl.no</th>
                        <th>User</th>
                        <th>Role</th>
                        <th>Request</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=' text-secondary'>1</td>
                        <td className=' text-secondary'>Max</td>
                        <td className=' text-secondary'>Farmer</td>
                        <td className=' text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente magni minus, dolorem repellendus deserunt tenetur cum quos ipsa, repellat voluptatem dolorum voluptatibus. Incidunt sequi distinctio tempora eos hic nesciunt adipisci?</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>2</td>
                        <td className=' text-secondary'>Meera</td>
                        <td className=' text-secondary'>Buyer</td>
                        <td className=' text-secondary'>Order Issue</td>
                      </tr>
                      <tr>
                        <td className=' text-secondary'>3</td>
                        <td className=' text-secondary'>Mohan</td>
                        <td className=' text-secondary'>Buyer</td>
                        <td className=' text-secondary'>Delivery delayed</td>
                      </tr>
                    </tbody>
                
                  </Table>
                    </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default AdminDashboard