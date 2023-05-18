import React from 'react'

export default function HonoredPeopleCard(props) {
    return (
        <div className="col-12 col-sm-3 col-md-3 col-lg-3" data-aos="fade-up" data-aos-easing="linear">
            <div className="founder-w">
                <img src={props.image} alt='' />
                <div className="founder-name">
                    <b>{props.name}</b><br />
                    {props.designation}
                </div>
            </div>
        </div>
    )
}
