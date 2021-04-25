import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';

const HeaderCart = () => {
const [logInUser,setLogInUser]=useContext(Context);;
const [carts,setCarts]=useState([]);
console.log(logInUser);
useEffect(()=>{
    fetch('https://shielded-oasis-52528.herokuapp.com/allFoodCartHeader?email='+logInUser.email)
    .then(res=>res.json())
    .then(data=>{
        setCarts(data);
        console.log("header",data);
    })
},[carts])
    return (
            <div className='mr-5'> 
                <div className='absoluteNow'>
                    <Link to='/cart'>
                        <FontAwesomeIcon className='fontIcons' icon={faCartPlus}></FontAwesomeIcon>
                    </Link>
                </div>
                <div className='cartLength'>
                    <h1>{carts.length}</h1>
                </div>
            </div>
    );
};

export default HeaderCart;