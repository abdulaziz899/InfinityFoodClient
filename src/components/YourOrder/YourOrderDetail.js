import React from 'react';

const YourOrderDetail = (props) => {
    console.log(props);
    const {name,category,count,email,img,price,imgUrl,_id,status}=props.order;
    return (
        <div className='col-md-4  text-center  my-3 text-capitalize text-secondary '>
            <div className='bg-white shadow py-4'>
                <img style={{width:"60%", borderRadius:"50%",height:"200px"}} src={img} alt=""/>
                <h5 className='text-success '>{name}</h5>
                <p className=''>Total Pay :${price*count}</p>
                <h2>{status}</h2>
            </div>
        </div>
    );
};

export default YourOrderDetail;