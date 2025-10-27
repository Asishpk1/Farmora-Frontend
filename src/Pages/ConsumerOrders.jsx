import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import HeaderBuyer from '../Components/HeaderBuyer'
import { consumerOrdersAPI } from '../Service/allAPI'

const ConsumerOrders = () => {

  const [orders, setOrders] = useState([])
  console.log(orders);


  useEffect(() => {
    getUserOrders()
  }, [])


  const getUserOrders = async () => {
    const token = sessionStorage.getItem('token')
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      }
      try {
        const result = await consumerOrdersAPI(reqHeader)
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
  return (
    <>
      <div>
        <HeaderBuyer />
        <h1
          className="text-center my-md-5 my-4 wishCartHead"
          style={{ fontWeight: "500", color: "rgba(61, 179, 101, 1)" }}
        >
          Order History
        </h1>

        {/* Orders list */}
        <div className="px-md-5 px-3">
          <div
            className="table-responsive"
            style={{
              overflowX: "auto",
            }}
          >
            <div
              className="row p-md-3  text-center mx-0 tablehead"
              style={{
                color: "rgba(61, 179, 101, 1)",
                fontWeight: "500",
                minWidth: "900px",
                whiteSpace: "normal",
              }}
            >
              <div className="col-2">Products</div>
              <div className="col-1">Quantity</div>
              <div className="col-2">Address</div>
              <div className="col-2">Order Date</div>
              <div className="col-2">Order Id</div>
              <div className="col-1">Total Payment</div>
              <div className="col-2">Status</div>
            </div>

            {orders.length > 0 ? (
              [...orders].reverse().map((order, index) => (
                <div
                  key={index}
                  className="row p-md-4 p-2 text-center d-flex align-items-center mx-0 mb-3 tablecontents"
                  style={{
                    backgroundColor: "rgba(226, 228, 232, 0.3)",
                    borderRadius: "20px",
                    fontWeight: "500",
                    minWidth: "900px",
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                  }}
                >
                  <div className="col-2 ">{order.crop}</div>
                  <div className="col-1">{order.quantity}</div>
                  <div className="col-2" style={{ whiteSpace: "normal" }}>
                    {order.address}
                  </div>
                  <div className="col-2">
                    {new Date(order.orderDate)
                      .toLocaleDateString("en-GB")
                      .replaceAll("/", "-")}
                  </div>
                  <div className="col-2">{order.razorpayOrderId}</div>
                  <div className="col-1">&#8377; {order.totalPrice}</div>
                  <div
                    className="col-2 py-1"
                    style={{
                      border: "1px solid rgba(61, 179, 101, 1)",
                      borderRadius: "30px",
                      backgroundColor: "rgba(210, 240, 221, 1)",
                      color: "rgba(61, 179, 101, 1)",
                    }}
                  >
                    {order.orderStatus}
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center mt-4">No Orders Found</h1>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default ConsumerOrders