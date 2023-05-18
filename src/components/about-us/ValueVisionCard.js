import React from 'react'

export default function ValueVisionCard(props) {

    const rootClass = (props.toggle) ? "row flex-row-reverse" : "row"

    return (
        <div className={rootClass}>
            <div  className="col-12 col-sm-12 col-md-7 col-lg-7 mt-5" data-aos="fade-up" data-aos-easing="linear">
                <div className="value-vision-sub-card" style={{backgroundImage: `url(${props.image1})`}}>
                    <h3 className="sub-title">{props.title1}</h3>
                    <p className="mt-2">{props.message1}</p>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-5 col-lg-5 mt-5" data-aos="fade-up" data-aos-easing="linear">
                <div className="value-vision-sub-card" style={{backgroundImage: `url(${props.image2})`}}>
                    <h3 className="sub-title">{props.title2}</h3>
                    <p className="mt-2">{props.message2}</p>
                </div>
            </div>
        </div>
    )
}
