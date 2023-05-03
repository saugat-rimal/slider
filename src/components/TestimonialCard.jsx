import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div className='testimonial-card' key={props.id}>

            <img src="comma.png" className='comma' alt='' />

            <div className="testimonial-content">
                <p className="testimonial-description">{props.description}</p>

                <div>
                    <h2 className="testimonial-title">{props.title}</h2>
                    <p className="testimonial-designation">{props.subtitle}</p>
                </div>

                <div className="testimonial-images">
                    <img src={props.imagefirst} alt="" />
                    <img src={props.imageSecond} alt="" />
                    <img src={props.imageThird} alt="" />
                    <img src={props.imageFourth} alt="" />
                </div>



            </div>
        </div>
    )
}

export default TestimonialCard