import React from 'react'

export default function AwardMainCard(props) {
    return (
        <div className="row no-gutters awards_w" data-aos="fade-up" data-aos-easing="linear">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="awards_box">
                    <h2 className="award_year">{props.year}</h2>
                    <div className="awardname">
                        <h5>{props.award}</h5>
                        <p>{props.author}</p>
                    </div>
                </div>
            </div>
            {props.additionalCard}
        </div>
    )
}
