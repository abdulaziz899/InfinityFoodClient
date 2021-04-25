import React from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import './SideBars.css';
import  { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstOrder, faFirstOrderAlt } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faStarHalfAlt, faTrashAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
const SideBars = () => {
    
    const [logInUser,setLogInUser]=useContext(Context);;
    const [admins,setAdmins]=useState(false);
    console.log(logInUser);
    useEffect(()=>{
        fetch('https://shielded-oasis-52528.herokuapp.com/isAdmin?email='+logInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setAdmins(data);
            console.log("setAdmins",data);
        })
    },[logInUser.email])
    return (
        <div  className='listContainer '>
           {admins &&<Link to='/allOrders'><p className='text-white'> <FontAwesomeIcon  className='mr-3' icon={faFirstOrderAlt}></FontAwesomeIcon> All Order</p></Link>}
            <Link to='/yourOrder'><p className='text-white' > <FontAwesomeIcon className='mr-3' icon={faFirstOrder}></FontAwesomeIcon> Your Order</p></Link>
            {admins && <Link to='/addNewFoods'><p className='text-white'> <FontAwesomeIcon className='mr-3' icon={faPlus}></FontAwesomeIcon> Add Food</p></Link>}
            {admins && <Link to='/manageFood'><p className='text-white'> <FontAwesomeIcon className='mr-3' icon={faTrashAlt}></FontAwesomeIcon>Manage Food</p></Link>}
            {admins && <Link to='/adminPanel'><p className='text-white'> <FontAwesomeIcon className='mr-3' icon={faUserPlus}></FontAwesomeIcon> Admin Panel</p></Link>}
            <Link to='/review'><p className='text-white'> <FontAwesomeIcon className='mr-3' icon={faStarHalfAlt}></FontAwesomeIcon> Review</p></Link>
        </div>
    );
};

export default SideBars;