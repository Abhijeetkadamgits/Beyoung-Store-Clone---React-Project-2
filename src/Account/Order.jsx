import React, { useState, useEffect } from 'react';

function Order() {
  const [contentData, setContentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const url = 'https://academics.newtonschool.co/api/v1/ecommerce/order';
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('authToken')}`,
            'projectID': 'mmvz5wuhf8k7',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const orders = data.data; 
        // Sort the orders based on createdAt in descending order
      orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      
      setContentData(orders);
      setLoading(false);
      } catch (error) {
        console.error('Error Fetching Data');
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className='wle-body'>
        <h1 className='wle-desc'>Loading...</h1>
      </div>
    )
  }

  return (
    <div className="order-product-section">
      <div className="order-product-container">
        {contentData.map((order, index) => (
          <div className="order-products" key={index}>
            <div className="order-date-time">
              <hr />
              <h4>{new Date(order.createdAt).toLocaleString()}</h4>
              <hr />
            </div>
            <div className="o-id">
              <span>order:</span><span># {order.order._id.slice(-5)}</span>
            </div>
            <div className="order-product" >

              <div className="overall-order-details" >
                <div className="view-order-product">
                  {order.order.items.map((item, index) => (
                    <div className='order-product-details' key={index}>
                      <div className="order-product-img">
                        <img src={item.product.displayImage} alt={item.product.name} />
                      </div>
                      <div className="order-pro-details">
                        <h4>{item.product.name}</h4>
                        <p>Price: ₹{item.product.price}</p>
                        <p>Rating: {item.product.ratings.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <hr />
                <div className="order-shipment-details">
                  <h3>Shipment Details</h3>
                  <div className="total-order-price">
                    <h4>Total Price:</h4>
                  <p>{order.order.totalPrice}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>Address Type:</h4>
                  <p>{order.order.shipmentDetails.type}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>Street:</h4>
                  <p>{order.order.shipmentDetails.address.street}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>City:</h4>
                  <p>{order.order.shipmentDetails.address.city}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>State:</h4>
                  <p>{order.order.shipmentDetails.address.state}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>Country:</h4>
                  <p>{order.order.shipmentDetails.address.country}</p>
                  </div>
                  <div className="shipment-details">
                  <h4>Zip Code:</h4>
                  <p>{order.order.shipmentDetails.address.zipCode}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order;
