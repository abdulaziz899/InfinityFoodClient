import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideBars from '../SideBars/SideBars';
import './Dashboard.css';

const Dashboard = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imgUrl,setImgUrl]=useState(null);

  const onSubmit = data => {
      console.log(data);
      const eventData={
          name:data.name,
          price:data.price,
          category:data.category,
          img:imgUrl
      }
      console.log(eventData);
      const url =`https://shielded-oasis-52528.herokuapp.com/allFoodSection`
      fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(eventData)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('new food add success')
        }
        console.log(data)})
    };

    const handleImgUpload=(e)=>{
        console.log(e.target.files[0]);
        const imgData=new FormData();
        imgData.set('key','d9ffccf8be6ca2bcace668a0aaa9b4b8');
        imgData.append('image',e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            console.log(response);
            console.log(response.data.data.display_url);
            setImgUrl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    return (
        <div className='row'>
          <div className="col-md-3">
            <SideBars></SideBars>
          </div>
          <div className="col-md-9">
            <h3 className='text-center'>Add New some Food Items </h3>
            <div className='formFieldContainer'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text"  {...register('name',{ required: true })} required  placeholder='enter your food name' />
                    <input name='price' type='text'  {...register("price",{ required: true })} required   placeholder='enter your food price'/>
 
                    <div className="col-4">
                            <select className="form-control" name="category" required {...register('category',{ required: true })} > 
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="breakfast">breakfast</option>
                                <option value="lunch">lunch</option>
                                <option value="dinner">dinner</option>
                            </select>
                      </div>
                    <input name="files" onChange={handleImgUpload} type='file'  required />
                    <input type="submit" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;