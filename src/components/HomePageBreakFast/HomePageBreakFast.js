import React from 'react';
import { useHistory } from 'react-router';

const HomePageBreakFast = (props) => {
    const {name,img,price,category,_id}=props.breakFast;
    const history=useHistory();
    const handleBuyNow=(id)=>{
        console.log('click me',id);
        history.push(`/productDetail/${id}`)
    }
    return (
        <div className='singleProduct'>
            <img src={img} alt=""/>
            <h6>{name}</h6>
            <h4 className='text-danger'>${price}</h4>
            <button onClick={()=>handleBuyNow(_id)} className='btn btn-info'>Buy Now </button>
        </div>
    );
};

export default HomePageBreakFast;