import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Context } from '../../App';
import CartProduct from '../CartProduct/CartProduct';
import './ProductDetail.css';
const ProductDetail = () => {
    const history=useHistory();
    const [logInUser,setLogInUser]=useContext(Context);
    const [product,setProduct]=useState({});
    const [productCount,setProductCount]=useState(1);
    const [cartCount,setCartCount]=useState(null);
    const [orderState,setOrderState]=useState({
        status:"pending"
    })
    const {productId}=useParams();
    const {name,img,price,category,_id}=product;
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/productDetail/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProduct(data)
        })
    },[productId]);
    const countIncrease=()=>{
        setProductCount(productCount+1)
    }
    const countDecrease=()=>{
        setProductCount(productCount-1)
    }
    const addToCart=()=>{
        const count=productCount;
        //const newCart={...product,...logInUser,...orderState,count};
        const newCart={
            category:product.category,
            name:product.name,
            img:product.img,
            price:product.price,
            status:orderState.status,
            count:count,
            email:logInUser.email,
        };
        setCartCount(newCart);
        console.log(newCart);
        const url =`https://shielded-oasis-52528.herokuapp.com/allFoodCart`
      fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(newCart)
      })
      .then(res=>res.json())
      .then(data=>{
          if (data) {
              alert("add to cart success ")
            console.log(data)
            history.push('/cart')
          }
      })
    }
    return (
        <div className='container text-center py-5  singleProductContainer'>
            <div className='row my-5 py-5'>
                <div className='col-md-6 col-sm-12  my-5'>
                    <h3>{name} {category} </h3>
                    <h4 className='text-danger'>${price*productCount}</h4>
                        <div className='btnContainer bg-light my-2'> 
                            <button onClick={countIncrease}>+</button> 
                            <input type="text" name="" className='text-center text-danger' value={productCount} id=""/>
                            {productCount>1?<button onClick={countDecrease}>-</button>:<button disabled onClick={countDecrease}>-</button>}
                        </div>
                    <button onClick={addToCart} className='btn btn-outline-primary'>Add To Cart</button>
                </div>
                <div className='col-md-6 col-sm-12'>
                    <img src={img} alt=""/>
                </div>
                
            </div>
        </div>
    );
};

export default ProductDetail;