
import { useState } from 'react'
import { feedbackData } from './feedbackData';
import './App.css';

function Feedback() {
    const [reviews] = useState(feedbackData)
    const [showText, setShowText] = useState(false)
    
    const showTextClick = (element) => {
        element.showMore=!element.showMore
        setShowText(!showText)
    }
    return(
        <div className='reviews'>
            <h1 className="feedback-title">Feedback from our dear clients</h1>
            <div className='reviews-wrapper'>
            {reviews.map(( element => {
                const {id, name, text, showMore} = element;
                return(
                <div className='review-container' key={id}>
                    <p className='review-title'>{name}</p>
                    <p className='review-text'>{showMore ? text : text.substring(0, 80) + "..."}
                    <button className='review-button' onClick={ () => showTextClick(element) }>{showMore? "Hide" : "Read more"}</button>
                    </p>
                </div>
                )
            }))}
            </div>

        </div>
    )
}

export default Feedback;