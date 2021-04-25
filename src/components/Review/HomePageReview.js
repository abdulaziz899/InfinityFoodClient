import React, { useEffect, useState } from 'react';
import HomePageReviewDetail from './HomePageReviewDetail';


const HomePageReview = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/allReview`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setReviews(data);
        })
    },[])
    return (
        <div className='container mt-5 py-5'>
            <h1 className='text-capitalize text-center text-light my-5'>Reviews</h1>
            <div className='row'>
                {
                    reviews.map(review=><HomePageReviewDetail review={review}
                    key={review._id}></HomePageReviewDetail>)
                }
            </div>
        </div>
    );
};

export default HomePageReview;