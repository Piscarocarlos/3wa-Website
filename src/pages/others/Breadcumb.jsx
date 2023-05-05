import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcumb(props) {
  return (
    <>
           <div className="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner text-start">
                            <div className="page-title">
                                <h3 className="title">{props.pageName}</h3>
                            </div>
                            <nav className="edu-breadcrumb-nav">
                                <ol className="edu-breadcrumb d-flex justify-content-start liststyle">
                                    <li className="breadcrumb-item"><Link to="/">Accueil</Link></li>
                                    <li className="separator"><i className="ri-arrow-drop-right-line"></i></li>
                                    <li className="breadcrumb-item active" aria-current="page">{props.pageName}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="assets/images/shapes/shape-03.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src="assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-5">
                            <img src="assets/images/shapes/shape-36.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-6">
                            <img src="assets/images/shapes/shape-05-07.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
