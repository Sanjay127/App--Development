import React from 'react';
import "./review.css"
import Review1 from "../../assests/review1.jpg"
import Review2 from "../../assests/review2.jpg"
import Review3 from "../../assests/review3.jpg"

const Review = () => {
  return (
    <div>
      <div className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div className="border"></div>

        <div className="row">
          <div className="col">
            <div className="testimonial">
              <img src={Review1} alt="/"/>
              <div className="name">Kumar</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <p>
              I can't say enough about the incredible electronic services provided by this MarketPlace. As a small business owner, I rely heavily on technology to streamline my operations, and This MarketPlace has been a game-changer for me.
              Their electronic services have simplified so many aspects of my business. From online payment processing that allows my customers to pay with ease to secure document management systems that keep my sensitive data protected, this MarketPlace has exceeded my expectations at every turn.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src={Review2} alt="/"/>
              <div className="name">Ganesh</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
              I recently started using this electronic services, and I'm thoroughly impressed with the level of convenience and efficiency they've brought into my life.
              Their online payment solutions have made managing my finances a breeze. I can easily pay bills, transfer funds, and monitor my accounts from the comfort of my home. It's not just about saving time; it's about the peace of mind that comes with knowing my transactions are secure.
             
              </p>
            </div>
          </div>

          <div className="col">
            <div className="testimonial">
              <img src={Review3} alt="/"/>
              <div className="name">Full name</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>

              <p>
              I've been a loyal customer of this for a while now, and I wanted to take a moment to express how their electronic services have transformed the way I conduct business.

As a professional in a fast-paced industry, time is of the essence, and efficiency is paramount. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Review;
