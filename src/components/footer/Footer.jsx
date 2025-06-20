import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="fut-footer">
                <footer className="footer">
                    <div className="footer-img">
                        <img src="assets/images/footer-img.png" alt="" />
                    </div>


                    <div className="footer-links">



                        <div className="fut-link">
                            <div className="pro fut">
                                <h3>Products</h3>
                                <a href="#">Piggybank</a>
                                <a href="#">Invest</a>
                                <a href="#">Safelock</a>
                                <a href="#">Target Savings</a>
                                <a href="#">Flex Naira</a>
                                <a href="#">Flex Dollar</a>
                            </div>
                            <div className="com fut">
                                <h3>Company</h3>
                                <a href="#">About</a>
                                <a href="#">FAQs</a>
                                <a href="#">Blog</a>
                            </div>
                            <div className="leg fut">
                                <h3>Legal</h3>
                                <a href="#">Terms</a>
                                <a href="#">Privacy</a>
                                <a href="#">Security</a>
                            </div>
                        </div>



                        <div className="fut-cta">
                            <div className="cta-icns">
                                <img src="assets/icons/facebook (3).png" alt="" />
                                <img src="assets/icons/instagram (3).png" alt="" />
                                <img src="assets/icons/twitter (3).png" alt="" />
                                <img src="assets/icons/tik-tok.png" alt="" />
                                <img src="assets/icons/youtube (1).png" alt="" />
                            </div>
                            <div className="cta-info">

                                <a href="#">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                                </a>
                                <a href="#">ahmedsuleiman940@gmail.com</a>
                                <a href="#">+2347040751959</a>
                            </div>
                        </div>
                    </div>



                    <div className="fut-ctaa">
                        <div className="cta-icns">
                            <img src="assets/icons/facebook (3).png" alt="" />
                            <img src="assets/icons/instagram (3).png" alt="" />
                            <img src="assets/icons/twitter (3).png" alt="" />
                            <img src="assets/icons/tik-tok.png" alt="" />
                            <img src="assets/icons/youtube (1).png" alt="" />
                        </div>
                        <div className="cta-info">

                            <a href="#">Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.
                            </a>
                            <a href="#">ahmedsuleiman940@gmail.com</a>
                            <a href="#">+2347040751959</a>
                        </div>
                    </div>
                </footer>
            </footer>
            <footer className="bottom-fut"></footer>
        </>
    )
}

export default Footer