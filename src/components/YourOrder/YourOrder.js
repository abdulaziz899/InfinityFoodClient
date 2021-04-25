import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import SideBars from '../SideBars/SideBars';
import './YourOrder.css'
import YourOrderDetail from './YourOrderDetail';
const YourOrder = () => {
    const [loggedInUser, setLoggedInUser]=useContext(Context);
    const [orders,setOrders]=useState([]);
    const [adminOrders,setAdminOrders]=useState(false);
    useEffect(()=>{
        fetch('https://shielded-oasis-52528.herokuapp.com/orderDetailShow?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setOrders(data)
        })
    },[loggedInUser.email])
    
    useEffect(()=>{
        fetch('https://shielded-oasis-52528.herokuapp.com/adminOrderDetailShow?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAdminOrders(data)
        })
    },[loggedInUser.email])
    return (
        <div className='row mr-4'>
            <div className="col-md-3"><SideBars></SideBars></div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center pt-5 text-success pb-3'>your total order :{orders.length}</h2>
                {!adminOrders && <div className="row">
                    {
                        orders.map(order=><YourOrderDetail key={order._id} order={order}></YourOrderDetail>)
                    }
                </div>}
                {adminOrders && <div className="row">
                    {
                        adminOrders.map(order=><YourOrderDetail key={order._id} order={order}></YourOrderDetail>)
                    }
                </div>}
            </div>
        </div>
    );
};

export default YourOrder;