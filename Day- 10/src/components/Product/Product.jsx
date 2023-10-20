import React from 'react';
import "./script"
import "./product.css"
import { WidthFull } from '@mui/icons-material';

const Product = () => {
  return (
    <div>
        <h2 className="text-center mt-2">Service Category</h2>
         <input type="text" className="form-control mt-3 mx-auto" id="myinput" placeholder="Searching..." style={{Width:"20%"}}/>
        <div className="container-service">
            <h3 classname="text-danger mt-5 text-center" id="para" style={{display:"none"}}>Not Found</h3>
            <div className="row mt-3" id="card">

            </div>
        </div>

    
    </div>
  );
}

export default Product;
