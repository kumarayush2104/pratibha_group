import React from 'react'

import People1 from '../../assets/images/about-us/akshat.png'
import People2 from '../../assets/images/about-us/mahendra.png'
import People3 from '../../assets/images/about-us/paresh.png'
import People4 from '../../assets/images/about-us/pramod.png'
import DiversifyingImage from '../../assets/images/about-us/diversifying.png'
import CorporateImage from '../../assets/images/about-us/corporate.jpg'
import SenseImage from '../../assets/images/about-us/sense.jpg'
import EconomicImage from '../../assets/images/about-us/economic.jpg'
import SafetyImage from '../../assets/images/about-us/safety.jpg'
import RespectImage from '../../assets/images/about-us/respect.jpg'
import CustomerImage from '../../assets/images/about-us/customer.jpg'

import HonoredPeopleCard from './HonoredPeopleCard'
import ValueVisionCard from './ValueVisionCard'

export default function AboutUs() {
    return (
        <>
            <div className="container">

                <div className="about_section pt-5 pb-0">
                    {/* History Section Start */}
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12" data-aos="fade-down" data-aos-easing="linear">
                            <h1 className="font-weight-bold mb-4 text-left">History</h1>
                            <div>
                                <h3 className="sub-title">It all started with a decision.</h3>
                                <p className="text-justify">Pratibha Group was established in 1982 with the formation of the Pratibha Fabrics Pvt Ltd which was established with the aim of processing polyester fabrics.<br />
                                    Pratibha began to strengthen its position around 1990's, gradually becoming a leading textile processing unit in Surat. As the company's foundation grew stronger, it expanded into several sectors of the industry, manufacturing various other varieties of fabrics and textile dyes.</p>
                            </div>
                        </div>
                    </div>
                    {/* History Section End */}

                    {/* Honorable Mentions Section Start */}
                    <div className="row mt-5">
                        <HonoredPeopleCard image={People3} name={"Paresh chaudhary"} designation={"Director"} />
                        <HonoredPeopleCard image={People2} name={"Mahendra chaudhary"} designation={"Chairman"} />
                        <HonoredPeopleCard image={People4} name={"Pramod chaudhary"} designation={"Chairman"} />
                        <HonoredPeopleCard image={People1} name={"Akshat chaudhary"} designation={"Director"} />
                    </div>
                    {/* Honorable Mentions Section End */}

                    {/* Diversifying Section Start */}
                    <div className="row mt-5">
                        <div className="col-12 col-sm-7 col-md-7 col-lg-7">
                            <h3 className="sub-title mt-5">Diversifying</h3>
                            <p className="text-justify">In the decades that followed, the company expanded its product lines, established adjacent businesses, and even ventured into new textile products. Our extensive experience in high-quality textiles has enabled us to diversify into the production of textile dyes, denim fabrics, linen fabrics, nylon yarn, and chips.</p>
                        </div>

                        <div className="col-12 col-sm-5 col-md-5 col-lg-5">
                            <img src={DiversifyingImage} alt='' />
                        </div>
                    </div>
                    {/* Diversifying Section End */}
                </div>

                {/* Values and Vision Section Start */}
                <div className="about_section pt-0">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12" data-aos="fade-up" data-aos-easing="linear">
                            <h1 className="mb-4 text-left font-weight-bold">Values & Vision</h1>
                            <p className="mt-2">
                                Pratibha strives to be the global leader in the textile industry for manufacturing premium quality products by focusing on expanding product lines while keeping its customers in mind.
                            </p>
                        </div>
                    </div>
                    <ValueVisionCard image1={CorporateImage} title1={"Corporate ethics and responsibility"} message1={"Pratibha is devoted to high corporate governance standards, commercial ethics, and transparency in all of the Company's operations. We are a company that immerses itself in cultural values and learns from the socio-economic realities of the communities in which it operates."} image2={SenseImage} title2={"Sense of belonging and trust"} message2={" Pratibha aspires to develop strong and long-term relationships with its stakeholders, fostering a sense of belonging to an exceptional company in which such stakeholders feel a vital part and a part of the strategy. We inspire trust among all people who engage in and do business with it via continual communication."} />
                    <ValueVisionCard image1={EconomicImage} title1={"Economic results"} message1={"Our dedication to attaining the growth and profitability targets outlined in the company's strategic plan is the method for ensuring the corporate strategy's success and meeting the demands and expectations of all group businesses participating in Pratibha's future. Within the framework of our diverse group, each business are subject to the Group's common policies, in the interest of Pratibha and all of its constituent firms."} image2={SafetyImage} title2={"Safety and reliability"} message2={"We strive to supply products and conduct our other activities in a safe and trustworthy environment. People's safety at our facilities, in neighboring areas, and among customers, as well as the development and distribution of best practices in the field of safety and prevention across the Group, are critical components of our entire operation."} toggle={true} />
                    <ValueVisionCard image1={RespectImage} title1={"Respect for the environment"} message1={"The most essential founding pillar of Pratibha's buisness model and the features that distinguish us as a 21st-century organization is our focus on generating clean energy and environmentally friendly products and practices."} image2={CustomerImage} title2={"Customer focus"} message2={"We strive to understand our customers' requirements and expectations and work to continuously increase their level of satisfaction and connection to the company. our goal is to give the highest level of service while adhering to its regulatory duties. The promises made by us in the Company's vision and values are more than just a set of ideas; they relate to everyday practice and are part of the Group's day-to-day management in all areas of operation."} />
                </div>
                {/* Values and Vision Section End */}
            </div>
        </>
    )
}
