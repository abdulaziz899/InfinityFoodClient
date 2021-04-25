import React, { useEffect, useState } from 'react';
import HomePageLunch from '../HomePageLunch/HomePageLunch';
import './Lunch.css';
const Lunch = () => {
    const [lunch,setLunch]=useState([]);
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/showFoodClientSiteLunch`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLunch(data)
        })
    },[])
    return (
        <div className='productsContainer'>
            {
                lunch.map(lunch=><HomePageLunch lunch={lunch} key={lunch._id}></HomePageLunch>)
            }
        </div>
    );
};

export default Lunch;