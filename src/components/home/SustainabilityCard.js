import React from 'react'
import { Link } from 'react-router-dom'

export default function SustainabilityCard(props) {
    return (
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 text-center mb-3" data-aos="fade-up" data-aos-easing="linear">
            <Link to="/Sustainability" className="common-box-shadow">
                <img src={props.image} alt='' />
                <h5 className="community_title">{props.title}</h5>
            </Link>
        </div>
    )
}
