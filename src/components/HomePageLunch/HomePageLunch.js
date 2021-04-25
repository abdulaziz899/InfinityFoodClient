import React from 'react';
import { useHistory } from 'react-router';

const HomePageLunch = (props) => {
    const {name,img,price,category,_id}=props.lunch;
    const history=useHistory();
    const handleBuyNow=(id)=>{
        console.log('click me',id);
        history.push(`/productDetail/${id}`)
    }
    return (
        <div className='singleProduct'>
            <img src={img} alt=""/>
            <h6 className='pt-3'>{name}</h6>
            <h4 className='text-danger'>${price}</h4>
            <button onClick={()=>handleBuyNow(_id)} className='btn btn-warning'>Buy Now </button>
        </div>
    );
};

export default HomePageLunch;