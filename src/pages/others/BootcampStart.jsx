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
                            Name_First:"",
                            Name_Last:"",
                            Number: "",
                            PhoneNumber_countrycode:"",
                            Email:"",
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
                                        <label id="label">Prénom
                                        <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Name_First" fieldType="7" value={formik.values.Name_First} onChange={formik.handleChange} placeholder="" />

                                        <label id="label">Nom
                                        <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Name_Last" value={formik.values.Name_Last} onChange={formik.handleChange} fieldType="7" placeholder="" />
                                        
                                    </div>
                                    {/* Age */}
                                    <div className="form-group">
                                        <label id="label"> Age 
                                        <em>*</em>
                                        </label>
                                        <input type="text" name="Number" value={formik.values.Number} onChange={formik.handleChange} maxlength="18" placeholder="" />
                                    </div>
                                    {/* Tel */}
                                    <div className="form-group">
                                        <label id="label"> Numéro de téléphone 
                                        <em>*</em>
                                        </label>
                                        <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneFormat="1" isCountryCodeEnabled="false" maxlength="20" value={formik.values.PhoneNumber_countrycode} onChange={formik.handleChange} fieldType="11" id="international_PhoneNumber_countrycode" placeholder="" />
                                    </div>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label id="label"> E-mail 
                                        <em>*</em>
                                        </label>
                                        <input type="text" maxlength="255" name="Email" value={formik.values.Email} onChange={formik.handleChange} fieldType="9" placeholder="" />
                                    </div>
                                    
                                    {/* Situation Actuelle */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre situation actuelle :
                                        <em>*</em>
                                    </label>
                                        <input type="checkbox" id="Checkbox_1" name="Checkbox" value="Employ&eacute;&#x20;&agrave;&#x20;temps&#x20;plein"/>
                                        <label for="Checkbox_1">Employ&eacute;&#x20;&agrave;&#x20;temps&#x20;plein</label>
                                        <input type="checkbox" id="Checkbox_2" name="Checkbox" value="En&#x20;recherche&#x20;d&#x27;emploi&#x20;depuis&#x20;plus&#x20;d&#x27;un&#x20;an"/>
                                        <label for="Checkbox_2">En&#x20;recherche&#x20;d&#x27;emploi&#x20;depuis&#x20;plus&#x20;d&#x27;un&#x20;an</label>
                                        <input type="checkbox" id="Checkbox_3" name="Checkbox" value="Etudiant"/>
                                        <label for="Checkbox_3">Etudiant</label>
                                        <input type="checkbox" id="Checkbox_4" name="Checkbox" value="Fraichement&#x20;dipl&ocirc;m&eacute;,&#x20;en&#x20;recherche&#x20;d&#x27;emploi&#x20;&#x28;&lt;1&#x20;an&#x29;"/>
                                        <label for="Checkbox_4">Fraichement&#x20;dipl&ocirc;m&eacute;,&#x20;en&#x20;recherche&#x20;d&#x27;emploi&#x20;&#x28;&lt;1&#x20;an&#x29;</label>
                                        <input type="checkbox" id="Checkbox_5" name="Checkbox" value="Freelancer"/>
                                        <label for="Checkbox_5">Freelancer</label>
                                    </div>
                                    {/* Niveau d'etude */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre niveu d'étude :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown2" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="Bac&#x2b;5&#x20;et&#x20;&#x2b;">Bac&#x2b;5 et &#x2b;</option>
                                        <option value="Bac&#x2b;3&#x2f;4">Bac&#x2b;3&#x2f;4</option>
                                        <option value="Bac&#x2b;2" selected>Bac&#x2b;2</option>
                                        <option value="Bachelier">Bachelier</option>
                                        <option value="Sans&#x20;Bac">Sans Bac</option>
                                    </select>
                                    </div>
                                    {/* ville de résidence */}                                    
                                    <div className="form-group">
                                        <label id="label">Votre ville de résidence :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown3" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="Casablanca">Casablanca</option>
                                        <option value="Rabat">Rabat</option>
                                        <option value="Tanger" selected>Tanger</option>
                                        <option value="Marrakech">Marrakech</option>
                                        <option value="Agadir">Agadir</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                    </div>
                                    {/* niveau maitrise francais */}                                    
                                    <div className="form-group">
                                        <label id="label">Quel est votre niveau de maîtrise de la langue française ?
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown5" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="D&eacute;butant">D&eacute;butant</option>
                                        <option value="Interm&eacute;diaire">Interm&eacute;diaire</option>
                                        <option value="Avanc&eacute;">Avanc&eacute;</option>
                                    </select>
                                    </div>
                                    {/* souhaitez-vous rejoindre la 3W Academy */}                                    
                                    <div className="form-group">
                                        <label id="label">Pourquoi souhaitez-vous rejoindre la 3W Academy ?
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown1" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="Je&#x20;veux&#x20;SWITCHER&#x20;vers&#x20;une&#x20;carri&egrave;re&#x20;en&#x20;D&eacute;veloppement&#x20;WEB">Je veux SWITCHER vers une carri&egrave;re en D&eacute;veloppement WEB</option>
                                        <option value="Je&#x20;veux&#x20;BOOSTER&#x20;mon&#x20;profil&#x20;&agrave;&#x20;travers&#x20;un&#x20;portfolio&#x20;de&#x20;projets&#x20;r&eacute;els">Je veux BOOSTER mon profil &agrave; travers un portfolio de projets r&eacute;els</option>
                                        <option value="Je&#x20;veux&#x20;AJOUTER&#x20;la&#x20;comp&eacute;tence&#x20;D&eacute;v&#x20;&agrave;&#x20;ma&#x20;comp&eacute;tence&#x20;actuelle">Je veux AJOUTER la comp&eacute;tence D&eacute;v &agrave; ma comp&eacute;tence actuelle</option>
                                        <option value="Je&#x20;veux&#x20;DEMARRER&#x20;un&#x20;projet&#x20;ou&#x20;une&#x20;startup&#x20;dans&#x20;la&#x20;TECH">Je veux DEMARRER un projet ou une startup dans la TECH</option>
                                        <option value="Je&#x20;veux&#x20;LANCER&#x20;ma&#x20;carri&egrave;re&#x20;dans&#x20;le&#x20;d&eacute;veloppement&#x20;web&#x20;&#x2f;&#x20;mobile">Je veux LANCER ma carri&egrave;re dans le d&eacute;veloppement web &#x2f; mobile</option>
                                    </select>
                                    </div>
                                    {/* Bootcamp */}                                    
                                    <div className="form-group">
                                        <label id="label">Bootcamp souhaité :
                                        <em>*</em>
                                    </label>
                                        <input type="checkbox" id="MultipleChoice_1" name="MultipleChoice" value="START"/>
                                        <label for="MultipleChoice_1">START</label>
                                        <input type="checkbox" id="MultipleChoice_2" name="MultipleChoice" value="MASTERY"/>
                                        <label for="MultipleChoice_2">MASTERY</label>
                                    </div>
                                    {/* Rythme  */}                                    
                                    <div className="form-group">
                                        <label id="label">Rythme souhaité :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown4" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="Temps&#x20;plein">Temps plein</option>
                                        <option value="Temps&#x20;partiel&#x20;-&#x20;en&#x20;pr&eacute;sentiel">Temps partiel - en pr&eacute;sentiel</option>
                                        <option value="Temps&#x20;partiel&#x20;-&#x20;en&#x20;ligne">Temps partiel - en ligne</option>
                                    </select>
                                    </div>
                                    {/* Campus   */}                                    
                                    <div className="form-group">
                                        <label id="label">Campus souhaité :
                                        <em>*</em>
                                    </label>
                                    <select id="horaire" name="Dropdown" >
                                        <option selected="true" value="-Select-">-Select-</option>
                                        <option value="Casablanca&#x20;-&#x20;Tour&#x20;Habous" selected>Casablanca - Tour Habous</option>
                                        <option value="Online&#x20;Learning">Online Learning</option>
                                        <option value="Rabat">Rabat</option>
                                    </select>
                                    </div>
                                    {/* Comment avez-vous connu la 3W Academy ?   */}                                    
                                    <div className="form-group">
                                        <label id="label"> Comment avez-vous connu la 3W Academy ?
                                            <em>*</em>
                                        </label>
                                        <input type="checkbox" id="MultipleChoice1_1" name="MultipleChoice1" value="Par&#x20;un&#x20;ami&#x20;&#x2f;&#x20;une&#x20;connaissance"/>
                                        <label for="MultipleChoice1_1">Par&#x20;un&#x20;ami&#x20;&#x2f;&#x20;une&#x20;connaissance</label>
                                        <input type="checkbox" id="MultipleChoice1_2" name="MultipleChoice1" value="Publicit&eacute;&#x20;online"/>
                                        <label for="MultipleChoice1_2">Publicit&eacute;&#x20;online</label>
                                        <input type="checkbox" id="MultipleChoice1_3" name="MultipleChoice1" value="En&#x20;faisant&#x20;des&#x20;recherches"/>
                                        <label for="MultipleChoice1_3">En&#x20;faisant&#x20;des&#x20;recherches</label>
                                        <input type="checkbox" id="MultipleChoice1_4" name="MultipleChoice1" value="A&#x20;travers&#x20;mon&#x20;universit&eacute;&#x20;&#x2f;&#x20;club&#x20;&eacute;tudiant"/>
                                        <label for="MultipleChoice1_4">A&#x20;travers&#x20;mon&#x20;universit&eacute;&#x20;&#x2f;&#x20;club&#x20;&eacute;tudiant</label>
                                        <input type="checkbox" id="MultipleChoice1_5" name="MultipleChoice1" value="Autre"/>
                                        <label for="MultipleChoice1_5">Autre</label>
                                    </div>
                                    <div class="tempContDiv " elemid="tempcontdiv">
                                        <div class="termsContainer">
                                            <input className='check' type="checkbox" id="accept" />
                                            <label for="accept">J'accepte les termes et conditions.</label>
                                        </div>
                                    </div>
                                    <button id="btn" type="submit" value="submit" formaction="https://forms.zohopublic.com/digital29/form/Condidature/formperma/IyN0pLL11VNAJQAupqDO-ubF0P7VMeBVIMPzzVNPo-E/htmlRecords/submit">Validé</button>
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