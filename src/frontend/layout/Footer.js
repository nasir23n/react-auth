import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="footer_wrapper">
                <div className="container">
                    <div className="footer">
                        <div className="about">
                            <div className="logo">
                                {/* <img src="{{ asset('frontend/image/logo.png') }}" alt="Ecom" /> */}
                            </div>
                            <div className="about">
                                <p>Ecom is a Bangladesh No.1 Online Shopping Store.</p>
                            </div>

                            <br />
                            <ul className="social_icon">
                                <li><Link className="facebook" to="https://www.facebook.com"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link className="twitter" aria-label="twitter" to="https://twitter.com"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link className="linkedin" to="https://www.linkedin.com"><i className="fab fa-linkedin"></i></Link></li>
                                <li><Link className="instagram" to="https://www.instagram.com"><i className="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                        <div className="important_link">
                            <h3 className="footer_heading">Important link</h3>
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="#">Contact</Link></li>
                                <li><Link to="#">Terms &amp; Conditions</Link></li>
                                <li><Link to="#">Privacy &amp; Policy</Link></li>
                            </ul>
                        </div>
                        <div className="our_service">
                            <h3 className="footer_heading">Our Services</h3>
                            <ul>
                                <li><Link to="#">News</Link></li>
                                <li><Link to="#">Blog</Link></li>
                                <li><Link to="#">Architecture Design</Link></li>
                            </ul>
                        </div>
                        <div className="get_in_touch">
                            <h3 className="footer_heading">Get in touch</h3>
                            <div className="tuch_wrap">
                                <span className="icon"><i className="fa fa-map-marker"></i></span>
                                <span className="address">
                                    Mymensingh,Mymensingh,Nandail
                                </span>
                            </div>
                            <div className="tuch_wrap">
                                <span className="icon"><i className="fa fa-phone"></i></span>
                                <span>
                                    <Link to="tel:+8801700000000">+880 1700-000000</Link>
                                </span>
                            </div>
                            <div className="tuch_wrap">
                                <span className="icon"><i className="fa fa-envelope"></i></span>
                                <span>
                                    <Link to="mailto:nasrullah23a@gmail.com">nasrullah23a@gmail.com</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer_2_wrapper">
                <div className="container">
                    <div className="footer_2">
                        <div className="copyright">Copyrights By Nasrullah(nasir) - 2021</div>
                        <div className="developed_by">
                            <span>Develop By</span>
                            <Link to="#">Nasrullah(nasir)</Link>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <div className="popup_wrap" id="popup1">
                <div className="popup_container">
                    <div className="popup_header">
                        <strong className="header_txt">Item added</strong>
                        <button className="popup_close" close="#popup1">&#9587;</button>
                    </div>
                    <div className="popup_body">
                        This item is added to cart.
                    </div>
                    <div className="popup_footer">
                        <div className="flex justify_right">
                            <button className="nl popup_close">Continue shopping</button> &nbsp;&nbsp;
                            <Link to="/" className="nl primary">Confirm</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
