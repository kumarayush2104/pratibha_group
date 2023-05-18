import React from 'react'

export default function ContactUsCard(props) {
    return (
        <div className="col-lg-4">
            <div className="contact-box">
                <div className="border-right">
                    <img src={props.image} className="max-50" alt='' />
                </div>
                <div>
                    <h5 className="text-center">{props.title}</h5>
                    <p className="text-center">
                       {props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}
