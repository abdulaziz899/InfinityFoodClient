import React, { useEffect, useState } from 'react';
import SideBars from '../SideBars/SideBars';
import './AllOrder.css'
import AllOrderDetail from './AllOrderDetail';
const AllOrder = () => {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        const url =`https://shielded-oasis-52528.herokuapp.com/showCartFoodClientSite`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAllOrders(data)
        })
    },[])
    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBars></SideBars>
            </div>
            <div className="col-md-9">
                <h1 className='text-capitalize text-center text-success pt-5 pb-3'>User Order:{allOrders.length}</h1>
                <div className="row">
                    {
                        allOrders.map(order=><AllOrderDetail key={order._id} order={order}></AllOrderDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrder;