import React from 'react'

export default function BusinessesCard(props) {
    const rootClassName = (props.toggle)? "row mt-5 flex-row-reverse" : "row mt-5"
    return (
        <div className={rootClassName}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800">
                <h3 className="sub-title text-left title-underline text-uppercase">{props.title}</h3>
                <p className="pb-0 mb-0">
                    {props.content}
                </p>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-5 mx-auto" data-aos="fade-up" data-aos-easing="linear"
                data-aos-duration="800">
                <img src={props.image} className="border-radius" alt='' />
            </div>
        </div>
    )
}
