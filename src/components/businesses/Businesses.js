import React from 'react'

import BannerImage from '../../assets/images/businesses/banner.jpg'
import MobileBannerImage from '../../assets/images/businesses/mobile-banner.jpg'
import Business1Image from '../../assets/images/businesses/Business1.jpg'
import Business2Image from '../../assets/images/businesses/Business2.jpg'
import Business3Image from '../../assets/images/businesses/Business3.jpg'
import Business4Image from '../../assets/images/businesses/Business4.jpg'
import Business5Image from '../../assets/images/businesses/Business5.jpg'
import Business6Image from '../../assets/images/businesses/Business6.jpg'
import Business7Image from '../../assets/images/businesses/Business7.jpg'

import BusinessCard from './BusinessesCard'

export default function Businesses() {
    return (
        <>
            {/* Banner Section Start */}
            <div className="banner-sec">
                <div className="businesses_w">
                    <div className="businesses_text">
                        The Pratibha Group has decades of expertise in the textile industry in Surat. With devotion, hard work, and a focus on quality, the group established its first textile firm, Pratibha Fabrics, in Surat in 1982. Today, we are unrivaled manufacturers and exporters of technical fabrics, denim fabrics, linen fabrics, home furnishings, sarees, and dress materials. We use cutting-edge technology and equipment, as well as the highest quality in accordance with international standards.
                    </div>
                </div>
                <img className="banner_desktop w-100" src={BannerImage} alt='' />
                <img className="banner_mobile w-100" src={MobileBannerImage} alt='' />
            </div>
            {/* Banner Section End */}

            {/* Business Card Section Start */}
            <div className="container">
                <div className="about_section">
                    <div className="row">
                        <BusinessCard title={"DYES & CHEMICALS"} content={"Pratibha Group began manufacturing Disperse Dyes in 1991, with a broad spectrum of over 150 dyes, making it one of the few manufacturers to supply virtually all commercially available disperse dyes. We are open to new challenges because of our excellent R&D, ECO laboratory, and upstream integration. Our company's strengths include environmental stewardship, employee health and safety, and product quality. This parameter has established Pratibha Group as the chosen supplier for today's national and worldwide customers."} image={Business1Image} />
                        <BusinessCard title={"LINEN & HOME FURNISHING FABRIC"} content={"Since our inception in 2007, we have grown to become one of India's top manufacturers of linen and linen blended fabrics for the fashion and home furnishing industries. Our commitment to innovation and design complements the company's long heritage of providing high-quality, attractive textiles. In-house dyeing, twisting, weaving, and finishing operation that transforms raw fibers into gorgeous fabrics. Our internal design studios enable us to keep on top of the latest trends while also providing our consumers with all of the customization possibilities they need. We have maintained a strong market position since our inception in the home furnishings sector in 2007. Because of our customer-centered management strategies, we are one of the most trusted manufacturers and suppliers of home furnishing fabrics to retail organizations that represent both traditional and contemporary interior design concepts."} image={Business2Image} toggle={true} />
                        <BusinessCard title={"TECHNICAL TEXTILE"} content={"From yarn to final product, we manage the whole production process and have invested in cutting-edge machinery for yarn spinning, weaving, dyeing and finishing, coating, fabrication, and material testing. We manufacture specialty fabrics such as PU-coated textiles, PVC-coated textiles, and other technical fabrics that specialize in new technological textile solutions. These materials are robust and durable, and they suit the growing demands of consumer, outdoor, industrial, and military applications."} image={Business3Image} />
                        <BusinessCard title={"FABRIC PROCESSING"} content={"Pratibha Group is equipped with world-class fabrics processing machinery for dyeing & printing like a Jet dyeing machine, Jigger dyeing machine, Drum machine, Stenter, Deca Machine, Flatbed printing machine, and Rotary printing machine. The unit is capable to process any kind of synthetic & blended fabrics. Pratibha can undertake a large size production plan & can execute the same within time execute because of its production capacity. Its products are widely accepted because of their top quality. Our dyeing division has some of the best infrastructures for textile dyeing and quality management. We can dye a wide variety of fabrics like Chiffon, Georgette, Crepe & other polyester derivatives."} image={Business4Image} toggle={true} />
                        <BusinessCard title={"DENIM FABRIC"} content={"Our Denim section, established on the motto 'Sustainability First,' develops high-end sustainable fabric that is environment friendly. We provide denim and piece-dyed fabric solutions for both local and international markets, covering a wide range of sartorial categories from high-end fashion to work-wear, everyday wear, and athleisure. Each stage of our production process is in conformity with the 17 Sustainable Development Goals of the United Nations Development Program, which seek to protect the environment and improve the lives of communities and future generations."} image={Business5Image} />
                        <BusinessCard title={"YARN DYEING"} content={"Pratibha operates a fully integrated yarn dyeing business that includes 21 solid dyeing equipment and two space dyeing machines. Space dyeing is the technique of dyeing yarn with numerous colors, and Pratibha's remarkable space dyeing equipment can dye up to 8 shades of color on a single strand of yarn. This completely automated machine produces 180 tonnes of yarn-dyed linen in 800 various hues every month, something we are really proud of. Our team of technical experts supervises dyeing quality, as well as the selection of high-quality dyes that are Azo-free and environmentally safe. The unit also follows strict environmental regulations by installing a RO plant that processes wastewater before it is discharged."} image={Business6Image} toggle={true} />
                        <BusinessCard title={"NYLON YARN"} content={"We manufacture and supply the widest range of chips and nylon yarns since 2004. We have developed the finest BRT nylon yarns and chips available on the market, all of which are extremely popular. This line is set up in compliance with industry norms and guidelines, employing the most advanced modern materials and technology. Our cutting-edge R&D department and highly developed infrastructure, which is outfitted with the required technology and equipment, aid us in meeting many of the company's specified goals and objectives. The facility, which is separated into multiple high-performance divisions, assists us in managing our company activities in a more flexible and effective manner. These units assist us in boosting our production. Additionally, sticking to ethical business standards and continually upgrading our manufacturing base have allowed us to grow our coverage and achieve a greater consumer base."} image={Business7Image} />
                    </div>
                </div>
            </div>
            {/* Business Card Section End */}
        </>
    )
}
