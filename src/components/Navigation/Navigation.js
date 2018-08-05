import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) =>{
    if (isSignedIn){
    return(
        <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand' href='/'>Image Face Detector</a>
            </div>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                 <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>

                <div className='navbar-nav ml-auto'>
                    <a onClick={()=> onRouteChange('signout')} className='nav-item nav-link active'>Sign out<span className='sr-only'>(current)</span></a>
                </div>
                
            </div>
        </nav>
        );
    } else {
        return (
            <nav className='navbar navbar-dark navbar-expand-lg'>
            <div className='container'>
                <a className='navbar-brand' href='/'>Image Face Detector</a>
            </div>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                 <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>

                <div className='navbar-nav ml-auto'>
                    <a onClick={()=> onRouteChange('signin')} className='nav-item nav-link active' >Sign in<span className='sr-only'>(current)</span></a>
                    <a onClick={()=> onRouteChange('register')} className='nav-item nav-link' >Register</a>            
                </div>
                
            </div>
        </nav>
        );
    }
}


export default Navigation;