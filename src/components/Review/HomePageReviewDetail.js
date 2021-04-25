import React from 'react';
import './HomePageReviewDetail.css';

const HomePageReviewDetail = (props) => {
    const {name,imageURL,description}=props.review;
    return (
        <div className='col-sm-12 col-md-4'>
            <div className='reviewContainer'>
                <img className='img-fluid' src={imageURL} alt=""/>
                <h2 className='text-primary'>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HomePageReviewDetail;
