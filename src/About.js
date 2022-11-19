import './App.css';
import React from 'react';
import logo from './pictures/others/logo.png';
import whatsapp from './pictures/others/whatsapp.png';
import mail from './pictures/others/google.png';
import insta from './pictures/others/instagram.png';
import present from './pictures/others/present.jpg';
import Feedback from './Feedback';
function About() {

    return( 
        <div>
            <div className='heading-wrapper'>
                <img className='logo' src={logo} alt="shop logo"/>
                <h1>About “Christmas Spirit”</h1>
            </div>

            <div className='container-about'>
                <p className='about-text'>“Christmas Spirit” is a newly opened Christmas shop, absolutely unique in its nature, being opened in the heart of Ankara,  the capital of Turkey. <br></br>Seeing the great number of expats and foreign representatives living here and missing Christmas spirit, we realised we could open a shop to meet their needs.<br></br> Our next step is to expand our shop to start offering a fast range of services such as meeting Santa, organizing Santa post and entertaining events for kids to help them feel Christmas coming.</p>
                </div>

            <div className='container-about'>
                <p className='contact-text'>Do you have any more ideas for the improvement of our services or even cooperation?</p>
            </div >

            <div className='container-about'>
                <p className='contact-text'>Contact us via whatsapp <img className='icon' src={whatsapp} alt="the icon of whatsapp"/>or write us an email <img className='icon'  src={mail} alt="the icon of google"/>. </p>
            </div>

            <div className='container-about'>
                <p className='contact-text'>Don’t forget to subscribe to our Instagram <img className='icon' src={insta} alt="the icon of instagram"/>to check out our reviews and latest developments! </p>
            </div>

            <div className='container-about'>
                <a href='https://new-year-advent.glitch.me'><img className='present' src={present} alt="link to the Advent calendar"/></a>
            </div>

            <Feedback />
        </div>
        )
}
export default About;