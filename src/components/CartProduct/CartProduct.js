import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import SideBars from '../SideBars/SideBars';
import CartProductDetail from './CartProductDetail';
import Payment from './Payment';

const CartProduct = () => {
    const [logInUser,setLogInUser]=useContext(Context);
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
        fetch('https://shielded-oasis-52528.herokuapp.com/allFoodCartUi?email='+logInUser.email)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCarts(data)
        })
    },[])
    return (
        <div className="row">
            <div className="col-md-3">
                <SideBars></SideBars>
            </div>
            <div className="col-md-9">
                   {
                       carts.map(cart=><CartProductDetail key={cart._id} cart={cart}></CartProductDetail>)
                   }
            </div>
        </div>
    );
};

export default CartProduct;