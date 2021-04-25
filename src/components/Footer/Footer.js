import { faFacebook, faInstagramSquare, faTwitter, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div class=" bg-dark">
            <section class="container">
            <div class="row my-5 py-5">
                    <div className="col-lg-4 col-md-6  col-sm-12 my-3">
                    <h1 class="text-white">Menu</h1>
                    <p><a className="text-decoration-none " href="#">Privacy Policy</a></p>
                    <p> <a className="text-decoration-none" href="#">Cookie Policy</a></p>
                    <p><a className="text-decoration-none" href="#">Purchasing Policy</a></p>
                    <p> <a className="text-decoration-none" href="#"> terms & condition</a></p>
                </div>
                <div className="col-lg-4 col-md-6  col-sm-12 my-3">
                    <h1 className="text-white">Contact Us</h1>
                    <p className="text-white">House #8, Road # 14</p>
                    <p class="text-white"> Dhaka-1209.</p>
                    <p class="text-white">abdulaziz0170934@gmail.com</p>
                    <p class="text-white">contact:+8801776978991</p>
                </div>
                <div className="col-lg-4 col-md-6  col-sm-12 my-3">
                    <h1 className="text-white text-center ">Get in Touch</h1>
                        <div className="d-flex justify-content-around pt-5 color-9">
                            <a href="#"> <FontAwesomeIcon className='fontIcons' icon={faFacebook}></FontAwesomeIcon>  </a> 
                            <a href="#">  <FontAwesomeIcon className='fontIcons' icon={faInstagramSquare}></FontAwesomeIcon>  </a> 
                            <a href="#"><FontAwesomeIcon className='fontIcons' icon={faTwitter}></FontAwesomeIcon> </a> 
                            <a href="#"><FontAwesomeIcon className='fontIcons' icon={faYoutubeSquare}></FontAwesomeIcon></a> 
                        </div>
                </div>
            </div>
            
            
            <h1 className="text-capitalize text-center text-danger pb-5">created by © abdul aziz 2021 </h1>
            </section>
        </div>
    );
};

export default Footer;