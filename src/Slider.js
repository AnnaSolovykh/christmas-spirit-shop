import { useState } from "react";
import { sliderData } from "./sliderData";
import leftArrow from "./pictures/others/leftArrow.png";
import rightArrow from "./pictures/others/rightArrow.png";
import './App.css';

function Slider() {
    const [slide, newSlide] = useState(0)
    const {id, bgImage} = sliderData[slide]

    const previousSlide = () => {
        newSlide((slide => {
            slide --;
            if (slide < 0) {
                return sliderData.length - 1;
            }
            return slide
        }))
        }
    
        const nextSlide = () => {
            newSlide((slide=> {
                slide ++;
                if (slide > sliderData.length -1) {
                    slide = 0
                }
                return slide
            }))
        }
        
        return (
            <div>
                <div className="slider-wrapper" key={id}>
                    <img src={bgImage} className="bg-image" alt="Background pic"/>
                </div>
            

                <div className="btn-container">
                    <button className="btn" onClick={previousSlide}><img src={leftArrow} alt="left arrow"/></button>
                    <button className="btn" onClick={nextSlide}><img src={rightArrow} alt="right arrow"/></button>
                </div>
            </div>
        )
}

export default Slider;