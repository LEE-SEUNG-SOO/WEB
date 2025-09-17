import { Description, Title } from "../base/Title";

export function Testimonials(){
    return(
        <section id="testimonial" class="section container">
            <Title title="testimonial"/>
            <Description text="See What they say about me"/>
            <Testimonial />
        </section>
    )
}

export function Testimonial(){
    const testimonials = [
        { "src":"img/testimonials/people1.webp", "alt":"people1", "name":"James Kim","company":"Google"},
        { "src":"img/testimonials/people2.webp", "alt":"people2", "name":"Smith Pack","company":"Samsung"},
        { "src":"img/testimonials/people3.webp", "alt":"people3", "name":"Anna Jin","company":"Google"}
    ]

    return(
        <ul class="testimonials">
            {
                testimonials && testimonials.map( info => <TestimonialInfo data={info}/> 
                )
            }
        </ul>
    )
}

export function TestimonialInfo({data}){
    return(
         <li class="testimonial">
            <img src={data.src} alt={data.alt} class="testimonial-img"/>
            <div class="testimonial-text">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ad error earum sapiente architecto, molestias ea repudiandae quam tempore hic, consequuntur voluptas necessitatibus id mollitia esse commodi facilis veritatis expedita!</p>
                <p><a href="#" class="testimonial-text-name">{data.name}</a> / {data.company}</p>
            </div>
        </li>
    )
}