import React from 'react';
import "./category.css"
import { Link } from 'react-router-dom';
import smartphone from "../../assests/smart phone.jpg"
import laptop from "../../assests/Laptop.jpg"
import monitor from "../../assests/Monitor.jpg"
import tablet from "../../assests/Tablet.jpg"
import printer from "../../assests/Printer and Scanner.jpg"
import wearable from "../../assests/Wearable Device.jpg"
import desktop from "../../assests/Desktop.jpg"
import camera from "../../assests/Camera.jpg"
import audio from "../../assests/Audio.jpg"
import ac from "../../assests/AC.jpg"
import fridge from "../../assests/Fridge.jpg"
const Category = () => {
    
  return (
    <div>
        <section className="products">
            <h2>Service Categories</h2>
            <div className="all-products">
                <div className="product">
                    <img src={smartphone} alt="/" />
                    <div className="product-info">
                        <h4 className="product-title">Smart Phone Repair</h4>
                        <h4 className="product-price">Rs. 1000/hr</h4>
                        <h4 className="product-title">Provider Name: Ashwin</h4>
					  
					    <Link to="/serviceregister" className="product-btn">Book</Link>
                    </div>
			    </div>
                <div className="product">
                    <img src={laptop} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Laptop Service</h4>
                        <h4 className="product-title">Rs. 1200/hr</h4>
                        <h4 className="product-title">Provider Name: Ram</h4>
                
                       
					    
                        <Link to="/serviceregister" className="product-btn">Book</Link>

				    </div>
			     </div>
                <div className="product">
                    <img src={monitor} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Monitor Service </h4>
                        <h4 className="product-title">Rs. 1300/hr</h4>
                        <h4 className="product-title">Provider Name: Arun</h4>
                    
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={tablet} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Tablet Service</h4>
                        <h4 className="product-title">Rs. 1100/hr</h4>
                        <h4 className="product-title">Provider Name: Varun</h4>

                        <Link to="/serviceregister" className="product-btn">Book</Link>
                        

                    </div>
                </div>
                <div className="product">
                    <img src={printer} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Printer and Scanner Service</h4>
                        <h4 className="product-title">Rs. 1000/hr</h4>
                        <h4 className="product-title">Provider Name: Sachin</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={wearable} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Wearable Device Service</h4>
                        <h4 className="product-title">Rs. 1000/hr</h4>
                        <h4 className="product-title">Provider Name: Gokul</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={desktop} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Desktop Service</h4>
                        <h4 className="product-title">Rs. 1000/hr</h4>
                        <h4 className="product-title">Provider Name: Srinivas</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={camera} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Camera Service</h4>
                        <h4 className="product-title">Rs. 1300/hr</h4>
                        <h4 className="product-title">Provider Name: Rahul</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={audio} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Audio Service</h4>
                        <h4 className="product-title">Rs. 1200/hr</h4>
                        <h4 className="product-title">Provider Name: Nantha</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={ac} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">AC Repair Service</h4>
                        <h4 className="product-title">Rs. 1200/hr</h4>
                        <h4 className="product-title">Provider Name: Yuven</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>

                    </div>
                </div>
                <div className="product">
                    <img src={fridge} alt="/"/>
                    <div className="product-info">
                        <h4 className="product-title">Fridge Repair Service</h4>
                        <h4 className="product-title">Rs. 1100/hr</h4>
                        <h4 className="product-title">Provider Name: Vikram</h4>
                        <Link to="/serviceregister" className="product-btn">Book</Link>
                    </div>
                </div>
		    </div>
	    </section>


    </div>
  );
}

export default Category;
