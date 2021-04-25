import React from 'react';
import FoodNavBar from '../FoodNavBar/FoodNavBar';
import Lunch from '../Lunch/Lunch';

const LunchDetail = () => {
    return (
        <div  className='container py-5  text-center'>
            <FoodNavBar></FoodNavBar>
            <Lunch></Lunch>
        </div>
    );
};

export default LunchDetail;