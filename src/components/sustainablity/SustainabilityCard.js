import React from 'react'

export default function SustainabilityCard(props) {
    return (
        <div className="s_box" data-aos="fade-up" data-aos-easing="linear">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3 mb-3">
                    <img className="border-radius" src={props.image} alt='' />
                </div>

                <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                    <h3 className="sub-title mb-2">{props.title}</h3>
                    <p className="">{props.content}</p>
                    <div className="mt-3">{props.cards}</div>
                </div>
            </div>
        </div>
    )
}
