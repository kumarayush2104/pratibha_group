import React from 'react'
import BannerImage from '../../assets/images/awards/awards.jpg'
import AwardIconImage from '../../assets/images/awards/award-icon.png'

import AwardMainCard from './AwardMainCard'
import AwardInsiderCard from './AwardInsiderCard'

export default function Awards() {
    return (
        <>
            {/* Banner Section Start */}
            <div className="banner-sec">
                <div className="header-img">
                    <img src={BannerImage} className="w-100" alt='' />
                    <div className="contents">
                        <h1>Awards & Recognition</h1>
                        <p>Leadership Awards & Accolades</p>
                    </div>
                </div>
            </div>
            {/* Banner Section End */}

            {/* Awards and Recognition Section Start */}
            <div className="container">
                <div className="about_section">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-9 col-lg-12" data-aos="fade-up" data-aos-easing="linear">
                            <h2 className="mb-2 sub-title">AWARDS & RECOGNITION</h2>
                            <p className="mt-2 mb-5">Founded in 1977, the Ballaram Hanumandas Charitable Trust is engaged in nation building through education and development of the youth.
                                Guided by the beliefs and values of the illustrious Chaudhary family, the Trust is shaping young minds and creating the leaders of modern India through its initiatives, Gyankunj (Day School) ; Vidyagram (Fully Boys Residential School) and the BRCM College of Engineering and Technology. On anvil are institutions for a variety of fields in higher education,including Management and Architecture.</p>
                        </div>
                        <div className="col-12 col-sm-12 col-md-9 col-lg-12 mt-3" data-aos="fade-up" data-aos-easing="linear">
                            <h2 className="mb-5 font-weight-bold"><img className="award_icon" src={AwardIconImage} alt='' />AWARDS & RECOGNITION</h2>
                        </div>
                    </div>
                    <AwardMainCard year={"1991-92"} award={"All India Highest Export Award for Export of 100% Polyester Filament Fabric"} author={"Awarded by : The Synthetics & Rayon Textile Export Promotion Council"} />
                    <AwardMainCard year={"1992-93"} award={"93 Highest Export of Polyester Filament Fabrics"} author={"Awarded by : South Gujarat Textile Exporters Association"} />
                    <AwardMainCard year={"1993-94"} award={"Highest Export of Polyester Filament Fabrics"} author={"Awarded by : Council for Small & Medium Scale, New Delhi"} additionalCard={<>
                        <AwardInsiderCard award={"Regional 3rd Highest Export Award"} author={"Awarded by : Canara Bank"} />
                    </>} />
                    <AwardMainCard year={"1994-95"} award={"Niryat Ratna and Gold Medal Award"} author={"Awarded by : Council for Small & Medium Scale, New Delhi"} additionalCard={<>
                        <AwardInsiderCard award={"Outstanding Export Performance in Cellulosic / NonCellulosic Group (2nd Price)"} author={"Awarded by : The Southern Gujarat Chamber of Commerce & Industry, Surat"} />
                        <AwardInsiderCard award={"Best Export Award"} author={"Awarded by : Canara Bank, Mumbai Circle"} />
                    </>} />
                    <AwardMainCard year={"1995-96"} award={"Unique Destination of Achieving the Prestigious Outstanding Export Performance Award in Textile Industry"} author={"Awarded by : The Southern Gujarat Chamber of Commerce & Industry, Surat"} additionalCard={<>
                        <AwardInsiderCard award={"Award of Export Achievement in Synthetics Filaments Fabrics (1st)"} author={"Awarded by : South Gujarat Textile Exporters Association"} />
                        <AwardInsiderCard award={"Excellence in Export Award"} author={"Awarded by : Canara Bank, Mumbai Circle"} />
                    </>} />
                    <AwardMainCard year={"1996-97"} award={"Outstanding Best Export Performance in Textile Industry"} author={"Awarded by : The Southern Gujarat Chamber of Commerce & Industry, Surat"} />
                    <AwardMainCard year={"1997-98"} award={"National Export Award, Outstanding Export Performance"} author={"Awarded by : Ministry of Commerce"} additionalCard={<>
                        <AwardInsiderCard award={"Recognition for Excellent Performance in Export Gold Trophy - Niryat Shree Bandhu"} author={"Awarded by : FIEO"} />
                    </>} />
                    <AwardMainCard year={"2000-01"} award={"Highest Export Award Trophy - Certificate"} author={"Awarded by : Council for Small & Medium Scale, New Delhi"} />
                    <AwardMainCard year={"2003-04"} award={"Certificate of Merit"} author={"Awarded by : The Synthetics & Rayon, Textile Export Promotion Council"} />
                    <AwardMainCard year={"2004-05"} award={"Outstanding Best Export Performance in Textile Industry"} author={"Awarded by : The Southern Gujarat Chamber of Commerce & Industry, Surat"} additionalCard={<>
                        <AwardInsiderCard award={"Silver Trophy"} author={"Awarded by : The Synthetics & Rayon Textile Export Promotion Council."} />
                    </>} />
                    <AwardMainCard year={"2019-20"} award={"Outstanding Performance in Domestic Market by Large Scale Unit"} author={"Awarded by : The Dyestuffs Manufacturers Association of India"} additionalCard={<>
                        <AwardInsiderCard award={"Recognition of Excellent Performance in Exports of Dyestuffs by a Large Scale Unit"} author={"Awarded by : The Dyestuffs Manufacturers Association of India"} />
                    </>} />
                    <AwardMainCard year={"2020-21"} award={"Outstanding Performance in Domestic Market by Large Scale Unit"} author={"Awarded by : The Dyestuffs Manufacturers Association of India"} additionalCard={<>
                        <AwardInsiderCard award={"Recognition of Excellent Performance in Exports of Dyestuffs by a Large Scale Unit"} author={"Awarded by : The Dyestuffs Manufacturers Association of India"} />
                    </>} />
                </div>
            </div>
            {/* Awards and Recognition Section End */}
        </>
    )
}
