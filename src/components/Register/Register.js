import React from 'react';

const Register = ({onRouteChange}) =>{
    return(
       <div className="full-width center mb-3 card signin-card" style={{"width":"20rem"}}>
          <div className="card-body">
            <form>
                <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <button onClick={() => onRouteChange('home')} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
       </div>
        );
}


export default Register;