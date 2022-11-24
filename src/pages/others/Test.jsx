import React from 'react'
import Shape1 from "../../assets/images/shapes/shape-04-01.png"
import Shape2 from "../../assets/images/shapes/shape-02-08.png"
import Shape3 from "../../assets/images/shapes/shape-15.png"

export default function Test() {

  const steps = [
    {name: 'StepOne', component: <StepOne/>},
    {name: 'StepTwo', component: <StepTwo/>},
  ];

  return (
    <div className="main-wrapper">
      <div className="edu-contact-us-area eduvibe-contact-us edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
            <div className="row g-5 mt--20">
                    <div className="col-lg-6">
                        jopj
                    </div>

                    <div className="col-lg-6">
                        <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="https://eduvibe.html.devsvibe.com/mail.php">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input name="contact-name" id="contact-name" type="text" className="form-control form-control-lg" placeholder="Name*"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" id="contact-email" name="contact-email" placeholder="Email*"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="contact-phone" id="contact-phone" placeholder="Phone"/>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" id="subject" name="subject" placeholder="Subject"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <textarea className="form-control" name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <button className="rn-btn edu-btn w-100" name="submit" type="submit">
                                    <span>Submit Now</span><i className="icon-arrow-right-line-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
              
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image scene shape-image-1">
                        <span data-depth="-2.2">
                            <img src={Shape1} alt="Shape Thumb"/>
                        </span>
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src={Shape2} alt="Shape Thumb"/>
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src={Shape3} alt="Shape Thumb"/>
                    </div>
                </div>
           
            </div>
        </div>
    </div>
  )
}



function StepOne(){
  return <>
    Hello
  </>
}

function StepTwo(){
  return <>
    Hello
  </>
}