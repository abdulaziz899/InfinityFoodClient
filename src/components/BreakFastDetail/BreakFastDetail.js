import React from 'react';
import BreakFast from '../BreakFast/BreakFast';
import FoodNavBar from '../FoodNavBar/FoodNavBar';

const BreakFastDetail = () => {
    return (
        <div className='container py-5  text-center' >
            <FoodNavBar></FoodNavBar>
            <BreakFast></BreakFast>
        </div>
    );
};

export default BreakFastDetail;