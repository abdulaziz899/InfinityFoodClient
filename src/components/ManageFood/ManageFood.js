import React, { useEffect, useState } from 'react';
import SideBars from '../SideBars/SideBars';
import './ManageFood.css'
import ManageFoodDetail from './ManageFoodDetail';
const ManageFood = () => {
    const [manageFood,setManageFood]=useState([]);
    useEffect(()=>{
        const url =`https://shielded-oasis-52528.herokuapp.com/manageFood`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setManageFood(data)
        })
    },[])
    return (
        <div className='row'>
            <div className="col-md-3">
                <SideBars></SideBars>
            </div>
            <div className="col-md-9">
                <h2 className='text-capitalize text-center'>manage order</h2>
                <div className="row">
                    {
                        manageFood.map(manage=><ManageFoodDetail key={manage._id} manage={manage}></ManageFoodDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageFood;