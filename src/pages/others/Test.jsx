import React from 'react'
import Shape1 from "../../assets/images/shapes/shape-04-01.png"
import Shape2 from "../../assets/images/shapes/shape-02-08.png"
import Shape3 from "../../assets/images/shapes/shape-15.png"
import Breadcumb from './Breadcumb';
import Offer from './Offer';
import { Link } from 'react-router-dom';

export default function Test() {

    const steps = [
        { name: 'StepOne', component: <StepOne /> },
        { name: 'StepTwo', component: <StepTwo /> },
    ];

    return (
        <div className="main-wrapper">
            <Breadcumb pageName="PHP-JS (Laravel + React JS)" />
            <div className="container">
            <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="d-flex justify-content-between">
                                <Link to="/">
                                <button className="rn-btn edu-btn w-100" name="submit" type="submit">
                                <i className="ri-arrow-left-line me-3"></i><span>Page d'accueil</span>
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="edu-contact-us-area eduvibe-contact-us edu-section-gap bg-color-white">
                <div className="container eduvibe-animated-shape">
                    

                    <Offer />
                    <div className="row g-5 mt--20">
                        <div className="col-lg-6">
                            <div className="row g-5">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                            <div className="contact-address-card-1 website">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="ri-global-line"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Constitution du dossier </h6>
                                        <p><a href="https://example.com/" target="_blank">www.example.com</a></p>
                                        <p><a href="https://themeforest.net/" target="_blank">www.theme.net</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                            <div className="contact-address-card-1 phone">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icon-Headphone"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Etude de dossier</h6>
                                        <p><a href="tel:+2763(388)2930">+2763 (388) 2930</a></p>
                                        <p><a href="tel:+4875(356)2568">+4875 (356) 2568</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                            <div className="contact-address-card-1 email">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icon-mail-open-line"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Mise à Niveau</h6>
                                        <p><a href="mailto:eduvibe@example.com" target="_blank">eduvibe@example.com</a></p>
                                        <p><a href="mailto:contact@eduvibe.com" target="_blank">contact@eduvibe.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                            <div className="contact-address-card-1 location">
                                <div className="inner">
                                    <div className="icon">
                                        <i className="icon-map-pin-line"></i>
                                    </div>
                                    <div className="content">
                                        <h6 className="title">Débuter la forrmation</h6>
                                        <p>486 Normana Avenue Morningtide, 4223</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <form className="rnt-contact-form rwt-dynamic-form row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input name="contact-name" id="contact-name" type="text" className="form-control form-control-lg" placeholder="Name*" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-lg" id="contact-email" name="contact-email" placeholder="Email*" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" name="contact-phone" id="contact-phone" placeholder="Phone" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-lg" id="subject" name="subject" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea className="form-control" name="contact-message" id="contact-message" placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button className="rn-btn edu-btn w-100" name="submit" type="submit">
                                        <span>Réserver ma place pour la prochaine session</span><i className="icon-arrow-right-line-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image scene shape-image-1">
                            <span data-depth="-2.2">
                                <img src={Shape1} alt="Shape Thumb" />
                            </span>
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src={Shape2} alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src={Shape3} alt="Shape Thumb" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



function StepOne() {
    return <>
        Hello
    </>
}

function StepTwo() {
    return <>
        Hello
    </>
}