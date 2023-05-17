import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="container top_footer">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 pl-5 hidden_mobile" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                        <h3>OTHER LINKS <span className="footer_line"></span></h3>
                        <ul className="footermenu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About-us">About</Link></li>
                            <li><Link to="/Businesses">Businesses</Link></li>
                            <li><Link to="/Awards">Awards</Link></li>
                            <li><Link to="/Sustainablity">Sustainability</Link></li>
                            <li><Link to="/Contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 pl-5 pr-5 hidden_mobile" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                        <h3>INDUSTRIES <span className="footer_line"></span></h3>
                        <ul className="footermenu">
                            <li><Link to="/Businesses">Dyes & Chemicals</Link></li>
                            <li><Link to="/Businesses">Linen Fabrics</Link></li>
                            <li><Link to="/Businesses">Technical Textiles</Link></li>
                            <li><Link to="/Businesses">Fabric Processing</Link></li>
                            <li><Link to="/Businesses">Denim</Link></li>
                            <li><Link to="/Businesses">Yarn Dyeing</Link></li>
                            <li><Link to="/Businesses">Furnishing</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 pl-5" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                        <h3>CONTACT US <span className="footer_line"></span></h3>
                        <ul className="footermenu">
                            <li><a href="mailto:info@pratibhagroup.co.in">info@pratibhagroup.co.in</a></li>
                            <li>+91 261 289 7741</li>
                            <li className="mt-2">
                                Block No. 309, N.H.No. 8,<br />
                                Baleshwar-Palsana, Surat - 394317,<br />
                                Gujarat, India.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12  text-center">
                            <span className="copyright">&copy;2022 <b>Pratibha Group.</b></span><span className="design-by">Website designed by: <a href="http://www.setblue.com" target="_blank" rel="noreferrer" title="+91 98985 98984">Setblue.com</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
