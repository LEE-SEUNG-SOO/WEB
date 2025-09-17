import { SubTitle, Title } from "../base/Title.jsx";

export function Testimonials({data}){
    const testimonials = data.testimonials;
    
    return(
        <section id="testimonial" className="section container">
            <Title title="testimonial" />
            <SubTitle subTitle="See What they say about me" />
            <ul className="testimonials">
                {
                    testimonials && testimonials.map( data => <Testimonial data={data} />)
                }
            </ul>
        </section>
    )
}

export function Testimonial({data}){
    return(
        <li className="testimonial">
            <img src={data.img} alt={data.alt} className="testimonial-img" />
            <div className="testimonial-text">
                <p>{data.text}</p>
                <p><a href="#" className="testimonial-text-name">{data.name}</a> / {data.company}</p>
            </div>
        </li>
    )
}