import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoadingContext } from "react-router-loading";
import LogoColor from "../../assets/images/logo-color.png"
import Shape1 from "../../assets/images/shapes/shape-11-06.png"
import Shape2 from "../../assets/images/shapes/shape-09-02.png"
import Shape3 from "../../assets/images/shapes/shape-03-02.png"
import Shape4 from "../../assets/images/shapes/shape-14-04.png"
import Shape5 from "../../assets/images/shapes/shape-03-08.png"
import Shape6 from "../../assets/images/shapes/shape-01-02.png"
import Typed from 'typed.js';
import Countdown from 'react-countdown';

export default function Coming() {
  const loadingContext = useLoadingContext();

  const loading = async () => {
    loadingContext.done();
  };

   useEffect( ()=>{
    let typed = new Typed('.title', {
      strings: ['We Are Making <br/> Something Specials'],
      typeSpeed: 100,
      loop: true,
      startDelay: 100,
      showCursor: false,
    });

  },)

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
    } else {
      // Render a countdown
      return <div className="countdown-style-2">
              <div className="countdown" data-date="2022-12-30">
                <div className="countdown-container days">
                  <span className="countdown-value">{days}</span>
                  <span className="countdown-heading">Days</span>
                </div>
                <div className="countdown-container hours">
                  <span className="countdown-value">{hours}</span>
                  <span className="countdown-heading">Hours</span>
                </div>
                <div className="countdown-container minutes">
                  <span className="countdown-value">{minutes}</span>
                  <span className="countdown-heading">Minutes</span>
                </div>
                <div className="countdown-container seconds">
                  <span className="countdown-value">{seconds}</span>
                  <span className="countdown-heading">Seconds</span>
                </div>
              </div>
            </div>
    }
  }





  return (
   <>
     <div className="main-wrapper">
      <div className="eduvibe-coming-soon edu-coming-soon-area edu-coming-soon-style ptb--150 ptb_md--80 ptb_sm--80 bg-image">
        <div className="container eduvibe-animated-shape">
          <div className="row g-5">
            <div className="col-xl-10 offset-xl-1">
              <div className="content text-center">
                <div className="logo">
                  <Link to="/">
                    <img src={LogoColor} alt="" className="logo-size" />
                  </Link>
                  <h1 className="title"></h1>
                  <Countdown date={Date.now() + 2592000*1000} renderer={renderer}></Countdown>
                  <p className="description">
                    <span className="fw-bold">3W Academy</span> est un  
                    <span className="fw-bold"> bootcamp </span>  
                    accélérateur de carrières dans les métiers du <span className="fw-bold">développement WEB et Mobile</span> à travers des formations courtes, intensives et <span className="fw-bold">90% pratiques</span>.
                    </p>
                    <p className="description">
                    Au Maroc, +450 lauréats ont réussi cette formation et 87% décrochent un job ou à lancent leurs propres projets moins de 6 mois après leur certification, pourquoi pas toi ?
                    </p>
                    <div className="newsletter-style-6">
                        {/* <form className="newsletter-form-style-2" action="#"> */}
                            {/* <input type="email" placeholder="Enter your mail address"/> */}
                            <Link to="/php-laravel-react-js">                            
                              <button className="edu-btn w-75">Rejoindre une formation <i className="icon-arrow-right-line-right"></i></button>
                            </Link>
                        {/* </form> */}
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-1">
              <img src={Shape1} alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-2">
              <img src={Shape2} alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-3">
              <img src={Shape3} alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-4">
              <img src={Shape4} alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-5">
              <img src={Shape5} alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-6">
              <img src={Shape6} alt="Shape Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
   </>
  )
}



