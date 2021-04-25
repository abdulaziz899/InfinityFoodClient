import React from 'react';
import { useForm } from 'react-hook-form';

const OrderPlace = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div className='formFieldContainer'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text"    {...register('name')} required  placeholder='enter your food name' />
                <input name="price" type="text"   {...register('price')} required   placeholder='enter your food price'/>
                <input name="category" type="text"  {...register('category')} required   placeholder='enter your food category'/>
                <input type="submit" />
            </form>
    </div>
    );
};

export default OrderPlace;