import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import BannerImage from '../../assets/images/home/banner.jpg'
import MobileBannerImage from '../../assets/images/home/mobile-banner.jpg'
import AboutImage from '../../assets/images/home/about.png'

import BusinessCard from './BusinessCard'
import Industry1Image from '../../assets/images/home/Industry1.png'
import Industry2Image from '../../assets/images/home/Industry2.png'
import Industry3Image from '../../assets/images/home/Industry3.png'
import Industry4Image from '../../assets/images/home/Industry4.png'
import Industry5Image from '../../assets/images/home/Industry5.png'
import Industry6Image from '../../assets/images/home/Industry6.png'
import Industry7Image from '../../assets/images/home/Industry7.png'
import Industry8Image from '../../assets/images/home/Industry8.png'

import SustainabilityCard from './SustainabilityCard'
import EnvironmentImage from '../../assets/images/home/environment.png'
import EducationImage from '../../assets/images/home/education.png'
import HealthImage from '../../assets/images/home/health.png'
import CommunityImage from '../../assets/images/home/community.png'

export default function Home() {

    useEffect(() => {
        window.$(function ($) {
            $(document).ready(function () {
                var owl = $('.owl-carousel');
                owl.owlCarousel({
                    items: 1,
                    loop: false,
                    nav: true,
                    dots: false,
                    margin: 0,
                    smartSpeed: 2000,
                    autoplay: false,
                });
            })
        })
    })
    return (
        <>
            {/* Main Banner Start */}
            <div className="slider-section">
                <div className="main_banner">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <div className="contents">
                                <h1 className="slider_text">SUCCESS & BUSINESS TRUST IN THE COUNTRY</h1>
                                <p className="slider_des">
                                    Pratibha is focusing on new technologies and
                                    innovation to drive its business in India
                                </p>
                            </div>
                            <img className="banner_desktop" src={BannerImage} alt='' />
                            <img className="banner_mobile" src={MobileBannerImage} alt='' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Banner End */}
            {/* About Section Start */}
            <div className="container" data-aos="fade-up" data-aos-easing="linear">
                <div className="about_section">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-center position-relative">
                            <img src={AboutImage} alt='' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6 text-left pdleft">
                            <h2 className="about_title">Established in the year 1982 in Surat, India “Pratibha” </h2>
                            <p className="pb-0">Pratibha Group is a multi-business conglomerate that specializes in manufacturing a broad array of superior quality textile products.</p>
                            <p className="pt-1">
                                Pratibha was established in 1982 in the industrial core of Surat City. With a background in textile weaving and manufacturing, Pratibha Group has a wealth of experience amassed over the last four decades which has allowed us to expand into the production of textile dyes, denim fabrics, linen fabrics, nylon chips, and yarn. Our exceptional quality and versatility in manufacturing a wide range of products have allowed us to establish a solid presence both within the country and across borders, allowing Pratibha to achieve global leadership in the textile industry.
                            </p>
                            <div className="ab-btn mt-4"><Link to="/About">More</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}

            {/* Businesses Section Start */}
            <div className="container">
                <h2 className="section_title text-center title-underline mb-5">Businesses</h2>
                <div className="tabList mt-0 mb-4">
                    <ul>
                        <BusinessCard title={"Dyes & Chemicals"} image={Industry1Image} />
                        <BusinessCard title={"Linen & Cotton fabric"} image={Industry2Image} />
                        <BusinessCard title={"Technical Textile"} image={Industry3Image} />
                        <BusinessCard title={"Fabric Processing"} image={Industry4Image} />
                        <BusinessCard title={"Demin Fabric"} image={Industry5Image} />
                        <BusinessCard title={"Yarn Dyeing"} image={Industry6Image} />
                        <BusinessCard title={"Nylon Yarn"} image={Industry7Image} />
                        <BusinessCard title={"Home Furnishing Fabric"} image={Industry8Image} />
                    </ul>
                </div>
            </div>
            {/* Businesses Section End */}

            {/* Sustainability Section Starts */}
            <div className="community-bg">
                <div className="container">
                    <h2 className="section_title text-center title-underline mb-5">Sustainability</h2>
                    <div className="row">
                        <SustainabilityCard title={"Environment"} image={EnvironmentImage} />
                        <SustainabilityCard title={"Education"} image={EducationImage} />
                        <SustainabilityCard title={"Health"} image={HealthImage} />
                        <SustainabilityCard title={"Environment"} image={CommunityImage} />
                    </div>
                </div>
            </div>
            {/* Sustainability Section Ends */}
        </>
    )
}
