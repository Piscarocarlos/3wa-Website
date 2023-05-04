import React from 'react'
import Shape1 from "../../assets/images/shapes/shape-04-01.png"
import Shape2 from "../../assets/images/shapes/shape-02-08.png"
import Shape3 from "../../assets/images/shapes/shape-15.png"
import Breadcumb from './Breadcumb';
import Offer from './Offer';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

export default function BootcampStart() {

    const formik = useFormik({
        initialValues:
                        {
          age:'',
          tel:'',
          email:'',
                        }
                    })

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
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="contact-address-card-1 website col-lg-3 col-md-3 col-sm-6 col-12">
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
                                <div className="contact-address-card-1 phone col-lg-3 col-md-3 col-sm-6 col-12">
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
                                <div className="contact-address-card-1 email col-lg-3 col-md-3 col-sm-6 col-12">
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
                                <div className="contact-address-card-1 location col-lg-3 col-md-3 col-sm-6 col-12">
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

                    <div className="row mt--50">
                        
                        <div className="col-lg-12 formu">
                            {/* Zoho form added */}
                            <div id="formul">
                            {/* Change or deletion of the name attributes in the input tag will lead to empty values on record submission */}
                                <form action='https://forms.zohopublic.com/digital29/form/Condidature/formperma/IyN0pLL11VNAJQAupqDO-ubF0P7VMeBVIMPzzVNPo-E/htmlRecords/submit' name='form' id='form' method='POST' accept-charset='UTF-8' enctype='multipart/form-data'>
                                    <input type="hidden" name="zf_referrer_name" value=""/>{/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
                                    <input type="hidden" name="zf_redirect_url" value=""/>{/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field  */}
                                    <input type="hidden" name="zc_gad" value=""/>{/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM */}
                                    <h2 id="h2">Formulaire de prise de contact</h2>
                                    <p id="para">Bonjour HERO,
                                        Merci pour ton intérêt.
                                        Nous avons hâte de discuter avec toi !
                                        Les informations que tu partageras avec nous seront traités pour pouvoir rentrer en contact avec toi, ainsi t'aider à faire le meilleur choix de carrière, nos Advisors sont là pour vous aider à décider.</p>
                                    {/* Nom complet */}
                                    <div className="form-group">
                                        <label id="label"> Nom et prénom :
                                            <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Name_First" fieldType="7" placeholder="" required />
                                    </div>
                                    {/* Age */}
                                    <div className="form-group">
                                        <label id="label"> Age :
                                            <em>*</em>
                                        </label>
                                        <input type="text" name="age" value={formik.values.age} onChange={formik.handleChange} maxlength="18" placeholder="" required/>
                                    </div>
                                    {/* Tel */}
                                    <div className="form-group">
                                        <label id="label"> Numéro de télephone :
                                            <em>*</em>
                                        </label>
                                        <input type="text" compname="PhoneNumber" name="tel" phoneFormat="1" isCountryCodeEnabled="false" maxlength="20" value={formik.values.tel} onChange={formik.handleChange} fieldType="11" id="international_PhoneNumber_countrycode" placeholder="" required/>
                                    </div>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label id="label"> Adresse email :
                                            <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="email" value={formik.values.email} onChange={formik.handleChange} fieldType="9" placeholder="" required/>
                                    </div>
                                    
                                    {/* Situation Actuelle */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre situation actuelle :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="full">Employé à temps plein</option>
                                        <option value="recherche">En recherche d'emploi depuis plus d'un an</option>
                                        <option value="etudiant">Etudiant</option>
                                        <option value="full">Fraichement diplômé, en recherche d'emploi (&lt; 1 an)</option>
                                        <option value="Freelancer">Freelancer</option>
                                    </select>
                                    </div>
                                    {/* Niveau d'etude */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre niveu d'étude :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="sans bac">Sans Bac</option>
                                        <option value="bachelier">Bachelier</option>
                                        <option value="bac+2">Bac+2</option>
                                        <option value="bac+3/4">Bac+3/4</option>
                                        <option value="bac+5">Bac+5</option>
                                    </select>
                                    </div>
                                    {/* ville de résidence */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre ville de résidence :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="Casablanca">Casablanca</option>
                                        <option value="Rabat">Rabat</option>
                                        <option value="Tanger">Tanger</option>
                                        <option value="Marrakech">Marrakech</option>
                                        <option value="Agadir">Agadir</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                    </div>
                                    {/* niveau maitrise francais */}                                    
                                    <div className="form-group">
                                        <label id="label">Quel est votre niveau de maîtrise de la langue française ?
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="Casablanca">Débutant</option>
                                        <option value="Rabat">Intermédiaire</option>
                                        <option value="Tanger">Avancé</option>
                                    </select>
                                    </div>
                                    {/* souhaitez-vous rejoindre la 3W Academy */}                                    
                                    <div className="form-group">
                                        <label id="label">Pourquoi souhaitez-vous rejoindre la 3W Academy ?
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="SWITCHER">Je veux SWITCHER vers une carrière en Développement WEB</option>
                                        <option value="BOOSTER">Je veux BOOSTER mon profil à travers un portfolio de projets réels</option>
                                        <option value="AJOUTER">Je veux AJOUTER la compétence Dév à ma compétence actuelle</option>
                                        <option value="DEMARRER">Je veux DEMARRER un projet ou une startup dans la TECH</option>
                                        <option value="LANCER">Je veux LANCER ma carrière dans le développement web / mobile</option>
                                    </select>
                                    </div>
                                    {/* Bootcamp */}                                    
                                    <div className="form-group">
                                        <label id="label">Bootcamp souhaité :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="START">START</option>
                                        <option value="MASTERY">MASTERY</option>
                                    </select>
                                    </div>
                                    {/* Rythme  */}                                    
                                    <div className="form-group">
                                        <label id="label">Rythme souhaité :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="Temps plein">Temps plein</option>
                                        <option value="Temps partiel - en présentiel">Temps partiel - en présentiel</option>
                                        <option value="Temps partiel - en ligne">Temps partiel - en ligne</option>
                                    </select>
                                    </div>
                                    {/* Campus   */}                                    
                                    <div className="form-group">
                                        <label id="label">Campus souhaité :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="horaire" required>
                                        <option value="Casablanca">Casablanca - Tour Habous</option>
                                        <option value="Online">Online Learning</option>
                                        <option value="Rabat">Rabat</option>
                                    </select>
                                    </div>
                                    {/* Comment avez-vous connu la 3W Academy ?   */}                                    
                                    <div className="form-group">
                                        <label id="label"> Comment avez-vous connu la 3W Academy ?
                                            <em>*</em>
                                        </label>
                                        <select id="horaire" name="horaire" required>
                                        <option value="connaissance">Par un ami / une connaissance</option>
                                        <option value="Online">Publicité online</option>
                                        <option value="search">En faisant des recherches</option>
                                        <option value="club">A travers mon université / club étudiant</option>
                                        <option value="Autre">Autre</option>
                                        </select>
                                    </div>
                                    <div class="tempContDiv " elemid="tempcontdiv">
                                        <div class="termsContainer">
                                            <input className='check' type="checkbox" id="accept" />
                                            <label for="accept">J'accepte les termes et conditions.</label>
                                        </div>
                                    </div>
                                    <button id="btn" type="submit" value="submit">Validé</button>
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