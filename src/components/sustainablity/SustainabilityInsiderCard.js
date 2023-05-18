import React, { useState } from 'react'

export default function SustainablityInsiderCard(props) {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    return (
        <div className="accordion-box">
            <button className={ isActive? 'accordion is-open' : 'accordion' } onClick={toggleClass}>{props.title}</button>
            <div className={isActive? 'accordion-content show-content' : 'accordion-content'}>
                <p>{props.content}</p>
            </div>
        </div>
    )
}
