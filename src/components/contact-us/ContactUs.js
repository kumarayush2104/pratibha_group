import React from 'react'

import BannerImage from '../../assets/images/contact-us/contact.jpg'
import PhoneLogo from '../../assets/images/contact-us/phone.png'
import MailLogo from '../../assets/images/contact-us/open-mail.png'
import LocationLogo from '../../assets/images/contact-us/location.png'

import ContactUsCard from './ContactUsCard'

export default function ContactUs() {
    return (
        <>
            {/* Banner Section Start */}
            <div className="banner-sec">
                <div className="header-img">
                    <img src={BannerImage} className="w-100" alt='' />
                    <div className="contents">
                        <h1>Contact Us</h1>
                        <p>How can we help you?</p>
                    </div>
                </div>
            </div>
            {/* Banner Section End */}

            {/* Contact Us Section Start */}
            <div className="contact-us-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 mt-3 mb-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="800">
                            <div className="row contact-details mb-4">
                                <ContactUsCard title={"Address"} content={[" Block No. 309, N.H.No. 8,", <br />, "Baleshwar-Palsana", <br />, "Surat - 394317, Gujarat, India."]} image={LocationLogo} />
                                <ContactUsCard title={"Phone Number"} content={<><a href='tel:+91 261 289 7741'>+91-261-289-7741</a><br /><a href="tel:+91 261 289 7747">+91-261-289-7747</a></>} image={PhoneLogo} />
                                <ContactUsCard title={"Email"} content={<> <a href="mailto:info@pratibhagroup.co.in">info@pratibhagroup.co.in</a><br /><a href="mailto:info@pratibhafabrics.co.in">info@pratibhafabrics.co.in</a></>} image={MailLogo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Us Section End */}
        </>
    )
}
