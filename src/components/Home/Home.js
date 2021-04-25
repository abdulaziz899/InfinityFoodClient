import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../App';
import Contact from '../Contact/Contact';
import FoodNavBar from '../FoodNavBar/FoodNavBar';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';
import HomePageReview from '../Review/HomePageReview';

const Home = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const url=`https://shielded-oasis-52528.herokuapp.com/showFoodClientSite`
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
        })
    },[]);
    const [logInUser,setLogInUser]=useContext(Context);;
const [carts,setCarts]=useState([]);
useEffect(()=>{
    fetch('https://shielded-oasis-52528.herokuapp.com/allFoodCartHeader?email='+logInUser.email)
    .then(res=>res.json())
    .then(data=>{
        setCarts(data);
        console.log("header",data);
    })
},[])
    return (
        <section>
            <div className='container '>
                <div className='text-center py-5 '><FoodNavBar></FoodNavBar></div>
                    <div className='productsContainer'>
                        {
                            products.map(product=><Product product={product} key={product._id}></Product>)
                        }
                    </div>
                <HomePageReview></HomePageReview>
                <Contact></Contact>
            </div>
         <Footer></Footer>
        </section>
    );
};

export default Home;