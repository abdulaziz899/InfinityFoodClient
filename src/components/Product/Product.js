import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'
const Product = (props) => {
    const {name,img,price,category,_id}=props.product;
    const history=useHistory();
    const handleBuyNow=(id)=>{
        console.log('click me',id);
        history.push(`/productDetail/${id}`)
    }
    return (
        <div className='singleProduct '  >
            <img src={img} alt=""/>
            <h6 className='py-3'>{name}</h6>
            <h4 className='text-danger'>${price}</h4>
            <button onClick={()=>handleBuyNow(_id)}   className="btn mb-5 btn-outline-success">Buy Now</button>
        </div>
    );
};

export default Product;