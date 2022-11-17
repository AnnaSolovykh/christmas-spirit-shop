import './App.css';
import React from 'react';
import {

  Link

} from "react-router-dom";
import Slider from './Slider';
import logo from './pictures/others/logo.png';
import shoplink from './pictures/others/shoplink.jpg'
import aboutlink from './pictures/others/aboutlink.jpg'

function Home() {
    return(
        <div>
            <div className='heading-wrapper'>
                <img className='logo' src={logo} alt="shop logo"/>
                <h1>Enjoy our shop of <br></br>"Christmas Spirit"!</h1>
        </div>
        <Slider/>

        <div>
            <Link to="/Shop" ><img className='picture-links' src={shoplink} alt="link to the shop catalogue page"/></Link>
            <Link to="/About"><img className='picture-links' src={aboutlink} alt="link to the shop description page"/></Link>
        </div>

        <hr></hr>

        <div className='columns-wrapper'>
            <div className='column'>
                <h3 className='column-title'>Info </h3>
                <ul>
                    <li>Shipping & Returns</li>
                    <li>FAQs</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className='column'>
                <h3 className='column-title'>Customer Service</h3>
                <ul>
                    <li>Monday - Sunday8:30 am - 3:00 pm</li>
                </ul>
            </div>

        </div>

        </div>
    )
}

export default Home;