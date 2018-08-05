import React from 'react';



const FaceRecognition = ({ imgUrl }) =>{
    return(
        <div className="image-holder full-width center">
         <img className="center" src={imgUrl} alt=''/>
        </div>
    )
}

export default FaceRecognition;