import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import SideBars from '../SideBars/SideBars';

const DashboardContainer = () => {
    return (
        <div className='row'>
            <div className="col-md-3 ">
                <SideBars></SideBars>
            </div>
            
        </div>
    );
};

export default DashboardContainer;