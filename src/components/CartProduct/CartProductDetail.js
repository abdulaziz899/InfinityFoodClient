import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Payment from './Payment';

const CartProductDetail = (props) => {
    console.log(props.cart)
    const {name,category,count,email,img,price,imgUrl,_id,status}=props.cart;
    const [carts,setCarts]=useState(count);
    const [successOrders,setSuccessOrders]=useState(null)
    const [productCount,setProductCount]=useState({
        count:count
    });
   
    const countIncrease=(id)=>{
        console.log(id);
        const newCount=carts+1;
        setCarts(newCount);
        const sendCount={...productCount};
        sendCount.count=newCount;
        console.log(sendCount);
        setProductCount(sendCount);
        fetch(`https://shielded-oasis-52528.herokuapp.com/updateCount/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(sendCount)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("updated",data)
        })
    }
    const countDecrease=(id)=>{
        console.log(id);
        const newCount=carts-1;
        setCarts(newCount);
        const sendCount={...productCount};
        sendCount.count=newCount;
        console.log(sendCount);
        setProductCount(sendCount);
        fetch(`https://shielded-oasis-52528.herokuapp.com/updateCount/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(sendCount)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("updated",data)
        })
    };

   ///order success cart delete

   const handleDelete=id=>{
    console.log(id);
    fetch(`https://shielded-oasis-52528.herokuapp.com/deleteSuccessCart/${id}`,{
        method:'DELETE',
    })
    .then(res=>res.json())
    .then(data=>console.log('delete success'))
};

  const handlePaymentSuccess = paymentId => {
      const paymentOrders= {
        name:name,
        category:category,
        count:carts,
        email:email,
        img:img,
        price:price,
        imgUrl:imgUrl,
        status:status,
        success:false,
        paymentId
    };
        setSuccessOrders(paymentOrders);
      console.log("paymentOrders::",paymentOrders);
       const url=`https://shielded-oasis-52528.herokuapp.com/allSuccessOrders`;
        fetch(url,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(paymentOrders)
        })
        .then(res=>res.json())
        .then(data=>{ 
            
            if(data){
                const successOrder={...successOrders};
                successOrder.success=true;
                setSuccessOrders(successOrder)
                alert("order place add success");
                handleDelete(_id);
            }
        }
        )
  }
    
    return (
        <>
        {!successOrders && <div className='rounded-0 pb-4 shadow bg-light m-3'>
            <div  className="row mx-4">
                <div className='bg-white shadow col-md-12 text-center  my-3 text-capitalize text-secondary py-4 d-flex justify-content-between'>
                    <div className='d-flex justify-content-between w-75'>
                        <img style={{width:"30px", borderRadius:"50%",height:"35px"}} src={img} alt=""/>
                        <h6 className='text-success pt-2'>{name}</h6>
                        <h5 className='text-info pt-1'>${price*carts}</h5>
                        <h6 className='text-primary pt-2'>{category}</h6>
                    </div>
                    <div className='w-25'>
                        <div className=' bg-light my-2'> 
                            <button className='btn  btn-outline-secondary' onClick={()=>countIncrease(_id)}>+</button> 
                            <input type="text" name="" className='text-center text-danger mx-1 py-1 w-25 ' disabled value={carts} id=""/>
                            {carts>1?<button  className='btn btn-outline-secondary ' onClick={()=>countDecrease(_id)}>-</button>:<button className='btn btn-outline-secondary' disabled onClick={countDecrease}>-</button>}
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-center' >
                    <Payment  handlePayment={handlePaymentSuccess}></Payment>
                </div>
            </div>
        </div>
            }
        </>
    );
};

export default CartProductDetail;