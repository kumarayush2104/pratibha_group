import React from 'react'
import { Link } from 'react-router-dom'

export default function SustainabilityCard(props) {
    return (
        <div class="col-6 col-sm-6 col-md-3 col-lg-3 text-center mb-3" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <Link to="/Sustainability" class="common-box-shadow">
                <img src={props.image} alt='' />
                <h5 class="community_title">{props.title}</h5>
            </Link>
        </div>
    )
}