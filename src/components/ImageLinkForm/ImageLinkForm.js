import React from 'react';



const ImageLinkForm = () =>{
    return(
        <div className="form center">
          <form className="form-inline center">
            <div className="form-group mb-2 full-width">
                <input type="text" className="form-control full-width" id="inputPassword2" placeholder="Insert image link here ..." />
            </div>
      
            <button type="submit" className="btn btn-primary mb-2">Detect</button>
            </form>
        </div>
    )
}

export default ImageLinkForm;