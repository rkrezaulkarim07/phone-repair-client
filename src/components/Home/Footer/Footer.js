import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookSquare, faGooglePlus, faGooglePlusSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="footer-container">
            <div className="row container text-center ms-5 d-flex">
                <div className="col-md-4 single-part text-white">
                    <div className="d-flex">
                        <img style={{ width: '50px' }} className="ms-5" src="https://i.ibb.co/5Tk2GhN/repair.png" alt="" />
                        <h1 className="text-white">Phone Repair</h1>
                    </div>
                    <p className="container mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil, quos perferendis inventore iure quidem officiis sit saepe excepturi natus dicta nemo alias magnam iste aut voluptatibus aspernatur, ullam suscipit rem, vero repellendus voluptatem provident exercitationem! Corporis est commodi reiciendis!</p>
                </div>
                <div className="col-md-4 single-part text-white">
                    <h5>COMPANY</h5>
                    <div className="d-flex justify-content-center container">
                        <div>
                            <p style={{ marginTop: '10px' }}><a className="text-white" href="">Home</a></p>
                            <p style={{ marginTop: '' }}><a className="text-white" href="">About us</a></p>
                            <p style={{ marginRight: '30px' }}><a className="text-white" href="">Services</a></p>
                        </div>
                        <div>
                            <p style={{ marginTop: '10px' }}><a className="text-white" href="">Review</a></p>
                            <p style={{ marginTop: '' }}><a className="text-white" href="">Shop</a></p>
                            <p style={{ margin: '' }}><a className="text-white" href="">Contact Us</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 single-part text-white">
                    <h5>CONTACT</h5>
                    <small><FontAwesomeIcon className="me-2 mt-3" icon={faPhone} />714-673-7634</small>
                    <br />
                    <small><FontAwesomeIcon className="me-2 mt-3" icon={faMapMarkerAlt} /> Longview Dr Dunellen, New Jersey(NJ), 08812, USA</small>
                    <br/>
                    <small><FontAwesomeIcon className="me-2 mt-3" icon={faEnvelope}/>  phone-repair@example.com</small>

                    <h5 style={{ marginTop: '30px'}}>FOLLOW US</h5>
                    <FontAwesomeIcon className="mt-2 me-3 fs-2" icon={faFacebookSquare}/>
                    <FontAwesomeIcon className="mt-2 me-3 fs-2" icon={faYoutubeSquare}/>
                    <FontAwesomeIcon className="mt-2 me-3 fs-2" icon={faLinkedin}/>
                    <FontAwesomeIcon className="mt-2 me-3 fs-2" icon={faTwitterSquare}/>
                </div>
                <small className="text-white bg-dark">Phone Repair React Theme by BrothersTheme © 2021</small>
            </div>
        </section>
    );
};

export default Footer;