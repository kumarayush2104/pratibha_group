import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import $ from 'jquery'

export default function Navbar() {

    // Responsive Navigation Bar menu trigger
    const toggleResponsiveNavigationbar = () => {
        $(".responsive-navigation").toggleClass('open');
    }

    const windowLocation = useLocation();
    const [url, setUrl] = useState("/");
    useEffect(() => {
        setUrl(window.location.pathname);
    }, [windowLocation])
    
    return (
        <div className="main_menu_section">
            <div className="container position-relative">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light w-100 responsive-navigation pt-3 pb-3">
                        <button className="navbar-toggler btn-nav" type="button" onClick={toggleResponsiveNavigationbar} data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-bars"></i>
                            <i className="fa fa-close"></i>
                        </button>
                        <Link className="navbar-brand pb-0 pt-0" href="index.html"><img src={Logo} alt="Logo" /></Link>
                        <div className="collapse navbar-collapse bg-red-line" id="navbarTogglerDemo01">
                            <ul className="navbar-nav ml-auto responsive-menu-section mt-3">
                                <li className="nav-item">
                                    <Link className={"nav-link " + (url === "/"? "active" : null)} to="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={"nav-link " + (url === "/About-us"? "active" : null)} to="/About-us">About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className={"nav-link " + (url === "/Businesses"? "active" : null)} to="/Businesses">Businesses</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link " + (url === "/Awards"? "active" : null)} to="/Awards">Awards</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link " + (url === "/Sustainability"? "active" : null)} to="/Sustainability">Sustainability</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={"nav-link " + (url === "/Contact-us"? "active" : null)} to="/Contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    )
}
