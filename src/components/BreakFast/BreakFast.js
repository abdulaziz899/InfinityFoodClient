import React, { useEffect, useState } from 'react';
import HomePageBreakFast from '../HomePageBreakFast/HomePageBreakFast';
import './BreakFast.css';
const BreakFast = () => {
    const [breakFasts,setBreakFasts]=useState([]);
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/showFoodClientSiteBreakFast`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBreakFasts(data)
        })
    },[])
    return (
        <div className='productsContainer'>
            {
                breakFasts.map(breakFast=><HomePageBreakFast breakFast={breakFast} key={breakFast._id}></HomePageBreakFast>)
            }
        </div>
    );
};

export default BreakFast;