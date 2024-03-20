import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <footer>    {/*<!----------------------Footer Section---------------->*/}
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Barlow</h1>
                        <p>Barlow Family Garment Store : Best Clothing Store in kolkata | Mens, Womens, Kids Apparel | Top Saree & Ethenic Wear Shop</p>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <h4>Quick Links</h4>
                        <div className="list">
                            <ul>
                                <ul id="menu-footer-quick-menu">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="../../contents/mens/men-all-products.html">Men</a></li>
                                    <li><a href="../../contents/womens/wo-all-products.html">Women</a></li>
                                    <li><a href="../../contents/kids.html">Kids</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </ul>
                            <ul>
                                <nav>
                                    <ul id="menu-footer-quick-menu">
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Faqs</a></li>
                                        <li><a href="#">privacy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Terms and conditions</a></li>
                                        <li><a href="#">Disclaimer</a></li>
                                    </ul>
                                </nav>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <h4>Get in Touch</h4>
                        <ul className="location">
                            <li><a href=""><i className="fa-solid fa-location-dot fa-bounce fa-lg" style={{color: "#ff4000"}}></i>29, M.G.Road, Kolkata, West Bengal 710091</a></li>
                            <li><a href=""><i className="fa-solid fa-phone-volume fa-shake fa-lg" style={{color: "#ff4000"}}></i>+91 88888-848484</a></li>
                            <li><i className="fa-solid fa-envelope fa-flip fa-lg" style={{color: "#ff4000"}}></i>help@barlow.com</li>
                        </ul>
                        <ul className="social-icon">
                            <li><a href=""></a><i className="fa-brands fa-facebook-f"></i></li>
                            <li><a href=""></a><i className="fa-brands fa-youtube"></i></li>
                            <li><a href=""></a><i className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="f-btn">
                            <h6>© 2023 Barlow</h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer