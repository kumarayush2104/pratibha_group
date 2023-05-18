import React from 'react'

export default function AwardInsiderCard(props) {
    return (
        <div className="col-12 col-md-6 col-lg-4">
            <div className="awards_box">
                <div className="awardname">
                    <h5>{props.award}</h5>
                    <p>{props.author}</p>
                </div>
            </div>
        </div>
    )
}
