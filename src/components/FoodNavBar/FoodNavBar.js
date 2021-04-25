import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './FoodNavBar.css';
const FoodNavBar = () => {
    return (
        <div className='foodNavBarContainer'>
            <Link to='/breakfast' ><Button variant="info">Breakfast</Button></Link>
            <Link to='/lunch'><Button variant="warning">Lunch</Button></Link>
            <Link to='/dinner'><Button variant="success">Dinner</Button></Link>
            
        </div>
    );
};

export default FoodNavBar;