import React, { useEffect, useState } from 'react';
import HomePageDinner from '../HomePageDinner/HomePageDinner';
import './Dinner.css';
const Dinner = () => {
    const [dinners,setDinners]=useState([]);
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/showFoodClientSiteDinner`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDinners(data)
        })
    },[])
    return (
        <div className='productsContainer'>
            {
                dinners.map(dinner=><HomePageDinner dinner={dinner} key={dinner._id}></HomePageDinner>)
            }
        </div>
    );
};

export default Dinner;