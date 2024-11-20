import React from "react";
import "../WorkoutPlan/workout.css"
import legPressImage from '../../images/leg-press.png'
import legCurl from '../../images/leg-curl.png'
import legLunge from '../../images/leg-lunge.png'
import bulgarianSplit from '../../images/bulgarian-split.png'
import barbellDL from '../../images/barbell-deadlift.png'


export const Workout = () => {
   return (
    <div>
        <h1>Let's Start Workout!</h1>
        <p>Here are some exercises for your lower body:</p>
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
        <p>Upper Body:</p>
    </div>
   );
};

