import React from 'react';

const Navigation = () =>{
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
                    <a className='nav-item nav-link active' href=''>Login <span className='sr-only'>(current)</span></a>
                    <a className='nav-item nav-link' href=''>Register</a>
                </div>
            </div>
        </nav>
        );
}


export default Navigation;