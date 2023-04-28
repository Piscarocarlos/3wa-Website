import React from 'react'
import Shape1 from "../../assets/images/shapes/shape-04-01.png"
import Shape2 from "../../assets/images/shapes/shape-02-08.png"
import Shape3 from "../../assets/images/shapes/shape-15.png"
import Breadcumb from './Breadcumb';
import Offer from './Offer';
import { Link } from 'react-router-dom';

export default function BootcampStart() {

    return (
        <div className="main-wrapper">
            <Breadcumb pageName="Bootcamp START" />
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
                                                <h6 className="title">Candidature </h6>
                                                <p><Link to="#" target="_blank">www.3wa.ma</Link></p>
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
                                                <h6 className="title">Contact</h6>
                                                <p><a href="tel:+2763(388)2930">+212 707-143777</a></p>
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
                                                <h6 className="title">Infos </h6>
                                                <p><Link href="#" target="_blank">Hello@3wa.io</Link></p>
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
                                                <h6 className="title">Campus</h6>
                                                <p>Casablanca, Rabat et en ligne.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 formu">
                            {/* Zoho form added */}
                            <div id="formul">
                                <form action='https://forms.zohopublic.com/digital29/form/Signup/formperma/lBbcxi_tt_j0ydwjo7Iaga2OjpmN9a05Sj4iiC2HQrM/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
                                    <input type="hidden" name="zf_referrer_name" value="" />
                                    <input type="hidden" name="zf_redirect_url" value="" />
                                    <input type="hidden" name="zc_gad" value="" />
                                    <h2 id="h2">Formulaire de prise de contact</h2>
                                    <p id="para">Bonjour HERO,
                                        Merci pour ton intérêt.
                                        Nous avons hâte de discuter avec toi !
                                        Les informations que tu partageras avec nous seront traités pour pouvoir rentrer en contact avec toi, ainsi t'aider à faire le meilleur choix de carrière, nos Advisors sont là pour vous aider à décider.</p>
                                    <div className="form-group">
                                        <label id="label"> Nom et prénom:
                                            <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Name_First" fieldType="7" placeholder="" required />
                                    </div>

                                    <div className="form-group">
                                        <label id="label"> Adresse email:
                                            <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Email" value="" fieldType="9" placeholder="" required />
                                    </div>
                                    <div className="form-group">
                                        <label id="label"> Numéro de télephone:
                                            <em>*</em>
                                        </label>
                                        <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled="false" maxlength="20" value="" fieldType="11" id="international_PhoneNumber_countrycode" placeholder="" required />
                                    </div>
                                    <div className="form-group">
                                        <label id="label">Horaire:
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="full">Temps plein</option>
                                        <option value="part">temps partiel</option>
                                        <option value="online">en ligne</option>
                                    </select>
                                    </div>
                                    

                                    <div class="tempContDiv " elemid="tempcontdiv">
                                        <div class="termsContainer">
                                            <input className='check' type="checkbox" id="accept" />
                                            <label for="accept">J'accepte les termes et conditions.</label>
                                        </div>
                                    </div>
                                    <button id="btn" type="submit">Validé</button>
                                </form>
                            </div>
                        </div>
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