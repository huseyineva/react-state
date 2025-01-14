/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./course.css"

function Course({ course }) {

    const { id, title, description, image } = course;

    return (
        <div className="course">
            <img src={image} />
            <span>{title}</span>
            <p>{description}</p>
        </div>
    )
}

export default Course