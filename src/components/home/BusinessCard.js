import React from 'react'
import { Link } from 'react-router-dom'

export default function BusinessCard(props) {
    return (
        <li data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="400">
            <Link to="/Businesses">
                <img src={props.image} className="tab_icon" alt=''/>
                    <div className="tab_name">{props.title}</div>
            </Link>
        </li>
    )
}
