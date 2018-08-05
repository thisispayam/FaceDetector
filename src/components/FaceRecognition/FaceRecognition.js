import React from 'react';



const FaceRecognition = ({ imgUrl, box }) =>{
    return(
        <div className="image-holder full-width center">
         <img id="input-image" className="center" src={imgUrl} alt=''/>
         <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
        
    )
}

export default FaceRecognition;