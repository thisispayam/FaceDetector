import React from 'react';
import Tilt from 'react-tilt';


const Logo = () =>{
    return(
        <div className="logo">
           <Tilt className="Tilt" options={{ max : 45 }}>
                <div className="Tilt-inner"> <span role="img" aria-label="Alien face emoji">👽</span> </div>
            </Tilt>
        </div>
    )
}

export default Logo;


 
