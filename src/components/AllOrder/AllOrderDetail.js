import React, { useState } from 'react';

const AllOrderDetail = (props) => {
    console.log("2",props.order);
    const {name,category,count,email,img,price,imgUrl,_id,status}=props.order;
    const [orderStatus,setOrderStatus]=useState({
        status:status,
    })
    const handleDone=id=>{
        const info={...orderStatus};
        info.status="done";
        setOrderStatus(info);
        fetch(`https://shielded-oasis-52528.herokuapp.com/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>console.log("updated",data))
    } ;
     const handleOnGoing=id=>{
        const info={...orderStatus};
        info.status="on going";
        setOrderStatus(info);
        console.log(info);
        fetch(`https://shielded-oasis-52528.herokuapp.com/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>console.log("updated",data))
    };
    return (
            <div className="col-md-6">
                <div className='my-2 bg-primary px-1  py-4'>
                    <img style={{width:"60%", borderRadius:"50%",height:"200px"}} src={img} alt=""/>
                    <h3>{name}</h3>
                    <p>{category}</p>
                    <p>${price*count}</p>
                    <p> current status:{orderStatus.status}</p>
                    <button  className="btn btn-outline-light ml-4 disabled ">Pending</button>
                    <button onClick={()=>handleOnGoing(_id)} className="btn btn-outline-light ml-4 ">On going</button>
                    <button onClick={()=>handleDone(_id)} className="btn btn-outline-light ml-4">Done</button>
                </div>
            </div>
        
    );
};

export default AllOrderDetail;