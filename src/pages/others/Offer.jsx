import React from 'react'
import Icon1 from "../../assets/images/icons/service-icon-01.png"
import Icon2 from "../../assets/images/icons/service-icon-02.png"
import Icon3 from "../../assets/images/icons/service-icon-03.png"
import Icon4 from "../../assets/images/icons/offer-icon-01.png"
import Icon5 from "../../assets/images/icons/offer-icon-02.png"
import Icon6 from "../../assets/images/icons/offer-icon-03.png"
import Icon7 from "../../assets/images/icons/offer-icon-04.png"


export default function Offer() {
    return (
        <>
            <div className="eduvibe-about-us-one-service edu-service-area edu-section-gapBottom bg-color-white service-bg-position">
                <div className="container eduvibe-animated-shape">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center" >
                                <span className="pre-title">Bootcamp START : Développeur web Junior</span>
                                <h3 className="title">Une opportunité unique à saisir <br />  maintenant !</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--20">
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="service-card service-card-2 card-bg-1">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="#">
                                            <img src={Icon4} alt="Service Images" />
                                        </a>
                                        <Icon />
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="#">Cours à distance</a></h6>
                                        <p className="description">Suivez nos cours en ligne avec des coachs qualifiés et des outils adéquats.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="service-card service-card-2 card-bg-2">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="#">
                                            <img src={Icon5} alt="Service Images" />
                                        </a>
                                        <Icon />
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="#">Coachs qualifiés</a></h6>
                                        <p className="description">Nos coachs sont qualifiés et ont déjà des expériences en entreprise.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="service-card service-card-2 card-bg-3">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="#">
                                            <img src={Icon6} alt="Service Images" />
                                        </a>
                                        <Icon />
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="#">Certification</a></h6>
                                        <p className="description">Obtenez votre certicication après avoir valider les modules et votre projet.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12" >
                            <div className="service-card service-card-2 card-bg-4">
                                <div className="inner">
                                    <div className="icon">
                                        <a href="#">
                                            <img src={Icon7} alt="Service Images" />
                                        </a>
                                        <Icon />
                                    </div>
                                    <div className="content">
                                        <h6 className="title"><a href="#">Guide de carrière</a></h6>
                                        <p className="description">Vous recevez un accompagnement avec insertion pour votre carrière.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="assets/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="assets/images/shapes/shape-02-07.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="assets/images/shapes/shape-15.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


function Icon() {
    return <>
        <div className="shape-list">
            <img className="shape shape-1" src={Icon1} alt="Shape Images" />
            <img className="shape shape-2" src={Icon2} alt="Shape Images" />
            <img className="shape shape-3" src={Icon3} alt="Shape Images" />
        </div>
    </>
}