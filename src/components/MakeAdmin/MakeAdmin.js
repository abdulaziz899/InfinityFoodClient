import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import SideBars from '../SideBars/SideBars';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const history=useHistory();
    const onSubmit = data => {
        console.log(data);
        const adminData={
            name:data.name,
            email:data.email,
        }
        console.log(adminData);
        const url =`https://shielded-oasis-52528.herokuapp.com/allAdmin`
        fetch(url,{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify(adminData)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data) {
                alert("admin add success")
                history.push('/dashboard')
            }
            console.log(data)})
      };
    return (
        <div className='row'>
          <div className="col-md-3">
            <SideBars></SideBars>
          </div>
          <div className="col-md-9">
            <h3 className='text-center'>Add New some Food Items </h3>
            <div className='formFieldContainer'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="productName" type="text"    {...register('productName')} required  placeholder='enter your name' />
                    <input name="email" type="email"   {...register('email')} required   placeholder='enter your email'/>
                    <input type="submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default MakeAdmin;