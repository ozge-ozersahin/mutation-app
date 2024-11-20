import React from "react";
import "../WorkoutPlan/workout.css"
import legPressImage from '../../images/leg-press.png'
import legCurl from '../../images/leg-curl.png'
import legLunge from '../../images/leg-lunge.png'
import bulgarianSplit from '../../images/bulgarian-split.png'
import barbellDL from '../../images/barbell-deadlift.png'
import armDumbbell from "../../images/single-arm-dumbbell-row.png"
import lateralRaise from "../../images/lateral-raise.png"
import cablelatPulldown from "../../images/cable-lat-pulldown.png"
import brenchPress from "../../images/brench-press.png"


export const Workout = () => {
   return (
    <div>
        <h1>Let's Start Workout!</h1>
        <p>LOWER BODY EXERCISE:</p>
        <a href="https://www.youtube.com/watch?v=p5dCqF7wWUw">
            <img src={legPressImage} alt="leg-press" className="image"></img>
        </a>   
        <a href="https://www.youtube.com/watch?v=QjNFk4F5dAs">
            <img src={legCurl} alt="leg-curl" className="image"></img>
        </a>
        <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI">
            <img src={legLunge} alt='lunge' className="image"></img>
        </a>
        <a href="https://www.youtube.com/watch?v=vgn7bSXkgkA">
            <img src={bulgarianSplit} alt='bulgarianSplit' className="image"></img>
        </a>
        <a href="https://www.youtube.com/watch?v=3UwO0fKukRw">
            <img src={barbellDL} alt="barbellDeadlift" className="image"></img>
        </a>
        <p>UPPER BODY EXERCISE:</p>
        <a href="https://www.youtube.com/watch?v=ZRSGpBUVcNw">
            <img src={armDumbbell} alt="armDumbell" className="image"></img> 
        </a> 
        <a href="https://www.youtube.com/watch?v=XPPfnSEATJA">
            <img src={lateralRaise} alt="lateralraise" className="image"></img> 
        </a>
        <a href="https://www.youtube.com/watch?v=JGeRYIZdojU">
            <img src={cablelatPulldown} alt="cablelatpulldown" className="image"></img> 
        </a>
        <a href="https://www.youtube.com/watch?v=X3YrlBmjWrY">
            <img src={brenchPress} alt="brenchpress" className="image"></img> 
        </a>          
    </div>
   );
};

