import { AvatarImage } from "../base/Avatar"

export function Home({data}){

    const {img, title, name, description} = data;

    return(
        <section id="home">
            <AvatarImage src={img} alt="portfolio" style="home-img" />
            <h2 className="home-intro-maintext">
                Hello<br />
                I'm <strong className="strong">{title}</strong>, {name} <br />
            </h2>
            <p className="home-intro-subtext">{description}</p>
            <button className="btn-contact"><b>Contact Me</b></button>
        </section>
    )
}